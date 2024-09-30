# Nostr library benchmarks

Benchmark Nostr libraries' functions.

## Benchamarks

Full log is
[here](https://github.com/SnowCait/nostr-library-benchmarks/actions/workflows/benchmark.yml).

### TypeScript (JavaScript)

Install [Deno](https://deno.com/).

```
deno bench
```

If you want to run NDK benchmark, add `--allow-env` flag at your own risk.

```
cpu: AMD EPYC 7763 64-Core Processor
runtime: deno 1.46.1 (x86_64-unknown-linux-gnu)

file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/javascript-api.bench.ts
benchmark       time (avg)        iter/s             (min … max)       p75       p99      p995
---------------------------------------------------------------- -----------------------------
new URL        432.83 ns/iter   2,310,397.6 (423.28 ns … 512.93 ns) 432.62 ns 499.58 ns 512.93 ns
JSON.parse      74.57 ns/iter  13,409,712.1   (64.3 ns … 113.94 ns) 78.48 ns 88.02 ns 103.46 ns


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/ndk.bench.ts
benchmark            time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------- -----------------------------
sign                   2.4 ms/iter         416.7     (2.12 ms … 4.45 ms) 2.33 ms 4.25 ms 4.45 ms
verifySignature       1.58 ms/iter         631.8     (1.37 ms … 2.62 ms) 1.58 ms 2.55 ms 2.62 ms


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-tools.bench.ts
benchmark              time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------- -----------------------------
generateSecretKey       5.31 µs/iter     188,153.2       (5.2 µs … 6.5 µs) 5.26 µs 6.5 µs 6.5 µs
getPublicKey          216.93 µs/iter       4,609.8 (194.46 µs … 684.54 µs) 209.98 µs 418.55 µs 443.42 µs
getEventHash           11.88 µs/iter      84,210.5   (7.84 µs … 115.93 µs) 11.78 µs 45.55 µs 48.75 µs
finalizeEvent           2.18 ms/iter         459.5     (2.02 ms … 4.13 ms) 2.22 ms 2.48 ms 2.74 ms
verifyEvent              1.5 ms/iter         665.3     (1.34 ms … 2.74 ms) 1.53 ms 2.63 ms 2.74 ms
serializeEvent           2.5 µs/iter     399,680.3    (1.47 µs … 55.84 µs) 1.8 µs 30.73 µs 38.86 µs
JSON.stringify          2.98 µs/iter     336,134.5    (2.13 µs … 13.76 µs) 3.17 µs 5.09 µs 7.32 µs
JSON.parse              3.06 µs/iter     327,011.1     (2.13 µs … 5.79 µs) 3.33 µs 5.01 µs 5.69 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-wasm.bench.ts
benchmark              time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------- -----------------------------
initNostrWasm           4.34 ms/iter         230.5     (3.71 ms … 6.68 ms) 4.82 ms 6.46 ms 6.68 ms
generateSecretKey       6.95 µs/iter     143,843.5    (4.36 µs … 15.51 µs) 8.09 µs 14.37 µs 15.51 µs
getPublicKey          269.97 µs/iter       3,704.1 (249.15 µs … 477.06 µs) 258.67 µs 471.21 µs 477.06 µs
finalizeEvent         550.54 µs/iter       1,816.4 (505.98 µs … 991.73 µs) 528.5 µs 963.13 µs 991.73 µs
verifyEvent           445.97 µs/iter       2,242.3 (403.17 µs … 747.47 µs) 438.43 µs 733.18 µs 747.47 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rust-nostr.bench.ts
benchmark                 time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------------- -----------------------------
loadWasmSync                 81 ns/iter  12,345,679.0     (69 ns … 348.82 µs) 80 ns 100 ns 110 ns
loadWasmAsync            147.82 ns/iter   6,765,030.5 (131.05 ns … 449.62 ns) 139.94 ns 424.75 ns 437.21 ns
generate                 279.87 µs/iter       3,573.1 (275.96 µs … 857.11 µs) 278.62 µs 308.26 µs 326.1 µs
toEvent                  168.57 µs/iter       5,932.1 (160.23 µs … 686.08 µs) 168.53 µs 245.11 µs 302.42 µs
verify                   296.11 µs/iter       3,377.1 (272.72 µs … 636.44 µs) 297.44 µs 351.72 µs 364.9 µs
verify with fromJson     368.76 µs/iter       2,711.8 (344.42 µs … 676.96 µs) 365.1 µs 646.1 µs 676.96 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rx-nostr-crypto.bench.ts
benchmark                      time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------- -----------------------------
getPublicKey                  212.72 µs/iter       4,701.1 (193.31 µs … 687.51 µs) 205.29 µs 414.55 µs 436.44 µs
getEventHash                    9.45 µs/iter     105,786.5     (6.5 µs … 63.56 µs) 10.22 µs 22.74 µs 25.47 µs
getSignature                    1.93 ms/iter         518.2     (1.75 ms … 3.41 ms) 1.95 ms 2.93 ms 3.35 ms
seckeySigner                  206.62 µs/iter       4,839.8 (189.22 µs … 520.19 µs) 200.9 µs 365.22 µs 380.39 µs
seckeySigner.getPublicKey        556 ns/iter   1,798,561.2      (301 ns … 3.67 µs) 581 ns 2.38 µs 2.67 µs
seckeySigner.signEvent          1.88 ms/iter         532.9     (1.75 ms … 2.28 ms) 1.9 ms 2.04 ms 2.05 ms
verify                          1.46 ms/iter         685.6     (1.33 ms … 2.56 ms) 1.47 ms 2.01 ms 2.56 ms
```

### Go

Install [Go](https://go.dev/).

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

### C#

Install [.NET SDK](https://dotnet.microsoft.com/).

```
dotnet run --configuration Release
```

```
BenchmarkDotNet v0.14.0, Ubuntu 22.04.4 LTS (Jammy Jellyfish)
AMD EPYC 7763, 1 CPU, 4 logical and 2 physical cores
.NET SDK 8.0.401
  [Host]     : .NET 8.0.8 (8.0.824.36612), X64 RyuJIT AVX2
  DefaultJob : .NET 8.0.8 (8.0.824.36612), X64 RyuJIT AVX2


| Method           | Mean       | Error     | StdDev    |
|----------------- |-----------:|----------:|----------:|
| GenerateNew      |   6.056 us | 0.0345 us | 0.0306 us |
| Sign             | 676.871 us | 1.5098 us | 1.4123 us |
| IsSignatureValid | 269.284 us | 0.9796 us | 0.9163 us |


| Method                | Mean       | Error     | StdDev    |
|---------------------- |-----------:|----------:|----------:|
| Create                |   3.258 us | 0.0221 us | 0.0196 us |
| ComputeIdAndSignAsync | 632.257 us | 1.3908 us | 1.3009 us |
| Verify                | 268.171 us | 0.6488 us | 0.6069 us |
```

### Rust

Install [Rust](https://www.rust-lang.org/) and
[Build Tools](https://visualstudio.microsoft.com/ja/visual-cpp-build-tools/).

Add PATH of clang if needed.

```
rustup install nightly
```

```
cargo +nightly bench
```

```
     Running unittests rust-nostr.rs (target/release/deps/rust_nostr-7308c1fac91d5fd8)
running 3 tests
test tests::bench_generate ... bench:      48,993.31 ns/iter (+/- 539.17)
test tests::bench_to_event ... bench:      28,504.62 ns/iter (+/- 353.35)
test tests::bench_verify   ... bench:      37,940.99 ns/iter (+/- 345.95)
test result: ok. 0 passed; 0 failed; 0 ignored; 3 measured; 0 filtered out; finished in 0.63s
```

## Other benchmarks

See [wiki](https://github.com/SnowCait/nostr-library-benchmarks/wiki)

## Contribution

Welcome pull requests to add libraries or functions.
