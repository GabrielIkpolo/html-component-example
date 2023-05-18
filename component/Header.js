class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(){

        this.innerHTML = `
        <nav>
            <ul>
                <a href="index.html">
                    <li>Home</li>
                </a>
                <a href="/about.html">
                    <li>About</li>
                </a>
                <a href="/contactUs.html">
                    <li>Contact Us</li>
                </a>
                <a href="/gallery#">
                    <li>Gallery</li>
                </a>
            </ul>
        </nav>
        `;
    }
}

customElements.define('header-component', Header);