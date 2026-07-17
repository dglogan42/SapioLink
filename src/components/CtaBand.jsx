import { useState } from 'react';
import Reveal from './Reveal';

export default function CtaBand() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setMessage('That doesn’t look like an email address yet.');
      return;
    }
    setMessage('Card filed. We’ll write when it’s your turn.');
    setEmail('');
  }

  return (
    <section className="cta-band" id="join">
      <div className="wrap">
        <div className="cta-inner">
          <Reveal>
            <span className="eyebrow">Join the catalogue</span>
            <h2>Leave your card.</h2>
            <p className="sub">
              We&apos;re letting people in slowly, in small batches, starting this year. Add your
              email and we&apos;ll send your first prompt when your turn comes.
            </p>
          </Reveal>
          <Reveal as="form" onSubmit={handleSubmit} noValidate>
            <div className="signup">
              <label htmlFor="email" className="visually-hidden">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@wherever.com"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">Request invite</button>
            </div>
            <p className="signup-note">
              No spam. No swiping, ever added later. One email, when it&apos;s your turn.
            </p>
            <p className="form-msg">{message}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
