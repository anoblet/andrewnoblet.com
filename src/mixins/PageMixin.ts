// import { LitElement, property } from "lit-element";

// type Constructor = new (...args: any[]) => LitElement;

// export interface PageMixin {}

// type ReturnConstructor = new (...args: any[]) => LitElement & PageMixin;

// export default function <B extends Constructor>(
//     Base: B
// ): B & ReturnConstructor {
//     class Mixin extends Base implements PageMixin {
//         title: string;

//         constructor() {
//           super();
//           document.title = this.title;
//         }

//         firstUpdated() {
//           console.log(this.title);
//         }
//     }

//     return Mixin;
// }
