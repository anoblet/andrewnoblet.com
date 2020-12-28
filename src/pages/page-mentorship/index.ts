import { customElement } from "lit-element";
import globalStyle from "../../global.css";
import { PageElement } from "../../PageElement";
import style from "./index.css";
import template from "./index.html";

@customElement("page-mentorship")
export class PageMentorship extends PageElement {
    public static get styles() {
        return [globalStyle, style];
    }

    public render = template.bind(this);
}
