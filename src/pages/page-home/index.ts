import { customElement } from "lit-element";
import { PageElement } from "../../PageElement";
import style from "./index.css";
import template from "./index.html";

@customElement("page-home")
export class PageHome extends PageElement {
    pageTitle = "Home";

    public static get styles() {
        return style;
    }

    public render = template.bind(this);
}
