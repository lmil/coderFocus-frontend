import { z } from "zod";
import { api } from "./client";

export const healthResponseSchema = z.object({
  status: z.string(),
  timestamp: z.number(),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;

export const healthApi = {
  check: async (): Promise<HealthResponse> => {
    const response = await api.get("health");

    // validate response data againts schema
    const validated = healthResponseSchema.parse(response.data);

    return validated;
  },
};
