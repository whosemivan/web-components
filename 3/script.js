import Card from "./components/Card/index.js";

if (!customElements.get("alien-cc")) {
    customElements.define("alien-cc", Card);
}

fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=9")
    .then(res => res.json())
    .then(data => {
        data.data.forEach(card => {
            let tag = document.createElement("alien-cc");
            tag.setAttribute("user", card.owner);
            tag.setAttribute("number", card.number);
            tag.setAttribute("expire", card.expiration);
            tag.setAttribute("type", card.type);
            document.body.append(tag);
        })
    })