import "@material/mwc-drawer";
import "@material/mwc-icon-button";
import "@material/mwc-top-app-bar";
import { html } from "lit-element";

export default function () {
    return html`
        <details open>
            <summary>Services</summary>
            <a href="/design">Design</a>
            <a href="/hosting">Hosting</a>
            <a href="/email">Email</a>
            <a href="/search-engine-optimization">SEO</a>
        </details>
    `;
}
