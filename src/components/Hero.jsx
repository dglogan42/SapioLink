import { useTypewriter } from '../hooks/useTypewriter';
import { useReducedMotion } from '../hooks/useReducedMotion';

const LETTER_TEXT =
  "I've been rereading your answer to the second question for twenty minutes now, mostly because I can't tell if you meant it as a joke or a confession. Either way, tell me more about—";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const { text, wordCount } = useTypewriter(LETTER_TEXT, reducedMotion);

  return (
    <section className="hero">
      <div>
        <span className="eyebrow">Correspondence, not swipes</span>
        <h1>
          Fall for the words
          <br />
          before the face.
        </h1>
        <p className="sub">
          SapioLink opens with a letter, not a photo. Reply well, and a face follows. No grid of
          thumbnails to judge in half a second — just one written answer, and the person who wrote
          it.
        </p>
        <div className="cta-row">
          <a className="btn-primary" href="#join">
            Request an invitation
          </a>
          <span className="fineprint">Currently admitting in small weekly batches</span>
        </div>
      </div>

      <div className="letter">
        <div className="letter-head">
          <span className="to">Dear Stranger,</span>
          <span className="meta">Prompt No. 214</span>
        </div>
        <div className="letter-body" aria-live="polite">
          {text}
          <span className="cursor" aria-hidden="true" />
        </div>
        <div className="letter-foot">
          <span>
            Draft · {wordCount} word{wordCount === 1 ? '' : 's'}
          </span>
          <span>Unsent</span>
        </div>
      </div>
    </section>
  );
}
