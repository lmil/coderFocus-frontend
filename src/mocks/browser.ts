import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// This create a service worker instance with our request handler
export const worker = setupWorker(...handlers);
