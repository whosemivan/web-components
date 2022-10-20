export default {
    render(data) {
        return `
            ${this.css()}
            ${this.html(data)}
        `
    },
    html(data) {
        return `
            <div class="alien-bc">
                <div class="alien-bc__logo"><i class="fa-brands fa-${data.logo}"></i></div>
                <div class="alien-bc__line">${data.prof}</div>
                <div class="alien-bc__line">${data.mail}</div>
                <div class="alien-bc__line">${data.tel}</div>
                <div class="alien-bc__user">${data.user}</div>
            </div>
        `;
    },
    css() {
        return `<style>
            @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css);
            .alien-bc {
                width: 85.6mm;
                height: 53.98mm;
                border-radius: 3.18mm;
                box-sizing: border-box;
                padding: 8mm;
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 3mm 10mm;
                align-content: space-between;
                font-size: 16pt;
                font-family: sans-serif;
            }
            .alien-bc__logo {
                grid-row-end: span 3;
                font-size: 55pt;
            }
            .alien-bc__user {
                align-self: flex-end;
                font-size: 2em;
                grid-column-end: span 2;
            }
            .alien-bc__line {
                font-size: .7em;
            }
        </style>`
    }
}