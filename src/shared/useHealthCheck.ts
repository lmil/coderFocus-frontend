import { useQuery } from "@tanstack/react-query";
import { healthApi } from "../api/health.api";

export function useHealthCheck() {
  return useQuery({
    queryKey: ["health"],
    queryFn: healthApi.check,
  });
}
