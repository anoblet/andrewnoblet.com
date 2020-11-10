import { html } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import "../../components/price-table";
import "../../components/price-table-item";
import "../../components/section-item";
import index from "./index.md";

export default function () {
    return html`${unsafeHTML(index)}`;
}
