package main

import (
	"testing"

	"github.com/nbd-wtf/go-nostr"
)

func BenchmarkGeneratePrivateKey(b *testing.B) {
	for range b.N {
		nostr.GeneratePrivateKey()
	}
}

func BenchmarkGetPublicKey(b *testing.B) {
	seckey := nostr.GeneratePrivateKey()

	b.ResetTimer()

	for range b.N {
		nostr.GetPublicKey(seckey)
	}
}

func BenchmarkSign(b *testing.B) {
	seckey := nostr.GeneratePrivateKey()

	b.ResetTimer()

	for range b.N {
		ev := nostr.Event{
			Kind:      nostr.KindTextNote,
			Tags:      nil,
			Content:   "",
			CreatedAt: 0,
		}
		ev.Sign(seckey)
	}
}

func BenchmarkVerify(b *testing.B) {
	seckey := nostr.GeneratePrivateKey()
	ev := nostr.Event{
		Kind:      nostr.KindTextNote,
		Tags:      nil,
		Content:   "",
		CreatedAt: 0,
	}
	ev.Sign(seckey)

	b.ResetTimer()

	for range b.N {
		ev.CheckSignature()
	}
}
