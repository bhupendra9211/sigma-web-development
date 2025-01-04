console.log("hello");

function createCard(imageURL, title, description) {
    // Create elements for the card
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = imageURL;
    img.alt = title;

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = description;

    // Append elements to the card
    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    // Append card to the container
    document.querySelector(".container").appendChild(card);
}

// Example cards
createCard("../assets/images/image.jpg", "Card 1", "This is the description for card 1.");
createCard("../assets/images/image.jpg", "Card 2", "This is the description for card 2.");
createCard("../assets/images/image.jpg", "Card 3", "This is the description for card 3.");
createCard("../assets/images/image.jpg", "Card 3", "This is the description for card 3.");
createCard("../assets/images/image.jpg", "Card 3", "This is the description for card 3.");
createCard("../assets/images/image.jpg", "Card 3", "This is the description for card 3.");
