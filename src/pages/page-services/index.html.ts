import { html } from "lit-element";
import "../../components/price-table";
import "../../components/price-table-item";

export default function () {
    return html`
        <price-table>
            <price-table-item>
                <span slot="title">Basic</span>
                <ul>
                    <li>3 pages</li>
                    <li>Custom Domain</li>
                    <li>1 email address</li>
                    <li>Hosting: $25 / month</li>
                </ul>
                <span slot="price">$750</span>
            </price-table-item>
            <price-table-item primary>
                <span slot="title">Standard</span>
                <ul>
                    <li>5 pages</li>
                    <li>Custom Domain</li>
                    <li>Search Engine Optimization</li>
                    <li>3 email addresses</li>
                    <li>Hosting: $25 / month</li>
                </ul>
                <span slot="price">$1250</span>
            </price-table-item>
            <price-table-item>
                <span slot="title">Professional</span>
                <ul>
                    <li>10 pages</li>
                    <li>Custom Domain</li>
                    <li>Search Engine Optimization</li>
                    <li>5 email addresses</li>
                    <li>Hosting: $25 / month</li>
                </ul>
                <span slot="price">$3000</span>
            </price-table-item>
        </price-table>
    `;
}
