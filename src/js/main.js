import Customizator from "./customizator";
import '../parser';

window.addEventListener('DOMContentLoaded', () => {
    const panel = new Customizator();
    panel.render();
})