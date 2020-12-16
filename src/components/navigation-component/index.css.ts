import { css } from "lit-element";

export default css`
    button {
        background: inherit;
        border: 0;
        cursor: pointer;
        font: inherit;
        text-align: left;
    }

    a,
    button {
        color: #333;
        display: block;
        flex: 1;
        padding: 1rem;
    }

    a:hover,
    button:hover {
        background-color: #333;
        color: #fff;
    }

    li {
        display: flex;
        flex-direction: column;
    }

    ul {
        list-style-type: none;
        margin-block-end: 0;
        margin-block-start: 0;
        padding-inline-start: 0;
    }

    ul[collapsed] > li {
        display: none;
    }
`;
