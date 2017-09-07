// example album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album-covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' },
    ]
};

// example album 
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Gulieolmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21' },
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15' }
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
      '<tr class="album-view-song-item">'
    + '  <td class="song-item-number">' + songNumber + '</td>'
    + '  <td class="song-item-title">' + songName + '</td>'
    + '  <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;

    return template;
};

var setCurrentAlbum = function(album) {
    /* #1 - we select all of the HTML elements required to display on the
    album page: title, artist, release info, image, and song list. We want to
    populate these elements with information. To do so, we assign the
    corresponding values of the album objects' properties the HTML elements. */
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    /* #2 - the firstChild property identifies the first child node of an
    element, and nodeValue returns or sets the value of a node. Alternatively
    we could technically use innerHTML to insert plain text (like we did in
  collection.js), but it's excessive and semantically misleading in this context
  because we aren't adding any HTML. For example, the .albumTitle element has
  only one node and it's a text node. When we use the firstChild property and
  nodeValue properties together on the .albumTitle element, we set the value
  of that text node to album.tittle.  */
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    /* #3 - When we populated the Collection view with albums, we initially
    set the value of the parent container's innerHTML to an empty string.
    This ensured that we were working with a clean slate. We do the same
    here and clear the album song list HTML to make sure there are no
    interfering elements. */
    albumSongList.innerHTML = '';

    /* #4 - We use a for loop to go thru all the songs from the specified
    album object and insert them into the HTML using the innerHTML proerty.
    The createSongRow function is called at each loop, passing in the song
    number, name, and length arguments from our album object.  */
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
};
