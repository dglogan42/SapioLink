import { useEffect, useState } from 'react';

const STEP_CHARS = 2;
const STEP_DELAY_MS = 28;
const START_DELAY_MS = 500;

export function useTypewriter(fullText, reducedMotion) {
  const [text, setText] = useState(reducedMotion ? fullText : '');
  const [done, setDone] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setText(fullText);
      setDone(true);
      return;
    }

    setText('');
    setDone(false);
    let i = 0;
    let timeoutId;

    const tick = () => {
      i += STEP_CHARS;
      if (i >= fullText.length) {
        setText(fullText);
        setDone(true);
        return;
      }
      setText(fullText.slice(0, i));
      timeoutId = setTimeout(tick, STEP_DELAY_MS);
    };

    timeoutId = setTimeout(tick, START_DELAY_MS);
    return () => clearTimeout(timeoutId);
  }, [fullText, reducedMotion]);

  const wordCount = text.trim().length ? text.trim().split(/\s+/).length : 0;

  return { text, done, wordCount };
}
