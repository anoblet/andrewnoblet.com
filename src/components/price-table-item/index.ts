import { customElement, LitElement, property } from "lit-element";
import global from "../../global.css";
import style from "./index.css";
import template from "./index.html";

@customElement("price-table-item")
export class PriceTableItemComponent extends LitElement {
    @property({ type: Boolean }) hasPrice: boolean = true;
    @property({ type: Boolean }) hasTitle: boolean = true;
    
    public static get styles() {
        return [global, style];
    }

    public render = template.bind(this);
}
