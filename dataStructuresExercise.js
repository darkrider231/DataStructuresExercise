// 1a
const jedi = [
    // 1b
    "Luke"
];

// 1c
console.log(jedi.push("Obi-Wan Kenobi"));

// 1d
jedi.unshift("Yoda");

// 1e
console.log(jedi[1]);

// 1f
const obi = jedi.pop();
console.log(obi);
console.log(jedi);

// 1g
const yod = jedi.shift();
console.log(yod);
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
console.log(sithLords.slice(0, 2));

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

// BONUS
// 4
console.log(starWarsVillains[0][6]);

// 5
console.log(starWarsVillains.slice(-4, -3));

// 6a
const starWarsMovies = {
    episodeOne: "The Phantom Menace",
    episodeTwo: "Attack",
    episodeThree: "Attack of the Clones"
};
{
    episodeFour: "A New Hope"
    episodeFive: "The Empire Strikes Back"


}

//  6b
