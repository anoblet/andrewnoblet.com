import { css } from "lit-element";

export default css`
    :host {
        display: block;
        height: 100vh;
        font-family: sans-serif;
        --primary-hue: 225;
        --secondary-hue: 270;
        --primary-color: hsl(var(--primary-hue), 80%, 50%);
        --primary-color-dark: hsl(var(--primary-hue), 50%, 25%);
        --secondary-color: hsl(var(--secondary-hue), 100%, 40%);
        --mdc-theme-primary: var(--primary-color-dark);
    }

    main {
        padding: 1rem;
    }

    [slot="title"] a {
        color: #fff;
    }
`;
