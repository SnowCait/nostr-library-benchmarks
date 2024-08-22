import { EventBuilder, Keys, loadWasmAsync } from "npm:@rust-nostr/nostr";

Deno.bench("generate", async (b) => {
  await loadWasmAsync();

  b.start();

  Keys.generate();

  b.end();
});

Deno.bench("toEvent", async (b) => {
  await loadWasmAsync();
  const keys = Keys.generate();

  b.start();

  new EventBuilder(1, "", []).toEvent(keys).asJson();

  b.end();
});

Deno.bench("verify", async (b) => {
  await loadWasmAsync();
  const keys = Keys.generate();
  const event = new EventBuilder(1, "", []).toEvent(keys);

  b.start();

  event.verify();

  b.end();
});
