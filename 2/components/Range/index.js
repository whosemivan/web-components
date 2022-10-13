export default class Range extends HTMLElement {
    static get observedAttributes() {
        return ["color", "val"];
    }

    get val() {
       return this.getAttribute("val");
    }

    set val(newVal) {
        this.setAttribute("val", newVal);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch(attrName) {
            case "val":
                this.changeThumb(newVal);
                break;
        }
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="overlay"></div>
            <div class="thumb"></div>
        `;
        this.style.width = "400px";
        this.style.height = "10px";
        this.style.display = "block";
        this.style.position = "relative";
        this.style.outline = "1px solid #000000";
        const tb = this.querySelector(".thumb");
        const ol = this.querySelector(".overlay");
        ol.style.backgroundColor = this.getAttribute("color");
        ol.style.height = "100%";
        ol.style.borderRadius = "10px";
        
        tb.style.height = "20px";
        tb.style.width = "20px";
        tb.style.borderRadius = "50%";
        tb.style.borderWidth = "2px";
        tb.style.borderStyle = "solid";
        tb.style.borderColor = "darkslategrey";
        tb.style.backgroundColor = "white";
        tb.style.position = "absolute";
        tb.style.top = "-6px";
        tb.style.left = "calc((100% - 24px) / 2)";
        
        this.isDragging = false;
        this.rect = this.getBoundingClientRect();
        this.addEventListener("mousemove", this.handler);
        this.addEventListener("mousedown", this.handler);
        this.addEventListener("mouseup", this.handler);
        this.changeThumb();
    }

    handler(e) {
        switch(e.type) {
            case "mousemove":
                if (this.isDragging) {
                    this.update(e.clientX);
                }
                break;
            case "mouseup":
                this.isDragging = false;
                break;
            case "mousedown":
                this.isDragging = true;
                this.update(e.clientX);
                break;
        }
    }

    changeThumb(v) {
        const tb = this.querySelector(".thumb");

        if (tb) {
            tb.style.left = this.rect.width * (v / 100) - tb.offsetWidth / 2 + "px";
        }
        
        const ol = this.querySelector(".overlay");
        if (ol) {
            ol.style.width = v + "%";
        }

    }

    update(cursor) {
        let x = cursor - this.rect.left;

        if (x < 0) {
            x = 0;
        }
        if (x > this.rect.width) {
            x = this.rect.width;
        }

        this.val = x * 100 / this.rect.width;
        const tb = this.querySelector(".thumb");
        tb.style.left = x - tb.offsetWidth / 2 + "px";
    }
}
