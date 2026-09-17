import Link from 'next/link';
import Image from 'next/image';
import ConceptForm from '../../components/websites/ConceptForm';
import SitePreview from '../../components/websites/SitePreview';
import headshotImage from '../../assets/images/profile/headshot.png';
import { websiteExamples, websiteOffer as offer, websiteCopy as copy, aeoOffer as aeo } from '../../config/websites';
import styles from './websites.module.css';
function Example({
  example
}) {
  return <article className={styles.example}>
    <SitePreview shots={example.shots} name={example.name} href={example.href} />
    <div className={styles.exampleTitle}>
      <h3>{example.name}</h3>
      <span>{example.category}</span>
    </div>
    <p className={styles.exampleLabel}>{example.label}</p>
    <p>{example.summary}</p>
    {(example.quote || example.reaction) && <figure className={styles.exampleQuote}>
      {example.quote
        ? <blockquote className={styles.verbatim}>{example.quote}</blockquote>
        : <p className={styles.paraphrase}>{example.reaction}</p>}
      <figcaption>
        {example.said_by || example.name}
        {!example.quote && <span>, paraphrased</span>}
      </figcaption>
    </figure>}
    <div className={styles.exampleFoot}>
      <a className={styles.exampleLink} href={example.href} target="_blank" rel="noopener noreferrer">
        Visit the site <span aria-hidden="true">↗</span>
      </a>
      <span className={styles.exampleStatus}>{example.status}</span>
    </div>
  </article>;
}

export default function WebsitesPage() {
  return <div className={styles.page}>
    <div className={styles.canvas} aria-hidden="true" />
    <div className={styles.container}>
      <nav className={styles.nav} aria-label="Page navigation">
        <Link href="/">Keshav Kunver<span> / Websites</span>
        </Link>
        <a href="#concept">Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <main>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Websites for local service businesses</p>
          <h1>{offer.headline}</h1>
          <div className={styles.heroBottom}>
            <p>{offer.intro}</p>
            <div className={styles.heroAction}>
              <a className={styles.button} href="#concept">Request a website concept <span aria-hidden="true">↗</span>
              </a>
              <p>Free, and I reply either way.</p>
            </div>
          </div>
          <div className={styles.offerLine}>
            <span>
              <strong>$1,300</strong> flat price</span>
            <span>Up to 5 pages</span>
            <span>{copy.buildSpeed}</span>
            <a href="#package">See what’s included <span aria-hidden="true">↓</span>
            </a>
          </div>
        </header>

        <section id="examples" className={styles.work} aria-labelledby="work-title">
          <h2 id="work-title" className={styles.srOnly}>Recent websites</h2>
          <div className={styles.gallery}>
            {websiteExamples.map(example => <Example key={example.id} example={example} />)}
            <a className={`${styles.invitation} ${websiteExamples.length % 2 === 0 ? styles.invitationWide : ''}`} href="#concept">
              <div className={styles.emptyFrame}>
                <span className={styles.plus} aria-hidden="true">+</span>
                <h3>Your website here.</h3>
                <p>{copy.invitationBody}</p>
                <span className={styles.invitationCta}>{copy.invitationCta} <span aria-hidden="true">↗</span>
                </span>
              </div>
              <div className={styles.invitationCaption}>{copy.invitationCaption}</div>
            </a>
          </div>
        </section>

        <section id="package" className={styles.package} aria-labelledby="package-title">
          <div>
            <p className={styles.eyebrow}>{copy.packageEyebrow}</p>
            <h2 id="package-title">{copy.packageTitle}</h2>
            <p className={styles.sectionCopy}>{copy.packageIntro}</p>
            <div className={styles.features}>{offer.features.map(([title, detail]) => <div key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>)}</div>
          </div>
          <aside className={styles.priceCard} aria-label="Website package pricing">
            <p>Design, build & launch</p>
            <div className={styles.price}>$1,300<span>one-time</span>
            </div>
            <p>{copy.priceDescription}</p>
            <div className={styles.payment}>
              <span>$500 to start</span>
              <span>$800 at launch</span>
            </div>
            <p className={styles.guarantee}>{copy.priceGuarantee}</p>
            <a className={styles.button} href="#concept">Request a website concept <span aria-hidden="true">↗</span>
            </a>
            <p className={styles.priceNote}>{copy.priceRunning}</p>
            <div className={styles.care}>
              <div>
                <h3>{copy.careTitle}</h3>
                <span>Optional</span>
              </div>
              <p className={styles.carePrice}>$99 <span>/ month</span>
              </p>
              <p>{copy.careBody}</p>
            </div>
          </aside>
        </section>

        <section className={styles.process} aria-labelledby="process-title">
          <div className={styles.sectionIntro}>
            <h2 id="process-title">{copy.processTitle}</h2>
            <p>{copy.processIntro}</p>
          </div>
          <ol>{offer.steps.map(([title, detail], i) => <li key={title}>
              <span className={styles.stepNumber}>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>)}</ol>
        </section>

        <section className={styles.about} aria-labelledby="about-title">
          <Image src={headshotImage} alt="Keshav Kunver" width={96} height={96} className={styles.portrait} />
          <div>
            <h2 id="about-title">{copy.aboutTitle}</h2>
            <p>{copy.aboutBody}</p>
          </div>
          <Link href="/#experience">More about me <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <h2 id="faq-title">{copy.faqTitle}</h2>
          <div>{offer.faqs.map(([question, answer]) => <details key={question}>
              <summary>{question}<span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>)}</div>
        </section>

        <section className={styles.aeo} aria-labelledby="aeo-title">
          <div className={styles.aeoBody}>
            <p className={styles.eyebrow}>{aeo.eyebrow}</p>
            <h2 id="aeo-title">{aeo.title}</h2>
            <p className={styles.aeoLede}>{aeo.body}</p>
            <p>{aeo.detail}</p>
            <p className={styles.aeoCaveat}>{aeo.caveat}</p>
          </div>
          <div className={styles.aeoAction}>
            {aeo.href ? <a className={styles.button} href={aeo.href}>{aeo.cta} <span aria-hidden="true">↗</span>
            </a> : <>
              <a className={styles.button} href="#concept">{aeo.ctaSoon} <span aria-hidden="true">↓</span>
              </a>
              <p className={styles.aeoSoon}>{aeo.soonNote}</p>
            </>}
          </div>
        </section>

        <section id="concept" className={styles.contact} aria-labelledby="concept-title">
          <div>
            <p className={styles.eyebrow}>{copy.contactEyebrow}</p>
            <h2 id="concept-title">{copy.contactTitle}</h2>
            <p>{copy.contactBody}</p>
            <p className={styles.email}>Prefer email?<br />
              <a href={`mailto:${offer.email}?subject=Website%20inquiry`}>{offer.email}</a>
            </p>
          </div>
          <div className={styles.form}>
            <ConceptForm />
          </div>
        </section>
      </main>
    </div>
  </div>;
}
