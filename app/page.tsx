import Link from "next/link";
import css from "./page.module.css";

export default function Home() {
  return (
    <main className={css.main}>
      <section className={css.hero}>
        <div className={css.heroContent}>
          <span className={css.badge}>Your personal workspace</span>

          <h1 className={css.title}>
            Capture ideas.
            <br />
            <span>Keep them organized.</span>
          </h1>

          <p className={css.description}>
            NoteHub helps you create, organize, and find your notes in one
            simple workspace.
          </p>

          <div className={css.actions}>
            <Link href="/sign-up" className={css.primaryButton}>
              Get started
            </Link>

            <Link href="/sign-in" className={css.secondaryButton}>
              Try demo
            </Link>
          </div>
        </div>
      </section>

      <section className={css.features}>
        <div className={css.feature}>
          <div className={css.icon}>✦</div>
          <h2>Create</h2>
          <p>
            Quickly capture ideas, tasks, and information you want to remember.
          </p>
        </div>

        <div className={css.feature}>
          <div className={css.icon}>⌕</div>
          <h2>Find</h2>
          <p>
            Search through your notes and find the information you need
            instantly.
          </p>
        </div>

        <div className={css.feature}>
          <div className={css.icon}>✓</div>
          <h2>Organize</h2>
          <p>
            Keep your workspace structured with tags and an easy-to-use
            interface.
          </p>
        </div>
      </section>
    </main>
  );
}
