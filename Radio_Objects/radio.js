// // let stations = [];

// class StationMaker {
//     constructor(name, songArrayOfObjects) {
//         this.name = name;
//         this.songArrayOfObjects = songArrayOfObjects;
//     }
// }

// class SongList  {
//     constructor(title, artist) {
//         this.title = title;
//         this.artist = artist;
//     }
// }

// let station = [
//     new StationMaker('KERA', [new SongList('Apple Bottom jeans', 'T-pain'), new SongList('Fate', 'John Legend'), new SongList('zombiefied', 'Falling in reverse')]),
//     new StationMaker('WAMO'[new SongList('1', 'Richard'), new SongList('2','Hadia'),new SongList('Boys Like You', 'Tanerelle')]),
//     new StationMaker('BET'[new SongList('Found', 'Tems'), new SongList('Petty','Peter $un'), new SongList('Downtown','Rimon'))])

// ]

// console.log(station)
// 

class StationMaker {
    constructor(name, playList) {
        this.name = name;
        this.playList = playList;
    }
}

class SongList {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

let stations = [
    new StationMaker('KERA', [new SongList('Apple Bottom Jean', 'T-pain'), new SongList('Zombified', 'Falling in reverse'), new SongList('Fate', 'John Legend')]),
    new StationMaker('THABEAT', [new SongList('1', 'Richard'), new SongList('2', 'HadIAHHHH'), new SongList("Lookin' out my back door", 'CCR')])
];

stations.forEach(station => console.log(station));


