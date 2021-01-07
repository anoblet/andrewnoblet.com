import { html } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import AdministratorApplications from "./administrator/applications.md";
import AdministratorCloudServices from "./administrator/cloud-services.md";
import ClientFrameworks from "./client-frameworks.md";
import ClientLanguages from "./client-languages.md";
import ClientLibraries from "./client-libraries.md";
import Details from "./details.md";
import Links from "./links.md";
import ServerApplications from "./server-applications.md";
import ServerFrameworks from "./server-frameworks.md";
import ServerLanguages from "./server-languages.md";

export default function () {
    return html`
        <div class="grid gap">
            <div>
                <h2>Personal</h2>
                <hr />
                <div class="flex gap padding wrap">
                    <div class="column flex grow">${unsafeHTML(Details)}</div>
                </div>
                <div class="flex gap padding wrap">
                    <div class="grow">${unsafeHTML(Links)}</div>
                </div>
            </div>
            <h1>Portfolio</h1>
            <hr />
            <div>
                <h2></h2>
                <div class="flex gap padding wrap">
                    <div class="grow">${unsafeHTML(ClientLanguages)}</div>
                    <div class="grow">${unsafeHTML(ClientFrameworks)}</div>
                    <div class="grow">${unsafeHTML(ClientLibraries)}</div>
                </div>
            </div>
            <h1>Experience</h1>
            <hr />
            <div>
                <h2>Client Side</h2>
                <div class="flex gap padding wrap">
                    <div class="grow">${unsafeHTML(ClientLanguages)}</div>
                    <div class="grow">${unsafeHTML(ClientFrameworks)}</div>
                    <div class="grow">${unsafeHTML(ClientLibraries)}</div>
                </div>
                <hr />
                <h2>Server Side</h2>
                <div class="flex gap padding wrap">
                    <div class="grow">${unsafeHTML(ServerLanguages)}</div>
                    <div class="grow">${unsafeHTML(ServerFrameworks)}</div>
                    <div class="grow">${unsafeHTML(ServerApplications)}</div>
                </div>
                <hr />
                <h2>Server Administration</h2>
                <div class="flex gap padding wrap">
                    <div class="grow">
                        ${unsafeHTML(AdministratorApplications)}
                    </div>
                    <div class="grow">
                        ${unsafeHTML(AdministratorCloudServices)}
                    </div>
                </div>
            </div>
        </div>
    `;
}
