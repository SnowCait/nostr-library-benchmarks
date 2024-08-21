import {
  getEventHash,
  getPublicKey,
  seckeySigner,
  verify,
} from "npm:rx-nostr-crypto";
import { generateSecretKey } from "npm:nostr-tools";
import { bytesToHex } from "npm:@noble/hashes/utils";
import { getSignature } from "npm:rx-nostr-crypto";

Deno.bench("getPublicKey", (b) => {
  const seckey = bytesToHex(generateSecretKey());

  b.start();

  getPublicKey(seckey);

  b.end();
});

Deno.bench("getEventHash", (b) => {
  const seckey = bytesToHex(generateSecretKey());
  const pubkey = getPublicKey(seckey);

  b.start();

  getEventHash({ kind: 1, pubkey, content: "", tags: [], created_at: 0 });

  b.end();
});

Deno.bench("getSignature", (b) => {
  const seckey = bytesToHex(generateSecretKey());
  const pubkey = getPublicKey(seckey);
  const id = getEventHash({
    kind: 1,
    pubkey,
    content: "",
    tags: [],
    created_at: 0,
  });

  b.start();

  getSignature(id, seckey);

  b.end();
});

Deno.bench("seckeySigner", (b) => {
  const seckey = bytesToHex(generateSecretKey());

  b.start();

  seckeySigner(seckey);

  b.end();
});

Deno.bench("seckeySigner.getPublicKey", async (b) => {
  const seckey = bytesToHex(generateSecretKey());
  const signer = seckeySigner(seckey);

  b.start();

  await signer.getPublicKey();

  b.end();
});

Deno.bench("seckeySigner.signEvent", async (b) => {
  const seckey = bytesToHex(generateSecretKey());
  const signer = seckeySigner(seckey);

  b.start();

  await signer.signEvent({ kind: 1, content: "", tags: [], created_at: 0 });

  b.end();
});

Deno.bench("verify", async (b) => {
  const seckey = bytesToHex(generateSecretKey());
  const signer = seckeySigner(seckey);
  const event = await signer.signEvent({
    kind: 1,
    content: "",
    tags: [],
    created_at: 0,
  });

  b.start();

  verify(event);

  b.end();
});
