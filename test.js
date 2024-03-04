const { execSync } = require('child_process')
let args = [...process.argv].slice(2)

execSync(`git submodule foreach 'git add * -f' `)
execSync(`git submodule foreach 'git commit -m -f "${args.join(' ')}"'`)
execSync(`git submodule foreach 'git push'`)

execSync(`git add * -f`)
execSync(`git commit -m -f "${args.join(' ')}"`)
execSync(`git push`)
