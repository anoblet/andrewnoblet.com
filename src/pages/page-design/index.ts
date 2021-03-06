import { customElement, LitElement } from "lit-element";
import globalStyle from "../../global.css";
import style from "./index.css";
import template from "./index.html";

@customElement("page-design")
export class PageDesign extends LitElement {
    public static get styles() {
        return [globalStyle, style];
    }

    public render = template.bind(this);
}
