Deno.bench("new URL", () => {
  new URL("https://example.com/");
});

Deno.bench("JSON.parse", () => {
  JSON.parse("{}");
});
