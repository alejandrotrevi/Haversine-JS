function getDistance(coordinatesA, coordinatesB) {

    var lat1 = coordinatesA.lat;
    var lat2 = coordinatesB.lat;

    var lng1 = coordinatesA.lng;
    var lng2 = coordinatesB.lng;

    var R = 6371e3; // Earth radius
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians((lat2 - lat1));
    var Δλ = toRadians((lng2 - lng1));

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function toRadians(n) {
    return n * Math.PI / 180;
}