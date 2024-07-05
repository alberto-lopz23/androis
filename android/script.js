

var botonMenuApps = document.getElementById('menuAppsButton');

botonMenuApps.addEventListener('click', function() {
    var todasLasApps = document.getElementById('todasLasApps');
    if (todasLasApps.style.display === 'none') {
        todasLasApps.style.display = 'flex';
        todasLasApps.style.width = '100%'
        todasLasApps.style.height = '100vh'
    } else {
        todasLasApps.style.display = 'none';
    }
});
