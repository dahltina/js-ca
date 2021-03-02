
const resultsContainer = document.querySelector(".results-container");
const url = "https://rickandmortyapi.com/api/character";

async function fetchCharacter() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        resultsContainer.innerHTML = "";

        const details = json.results;

        for (let i = 0; i < details.length; i++) {

            if (i === 12) {
                break;
            }

            resultsContainer.innerHTML += `<a class="card" href="details.html?id=${details[i].id}">
                                                <div class="image" style="background-image: url(${details[i].image});"></div>
                                                <h2>${details[i].name}</h2>
                                                <p>Last Known Location: ${details[i].location.name}</p>
                                            </a>`
        }
    }

    catch (error) {
        resultsContainer.innerHTML = displayError("An error occured while trying to fetch data");
    }
}

fetchCharacter();

