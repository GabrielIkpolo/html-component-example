class Footer extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="myFooter">
            <footer>
                &copy; Michael John
            </footer>
        </div>
        `;
    }
}

customElements.define('footer-component', Footer);