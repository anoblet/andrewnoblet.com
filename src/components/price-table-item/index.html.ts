import { html } from "lit-element";
import { nothing } from "lit-html";

export default function () {
    return html`
        ${this.hasTitle
            ? html`
                  <div class="title">
                      <slot name="title"></slot>
                  </div>
              `
            : nothing}
        <div class="content">
            <slot></slot>
        </div>
        ${this.hasPrice
            ? html`
                  <div class="price">
                      <slot name="price"></slot>
                  </div>
              `
            : nothing}
    `;
}
