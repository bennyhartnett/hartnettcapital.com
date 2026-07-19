import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(root, "dist", "server");
const html = await readFile(resolve(root, "index.html"), "utf8");
const socialCard = await readFile(resolve(root, "og.png"));

const worker = `
const HTML = ${JSON.stringify(html)};
const SOCIAL_CARD_BASE64 = ${JSON.stringify(socialCard.toString("base64"))};

function socialCardBytes() {
  const decoded = atob(SOCIAL_CARD_BASE64);
  const bytes = new Uint8Array(decoded.length);
  for (let index = 0; index < decoded.length; index += 1) {
    bytes[index] = decoded.charCodeAt(index);
  }
  return bytes;
}

const securityHeaders = {
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const isHead = request.method === "HEAD";

    if (request.method !== "GET" && !isHead) {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { ...securityHeaders, Allow: "GET, HEAD" },
      });
    }

    if (url.pathname === "/og.png") {
      return new Response(isHead ? null : socialCardBytes(), {
        headers: {
          ...securityHeaders,
          "Cache-Control": "public, max-age=86400",
          "Content-Type": "image/png",
        },
      });
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(isHead ? null : HTML, {
        headers: {
          ...securityHeaders,
          "Cache-Control": "public, max-age=300",
          "Content-Type": "text/html; charset=UTF-8",
        },
      });
    }

    return new Response("Not Found", {
      status: 404,
      headers: { ...securityHeaders, "Content-Type": "text/plain; charset=UTF-8" },
    });
  },
};
`;

await rm(resolve(root, "dist"), { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, "index.js"), worker);

console.log("Built Hartnett Capital site.");
