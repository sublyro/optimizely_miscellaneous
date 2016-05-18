var itemsToRemove = [];
var uid = document.cookie.match('optimizelyEndUserId=([^;]*)');
uid = uid ? uid[1] : undefined;
if (uid !== undefined) {
    for (var i = 0; i < localStorage.length; i++){
        key = localStorage.key(i);
        if (key.indexOf('optimizely_data') == 0 && key.indexOf(uid) == -1) {
           itemsToRemove.push(key);
        }   
    }
    for (var i = 0; i < itemsToRemove.length; i++){
        localStorage.removeItem(itemsToRemove[i]);
    }   
}