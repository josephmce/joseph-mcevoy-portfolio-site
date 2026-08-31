import { defineCliConfig } from "sanity/cli";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  deployment: { appId: undefined },
  graphql: [{ tag: "default", playground: true, generation: "gen3" }],
  reactCompiler: { target: "19" },
  vite: {
    define: {
      "process.env.NEXT_PUBLIC_SANITY_API_VERSION": JSON.stringify(apiVersion),
    },
  },
});
