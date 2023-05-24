class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contactUs.html">ContactUs</a></li>
            <li><a href="gallery.html">Gallery</a></li>
        </ul>
    </nav>
        `;
    }
}

customElements.define('header-component', Header);