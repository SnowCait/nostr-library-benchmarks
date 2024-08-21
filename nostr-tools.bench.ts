import {
  finalizeEvent,
  generateSecretKey,
  getEventHash,
  getPublicKey,
  serializeEvent,
  verifyEvent,
} from "npm:nostr-tools";

Deno.bench("generateSecretKey", () => {
  generateSecretKey();
});

Deno.bench("getPublicKey", (b) => {
  const seckey = generateSecretKey();

  b.start();

  getPublicKey(seckey);

  b.end();
});

Deno.bench("getEventHash", (b) => {
  const seckey = generateSecretKey();
  const pubkey = getPublicKey(seckey);

  b.start();

  getEventHash({ kind: 1, pubkey, content: "", tags: [], created_at: 0 });

  b.end();
});

Deno.bench("finalizeEvent", (b) => {
  const seckey = generateSecretKey();

  b.start();

  finalizeEvent({ kind: 1, content: "", tags: [], created_at: 0 }, seckey);

  b.end();
});

Deno.bench("verifyEvent", (b) => {
  const seckey = generateSecretKey();
  const event = finalizeEvent(
    { kind: 1, content: "", tags: [], created_at: 0 },
    seckey,
  );

  b.start();

  verifyEvent(event);

  b.end();
});

Deno.bench("serializeEvent", (b) => {
  const seckey = generateSecretKey();
  const pubkey = getPublicKey(seckey);

  b.start();

  serializeEvent({ kind: 1, pubkey, content: "", tags: [], created_at: 0 });

  b.end();
});

Deno.bench("JSON.stringify", (b) => {
  const seckey = generateSecretKey();
  const event = finalizeEvent(
    { kind: 1, content: "", tags: [], created_at: 0 },
    seckey,
  );

  b.start();

  JSON.stringify(event);

  b.end();
});

Deno.bench("JSON.parse", (b) => {
  const seckey = generateSecretKey();
  const event = finalizeEvent(
    { kind: 1, content: "", tags: [], created_at: 0 },
    seckey,
  );
  const json = JSON.stringify(event);

  b.start();

  JSON.parse(json);

  b.end();
});
