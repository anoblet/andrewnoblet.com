import { html } from "lit-element";

export default function () {
    return html`
        <h1>
            <slot name="title">${this.title}</slot>
        </h1>
        <slot></slot>
    `;
}
