# Nostr library benchmarks

Benchmark Nostr libraries' functions.

## Benchamarks

Full log is
[here](https://github.com/SnowCait/nostr-library-benchmarks/actions/runs/10510915550/job/29120662282).

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
new URL        419.15 ns/iter   2,385,770.2  (408.32 ns … 529.9 ns) 422.27 ns 494.52 ns 529.9 ns
JSON.parse      74.23 ns/iter  13,471,685.9  (65.18 ns … 155.15 ns) 78.56 ns 86.24 ns 91.6 ns


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/ndk.bench.ts
benchmark            time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------- -----------------------------
sign                  2.29 ms/iter         437.4     (2.09 ms … 3.03 ms) 2.32 ms 2.77 ms 2.89 ms
verifySignature       1.58 ms/iter         631.1     (1.41 ms … 3.07 ms) 1.57 ms 2.65 ms 3.07 ms


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-tools.bench.ts
benchmark              time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------- -----------------------------
generateSecretKey       5.41 µs/iter     184,721.6     (5.32 µs … 6.24 µs) 5.39 µs 6.24 µs 6.24 µs
getPublicKey          217.22 µs/iter       4,603.6 (197.46 µs … 679.38 µs) 211.18 µs 413.02 µs 448.16 µs
getEventHash           12.49 µs/iter      80,051.2    (8.06 µs … 57.25 µs) 12.57 µs 44.96 µs 51.02 µs
finalizeEvent            2.2 ms/iter         455.0     (2.02 ms … 4.36 ms) 2.25 ms 2.6 ms 2.91 ms
verifyEvent             1.51 ms/iter         660.3     (1.36 ms … 2.72 ms) 1.54 ms 2.67 ms 2.72 ms
serializeEvent           2.5 µs/iter     399,361.0    (1.49 µs … 43.06 µs) 1.81 µs 25.53 µs 33.59 µs
JSON.stringify          3.17 µs/iter     315,357.9     (2.33 µs … 5.59 µs) 3.53 µs 5.47 µs 5.53 µs
JSON.parse              3.23 µs/iter     309,214.6    (2.11 µs … 17.26 µs) 3.54 µs 5.64 µs 6.01 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-wasm.bench.ts
benchmark              time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------- -----------------------------
initNostrWasm           5.25 ms/iter         190.4     (3.75 ms … 8.47 ms) 6.43 ms 8.46 ms 8.47 ms
generateSecretKey       5.41 µs/iter     184,911.2    (4.14 µs … 11.87 µs) 5.66 µs 9.56 µs 11.87 µs
getPublicKey          280.31 µs/iter       3,567.5  (247.83 µs … 504.9 µs) 255.97 µs 501.89 µs 504.9 µs
finalizeEvent         547.27 µs/iter       1,827.2 (505.12 µs … 943.38 µs) 517.83 µs 938.01 µs 943.38 µs
verifyEvent           438.35 µs/iter       2,281.3 (404.12 µs … 680.78 µs) 430.05 µs 657.13 µs 680.78 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rust-nostr.bench.ts
benchmark          time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
loadWasmAsync        164 ns/iter   6,097,561.0      (130 ns … 2.45 ms) 151 ns 351 ns 491 ns
generate          284.06 µs/iter       3,520.3 (275.99 µs … 874.38 µs) 279.17 µs 531.02 µs 551.49 µs
toEvent            171.4 µs/iter       5,834.2 (159.82 µs … 692.12 µs) 168.66 µs 336.07 µs 350.83 µs
verify            306.11 µs/iter       3,266.8 (277.64 µs … 704.53 µs) 297.59 µs 552.23 µs 590.85 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rx-nostr-crypto.bench.ts
benchmark                      time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------- -----------------------------
getPublicKey                  217.01 µs/iter       4,608.0  (194.3 µs … 944.92 µs) 207.19 µs 449.06 µs 478.66 µs
getEventHash                   10.01 µs/iter      99,920.1   (6.66 µs … 102.91 µs) 10.62 µs 25.66 µs 32.71 µs
getSignature                    1.93 ms/iter         517.6     (1.77 ms … 3.52 ms) 1.95 ms 3.23 ms 3.32 ms
seckeySigner                  204.63 µs/iter       4,886.7 (189.38 µs … 539.35 µs) 201.66 µs 316.84 µs 374.39 µs
seckeySigner.getPublicKey        594 ns/iter   1,683,501.7      (331 ns … 7.69 µs) 621 ns 2.29 µs 2.44 µs
seckeySigner.signEvent           1.9 ms/iter         525.8     (1.77 ms … 2.56 ms) 1.92 ms 2.41 ms 2.43 ms
verify                          1.46 ms/iter         685.2     (1.36 ms … 1.63 ms) 1.48 ms 1.62 ms 1.63 ms
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
