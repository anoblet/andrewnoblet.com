import {
    registerServiceWorker,
    ServiceWorker,
    showUpdateSnackbar,
} from "@anoblet/web-utilities";

import "./components/shell-component";

(async () => {
    // await import("./components/shell-component");

    const el: any = document.createElement("shell-component");
    document.body.appendChild(el);
})();

new ServiceWorker({ source: "/service-worker.js" });
