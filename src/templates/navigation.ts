import { html } from "lit-element";
import "../components/list-component";

export default function () {
    return html`
        <list-component>
            <li><a href="/">Home</a></li>
            <li><a href="/hosting">Hosting</a></li>
            <li><a href="/design">Design</a></li>
            <li><a href="/email">Email</a></li>
        </list-component>
    `;
}
