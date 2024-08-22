# Nostr library benchmarks

Benchmark Nostr libraries' functions.

## Benchamarks

Full log is
[here](https://github.com/SnowCait/nostr-library-benchmarks/actions/runs/10505736826).

### TypeScript (JavaScript)

```
deno bench --allow-env
```

```
cpu: AMD EPYC 7763 64-Core Processor
runtime: deno 1.46.0 (x86_64-unknown-linux-gnu)

file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/javascript-api.bench.ts
benchmark       time (avg)        iter/s             (min … max)       p75       p99      p995
---------------------------------------------------------------- -----------------------------
new URL        416.13 ns/iter   2,403,099.5 (405.42 ns … 555.37 ns) 418.77 ns 484.67 ns 555.37 ns
JSON.parse      73.89 ns/iter  13,534,102.7  (63.84 ns … 103.26 ns) 78.06 ns 84.7 ns 86.2 ns


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/ndk.bench.ts
benchmark      time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------- -----------------------------
sign            2.35 ms/iter         425.1      (2.12 ms … 4.7 ms) 2.35 ms 4 ms 4.31 ms
isValid         1.63 ms/iter         615.0     (1.42 ms … 2.98 ms) 1.59 ms 2.8 ms 2.98 ms


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-tools.bench.ts
benchmark              time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------- -----------------------------
generateSecretKey       5.56 µs/iter     179,959.8     (5.29 µs … 7.45 µs) 5.38 µs 7.45 µs 7.45 µs
getPublicKey          220.87 µs/iter       4,527.5 (197.81 µs … 994.42 µs) 214.91 µs 456.18 µs 469.4 µs
getEventHash           12.76 µs/iter      78,376.0   (8.32 µs … 201.09 µs) 12.52 µs 47.86 µs 49.8 µs
finalizeEvent           2.22 ms/iter         451.5     (2.04 ms … 3.98 ms) 2.25 ms 2.81 ms 3.64 ms
verifyEvent             1.51 ms/iter         661.5     (1.37 ms … 3.11 ms) 1.55 ms 1.77 ms 3.11 ms
serializeEvent          2.57 µs/iter     388,500.4    (1.47 µs … 36.69 µs) 1.79 µs 24.91 µs 25.55 µs
JSON.stringify          3.14 µs/iter     318,066.2     (2.24 µs … 9.65 µs) 3.42 µs 6.26 µs 7.12 µs
JSON.parse              2.96 µs/iter     337,837.8      (1.98 µs … 7.7 µs) 3.23 µs 5.08 µs 5.1 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-wasm.bench.ts
benchmark              time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------- -----------------------------
initNostrWasm           4.31 ms/iter         232.2     (3.68 ms … 6.81 ms) 4.8 ms 6.47 ms 6.81 ms
generateSecretKey       5.58 µs/iter     179,211.5     (4.12 µs … 9.59 µs) 6.1 µs 9.34 µs 9.59 µs
getPublicKey          266.94 µs/iter       3,746.2 (247.38 µs … 460.02 µs) 252.88 µs 455.73 µs 460.02 µs
finalizeEvent         547.55 µs/iter       1,826.3 (506.24 µs … 948.48 µs) 520.24 µs 937.92 µs 948.48 µs
verifyEvent           436.92 µs/iter       2,288.8 (404.02 µs … 672.07 µs) 427.78 µs 630.89 µs 672.07 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rust-nostr.bench.ts
benchmark          time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
loadWasmAsync        171 ns/iter   5,847,953.2      (140 ns … 1.79 ms) 160 ns 360 ns 672 ns
generate          283.38 µs/iter       3,528.9 (275.54 µs … 900.06 µs) 278.96 µs 531.45 µs 548.63 µs
toEvent           171.82 µs/iter       5,820.0 (160.67 µs … 661.56 µs) 168.75 µs 330.58 µs 344.53 µs
verify            298.32 µs/iter       3,352.1 (276.76 µs … 640.46 µs) 296.87 µs 503.39 µs 548.33 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rx-nostr-crypto.bench.ts
benchmark                      time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------- -----------------------------
getPublicKey                  210.99 µs/iter       4,739.5 (193.14 µs … 756.36 µs) 205.6 µs 393.31 µs 430.62 µs
getEventHash                   10.05 µs/iter      99,472.8    (6.9 µs … 144.29 µs) 10.62 µs 24.46 µs 27.91 µs
getSignature                     1.9 ms/iter         525.3     (1.77 ms … 3.41 ms) 1.95 ms 2.13 ms 2.26 ms
seckeySigner                  205.32 µs/iter       4,870.4 (190.73 µs … 527.39 µs) 201.18 µs 345.97 µs 371.95 µs
seckeySigner.getPublicKey        637 ns/iter   1,569,858.7    (340 ns … 120.36 µs) 661 ns 2.18 µs 2.29 µs
seckeySigner.signEvent          1.88 ms/iter         531.0     (1.74 ms … 2.26 ms) 1.91 ms 2.12 ms 2.24 ms
verify                          1.45 ms/iter         691.0     (1.32 ms … 1.72 ms) 1.47 ms 1.69 ms 1.72 ms
```

### Go

```
go test -bench .
```

```
cpu: AMD EPYC 7763 64-Core Processor                
BenchmarkGeneratePrivateKey-4   	  751238	      1599 ns/op
BenchmarkGetPublicKey-4         	   33727	     36158 ns/op
BenchmarkSign-4                 	    4244	    274345 ns/op
BenchmarkVerify-4               	    6632	    180577 ns/op
PASS
ok  	github.com/SnowCait/nostr-library-benchmarks	5.223s
```

## Contribution

Welcome pull requests to add libraries or functions.
