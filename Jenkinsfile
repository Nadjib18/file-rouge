pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url :'https://github.com/Nadjib18/file-rouge.git'
            }
        }
            
        stage('Installer les dependences & build du projet') {
            steps {
                sh 'nmp install'
                sh 'nmp run build'
            }
        }
        stage('Test/ Test unitaire') {
            steps {
                sh 'nmp run test'
            }
        }
        stage('Build depot au DockerHub') {
            steps {
               sh 'docker build . -t nadjib18/file-rouge'
               sh 'docker login -u nadjib18 -p dckr_pat_B5SoO-5IZX3g3RbsQJFFhZWMouw'
               sh 'docker push nadjib18/file-rouge'
            }
        }
    }
}
