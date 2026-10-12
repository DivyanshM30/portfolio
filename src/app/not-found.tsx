import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page container">
      <header className="not-found-header">
        <Link className="logo" href="/" aria-label="Divyansh Mishra home">dm<span>®</span></Link>
        <span className="eyebrow">A SMALL DETOUR</span>
      </header>
      <main id="main-content" className="not-found-main">
        <div className="not-found-art" aria-hidden="true">
          <span>4</span><span className="not-found-orbit">✳</span><span>4</span>
        </div>
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>A little lost.<br /><em>Still curious?</em></h1>
        <p className="not-found-description">This page may have moved, or the link took a wrong turn. There’s plenty to explore back at home.</p>
        <div className="not-found-actions">
          <Link href="/" className="button primary">Back to home <span aria-hidden="true">↗</span></Link>
          <Link href="/#projects" className="text-link">Explore my work <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
      <footer className="not-found-footer"><span>DIVYANSH MISHRA</span><span>Good things are a click away.</span></footer>
    </div>
  );
}
