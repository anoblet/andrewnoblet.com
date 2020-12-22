import { customElement, LitElement } from "lit-element";
import global from "../../global.css";
import style from "./index.css";
import template from "./index.html";

@customElement("list-component")
export class ListItemComponent extends LitElement {
    public static get styles() {
        return [global, style];
    }

    public render = template.bind(this);
}
