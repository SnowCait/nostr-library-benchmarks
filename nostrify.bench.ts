import { NSecSigner } from "jsr:@nostrify/nostrify";
import { generateSecretKey } from "nostr-tools";

Deno.bench("NSecSigner", (b) => {
    const seckey = generateSecretKey();

    b.start();

    new NSecSigner(seckey);

    b.end();
});

Deno.bench("getPublicKey", async (b) => {
    const seckey = generateSecretKey();
    const signer = new NSecSigner(seckey);

    b.start();

    await signer.getPublicKey(); // Internally, call getPublicKey of nostr-tools

    b.end();
});

Deno.bench("signEvent", async (b) => {
    const seckey = generateSecretKey();
    const signer = new NSecSigner(seckey);

    b.start();

    await signer.signEvent({ kind: 1, content: "", tags: [], created_at: 0 }); // Internally, call finalizeEvent of nostr-tools

    b.end();
});
