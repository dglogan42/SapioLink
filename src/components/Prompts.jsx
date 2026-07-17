import Reveal from './Reveal';

const PROMPTS = [
  { no: 'No. 118', q: 'What’s a belief you’ve quietly changed your mind about this year?' },
  {
    no: 'No. 152',
    q: 'Describe your last real argument with someone you love, from their side of it.',
  },
  { no: 'No. 187', q: 'What would you want a stranger to overhear you saying about yourself?' },
  {
    no: 'No. 214',
    q: 'Name the book, film, or song you’re embarrassed to admit rearranged you.',
  },
];

export default function Prompts() {
  return (
    <section className="prompts rule-top">
      <div className="wrap">
        <Reveal className="catalogue-heading">
          <span className="eyebrow">From this week&apos;s catalogue</span>
          <h2>A few of the questions currently in circulation</h2>
        </Reveal>
        <Reveal className="prompts-grid">
          {PROMPTS.map((prompt) => (
            <div className="prompt-card" key={prompt.no}>
              <span className="catno">{prompt.no}</span>
              <p className="q">&ldquo;{prompt.q}&rdquo;</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
