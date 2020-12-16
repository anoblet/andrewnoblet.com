import { html } from "lit-element";

export default function () {
    return html`
        <ul>
            <li><a href="/design">Design</a></li>
            <li><a href="/mentorship">Mentorship</a></li>
            <li>
                <button>Services</button>
                <ul collapsible collapsed>
                    <li>
                        <a href="/domain">Domain</a>
                    </li>
                    <li>
                        <a href="/hosting">Hosting</a>
                    </li>
                </ul>
            </li>
        </ul>
    `;
}
