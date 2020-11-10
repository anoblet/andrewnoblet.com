import { html } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import "../../components/price-table";
import "../../components/price-table-item";
import "../../components/section-item";
import index from "./index.md";

export default function () {
    return html`
        <section-item title="Creation and Design">
            <p>${unsafeHTML(index)}</p>
        </section-item>
        <div class="section">
            <price-table>
                <price-table-item>
                    <span slot="title">Basic</span>
                    <ul>
                        <li>3 pages</li>
                    </ul>
                    <span slot="price">$750</span>
                </price-table-item>
                <price-table-item primary>
                    <span slot="title">Standard</span>
                    <ul>
                        <li>5 pages</li>
                    </ul>
                    <span slot="price">$1250</span>
                </price-table-item>
                <price-table-item>
                    <span slot="title">Premium</span>
                    <ul>
                        <li>10 pages</li>
                    </ul>
                    <span slot="price">$3000</span>
                </price-table-item>
            </price-table>
        </div>
        <section-item title="Service and Support Plans"></section-item>
        <div class="section">
            <price-table>
                <price-table-item>
                    <span slot="title">Basic</span>
                    <ul>
                        <li>Hosting</li>
                        <li>Custom Domain</li>
                        <li>3 email address</li>
                    </ul>
                    <span slot="price">$25 / month</span>
                </price-table-item>
                <price-table-item primary>
                    <span slot="title">Standard</span>
                    <ul>
                        <li>Hosting</li>
                        <li>Custom Domain</li>
                        <li>5 email addresses</li>
                        <li>Search Engine Optimization</li>
                    </ul>
                    <span slot="price">$50 / month</span>
                </price-table-item>
                <price-table-item>
                    <span slot="title">Premium</span>
                    <ul>
                        <li>Hosting</li>
                        <li>Custom Domain</li>
                        <li>Unlimited email addresses</li>
                        <li>Search Engine Optimization</li>
                        <li>Google Ads</li>
                    </ul>
                    <span slot="price">$99 / month</span>
                </price-table-item>
            </price-table>
        </div>
    `;
}
