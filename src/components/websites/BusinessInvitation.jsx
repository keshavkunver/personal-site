'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { businessInvitation as copy } from '../../config/websites';
import styles from './BusinessInvitation.module.css';

const subscribe = callback => {
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};
const reducedSnapshot = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function BusinessInvitation({ className = '' }) {
  const root = useRef(null);
  const video = useRef(null);
  const elapsed = useRef(0);
  const [selection, setSelection] = useState([0, 4, 5]);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [framed, setFramed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const reduced = useSyncExternalStore(subscribe, reducedSnapshot, () => true);
  const done = step === 3;
  const scene = copy.scenes[selection[Math.min(step, 2)]];
  const running = playing && visible && tabVisible && !reduced && !done;

  useEffect(() => {
    let initialized = false;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (!entry.isIntersecting || initialized) return;
      initialized = true;
      // Three distinct concepts per visit, without tracking or browser storage.
      const choices = copy.scenes.map((_, index) => index);
      for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
      }
      setSelection(choices.slice(0, 3));
      const connection = navigator.connection;
      const autoplay = !matchMedia('(max-width: 767px)').matches && !connection?.saveData && !/(^|-)2g$/.test(connection?.effectiveType || '');
      setPlaying(autoplay);
      setLoaded(autoplay);
    }, { threshold: 0.35 });
    observer.observe(root.current);
    const visibility = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', visibility);
    visibility();
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, []);

  useEffect(() => {
    if (running && loaded) video.current?.play().catch(() => setPlaying(false));
    else video.current?.pause();
  }, [running, loaded, step]);

  useEffect(() => {
    if (!running) return;
    let frame;
    let last = performance.now();
    const tick = now => {
      elapsed.current += Math.min(now - last, 100);
      last = now;
      const nextStep = Math.min(3, Math.floor(elapsed.current / 5000));
      setStep(nextStep);
      setFramed(elapsed.current % 5000 >= 1100);
      if (nextStep < 3) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running]);

  const toggle = () => {
    setLoaded(true);
    if (done) {
      elapsed.current = 0;
      setStep(0);
      setFramed(false);
      setPlaying(true);
    } else setPlaying(value => !value);
  };

  return <article id="your-website" ref={root} className={`${styles.invitation} ${className}`} aria-label={copy.label} data-business-invitation data-step={step}>
    <div className={styles.stage} data-theme={scene.theme} data-framed={framed} data-done={done || reduced}>
      {!reduced && <div key={scene.id} className={styles.concept} aria-hidden="true">
        <div className={styles.navigation}><span>{scene.name}</span><span className={styles.menu}>☰</span></div>
        <div className={styles.copy}><strong>{scene.headline}</strong><span className={styles.mockButton}>{scene.action}</span></div>
        <video ref={video} className={styles.scene} src={loaded ? `/work/invitation/${scene.id}.mp4` : undefined} poster={`/work/invitation/${scene.id}.jpg`} muted playsInline preload="none" onError={() => setPlaying(false)} />
        <div className={styles.rule} />
      </div>}
      <div className={styles.ending}>
        <span className={styles.cursor} aria-hidden="true">+</span>
        <h3>{copy.title}</h3>
      </div>
    </div>
    <div className={styles.footer}>
      <a href="#concept">{copy.cta} <span aria-hidden="true">↗</span></a>
      {!reduced && <button type="button" onClick={toggle} aria-label={done ? copy.replayLabel : playing ? copy.pauseLabel : copy.playLabel}>{done ? copy.replay : playing ? copy.pause : copy.play}</button>}
    </div>
  </article>;
}
