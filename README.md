# Angular
- 2009 Google çalışanı Misko Hevery kendi projesinde kullanmak üzere geliştiriyor.
- Angular Javascript Frameworkutur.
- One-way data binding
- Two-way data binding
- SPA (Single Page Application)
- Web, mobil uygulamalar yapabiliriz.
- MVC mantığa göre çalışır.
- Az kod yaz , çok iş olsun
- Cross Platform 
- Birim testler
- Netflix, Paypal
- Angular JS, Angular 2, Angular 4, ... Angular 17 
- Angular 2009
- Node    2009
- React   2013
- Vue     2014
---

# Angular Mimarisi
- Component : Küçük küçük uygulamalar
- Service :  Api, Database
- Module = Component + Service
- Injector = Service + Service+  ...Service

---

# Angular Konular
- Component 
- Servis (Api, Database)
- Module 
- Pipeline
- Router
---

# TypeScript (TS)
- Nesne yönelimli programalama yapmak
- OOP dünyasındaki type safe, class, interface,inheritance
- Compiler olması derleme yapması yani hataları bize göstermesine olanak sağlar.
- JS= Betik dildir
- TS= Nesne yönelimlidir.
- TS = ES6,ES5+ ...+
---


# Node JS
- NodeJS 2009
- Asenkron çalışıyor.
- Non-Blocking
- Scability
- Netflix,IBM, Linkedin, Apple, Google, Paypal
---

(GitHub Sitesi)[https://github.com/hamitmizrak/angular-shoop-app.git]
(Angular Resmi Sitesi)[https://angular.io]
---

## Git
```sh
git clone https://github.com/hamitmizrak/angular-shoop-app.git
```
---


## Angular Version
```sh
node -v
npm -v
ng v
ng version
ng --help

java --version
git version
git --version
```
---

## Npm
```sh
npm init
npm init -y

npm list
npm list -g
npm list -g --depth=0
npm root
npm root -g

npm install
npm i
npm install --save bootstrap
npm uninstall      bootstrap
npm update         bootstrap
```
---


## Npm Install Angular
```sh
npm i bootstrap
npm i fontawesome
npm i -g typescript
npm i -g nodemon
```
---



## Package.json 
```sh
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "angular": "ng serve --port 9999 --open",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  }

  npm run angular
```


## Angular Kurulumlar
```sh
npm install -g typescript
npm install -g @angular/cli
```
---

## Angular Project
```sh
ng new angular-shoop-app 
cd angular-shoop-app
ng serve --port 9999 --open

ng serve
ng --help

ng serve (http://localhost:4200)
ng serve --port 9999
ng serve --open

```
---

## Bootstrap CDN 
```sh
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Angular Shoop App</title>
  <base href="/">

  <!-- Responsive Design-->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">

    <!-- Bootstrap CSS v5.2.1 -->
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous"
/>
</head>

<body>
  <!-- Start Codes-->
  <!-- <app-root></app-root> -->
  <p class="text-primary display-4 text-center">Merhabalar Bootstrap5</p>
  <!-- End Codes-->

    <!-- Bootstrap JavaScript Libraries -->
    <script
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"
></script>

<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"
></script>
</body>
</html>
```

## Angular Bootstrap 
```sh
npm install bootstrap --save

angular.json => 
"styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
"scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.js"
]


"dependencies": {
    "@angular/animations": "^17.2.0",
    "@angular/common": "^17.2.0",
    "@angular/compiler": "^17.2.0",
    "@angular/core": "^17.2.0",
    "@angular/forms": "^17.2.0",
    "@angular/platform-browser": "^17.2.0",
    "@angular/platform-browser-dynamic": "^17.2.0",
    "@angular/router": "^17.2.0",
    "bootstrap": "^5.3.3",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.3"
  },

```
---


## Angular Fontawesome
```sh
Terminal ==> 
npm i font-awesome 

angular.json ==> 
"node_modules/font-awesome/css/font-awesome.min.css"

index.html ==> 
  <i class="fa-brands fa-instagram text-danger"></i>
```
---


## Angular CLI Delete after Install
```sh
npm uninstall -g angular/cli
npm cache clean
npm i -g @angular/cli
```
---

## AngularShoopApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
