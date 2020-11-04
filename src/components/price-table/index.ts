import { customElement, LitElement, property, query } from "lit-element";
import global from "../../global.css";
import style from "./index.css";
import template from "./index.html";

@customElement("price-table")
export class PriceTableComponent extends LitElement {
    public static get styles() {
        return [global, style];
    }

    public render = template.bind(this);
}
