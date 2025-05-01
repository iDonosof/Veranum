# Nombre

Veranum Client

## Instalación

1. Instalamos [Node](https://nodejs.org/es/download) utilizando la version 10.24.1.

2. Debemos instalar [Angular CLI](https://www.npmjs.com/package/@angular/cli/v/7.3.9) version 7.3.8 como global para poder levantar el proyecto, para poder instalarlo, ejecutamos el siguiente comando

```shell
npm i -g @angular/cli@7.3.9
```

## Uso

1. Ejecutar `npm start` para iniciar un servidor de desarrollo. Una vez levantado ir a la direccion [http://localhost:4200/](http://localhost:4200/) en el navegador. La aplicacion se reiniciara automaticamente cuando detecte cualquier cambio en los archivos

2. Ejecutar `npm run build` para generar el "build" que servira para desplegar la aplicacion a producción

3. Ejecutar `npm test` para ejecutar las pruebas del proyecto

4. Ejecutar `npm run lint` para formatear el codigo

5. Ejecutar `npm run e2e` para ejecutar las pruebas e2e


## Consideracion

1. Este projecto consume directamente la API de la carpeta **server** creada con node, para poder ejecutar este proyecto es necesario ejecutar el servidor primero