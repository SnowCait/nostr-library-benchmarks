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
new URL        413.81 ns/iter   2,416,567.5 (404.34 ns … 484.37 ns) 415.26 ns 471.87 ns 484.37 ns
JSON.parse      77.31 ns/iter  12,934,201.6  (64.11 ns … 135.12 ns) 78.59 ns 125.57 ns 125.9 ns


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/ndk.bench.ts
benchmark      time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------- -----------------------------
sign            2.39 ms/iter         418.7     (2.11 ms … 4.34 ms) 2.43 ms 4.02 ms 4.34 ms
isValid         1.62 ms/iter         616.5     (1.43 ms … 3.01 ms) 1.61 ms 2.62 ms 3.01 ms


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-tools.bench.ts
benchmark              time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------- -----------------------------
generateSecretKey       5.37 µs/iter     186,237.2     (5.24 µs … 6.37 µs) 5.34 µs 6.37 µs 6.37 µs
getPublicKey          218.03 µs/iter       4,586.5  (197.38 µs … 674.1 µs) 211.9 µs 415.81 µs 455.56 µs
getEventHash           12.57 µs/iter      79,522.9   (7.93 µs … 142.55 µs) 12.44 µs 49.03 µs 52.44 µs
finalizeEvent           2.23 ms/iter         448.2     (2.05 ms … 3.93 ms) 2.27 ms 3.5 ms 3.83 ms
verifyEvent             1.52 ms/iter         659.8     (1.38 ms … 2.86 ms) 1.54 ms 1.78 ms 2.86 ms
serializeEvent          2.49 µs/iter     401,123.1    (1.42 µs … 45.52 µs) 1.87 µs 26.03 µs 36.51 µs
JSON.stringify          3.27 µs/iter     306,184.9     (2.29 µs … 6.04 µs) 3.6 µs 4.9 µs 5.63 µs
JSON.parse               3.1 µs/iter     322,164.9    (2.11 µs … 18.68 µs) 3.28 µs 5.26 µs 6.13 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rust-nostr.bench.ts
benchmark          time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
loadWasmAsync        166 ns/iter   6,024,096.4       (130 ns … 3.6 ms) 160 ns 411 ns 511 ns
generate          284.16 µs/iter       3,519.2 (276.19 µs … 877.42 µs) 279.8 µs 530.42 µs 551.17 µs
toEvent           173.12 µs/iter       5,776.3 (161.14 µs … 686.97 µs) 169.46 µs 341.34 µs 353.01 µs
verify            304.69 µs/iter       3,282.0 (280.14 µs … 615.61 µs) 297.1 µs 552.56 µs 556.99 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rx-nostr-crypto.bench.ts
benchmark                      time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------- -----------------------------
getPublicKey                  216.11 µs/iter       4,627.2    (192.5 µs … 1.01 ms) 206.17 µs 461.29 µs 481.72 µs
getEventHash                    9.94 µs/iter     100,644.1   (6.51 µs … 155.41 µs) 10.46 µs 26.15 µs 48.77 µs
getSignature                    1.91 ms/iter         524.6     (1.73 ms … 3.63 ms) 1.95 ms 2.26 ms 2.27 ms
seckeySigner                  203.38 µs/iter       4,917.0 (189.49 µs … 457.37 µs) 201.39 µs 308.74 µs 322.41 µs
seckeySigner.getPublicKey        571 ns/iter   1,751,313.5     (310 ns … 34.57 µs) 581 ns 2.04 µs 2.2 µs
seckeySigner.signEvent           1.9 ms/iter         525.3     (1.76 ms … 3.08 ms) 1.93 ms 2.39 ms 2.61 ms
verify                          1.46 ms/iter         684.6     (1.34 ms … 2.35 ms) 1.49 ms 1.69 ms 2.35 ms
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
