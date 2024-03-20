<!--  -->

## backlog

1. npm

   - bin for update
     -- add alias for manifest
     -- private
     --
   - aliases for name
   - add @d
   - add utils
   - add
   - setup

2. chmod

3. npm i in all modules

4. docker

   - :ro
   - change package dont change image
   - change webpack dont change image

5. check work setup in single module

6. add docker paths for vs code

7. if not file => error
   example not .bd/...

8. readme

   - npm
   - builder
   - service

<!--  -->

## setup

packages groups
arora

<!--  -->

## updates

for i in `docker ps -q -a`; do docker exec -it $i npm i arora-npm-ts@0.3.9; done
docker-compose -f ./dev.docker-compose.yml down
docker-compose -f ./dev.docker-compose.yml up -d

<!--  -->

1. найдено решение проблемы с синхронизации ноде модулес из контейнера в иде
2. дописана функция создания докер композа для работы с новыми томами
3. найден и создан скрипт для остановки и удаления содержимого всех докер контейнеров
4. изменена функция игнорирования хранилища записанных файлов в сетап сервисе для гитигнора
5. добавлены манифесты для микросервисов нпм пакетов
6. добавлена валидация для манифестов микросервисов нпм пакетов
7. разделены типы манифестов и нпм манифестов
8. создана цепочка для запуска апдейта (.sh, package.script, .ts)
9. созданы классы для получения измененных версий нпм модулей
10. написан класс для создания команды по обновлению пакетов для докера
11. создан хелпер для обращения к execSync
