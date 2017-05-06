let appCache = window.applicationCache;
let status = 'UKNOWN CACHE STATUS';
switch (appCache.status) {
   
    case appCache.UNCACHED: // UNCACHED == 0
        status = 'UNCACHED';
        break;
    case appCache.IDLE: // IDLE == 1
        status = 'IDLE';
        break;
    case appCache.CHECKING: // CHECKING == 2
        status = 'CHECKING';
        break;
    case appCache.DOWNLOADING: // DOWNLOADING == 3
        status = 'DOWNLOADING';
        break;
    case appCache.UPDATEREADY:  // UPDATEREADY == 4
        status = 'UPDATEREADY';
        break;
    case appCache.OBSOLETE: // OBSOLETE == 5
        status = 'OBSOLETE';
        break; 
};

appCache.update(); // Attempt to update the user's cache.

if (appCache.status == appCache.UPDATEREADY) {
  appCache.swapCache();  // The fetch was successful, swap in the new cache.
}

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {
    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            console.info("Manifest changed, updating cache...");
            appCache.swapCache();
            window.location.reload();
        } else {
            // Manifest didn't changed. Nothing new to server.
            console.info("No changes in Manifest.");
        }
    }, false);

}, false);