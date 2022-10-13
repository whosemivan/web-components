export default {
    render(data) {
        return `
            ${this.css()}
            ${this.html(data)}
        `;
    },
    html(data) {
        return `
        <div class="alien-card">
            <div class="alien-card__logo"><i class="fa-solid fa-heart"></i></div>
            <div class="alien-card__number">
                ${data.number.map(n => `<span>${n}</span>`).join("")}
            </div>
            <div class="alien-card__user">${data.user}</div>
            <div class="alien-card__expire">${data.expire}</div>
            <div class="alien-card__type">
                <i class="fa-brands ${data.type}"></i>
            </div>
        </div>
        `;
    },
    css() {
        return `
        <style>
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
        .alien-card {
            width: 85.6mm;
            height: 53.98mm;
            border-radius: 3.18mm;
            box-sizing: border-box;
            padding: 8mm;
            display: grid;
            grid-template-columns: repeat(3, auto);
            gap: 5mm;
            align-content: space-between;
            font-size: 16pt;
            font-family: sans-serif;
        }
        .alien-card__logo {
            grid-column-end: span 3;
            font-size: 24pt;
        }
        .alien-card__number {
            grid-column-end: span 3;
            display: flex;
            justify-content: space-between;
        }
        .alien-card__expire {
            justify-self: center;
            align-self: flex-end;
        }
        .alien-card__type {
            justify-self: flex-end;
            font-size: 30px;
        }
        .alien-card__user {
            align-self: flex-end;
        }
    </style>            
        `
    }
}