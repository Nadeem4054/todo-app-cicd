pipeline {
  agent any
  
  environment {
    VERCEL_TOKEN = credentials('vercel_token')
  }
  
  stages {
    stage('Checkout') {
      steps {
        echo '📥 Fetching code from GitHub...'
        checkout scm
      }
    }
    
    stage('Install Dependencies') {
      steps {
        echo '📦 Installing npm packages...'
        sh 'npm install'
      }
    }
    
    stage('Build') {
      steps {
        echo '🔨 Building the application...'
        sh 'npm run build'
      }
    }
    
    stage('Deploy to Vercel') {
      steps {
        echo '🚀 Deploying to Vercel...'
        sh 'npx vercel --prod --yes --token=$VERCEL_TOKEN'
      }
    }
  }
  
  post {
    success {
      echo '✅ Pipeline completed successfully!'
    }
    failure {
      echo '❌ Pipeline failed!'
    }
  }
}
