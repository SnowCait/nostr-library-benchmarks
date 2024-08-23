using BenchmarkDotNet.Attributes;
using Nostr.Client.Keys;
using Nostr.Client.Messages;

public class NostrClient
{
    private NostrPrivateKey privateKey;
    private NostrEvent signedEvent;

    public NostrClient()
    {
        privateKey = NostrPrivateKey.GenerateNew();
        var unsignedEvent = new NostrEvent()
        {
            Kind = NostrKind.ShortTextNote,
            Content = ""
        };
        signedEvent = unsignedEvent.Sign(privateKey);
    }

    [Benchmark]
    public void GenerateNew()
    {
        NostrPrivateKey.GenerateNew();
    }

    [Benchmark]
    public void Sign()
    {
        var unsignedEvent = new NostrEvent()
        {
            Kind = NostrKind.ShortTextNote,
            Content = "",
            CreatedAt = DateTime.UtcNow
        };
        unsignedEvent.Sign(privateKey);
    }

    [Benchmark]
    public void IsSignatureValid()
    {
        signedEvent.IsSignatureValid();
    }
}