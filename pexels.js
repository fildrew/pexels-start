
const accessKey = "linjpHGleyPh6eXdw5DcK2kqI5ZKTlfPXCeuJgyViN77ZW9QRl32rceq";
const query = "shoes";

// LOAD IMAGES
document.getElementById("load-images").addEventListener("click", function () {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        method: "GET",
        headers: {
            "Authorization": accessKey,
        },
    })
    .then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error");
        }
    })
    .then((data) => {
        console.log(data);

        const imageContainer = document.getElementById(".bd-placeholder-img");

        // Remove existing images
        imageContainer.innerHTML = "";

        // Add new images to the container
        data.photos.forEach((photo) => {
            const imgElement = document.createElement("img");
            imgElement.src = photo.src.medium;
            imgElement.alt = photo.url;
            imageContainer.appendChild(imgElement);
        });

        changeText();
    })
    .catch((error) => {
        console.error(error);
    });
});

// LOAD SECONDARY IMAGES
document.getElementById("secondary").addEventListener("click", function () {
    const secondaryQuery = "adidas";

    fetch(`https://api.pexels.com/v1/search?query=${secondaryQuery}`, {
        method: "GET",
        headers: {
            "Authorization": accessKey,
        },
    })
    .then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error");
        }
    })
    .then((data) => {
        console.log(data);

        const imageContainer = document.getElementById("imageContainer");

        // Remove existing images
        imageContainer.innerHTML = "";

        // Add new images to the container
        data.photos.forEach((photo) => {
            const imgElement = document.createElement("img");
            imgElement.src = photo.src.medium;
            imgElement.alt = photo.url;
            imageContainer.appendChild(imgElement);
        });

        changeText2();
    })
    .catch((error) => {
        console.error(error);
    });
});

const changeText = function () {
    const mins = document.querySelectorAll("small");
    const idShoes = "2562992";
  
    mins.forEach((element) => {
        element.innerHTML = idShoes;
    });
};

const changeText2 = function () {
    const mins = document.querySelectorAll("small");
    const idAdidas = "48013";
  
    mins.forEach((element) => {
        element.innerHTML = idAdidas;
    });
};

// HIDE CARD-IMAGES
document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".secondButton");

    editButtons.forEach(function (button) {
        button.innerHTML = "hide";
        const card = button.closest(".card");

        button.onclick = function () {
            hideCard(card);
        };
    });
});

function hideCard(card) {
    card.classList.add("hidden");
}

const searchImages = function () {
    const searchQuery = document.getElementById("searchInput").value;

    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}`, {
        headers: {
            Authorization: accessKey,
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then((data) => {
        const imageContainer = document.getElementById("imageContainer");
        imageContainer.innerHTML = "";

        data.photos.forEach((photo) => {
            const imgElement = document.createElement("img");
            imgElement.src = photo.src.medium;
            imgElement.alt = photo.url;
            imageContainer.appendChild(imgElement);
        });
    })
    .catch((error) => {
        console.error("Error in API request:", error);
    });
};

// Importing Pexels API code
import { createClient } from 'pexels';
const client = createClient('dnoqOhApwlIdRdgmyW8eoIrAk2AzKuhMEONMXt4dfEp9j8QrKgtfU4UH');
const newQuery = 'Nature';

client.photos.search({ query: newQuery, per_page: 1 }).then(photos => {
    console.log(photos);
});  

