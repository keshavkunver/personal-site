'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { websiteExamples, websiteShowcase as copy } from '../../config/websites';
import styles from './WebsiteShowcase.module.css';

const MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const subscribe = callback => {
  const query = window.matchMedia(MOTION_QUERY);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};
const getReduced = () => window.matchMedia(MOTION_QUERY).matches;
const subscribeCompact = callback => {
  const query = window.matchMedia('(max-width: 767px)');
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};
const getCompact = () => window.matchMedia('(max-width: 767px)').matches;

export default function WebsiteShowcase() {
  const [projectIndex, setProjectIndex] = useState(() => copy.projects.findIndex(project => project.film));
  const [filmSelected, setFilmSelected] = useState(true);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [playPreference, setPlaying] = useState(null);
  const [visible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [mobilePlaybackEnabled, setMobilePlaybackEnabled] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const root = useRef(null);
  const video = useRef(null);
  const reduced = useSyncExternalStore(subscribe, getReduced, () => true);
  const compact = useSyncExternalStore(subscribeCompact, getCompact, () => true);
  const playing = playPreference ?? !compact;
  const project = copy.projects[projectIndex];
  const example = websiteExamples.find(item => item.id === project.id);
  const scene = project.scenes[sceneIndex];
  const filmActive = Boolean(filmSelected && project.film && !reduced);
  const running = playing && visible && tabVisible && !reduced;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setHasBeenVisible(true);
    }, { threshold: 0.25 });
    observer.observe(root.current);
    const update = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', update);
    update();
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); };
  }, []);

  const shouldLoadVideo = hasBeenVisible && !reduced && (!compact || mobilePlaybackEnabled);
  useEffect(() => {
    if (running && shouldLoadVideo) video.current?.play().catch(() => {});
    else video.current?.pause();
  }, [running, shouldLoadVideo, filmActive, compact]);

  useEffect(() => {
    if (!running || filmActive) return;
    const timer = setInterval(() => setSceneIndex(index => (index + 1) % project.scenes.length), 6500);
    return () => clearInterval(timer);
  }, [running, filmActive, project.scenes.length, projectIndex, sceneIndex]);

  const selectProject = index => { setProjectIndex(index); setSceneIndex(0); setFilmSelected(true); setPlaying(false); };
  const selectScene = index => { setSceneIndex(index); setFilmSelected(false); setPlaying(false); };
  const playFilm = () => {
    if (filmActive && video.current) video.current.currentTime = 0;
    setFilmSelected(true);
    setMobilePlaybackEnabled(true);
    setPlaying(true);
  };
  const togglePlay = () => {
    if (!playing) setMobilePlaybackEnabled(true);
    setPlaying(!playing);
  };
  const finishFilm = () => { setFilmSelected(false); setSceneIndex(0); setPlaying(false); };

  return (
    <section ref={root} className={styles.showcase} aria-labelledby="showcase-title">
      <div className={styles.heading}>
        <h2 id="showcase-title">{copy.title}</h2>
      </div>
      <div className={styles.projectPicker} role="group" aria-label="Choose a website">
        {copy.projects.map((item, index) => {
          const site = websiteExamples.find(example => example.id === item.id);
          return <button key={item.id} type="button" aria-pressed={index === projectIndex} onClick={() => selectProject(index)}>
            <span>{site.name}</span>
          </button>;
        })}
      </div>
      <div className={styles.theater} data-running={running}>
        <div className={styles.light} aria-hidden="true" />
        <video key={filmActive ? "film" : "backdrop"} ref={video} className={filmActive ? styles.film : styles.backdrop} src={shouldLoadVideo ? (filmActive ? project.film[compact ? 'mobile' : 'desktop'] : '/work/showcase/studio-light.mp4') : undefined} poster={filmActive ? project.film[compact ? 'mobilePoster' : 'poster'] : '/work/showcase/studio-light.webp'} onEnded={filmActive ? finishFilm : undefined} muted loop={!filmActive} playsInline preload="none" aria-hidden="true" />
        {!filmActive && <>
        <div className={styles.devices}>
          <div className={styles.desktop}>
            <div className={styles.browser} aria-hidden="true"><span /><span /><span /><i>{new URL(example.href).hostname.replace('www.', '')}</i></div>
            <div className={styles.desktopScreen}>
              <Image key={`${project.id}-${scene.id}-desktop`} src={`/work/showcase/${project.id}/${scene.id}-desktop.webp`} width={1440} height={960} alt={`${example.name}: ${scene.label}, desktop view`} sizes="(max-width: 767px) 82vw, (max-width: 1248px) 68vw, 850px" className={styles.screenImage} />
            </div>
          </div>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <Image key={`${project.id}-${scene.id}-phone`} src={`/work/showcase/${project.id}/${scene.id}-phone.webp`} width={390} height={844} alt={`${example.name}: ${scene.label}, mobile view`} sizes="(max-width: 767px) 30vw, 220px" className={styles.screenImage} />
            </div>
            <div className={styles.homeIndicator} aria-hidden="true" />
          </div>
        </div>
        </>}
      </div>
      <div className={styles.controls}>
        <div className={styles.chapters} role="group" aria-label={`${example.name} walkthrough chapters`}>
          {project.film && !reduced && <button type="button" onClick={playFilm} aria-pressed={filmActive}>{copy.film}</button>}
          {project.scenes.map((item, index) => <button key={item.id} type="button" onClick={() => selectScene(index)} aria-pressed={!filmActive && index === sceneIndex}>
            {item.label}
          </button>)}
        </div>
        <div className={styles.actions}>
        {!reduced && <button className={styles.play} type="button" onClick={togglePlay} aria-pressed={playing}>
          <span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span>{playing ? copy.pause : copy.play}
        </button>}
        <a href={example.href} target="_blank" rel="noopener noreferrer">{copy.visit} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
