class HeadLinks extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="personal profile, Department, database management">
        <meta name="author" content="Michael John">
        <meta name="robot" content="index,follow">
        <title>HTML Demo</title>
        <link rel="stylesheet" href="./css/ourStyle.css">
        <link rel="shortcut icon" href="./images/smallImage.png">
        `;
    }
}

customElements.define('headlink-component', HeadLinks);