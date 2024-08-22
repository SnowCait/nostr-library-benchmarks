import NDK, { NDKEvent, NDKPrivateKeySigner } from "npm:@nostr-dev-kit/ndk";
import { generateSecretKey } from "npm:nostr-tools";

Deno.bench("sign", async (b) => {
  const seckey = generateSecretKey();
  const signer = new NDKPrivateKeySigner(seckey);
  const ndk = new NDK({ signer });

  b.start();

  const event = new NDKEvent(ndk);
  event.kind = 1;
  event.content = "";
  event.tags = [];
  event.created_at = 0;
  await event.sign(); // Internally, call finalizeEvent of nostr-tools

  b.end();
});

Deno.bench("isValid", async (b) => {
  const seckey = generateSecretKey();
  const signer = new NDKPrivateKeySigner(seckey);
  const ndk = new NDK({ signer });
  const event = new NDKEvent(ndk);
  event.kind = 1;
  event.content = "";
  event.tags = [];
  event.created_at = 0;
  await event.sign();

  b.start();

  event.verifySignature(false);

  b.end();
});
