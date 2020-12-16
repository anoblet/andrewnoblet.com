import { menu } from "@anoblet/material-icons";
import "@material/mwc-drawer";
import "@material/mwc-icon-button";
import "@material/mwc-top-app-bar-fixed";
import { html } from "lit-element";
import "../../components/navigation-component";

export default function () {
    return html`
        <mwc-top-app-bar-fixed>
            <mwc-icon-button label="Menu" slot="navigationIcon">
                ${menu}
            </mwc-icon-button>
            <div slot="title"><a href="/">Andrew Noblet</a></div>
            <mwc-drawer hasHeader type="modal">
                <span slot="title">Navigation</span>
                <navigation-component></navigation-component>
                <div slot="appContent">
                    <div id="container">
                        <main></main>
                    </div>
                </div>
            </mwc-drawer>
        </mwc-top-app-bar-fixed>
    `;
}
