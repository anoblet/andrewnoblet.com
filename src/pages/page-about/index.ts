import { customElement } from "lit-element";
import globalStyle from "../../global.css";
import { PageElement } from "../../PageElement";
import style from "./index.css";
import template from "./index.html";

@customElement("page-about")
export class PageAbout extends PageElement {
    pageTitle = "About";

    public static get styles() {
        return [globalStyle, style];
    }

    public render = template.bind(this);

    firstUpdated() {
        this.setLinkAttributes();
    }

    setLinkAttributes() {
        Array.from(this.shadowRoot.querySelectorAll("a")).map((a) => {
            a.rel = "noopener";
            a.target = "_blank";
        });
    }
}
