import Router from "@anoblet/router";
import { customElement, LitElement, query } from "lit-element";
import { routes } from "../../routes";
import style from "./index.css";
import template from "./index.html";
import globalStyle from "../../global.css";

@customElement("shell-component")
export class ShellComponent extends LitElement {
    @query("main") main: HTMLElement;
    @query("mwc-drawer") drawer: any;
    @query("mwc-top-app-bar") topAppBar: any;

    public static get styles() {
        return [globalStyle, style];
    }

    public render = template.bind(this);

    firstUpdated() {
        Router.install((location: any) => {
            Router.routeChanged({
                location,
                routes,
                portal: this.main,
            });

            // Close drawer
            this.drawer.open = false;

            // Reset scroll position
            this.main.scrollTo(0, 0);
        });

        this.registerNav();
    }

    registerNav() {
        this.topAppBar.addEventListener("MDCTopAppBar:nav", () => {
            this.drawer.open = !this.drawer.open;
        });
    }
}
