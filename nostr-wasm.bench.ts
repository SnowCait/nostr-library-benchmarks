import { initNostrWasm } from "npm:nostr-wasm";
import { bytesToHex } from "npm:@noble/hashes/utils";

Deno.bench("initNostrWasm", async () => {
  await initNostrWasm();
});

Deno.bench("generateSecretKey", async (b) => {
  const nostr = await initNostrWasm();

  b.start();

  nostr.generateSecretKey();

  b.end();
});

Deno.bench("getPublicKey", async (b) => {
  const nostr = await initNostrWasm();
  const seckey = nostr.generateSecretKey();

  b.start();

  nostr.getPublicKey(seckey);

  b.end();
});

Deno.bench("finalizeEvent", async (b) => {
  const nostr = await initNostrWasm();
  const seckey = nostr.generateSecretKey();
  const pubkey = nostr.getPublicKey(seckey);

  b.start();

  await nostr.finalizeEvent({
    kind: 1,
    pubkey: bytesToHex(pubkey),
    content: "",
    tags: [],
    created_at: 0,
    id: "",
    sig: "",
  }, seckey);

  b.end();
});

Deno.bench("verifyEvent", async (b) => {
  const nostr = await initNostrWasm();
  const seckey = nostr.generateSecretKey();
  const pubkey = nostr.getPublicKey(seckey);
  const event = {
    kind: 1,
    pubkey: bytesToHex(pubkey),
    content: "",
    tags: [],
    created_at: 0,
    id: "",
    sig: "",
  };
  await nostr.finalizeEvent(event, seckey);

  b.start();

  nostr.verifyEvent(event);

  b.end();
});
