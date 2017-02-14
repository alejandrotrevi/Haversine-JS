# Haversine
Haversine formula

# English
Original implementation and credits: [Movable Type](http://www.movable-type.co.uk/scripts/latlong.html) 

### Installation
You have two options to use the script:

##### Bower
- Installing Bower: [Bower](https://bower.io/)
- `bower install haversine-js`
- include haversine.min.js in your html.

##### Manual
- Download script [Github](https://github.com/p4rz1val/haversine/blob/master/src/haversine.min.js)
- Include haversine.min.js in your html.

### Usage
Just give `getDistance()` two coordinates in this format:
```
getDistance({lat: 18.469510, lng: -98.257464}, {lat: 17.250959, lng: -95.283587});
```
The function returns the distance in meters, you can transform the distance to km like this:
```
Math.round((distance / 1000) * 10) / 10
```
Where `distance` is of course the distance in meters.


# Español
Implementación original y créditos: [Movable Type](http://www.movable-type.co.uk/scripts/latlong.html) 
### Instalación
Tienes dos opciones para usar el script:

##### Bower
- Instalar bower [Bower](https://bower.io/)
- `bower install haversine-js`
- Incluir haversine.min.js en tu html

##### Manual
- Descargar script [Github](https://github.com/p4rz1val/haversine/blob/master/src/haversine.min.js)
- Incluir haversine.min.js en tu html.

### Uso
Dale a `getDistance()` dos coordenadas en este formato:
```
getDistance({lat: 18.469510, lng: -98.257464}, {lat: 17.250959, lng: -95.283587});
```
La función retorna la distancia en metros, si quieres transformarla a km puedes hacer lo siguiente:
```
Math.round((distance / 1000) * 10) / 10
```
Donde `distance` es desde luego la distancia en metros.
