npm version patch
npm publish
npm login

<!-- ./setup/init.sh -->
<!-- ./setup/update.sh -->

for i in `docker ps -q -a`; do docker exec -it $i npm i arora-npm-ts@0.3.9; done
for i in `docker ps -q -a`; do docker exec -it $i npm i arora-npm-styles@0.0.2; done

<!--  -->
