import { css } from "lit-element";

export default css`
    :host {
        font-family: sans-serif;
        --primary-hue: 225;
        --secondary-hue: 270;
        --primary-color: hsl(var(--primary-hue), 80%, 50%);
        --secondary-color: hsl(var(--secondary-hue), 100%, 40%);
        --mdc-theme-primary: var(--primary-color);
    }

    main {
        padding: 1rem;
    }

    [slot="title"] a {
        color: #fff;
    }
`;
