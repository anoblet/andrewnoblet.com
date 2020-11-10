import { html } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import index from "./index.md";

export default function () {
    return html`${unsafeHTML(index)}`;
}
