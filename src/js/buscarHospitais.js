const keyAcess =
    'pk.eyJ1Ijoid2lsbGlhbnJzb3V6YSIsImEiOiJja3Y0a3ltbHUxMWx3MnhsMGYycXI2Y2dhIn0.ITidFxTNkxl7CvOc--UEeQ';

mapboxgl.accessToken = keyAcess;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/willianrsouza/ckw5rf2lp1wax14mik72g7tex',
    center: [-43.9519, -19.8172],
    zoom: 13,
});

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        language: 'pt-BR',
        overview: 'full',
        voiceLocale: 'pt-BR',
    }),
    'top-right'
);
