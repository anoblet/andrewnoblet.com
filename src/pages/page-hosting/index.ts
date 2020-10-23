import { customElement, LitElement } from "lit-element";
import style from "./index.css";
import template from "./index.html";

@customElement("page-hosting")
export class PageHosting extends LitElement {
    public static get styles() {
        return style;
    }

    public render = template.bind(this);
}
