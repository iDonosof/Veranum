## Nombre

Veranum Database

## Descripción

Esta carpeta contiene los scripts necesarios para preparar la base de datos en MySql. Siguiendo estos pasos podremos levantar nuestra base de datos utilizando docker, pero tambien puede usarse una instalacion en la maquina

## Instalación

1. Descargamos [Docker](https://www.docker.com/products/docker-desktop/) y lo instalamos
2. Ejecutamos el siguiente comando para descargar la imagen

```shell
docker pull mysql:9.3.0
```
3. Ejecutamos el siguiente comando para levantar el contenedor

```shell
docker run -d -p 3306:3306 --name veranum-db -e MYSQL_ROOT_PASSWORD=asd123asd mysql:9.3.0
```
 
4. Una vez creado podemos entrar a la consola directamente desde la linea de comando usando el siguiente comando

```shell
docker exec -it veranum-db mysql:9.3.0 -p
```
5. Tambien podemos utilizar herramientas para conectarse al motor de base de datos como [DBeaver](https://dbeaver.io/download/)

6. Una vez conectado, podemos ejecutar primero los comandos del archivo `creation_table.sql`

7. Luego ejecutamos el archivo `creation_functions.sql`

8. Por ultimo ejecutamos el archivo `inserts.sql`
