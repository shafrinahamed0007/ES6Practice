// Array-er bhetor data khuje ber kora ebong update korar boro udhahoron

let playList = ["Song A", "Song B", "Song C", "Song D"];

// 1. Nuton gaan add kora
playList.push("Song E");

// 2. Prothom gaam ti remove kora
playList.shift();

// 3. array-er bhetore loop chaliye search kora
let searchSong = "Song C";
let found = false;

for(let i = 0; i< playList.length; i++){
    if(playList[i] === searchSong){
        console.log(`Found ${searchSong} at position: ${i+1}`);
        found = true;
        break;
    }

}

// 4. Array ke string-e rupantor
console.log("Current Playlist: " + playList.join(" | "));
