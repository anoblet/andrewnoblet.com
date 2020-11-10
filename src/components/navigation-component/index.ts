import { routeChanged } from "@anoblet/router";
import { customElement, LitElement } from "lit-element";
import global from "../../global.css";
import { routes } from "../../routes";
import type { ShellComponent } from "../shell-component";
import style from "./index.css";
import template from "./index.html";
import { Router } from "../../Router";

@customElement("navigation-component")
export class NavigationComponent extends LitElement {
    navigate(event: Event) {
        event.preventDefault();
        const target = event.target as HTMLElement;
        Router.navigate(target.getAttribute("href"));
        // const target = event.target as HTMLElement;
        // const outlet: ShellComponent = document.querySelector(
        //     "shell-component"
        // );
        // const path = target.getAttribute("href");
        // window.history.pushState({}, "", path);
        // routeChanged({
        //     location: { pathname: path },
        //     portal: outlet.main,
        //     routes,
        // });
    }

    public static get styles() {
        return [global, style];
    }

    public render = template.bind(this);
}
