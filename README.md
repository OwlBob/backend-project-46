### Hexlet tests and linter status, Maintainability Badge, NodeCI:
[![Actions Status](https://github.com/OwlBob/backend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/OwlBob/backend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/247122171225a83f6f7f/maintainability)](https://codeclimate.com/github/OwlBob/backend-project-46/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/247122171225a83f6f7f/test_coverage)](https://codeclimate.com/github/OwlBob/backend-project-46/test_coverage)  ![Node CI](https://github.com/OwlBob/backend-project-46/actions/workflows/nodejs.yml/badge.svg)

Установка:

Проверьте/установите последнюю версию Node.js:

Проверка: `node -v`

Установка: `sudo apt install -y nodejs`

Склонируйте локально созданный репозиторий проекта;

В зависимости от ОС, выполните с помощью команды `npm link` установку
(возможно, потребуется использование `sudo`).
Или `npm ci`.

Утилита проводящая сравнение изменений файлов.
Изменения выводятся в форматах: stylish (по умолчанию), plain, json.

Запуск утилиты через команду `gendiff`

### 🙈🙉🙊

### Сравнение плоских файлов json:
команда: `gendiff __fixtures__/file1.json __fixtures__/file2.json`

![json-json](https://github.com/OwlBob/backend-project-46/blob/main/__images__/1-json-json.png)

### Сравнение плоских файлов json и yml:
команда: `gendiff __fixtures__/file1.json __fixtures__/file2.yml`

![json-yml](https://github.com/OwlBob/backend-project-46/blob/main/__images__/2-json-yml.png)

### Сравнение файлов с вложенной структурой json и yaml:
команда: `gendiff __fixtures__/file3.json __fixtures__/file4.yaml`

![json-yaml](https://github.com/OwlBob/backend-project-46/blob/main/__images__/3-json-yaml.png)

### Сравнение файлов с вложенной структурой json и yaml, формат plain:
команда: `gendiff --format plain __fixtures__/file3.json __fixtures__/file4.yaml`

![json-yaml format plain](https://github.com/OwlBob/backend-project-46/blob/main/__images__/4-json-yaml.png)

### Сравнение файлов с вложенной структурой json и yaml, формат json:
команда: `gendiff --format json __fixtures__/file3.json __fixtures__/file4.yaml`

![json-yaml format json](https://github.com/OwlBob/backend-project-46/blob/main/__images__/5-json-yaml.png)
