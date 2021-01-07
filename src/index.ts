import { ServiceWorker } from "@anoblet/web-utilities";
import "./components/shell-component";

new ServiceWorker({ source: "/service-worker.js" });
