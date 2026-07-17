import Reveal from './Reveal';

const ENTRIES = [
  {
    num: 'Entry No. 01',
    title: "Answer, don't perform",
    body: 'Each week brings one new prompt — not "favorite movie," but things closer to "what did you lie about to seem more interesting, and were you right." Write as much or as little as you want. Nothing about how you look attaches to it.',
  },
  {
    num: 'Entry No. 02',
    title: 'Read, then decide',
    body: "You receive one written answer at a time, blind. If it holds your attention, you reply in kind. If it doesn't, no harm done — there's no tally of rejections for either of you to see.",
  },
  {
    num: 'Entry No. 03',
    title: 'A mutual, timed reveal',
    body: "After four genuine replies each, SapioLink privately asks you both if you'd like to see a photo. Only if you both say yes does either face appear — never one-sided, never a surprise.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how rule-top">
      <div className="wrap">
        <Reveal className="catalogue-heading">
          <span className="eyebrow">How it works</span>
          <h2>Three entries, in order.</h2>
        </Reveal>
        <Reveal className="entries">
          {ENTRIES.map((entry) => (
            <div className="entry" key={entry.num}>
              <span className="num">{entry.num}</span>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
