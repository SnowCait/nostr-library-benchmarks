import {
  EventBuilder,
  Keys,
  loadWasmAsync,
  loadWasmSync,
} from "npm:@rust-nostr/nostr";
import { finalizeEvent } from "npm:nostr-tools";
import { hexToBytes } from "npm:@noble/hashes/utils";
import { Event } from "npm:@rust-nostr/nostr";

Deno.bench("loadWasmSync", () => {
  loadWasmSync();
});

Deno.bench("loadWasmAsync", async () => {
  await loadWasmAsync();
});

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

Deno.bench("verify with fromJson", async (b) => {
  await loadWasmAsync();
  const keys = Keys.generate();
  const event = finalizeEvent(
    { kind: 1, content: "", tags: [], created_at: 0 },
    hexToBytes(keys.secretKey.toHex()),
  );

  b.start();

  const json = JSON.stringify(event);
  Event.fromJson(json).verify();

  b.end();
});
