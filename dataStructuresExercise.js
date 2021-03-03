// 1a
const jedi = [];
console.log(jedi);

// 1b
jedi[0] = "Luke";
console.log(jedi);

// 1c
console.log(jedi.push("Obi-Wan Kenobi"));

// 1d
jedi.unshift("Yoda");
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.pop();
// jedi.splice(2, 1);
console.log(jedi);

// 1g
jedi.shift();
// jedi.splice(0, 1);
console.log(jedi);

// 2a
const sithLords = [
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul"
];

// 2b
const imperialOfficers = [
    "Grand Moff Tarkin",
    "Orson Krennic"
];

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d
console.log(starWarsVillains.slice(0, 2));
// console.log(starWarsVillains.slice(0, 2));
// console.log(starWarsVillains.slice(0, -3));
// console.log(starWarsVillains.slice(-5, -3));

// 3a
const droids = {
    astromerch: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};

// 3b
console.log(droids["astromerch"]);

// 3c
console.log(droids.protocol);

// 3d
droids ["assassin"] = "IG-11";
console.log(droids);

// BONUS
// 4
console.log(starWarsVillains[0][6]);

// 5
console.log(starWarsVillains.slice(-4, -3));

// 6a
const starWarsMovies = [
    {
        episodeOne: "The Phantom Menace",
        episodeTwo: "Attack",
        episodeThree: "Attack of the Clones"
    },
    {
        episodeFour: "A New Hope",
        episodeFive: "The Empire Strikes Back",
        episodeSix: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens",
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"
    }
];


//  6b
starWarsMovies.splice(1, 0, "Solo", "Rogue One");
console.log(starWarsMovies);