import { html } from "lit-element";

export default function () {
    return html`
        <details>
            <summary href="/design" @click=${this.navigate}>Design</summary>
        </details>
        <details>
            <summary href="/mentorship" @click=${this.navigate}>
                Mentorship
            </summary>
        </details>
    `;
}
