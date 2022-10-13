import Range from "./components/Range/index.js";

if (!customElements.get("alien-range")) {
    customElements.define("alien-range", Range);
}