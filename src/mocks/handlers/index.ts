import { http, HttpResponse } from "msw";

// We'll add our mock handlers here
// Each handler intercepts a specific API endpoint
export const handlers = [
  // Health check handler will go here in next chunk
  http.get("/api/v1/health", () => {
    return HttpResponse.json({
      status: "ok",
      timestamp: Date.now(),
    });
  }),
];
