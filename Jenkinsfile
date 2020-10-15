pipeline {
  agent any
  stages {
    stage('clone') {
      steps {
        git(url: 'https://github.com/leoyim/VuePlus.git', branch: 'master', poll: true)
      }
    }

  }
}