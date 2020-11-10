import { customElement, LitElement, property } from "lit-element";
import global from "../../global.css";
import style from "./index.css";
import template from "./index.html";

@customElement("section-item")
export class SectionItemElement extends LitElement {
    @property({ type: String }) title: string;

    public static get styles() {
        return [global, style];
    }

    public render = template.bind(this);
}
