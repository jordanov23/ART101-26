let count = 0;
let buttonCreature = {
    name: "Aster",
    species: "alien",
    favoriteFood: "bananas",
    moods: ["happy", "anxious", "energized", "perplexed", "flirty", "joyful", "hungry"]
};

$("#needy-button").click() (oncclick) {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = let message = "<p> Thanks for clicking me " + count + " times. </p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

message = message + "<p> My name is " + buttonCreature.name + ".</p>";
message = message + "<p> I am an " + buttonCreature.species + ".</p>";
message = message + "<p> My favorite food is " + buttonCreature.favoriteFood + ".</p>";
});

// A decision to make: are we going to the class today?