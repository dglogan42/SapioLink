import Reveal from './Reveal';

export default function Testimonial() {
  return (
    <section className="testimonial-section rule-top">
      <div className="wrap">
        <Reveal className="testimonial">
          <div className="bar" />
          <div>
            <blockquote>
              &ldquo;By the time I saw a photo of him, I already knew he apologizes to furniture
              when he bumps into it. The picture just confirmed it.&rdquo;
            </blockquote>
            <cite>— M., matched over eleven letters</cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
