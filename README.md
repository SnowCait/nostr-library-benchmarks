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
    CPU | AMD EPYC 7763 64-Core Processor
Runtime | Deno 1.46.3 (x86_64-unknown-linux-gnu)

file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/javascript-api.bench.ts

benchmark    time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------ ----------------------------- --------------------- --------------------------
new URL             447.8 ns     2,233,000 (429.9 ns … 676.9 ns) 444.1 ns 604.2 ns 676.9 ns
JSON.parse           67.2 ns    14,890,000 ( 62.7 ns … 111.3 ns)  66.8 ns  88.7 ns  96.9 ns


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/ndk.bench.ts

benchmark         time/iter (avg)        iter/s      (min … max)           p75      p99     p995
----------------- ----------------------------- --------------------- --------------------------
sign                       2.5 ms         404.4 (  2.2 ms …   4.5 ms)   2.5 ms   4.2 ms   4.5 ms
verifySignature            1.6 ms         612.8 (  1.5 ms …   2.7 ms)   1.6 ms   2.7 ms   2.7 ms


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-tools.bench.ts

benchmark           time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------------- ----------------------------- --------------------- --------------------------
generateSecretKey            5.6 µs       179,500 (  4.7 µs …   1.0 ms)   5.4 µs  12.3 µs  15.2 µs
getPublicKey               228.0 µs         4,386 (197.9 µs …   1.0 ms) 224.7 µs 441.0 µs 477.9 µs
getEventHash                13.2 µs        75,980 (  7.3 µs … 168.7 µs)  13.2 µs  57.7 µs  60.4 µs
finalizeEvent                2.3 ms         432.1 (  2.1 ms …   6.2 ms)   2.3 ms   4.5 ms   5.1 ms
verifyEvent                  1.5 ms         655.8 (  1.4 ms …   2.9 ms)   1.5 ms   2.4 ms   2.9 ms
serializeEvent               2.6 µs       382,800 (  1.5 µs …  49.0 µs)   2.0 µs  32.9 µs  34.7 µs
JSON.stringify               3.6 µs       280,300 (  2.6 µs …   6.0 µs)   3.9 µs   5.6 µs   5.7 µs
JSON.parse                   3.4 µs       293,000 (  2.5 µs …  13.1 µs)   3.8 µs   5.7 µs   6.8 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostr-wasm.bench.ts

benchmark           time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------------- ----------------------------- --------------------- --------------------------
initNostrWasm                5.5 ms         180.3 (  4.8 ms …   9.4 ms)   6.1 ms   8.4 ms   9.4 ms
generateSecretKey            6.9 µs       145,400 (  4.9 µs …  11.0 µs)   7.6 µs  10.7 µs  11.0 µs
getPublicKey               260.6 µs         3,837 (241.6 µs … 453.8 µs) 257.1 µs 453.8 µs 453.8 µs
finalizeEvent              536.4 µs         1,864 (496.4 µs … 902.6 µs) 524.6 µs 902.6 µs 902.6 µs
verifyEvent                442.0 µs         2,262 (396.3 µs … 762.6 µs) 432.0 µs 762.6 µs 762.6 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/nostrify.bench.ts

benchmark      time/iter (avg)        iter/s      (min … max)           p75      p99     p995
-------------- ----------------------------- --------------------- --------------------------
NSecSigner             98.0 ns    10,200,000 ( 69.0 ns …  77.8 µs)  81.0 ns 350.0 ns 592.0 ns
getPublicKey          226.9 µs         4,407 (201.3 µs …   1.0 ms) 223.9 µs 459.8 µs 495.7 µs
signEvent               2.3 ms         427.8 (  2.1 ms …   4.4 ms)   2.3 ms   4.2 ms   4.3 ms


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rust-nostr.bench.ts

benchmark              time/iter (avg)        iter/s      (min … max)           p75      p99     p995
---------------------- ----------------------------- --------------------- --------------------------
loadWasmSync                   82.0 ns    12,200,000 ( 69.0 ns … 128.1 µs)  80.0 ns 100.0 ns 111.0 ns
loadWasmAsync                 147.0 ns     6,803,000 (134.2 ns … 658.7 ns) 144.5 ns 406.9 ns 472.3 ns
generate                      277.2 µs         3,607 (264.0 µs … 863.4 µs) 275.5 µs 504.3 µs 523.8 µs
toEvent                       168.0 µs         5,953 (155.9 µs … 705.4 µs) 170.2 µs 308.4 µs 341.9 µs
verify                        285.2 µs         3,507 (265.6 µs … 363.6 µs) 289.7 µs 322.7 µs 351.9 µs
verify with fromJson          368.7 µs         2,712 (335.6 µs … 882.1 µs) 365.5 µs 698.0 µs 882.1 µs


file:///home/runner/work/nostr-library-benchmarks/nostr-library-benchmarks/rx-nostr-crypto.bench.ts

benchmark                   time/iter (avg)        iter/s      (min … max)           p75      p99     p995
--------------------------- ----------------------------- --------------------- --------------------------
getPublicKey                       221.7 µs         4,511 (194.3 µs …   1.3 ms) 217.2 µs 463.8 µs 497.6 µs
getEventHash                         9.7 µs       103,000 (  5.6 µs …  75.0 µs)  10.5 µs  27.7 µs  33.3 µs
getSignature                         1.9 ms         518.3 (  1.8 ms …   3.5 ms)   1.9 ms   3.4 ms   3.4 ms
seckeySigner                       209.4 µs         4,775 (192.3 µs … 589.2 µs) 208.4 µs 385.9 µs 400.0 µs
seckeySigner.getPublicKey          722.0 ns     1,385,000 (350.0 ns …  27.3 µs) 731.0 ns   2.7 µs   3.2 µs
seckeySigner.signEvent               1.9 ms         526.8 (  1.8 ms …   2.2 ms)   1.9 ms   2.1 ms   2.1 ms
verify                               1.5 ms         678.1 (  1.3 ms …   2.7 ms)   1.5 ms   1.6 ms   2.7 ms
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
