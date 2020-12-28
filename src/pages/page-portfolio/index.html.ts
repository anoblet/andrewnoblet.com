import "@anoblet/web-components/lib/grid-component";
import "@anoblet/web-components/lib/grid-item-component";
import { html } from "lit-element";

export default function () {
    return html`
        <grid-component>
            <grid-item-component style="width: 500px">1</grid-item-component>
            <grid-item-component>2</grid-item-component>
            <grid-item-component>3</grid-item-component>
        </grid-component>
    `;
}
