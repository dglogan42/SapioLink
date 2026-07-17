import Reveal from './Reveal';

export default function Philosophy() {
  return (
    <section className="philosophy rule-top">
      <div className="wrap">
        <Reveal className="measure">
          <span className="eyebrow">The premise</span>
          <h2>Attraction isn&apos;t a photograph. It&apos;s a sentence you can&apos;t stop rereading.</h2>
          <p className="body">
            Most apps show you a face and ask you to decide in under a second. We think
            that&apos;s the wrong order. SapioLink opens with a question — occasionally strange,
            sometimes uncomfortable, always revealing — and shows you only the answer. No profile
            grid, no thumbnail to scroll past. Just the sentence someone wrote, alone, before they
            knew you&apos;d be the one reading it.
          </p>
          <p className="body">
            Photos aren&apos;t hidden forever. They&apos;re just not first. Once two people have
            actually exchanged something — not a bio, an <em>answer</em> — SapioLink asks,
            privately, whether you&apos;d both like to see who&apos;s been writing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
