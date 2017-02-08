var tileSize, size, offset, levelArr;
if( window.innerHeight < 704 || window.innerWidth < 1280 ) {
    tileSize = 32;
    size = 5;
} else {
    tileSize = 64;
    size = 10;
}

// Exception for level editor
if(document.URL.search("/weltmeister.html") > 0) {
	console.log('editor detected!');
    tileSize = 32;
    size = 32;
}

// Offset is used for spikes and exit
offset = (tileSize - size) / 2;