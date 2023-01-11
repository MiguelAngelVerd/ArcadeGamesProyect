# Arcade Games Proyect

## Instalación

Para conseguir que nuestra aplicación funcione necesitaremos tener instalados una serie de librerías, para ello, hay que seguir los siguientes pasos:
  1. En primer lugar, y tras tener descargado el proyecto, entramos en la carpeta GameProyect e instalamos todo lo necesario para que funcione esta parte de la aplicación
```
$ cd .\GameProyect\
$ npm install
```
 2. Para el siguiente paso, bien podemos abrir una nueva consola, y usar los comandos:
 ```
$ cd .\JsonDB\
$ npm install
```
 o bien, seguir en la misma y usar los comandos:
 ```
$ cd ..
$ cd .\GameProyect\
$ npm install
```
Con esto ya tendriamos lista la parte de instalación.

## Ejecutar la aplicación

Y para el servidor Json, tendriamos que ubicarnos en la capeta JsonDB y usar el mismo comando:
```
$ npm start
```
Se levantará en el puerto 3001. La url es http://localhost:3001/users, aquí podremos ver la lista de usuario y contraseñas con las que se puede hacer login. 
El comando necesario para arrancar la aplicación, es necesario ubicarnos en la carpeta GameProyect y usar el comando:
```
$ npm start
```
Se levantará en el puerto 3000. La url es http://localhost:3000/login

## Uso

Es necesario, para entrar en la aplicación y jugar a los juegos, rellenar con datos válidos el formulario de login. Estos datos serían el username y password de cualquiera de los diez usuario que ya hay añadidos en el fichero db.json de la carpeta JsonDB
