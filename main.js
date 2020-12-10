const heading = document.querySelector("#heading");
const description = document.querySelector("#description");
const options = document.querySelector("#options");

async function loadAdventure(url) {
    const request = await fetch(url);
    const places = await request.json();
    console.log(places);
    
    const place = places[0];

    heading.innerHTML = place.heading;
    description.innerHTML = place.description;

    let result = "";
    for (o of place.options) {
        result += `<li>${o}</li>`
        // result += "<li>" + o + "</li>";
    }
    options.innerHTML = result;
}

// function oldLoadAdventure(url) {
//     fetch(url)
//         .then(
//             function (response) {
//                 return response.json();
//             }
//         )
//         .then(
//             function (places) {
//                 console.log(places);
//             }
//         )
// }

loadAdventure("places.json")