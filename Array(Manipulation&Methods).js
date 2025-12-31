// Array-er bhetor data khunje ber kora ebong update korar boro udhahoron.

let playList = ["Song A", "Song B", "Song C", "Song D"];

// 1. Notun gaan add kora
playList.push("Song E");

// 2. Prothom gaan ti remove kora
playList.shift();

// 3. Array er bhetore loop chaliye search kora
let searchSong = "Song C";
let found = false;

for(let i = 0; i<playList.length; i++){
    if(playList[i] === searchSong){
        console.log(`Found ${searchSong} at position ${i+1}`);
        found = true;
        break;
    }
}

// 4. Array ke string-e rupantor

console.log("Current PlayList: " + playList.join(" | "));

