import Topbar from '../components/Topbar';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Blog | GoSharkTV',
  description: 'Latest news, guides, and tips about GoSharkTV IPTV streaming service.'
};

const blogArticles = [
  {
    image: '/devices/coverpng.webp',
    title: 'How to Setup GoSharkTV on Any Device in 5 Minutes',
    date: 'Oct 22, 2026',
    readTime: '5 min read',
    excerpt: 'Step-by-step guide to installing GoSharkTV on Smart TV, Firestick, Android, iOS, and PC. Get streaming fast with our easy setup instructions and 24/7 support.'
  },
  {
    image: '/icons/tv icon.webp',
    title: 'Best Sports Channels to Watch on GoSharkTV in 2026',
    date: 'Oct 18, 2026',
    readTime: '4 min read',
    excerpt: 'From live football to Basketball, Boxing, College football, and cricket — discover the top sports channels available on GoSharkTV and never miss a match again.'
  }
];

export default function Blog() {
  return (
    <>
      <Topbar />
      <main className="policy-page">
        <div className="wrap policy-page-wrap about-hero">
          <h1>GoSharkTV <span>Blog</span></h1>
          <p className="policy-page-updated">Latest news & guides</p>
          <p className="contact-hero-copy">Stay updated with the latest streaming tips, setup guides, channel recommendations, and everything IPTV from the GoSharkTV team.</p>
        </div>

        <div className="wrap">
          <section className="blog-section">
            <div className="blog-grid">
              {blogArticles.map((article) => (
                <article key={article.title} className="blog-card">
                  <span className="blog-card-image" aria-hidden="true">
                    <img src={article.image} alt={article.title} style={{ display: 'block', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                  </span>
                  <div className="blog-card-content">
                    <span className="blog-card-meta">{article.date} · {article.readTime}</span>
                    <h3 className="blog-card-title">{article.title}</h3>
                    <p className="blog-card-excerpt">{article.excerpt}</p>
                    <a className="blog-card-cta">Read more →</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="support-cta"><div className="wrap support-cta-wrap"><h2>Join GoSharkTV The BEST<br />IPTV Service</h2><p>Stream thousands of live channels, movies, and sports with zero freezing. Simple setup, rock-solid stability<br className="support-cta-break" /> and ultimate entertainment for the whole family on any device.</p><a className="support-cta-button" href="/#pricing">Subscribe Now</a></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
