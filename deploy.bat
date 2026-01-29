@echo off
REM Haute Developers - Quick Deployment Script (Windows)

echo 🚀 Starting deployment process...

REM Check if node_modules exists
if not exist "node_modules\" (
    echo 📦 Installing dependencies...
    call npm install
)

REM Run linting
echo 🔍 Running linter...
call npm run lint

REM Build the project
echo 🏗️  Building project...
call npm run build

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 📊 Build output in: dist/
    
    set /p preview="🌐 Preview the build? (y/n): "
    if /i "%preview%"=="y" (
        call npm run preview
    )
    
    echo ✨ Deployment ready! Push to GitHub to auto-deploy.
) else (
    echo ❌ Build failed! Please check errors above.
    exit /b 1
)
