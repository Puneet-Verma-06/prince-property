#!/bin/bash

# Haute Developers - Quick Deployment Script

echo "🚀 Starting deployment process..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📊 Build output in: dist/"
    
    # Optional: Preview the build
    read -p "🌐 Preview the build? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        npm run preview
    fi
    
    echo "✨ Deployment ready! Push to GitHub to auto-deploy."
else
    echo "❌ Build failed! Please check errors above."
    exit 1
fi
