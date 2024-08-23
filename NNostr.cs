using BenchmarkDotNet.Attributes;
using NBitcoin;
using NBitcoin.Secp256k1;
using NNostr.Client;

public class NNostrClient
{
    private ECPrivKey privateKey;
    private NostrEvent? signedEvent;

    public NNostrClient()
    {
        privateKey = ECPrivKey.Create(RandomUtils.GetBytes(32));
    }

    [GlobalSetup]
    public async Task Setup()
    {
        var unsignedEvent = new NostrEvent()
        {
            Kind = 1,
            Content = ""
        };
        signedEvent = await unsignedEvent.ComputeIdAndSignAsync(privateKey);
    }

    [Benchmark]
    public void Create()
    {
        ECPrivKey.Create(RandomUtils.GetBytes(32));
    }

    [Benchmark]
    public async Task ComputeIdAndSignAsync()
    {
        var unsignedEvent = new NostrEvent()
        {
            Kind = 1,
            Content = ""
        };
        await unsignedEvent.ComputeIdAndSignAsync(privateKey);
    }

    [Benchmark]
    public void Verify()
    {
        if (signedEvent == null)
        {
            throw new Exception();
        }
        signedEvent.Verify();
    }
}