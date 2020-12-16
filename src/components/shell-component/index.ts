import { Router } from "../../Router";
import { customElement, LitElement, query } from "lit-element";
import { routes } from "../../routes";
import style from "./index.css";
import template from "./index.html";
import globalStyle from "../../global.css";

@customElement("shell-component")
export class ShellComponent extends LitElement {
    @query("#container") container: HTMLDivElement;
    @query("main")
    main: HTMLElement;
    @query("mwc-drawer") drawer: any;
    @query("mwc-top-app-bar-fixed") topAppBar: any;

    public static get styles() {
        return [globalStyle, style];
    }

    public render = template.bind(this);

    firstUpdated() {
        Router.install({
            animation: {
                duration: 250,
            },
            outlet: this.main,
            routes,
        });
        this.registerNav();
    }

    registerNav() {
        this.topAppBar.addEventListener("MDCTopAppBar:nav", () => {
            this.drawer.open = !this.drawer.open;
        });
        this.topAppBar.addEventListener("Router:RouteChanged", () => {
            this.drawer.open = false;
        });
    }
}
