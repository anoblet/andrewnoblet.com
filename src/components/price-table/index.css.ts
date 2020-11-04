import { css } from "lit-element";

export default css`
    :host {
        --grid-item-min: 300px;
        /* background: #000; */
        display: grid;
        grid-gap: 1rem;
        padding: 1px;
        grid-template-columns: repeat(
            auto-fit,
            minmax(var(--grid-item-min), auto)
        );
        align-items: center;
    }

    ::slotted(price-table-item) {
        background: #fff;
        border: 1px solid #000;
        height: 100%;
    }

    ::slotted(price-table-item:hover) {
        box-shadow: 0px 0px 1rem 0.5rem hsl(0, 0%, 50%, 50%);
    }

    ::slotted([primary]) {
    }
`;
