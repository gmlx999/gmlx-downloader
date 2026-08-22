const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { execFile } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 620,
    height: 580,
    minWidth: 500,
    minHeight: 480,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('window-control', (event, action) => {
  if (!mainWindow) return;
  if (action === 'minimize') mainWindow.minimize();
  if (action === 'maximize') {
    if (mainWindow.isMaximized()) mainWindow.unmaximize();
    else mainWindow.maximize();
  }
  if (action === 'close') mainWindow.close();
});

ipcMain.handle('select-folder', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  });
  if (result.canceled) return null;
  return result.filePaths[0];
});

const getUnpackedPath = (filePath) => filePath.replace('app.asar', 'app.asar.unpacked');

ipcMain.handle('download-single-item', async (event, { url, folder, quality, format }) => {
  return new Promise((resolve) => {
    const outputTemplate = path.join(folder, '%(title)s.%(ext)s');

    // Obtener ruta directa al exe desempaquetado
    const rawYtdlpPath = path.join(__dirname, 'node_modules', 'yt-dlp-exec', 'bin', 'yt-dlp.exe');
    const ytdlpBinary = getUnpackedPath(rawYtdlpPath);

    const args = [
      url,
      '--output', outputTemplate,
      '--no-check-certificates',
      '--no-warnings',
      '--no-part',
      '--retries', '10',
      '--fragment-retries', '10',
      '--extractor-args', 'youtube:player_client=android,web',
      '--user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
    ];

    if (ffmpegPath) {
      args.push('--ffmpeg-location', getUnpackedPath(ffmpegPath));
    }

    if (format === 'mp3') {
      args.push('-x', '--audio-format', 'mp3', '-f', 'bestaudio/best', '--audio-quality', '0');
    } else {
      if (quality === '1080') {
        args.push('-f', 'bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080]/best');
      } else if (quality === '720') {
        args.push('-f', 'bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]/best[height<=720]/best');
      } else {
        args.push('-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio/best');
      }
      args.push('--merge-output-format', 'mp4');
    }

    execFile(ytdlpBinary, args, (error, stdout, stderr) => {
      if (error) {
        console.error('Error yt-dlp:', stderr || error.message);
        resolve({ success: false, error: stderr || error.message });
      } else {
        resolve({ success: true });
      }
    });
  });
});