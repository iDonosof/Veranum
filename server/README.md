## Nombre

Veranum Server

## Instalacion

El proyecto fue desarrollado con la version 7.x.x de node, luego de una actualizacion esta puede ser utilizada desde la version 22.x.x.


1. Instalamos la version de (Node 22.x.x)[https://nodejs.org/es/download]

2. Una ves instalado descargamos las dependencias del servidor

```shell
npm install
```

## Uso

Para levantar el projecto contamos con 2 principales comandos

1. `npm run dev` Esto nos permitira levantar el servidor utilizando nodemon para detectar cambios

2. `npm start` Esto ejecuta el servidor directamente con node

## Consideracion

1. Este projecto no cuenta con ningun ORM y la base de datos debe estar configurada y levantada independientemente, la conexion a base de datos puede ser configurada en el archivo `./dao/connection.js`

2. Es importante que la base de datos cuente con datos iniciales como usuarios para iniciar sesion