# laravel-vue-template

This is a Laravel and Vue web application template which includes:

- Docker,
- TypeScript,
- ESLint, Stylelint, PHP coding standards fixer,
- Jest, PHPUnit,
- Apache,
- OpenAPI, OpenAPI Generator,
- Ant Design

## prerequisite collection

You will need to download and install the following software such that you can call them from any directory in your terminal or shell:

- [Composer](https://getcomposer.org/)
- [Node Package Manager](https://nodejs.org/en/download/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Java Virtual Machine](https://www.java.com/en/download/)
- [PHP coding standards fixer](https://cs.symfony.com/)

## how to start development

After you have installed the prerequisite software and cloned the repositiory, you can build the docker images, install dependencies, seed the database, and generate an API client library, via the command:

```
make newstart
```

Afterwards, for any future starts, you can execute this command for a more efficient start:

```
make start
```

## Vue

Vue (pronounced /vjuː/) is a progressive framework for building user interfaces.

The documentation for Vue can be found [here.](https://v3.vuejs.org/guide/introduction.html)

## Ant Design Vue

Ant Design Vue (pronounced /vjuː/) is a Vue UI library which follows the Ant Design specification.

The documentation for Ant Design Vue can be found [here.](https://antdv.com/docs/vue/introduce/)

## Laravel

Laravel is a web application framework with expressive, elegant syntax.

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help.

## Laravel OpenAPI

To connect the Vue front-end framework to the Laravel back-end framework use Laravel OpenAPI and the `make openapi` command.

The documentation for Laravel OpenAPI can be found [here.](https://vyuldashev.github.io/laravel-openapi/)