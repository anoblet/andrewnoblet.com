import { css } from "lit-element";

export default css`
    :host {
        /* padding-top: 1.25rem; */
    }

    a {
        color: #333;
        display: flex;
        /* font-weight: 600; */
        padding: 1rem;
        /* text-transform: uppercase; */
        /* border-bottom: 1px solid hsl(var(--primary-hue), 100%, 30%); */
    }

    a:before {
        content: "▸";
        padding-right: 1rem;
    }

    a,
    a:before {
        /* display: flex; */
        /* align-items: center; */
    }

    a:first-child {
        /* border-top: 1px solid hsl(var(--primary-hue), 100%, 30%); */
    }

    a:hover {
        background-color: #333;
        color: #fff;
        /* display: block; */
    }

    details > a {
        padding-left: 2rem;
    }

    summary {
        cursor: pointer;
        /* list-style: circle; */
        padding: 1rem;
    }

    summary:hover {
        background-color: #333;
        color: #fff;
    }

    summary::-webkit-details-marker {
        align-items: center;
        display: inline-flex;
        justify-content: center;
        font-size: 75%;
        padding-right: 0.75rem;
    }
`;
