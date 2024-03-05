const { execSync } = require('child_process')
const message = [...process.argv].slice(2).join(' ')

execSync(`git submodule foreach 'git add .'`)
execSync(`git submodule foreach 'git commit -m "${message}"'`)
execSync(`git submodule foreach 'git push'`)

execSync(`git add .`)
execSync(`git commit -m "${message}"`)
execSync(`git push`)
