pipeline {
    agent any
    stages {
        stage('Installer les dependences & build du projet') {
            steps {
                echo "hello world"
                echo "hello world 2"
            }
        }
        stage('Build depot au DockerHub') {
            steps {
               sh 'cd api'
               sh 'sudo docker build . -t nadjib18/file-rouge'
               sh 'docker login -u nadjib18 -p dckr_pat_B5SoO-5IZX3g3RbsQJFFhZWMouw'
               sh 'docker push nadjib18/file-rouge'
            }
        }
       
    }
}
