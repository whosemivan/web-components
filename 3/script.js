import Card from "./components/Card/index.js";
import BC from "./components/BC/index.js";

if (!customElements.get("alien-cc")) {
    customElements.define("alien-cc", Card);
}
if (!customElements.get("alien-bc")) {
    customElements.define("alien-bc", BC);
}

fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=3")
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

const form = document.forms[0];
const bc = document.querySelector("alien-bc");

const formHandler = (evt) => {
    let el = evt.target;
    bc.setAttribute(el.name, el.value);
}

for (let i = 0; i < form.elements.length; i++) {
    const el = form.elements[i];
    el.value = bc.getAttribute(el.name);

    switch (el.localName) {
        case "input": 
            el.addEventListener("input", formHandler);
            break;
        case "select":
            el.addEventListener("change", formHandler);
            break;
    }

    console.log(el.name);
    console.log(el.value);
    console.log(el.localName);
}
