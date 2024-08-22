# Nostr library benchmarks

Benchmark Nostr libraries' functions.

## Benchamarks

Full log is [here](https://github.com/SnowCait/nostr-library-benchmarks/actions/runs/10505736826).

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
new URL        424.14 ns/iter   2,357,732.5  (410.7 ns … 614.16 ns) 425.36 ns 492.79 ns 614.16 ns
JSON.parse      74.29 ns/iter  13,460,553.6  (63.69 ns … 140.73 ns) 78.32 ns 108.07 ns 137.34 ns


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/ndk.bench.ts
benchmark      time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------- -----------------------------
sign            2.38 ms/iter         420.4      (2.14 ms … 4.5 ms) 2.36 ms 4.33 ms 4.5 ms
isValid          2.7 µs/iter     370,370.4      (1.96 µs … 4.7 µs) 2.96 µs 3.95 µs 4 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-tools.bench.ts
benchmark              time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------- -----------------------------
generateSecretKey       5.86 µs/iter     170,794.2   (4.79 µs … 497.59 µs) 5.36 µs 12.36 µs 14.41 µs
getPublicKey          218.75 µs/iter       4,571.4 (197.31 µs … 685.76 µs) 214.12 µs 418.16 µs 448.89 µs
getEventHash           12.64 µs/iter      79,120.2   (8.27 µs … 179.01 µs) 12.47 µs 72.87 µs 74.87 µs
finalizeEvent           2.21 ms/iter         452.7      (2.03 ms … 3.5 ms) 2.22 ms 3.46 ms 3.49 ms
verifyEvent              926 ns/iter   1,079,913.6      (411 ns … 7.65 µs) 1.03 µs 2.27 µs 5.2 µs
serializeEvent          2.35 µs/iter     424,808.8    (1.39 µs … 51.82 µs) 1.68 µs 37.4 µs 42.65 µs
JSON.stringify          3.38 µs/iter     295,508.3     (2.36 µs … 10.2 µs) 3.7 µs 5.99 µs 6.78 µs
JSON.parse              3.09 µs/iter     324,044.1     (2.12 µs … 9.12 µs) 3.34 µs 5.79 µs 7.7 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rust-nostr.bench.ts
benchmark      time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------- -----------------------------
generate      285.36 µs/iter       3,504.4   (276.02 µs … 2.07 ms) 280.56 µs 351.53 µs 622.88 µs
toEvent       169.74 µs/iter       5,891.5 (161.85 µs … 755.68 µs) 169.62 µs 208.73 µs 293.05 µs
verify        296.78 µs/iter       3,369.5 (280.85 µs … 600.37 µs) 297.67 µs 345.43 µs 365.6 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rx-nostr-crypto.bench.ts
benchmark                      time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------- -----------------------------
getPublicKey                  217.65 µs/iter       4,594.6 (195.49 µs … 781.41 µs) 209.83 µs 432.66 µs 468.56 µs
getEventHash                   10.15 µs/iter      98,531.9    (6.5 µs … 160.77 µs) 10.91 µs 25.49 µs 34.01 µs
getSignature                    1.95 ms/iter         512.6     (1.78 ms … 3.44 ms) 1.98 ms 3.13 ms 3.38 ms
seckeySigner                  206.06 µs/iter       4,853.0 (191.28 µs … 447.12 µs) 203.64 µs 332.68 µs 342.99 µs
seckeySigner.getPublicKey        610 ns/iter   1,639,344.3     (320 ns … 23.43 µs) 601 ns 2.54 µs 2.96 µs
seckeySigner.signEvent          1.92 ms/iter         520.3     (1.76 ms … 2.39 ms) 1.93 ms 2.38 ms 2.39 ms
verify                          1.47 ms/iter         680.5     (1.36 ms … 1.75 ms) 1.49 ms 1.71 ms 1.75 ms
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
