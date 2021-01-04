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

const serviceWorker = new ServiceWorker({ source: "/service-worker.js" });

if (location.hostname !== "localhost") {
    let updateRequested = false;
    registerServiceWorker({
        installed: (event) => {
            if (event.isUpdate) {
                if (!updateRequested) showUpdateSnackbar();
                updateRequested = true;
            }
        },
        message: (event) => {
            if (event.data.meta === "workbox-broadcast-update") {
                if (!updateRequested) showUpdateSnackbar();
                updateRequested = true;
            }
        },
        source: "/service-worker.js",
    });
}
