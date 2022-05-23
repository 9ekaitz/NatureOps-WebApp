pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'rm -rf node_modules package-lock.json && npm install --force'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage ('Static Analysis') {
            environment {
                def scannerHome = tool 'SQScanner';
            }
            steps {
                sh ' ./node_modules/eslint/bin/eslint.js -f checkstyle src > eslint.xml'
                withSonarQubeEnv('Sonarqube-NatureOps') {
                sh '''
                ${scannerHome}/bin/sonar-scanner \
                -D sonar.projectKey=NatureOps-WebApp \
                -D sonar.projectName=NatureOps-WebApp \
                -D sonar.sources=./src \
                '''
            }
            }
            post {
                always {
                    recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'eslint.xml')
                }
            }
        }
    }
}