import "@material/mwc-drawer";
import "@material/mwc-icon-button";
import "@material/mwc-top-app-bar-fixed";
import { html } from "lit-element";
import "../../components/navigation-component";

export default function () {
    return html`
        <mwc-top-app-bar-fixed>
            <mwc-icon-button
                icon="menu"
                slot="navigationIcon"
            ></mwc-icon-button>
            <div slot="title"><a href="/">Andrew Noblet</a></div>
            <mwc-drawer hasHeader type="modal">
                <span slot="title">Navigation</span>
                <navigation-component></navigation-component>
                <div slot="appContent">
                    <main></main>
                </div>
            </mwc-drawer>
        </mwc-top-app-bar-fixed>
    `;
}
