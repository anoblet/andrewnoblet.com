import { html } from "lit-element";
// import "@vanillawc/wc-markdown";
import index from "./index.md";

export default function () {
    return html`
        # Design We specialize in business website design. Our preferred piece
        of software is Wordpress. The reasons for this are: 1) Easy to edit
        ${index}
    `;
}
