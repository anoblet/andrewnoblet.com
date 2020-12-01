import {
    registerServiceWorker,
    showUpdateSnackbar,
} from "@anoblet/web-utilities";
import "./components/shell-component";

(async () => {
    // await import("./components/shell-component");

    const el: any = document.createElement("shell-component");
    document.body.appendChild(el);
})();

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
