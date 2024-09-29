const { exec } = require('child_process');
const readline = require('readline');
const fs = require('fs').promises;
const path = require('path');

console.log('开始本地部署...');

// 设置环境变量并执行构建
const buildProcess = exec('npx vue-cli-service build', { env: { ...process.env, DEPLOY_PATH: '/' } });

buildProcess.stdout.on('data', (data) => {
  console.log(data);
});

buildProcess.stderr.on('data', (data) => {
  console.error('构建错误:', data);
});

buildProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`构建过程异常退出，退出码: ${code}`);
    return;
  }
  console.log('构建完成，开始预览...');
  
  // 启动预览服务器
  const previewProcess = exec('npm run preview');
  
  previewProcess.stdout.on('data', (data) => {
    console.log(data);
    if (data.includes('http://')) {
      console.log('预览服务器已启动，请在浏览器中打开上面的URL');
      console.log('输入 q 并按回车键退出');
    }
  });

  previewProcess.stderr.on('data', (data) => {
    console.error('预览服务器错误:', data);
  });

  // 监听用户输入
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', async (input) => {
    if (input.toLowerCase() === 'q') {
      console.log('正在关闭服务器...');
      previewProcess.kill();
      
      // 等待一段时间，确保进程完全退出
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 尝试解除dist目录下文件的占用
      try {
        await releaseDistFiles();
        console.log('已解除dist目录下文件的占用');
      } catch (err) {
        console.error('解除文件占用失败:', err);
      }
      
      rl.close();
      process.exit(0);
    }
  });
});

// 解除dist目录下文件占用的函数
async function releaseDistFiles() {
  const distPath = path.join(__dirname, '..', 'dist');
  await releaseFiles(distPath);
}

async function releaseFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    for (const file of files) {
      const curPath = path.join(dirPath, file);
      const stat = await fs.lstat(curPath);
      if (stat.isDirectory()) {
        await releaseFiles(curPath);
      } else {
        // 尝试打开文件并立即关闭，以解除占用
        const fd = await fs.open(curPath, 'r+');
        await fd.close();
      }
    }
  } catch (err) {
    console.error(`解除文件占用 ${dirPath} 时出错:`, err);
  }
}