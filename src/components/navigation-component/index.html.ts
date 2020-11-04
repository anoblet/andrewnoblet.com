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
