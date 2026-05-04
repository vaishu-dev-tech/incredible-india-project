

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("places-container");

    fetch("places.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(place => {
                const card = document.createElement("div");
                card.classList.add("place-card");

                card.innerHTML = `
                    <img src="${place.image}" alt="${place.name}">
                    <h2>${place.name}</h2>
                    <h4>${place.state}</h4>
                    <p>${place.description}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
            container.innerHTML = "<p>Failed to load places data.</p>";
        });
});