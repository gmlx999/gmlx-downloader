# ⚡ GML Downloader
> **BY GEMELO**

---

## 🇪🇸 Español

Un programa optimizado para descargar música y videos de forma rápida y sencilla.

### 🚀 Características
* **[+] Descarga de YouTube:** Pega el link y baja en la calidad que quieras.
* **[+] Formatos:** Elige entre MP4 (video) o MP3 (audio).
* **[+] Cola de descargas:** Añade varios enlaces y déjalos bajando todos juntos en la carpeta que elijas.

---

## 🇺🇸 English

A fast and optimized tool built to download music and videos effortlessly.

### 🚀 Features
* **[+] YouTube Downloads:** Paste the link and download in any quality you choose.
* **[+] Formats:** Select between MP4 (video) or MP3 (audio).
* **[+] Download Queue:** Add multiple links and download them all together to your folder of choice.

* --------------
¡Mala mía! Entendí mal y pensé que querías meter el contenido dentro de una tabla de Lua.

Aquí tienes el archivo README.md puro y limpio listo para copiar/pegar directo en tu repositorio:

Markdown
# GML Downloader

**GML Downloader** es una aplicación de escritorio liviana, moderna y de alto rendimiento diseñada para descargar audio y video desde YouTube con una interfaz *Glassmorphism* totalmente personalizada.

---

### ✨ Características Principales

* **Formatos de Descargas:** Conversión e integración nativa a **MP4** (Video) y **MP3** (Audio).
* **Control de Calidad:** Selección de resolución (Máxima Calidad, 1080p, 720p).
* **Gestor de Cola:** Añade múltiples enlaces y procésalos de forma secuencial.
* **Directorio Personalizado:** Selector nativo para elegir la carpeta de destino.
* **Interfaz Frameless:** Diseño con transparencia, efectos blur, logo oficial y controles de ventana personalizados.
* **Procesamiento Autónomo:** Incluye binarios de **yt-dlp** y **FFmpeg** desempaquetados para evitar fallos de ejecución (`ENOENT`) y bloqueos de red (`403 Forbidden`).

---

### 📂 Estructura del Proyecto

```text
gml-downloader/
├── bin/
│   └── yt-dlp.exe          # Binario ejecutable de yt-dlp
├── node_modules/
├── icon.ico                # Icono oficial de la aplicación
├── index.html              # Interfaz NUI con estilos Glassmorphism
├── main.js                 # Proceso principal de Electron e IPC handlers
├── package.json            # Configuración y dependencias de Electron
└── package-lock.json
🔧 Requisitos del Sistema
Sistema Operativo: Windows 10 / 11 (64-bit)

Entorno de Desarrollo: Node.js (v18.0.0 o superior) y npm (incluido con Node)

Git: Para clonar el repositorio (opcional si descargas el ZIP)

🚀 Guía Paso a Paso de Instalación y Uso Local
1. Clonar o descargar el proyecto
Abre tu consola de comandos (CMD, PowerShell o Git Bash) y ejecuta:

DOS
git clone [https://github.com/tu-usuario/gml-downloader.git](https://github.com/tu-usuario/gml-downloader.git)
cd gml-downloader
2. Instalar las dependencias de Node.js
Ejecuta el siguiente comando para instalar Electron, yt-dlp-exec y ffmpeg-static:

DOS
npm install
3. Asegurar el ejecutable estático de yt-dlp
Crea la carpeta bin en la raíz de tu proyecto si no existe y coloca el archivo yt-dlp.exe dentro de ella (/bin/yt-dlp.exe).

4. Ejecutar la aplicación en modo desarrollo
Para probar la aplicación en tiempo real antes de compilarla:

DOS
npm start
📦 Compilación y Generación del Instalador (.EXE)
Para compilar todo el proyecto y empaquetar un archivo instalador .exe independiente que puedas compartir o instalar directamente en tu PC:

Corre el comando de build:

DOS
npm run build
Una vez finalizado el proceso, se creará automáticamente una carpeta llamada /dist en la raíz de tu proyecto.

Dentro de /dist encontrarás el instalador ejecutable listo para usarse (GML Downloader Setup 1.0.0.exe).
* ---------------
