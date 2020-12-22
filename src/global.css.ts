import { css } from "lit-element";

export default css`
    * {
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    code {
        display: flex;
        flex-grow: 1;
    }

    h1,
    h2,
    h3 {
        margin-block-start: 0rem;
        margin-block-end: 0rem;
    }

    h2 {
        margin-block-start: 1rem;
    }

    hr {
        width: 100%;
    }

    table {
        margin-block-start: 1rem;
    }

    ul {
        padding-inline-start: 2rem;
    }

    ul {
        margin-block-start: 1rem;
        margin-block-end: 1rem;
    }

    .column {
        flex-direction: column;
    }

    .flex {
        display: flex;
    }

    .grow {
        flex-grow: 1;
    }

    .grid {
        display: grid;
    }

    .gap {
        gap: 1rem;
    }

    .padding {
        padding: 1rem;
    }

    .wrap {
        flex-wrap: wrap;
    }
`;
