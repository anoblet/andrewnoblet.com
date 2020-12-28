import { customElement } from "lit-element";
import { PageElement } from "../../PageElement";
import style from "./index.css";
import template from "./index.html";

@customElement("page-services")
export class PageServices extends PageElement {
    public static get styles() {
        return style;
    }

    public render = template.bind(this);
}
