using BenchmarkDotNet.Running;

BenchmarkRunner.Run<NostrClient>();
BenchmarkRunner.Run<NNostrClient>();
