import { customElement, LitElement } from "lit-element";
import global from "../../global.css";
import { Router } from "../../Router";
import style from "./index.css";
import template from "./index.html";

@customElement("navigation-component")
export class NavigationComponent extends LitElement {
    navigate(event: Event & { target: HTMLElement }) {
        event.preventDefault();
        Router.navigate(event.target.getAttribute("href"));
        this.dispatchEvent(
            new CustomEvent("MDCTopAppBar:nav", { bubbles: true })
        );
    }

    firstUpdated() {
        setPadding({ node: this.shadowRoot });
        setCollapsible({ node: this.shadowRoot });
    }

    public static get styles() {
        return [global, style];
    }

    public render = template.bind(this);
}

const setPadding = ({ level = 0, node }: { level?: number; node }) => {
    [...node.querySelectorAll("a")].map(
        (a) => (a.style.paddingLeft = `${level}rem`)
    );
    [...node.querySelectorAll("ul")].map((ul) =>
        setPadding({ level: ++level, node: ul })
    );
};

const setCollapsible = ({ node }) => {
    [...node.querySelectorAll("button")].map((button) => {
        const ul = button.parentNode.querySelector("ul");

        button.addEventListener("click", () => {
            ul.hasAttribute("collapsed")
                ? ul.removeAttribute("collapsed")
                : ul.setAttribute("collapsed", "");
        });
    });
};
