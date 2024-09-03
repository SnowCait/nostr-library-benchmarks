#![feature(test)]

extern crate test;

fn main() {}

#[cfg(test)]
mod tests {
    use nostr::{event::EventBuilder, key::Keys};
    use test::Bencher;

    #[bench]
    fn bench_generate(b: &mut Bencher) {
        b.iter(|| Keys::generate());
    }

    #[bench]
    fn bench_to_event(b: &mut Bencher) {
        let keys = Keys::generate();
        b.iter(|| EventBuilder::text_note("", []).to_event(&keys));
    }

    #[bench]
    fn bench_verify(b: &mut Bencher) -> Result<(), Box<dyn std::error::Error>> {
        let keys = Keys::generate();
        let event = EventBuilder::text_note("", []).to_event(&keys)?;
        b.iter(|| event.verify());
        Ok(())
    }
}
