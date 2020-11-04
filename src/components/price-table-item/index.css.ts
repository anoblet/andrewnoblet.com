import { css } from "lit-element";

export default css`
    :host {
        cursor: pointer;
        display: grid;
        grid-template-rows: max-content auto max-content;
    }

    .price, .title {
        background: var(--primary-color-dark);
        color: #fff;
        padding: 0.5rem;
        text-align: center;
    }
`;
