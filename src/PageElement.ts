import { LitElement } from "lit-element";

export class PageElement extends LitElement {
    pageTitle: string;

    connectedCallback() {
        super.connectedCallback();
        document.title = this.pageTitle;
    }
}
