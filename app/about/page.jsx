import Topbar from '../components/Topbar';
import SiteFooter from '../components/SiteFooter';
import VideoSlider from '../components/VideoSlider';

export const metadata = {
  title: 'About | GoSharkTV',
  description: 'Learn more about GoSharkTV: our story, mission, and what makes us different.'
};

const aboutStats = [
  ['20K+', 'Happy Customers'],
  ['55k+', 'Live Channels'],
  ['240K+', 'Movies and Series'],
  ['99.9%', 'Uptime']
];

const aboutOffers = [
  {
    icon: '/icons/tv%20icon.png',
    title: 'Live TV & Sports',
    text: '55,000+ international channels with every live match, league, and tournament in smooth HD and 4K quality.'
  },
  {
    icon: '/icons/play.png',
    title: 'Movies & Series',
    text: '240,000+ titles on demand: blockbusters, trending shows, and kids\' favorites, ready whenever you are.'
  },
  {
    icon: '/icons/Chip.png',
    title: 'Anti-Freeze 8.0',
    text: 'Our own technology built for buffer-free streaming, backed by a support team that never sleeps.'
  }
];

export default function About() {
  return (
    <>
      <Topbar />
      <main className="policy-page">
        <div className="wrap policy-page-wrap about-hero">
          <h1>Who We <span>Are</span></h1>
          <p className="policy-page-updated">About us</p>
          <p className="contact-hero-copy">GoSharkTV is a worldwide streaming provider built for people who want everything: live sports, movies, series, and channels in one smooth, freezing-free service.</p>
        </div>

        <div className="wrap">
          <div className="about-stats">
            {aboutStats.map(([value, label]) => (
              <div className="about-stat" key={label}>
                <strong className="faq-brand-gradient">{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="about-story">
          <div className="wrap">
            <VideoSlider />
          </div>
        </section>

        <section className="about-story-text">
          <div className="wrap">
            <h2 className="section-title">Our <span>Story</span></h2>
            <p className="section-intro about-copy">GoSharkTV started with a simple frustration: paying for a dozen services, still missing the big match, and watching everything freeze at the worst possible moment. So we built our own setup with strong servers, our Anti-Freeze 8.0 technology, and a catalog that covers absolutely everything from global football to local news and kids' shows. No adult content, no complicated apps, no freezing. Today, more than 20,000 customers stream with us on Smart TVs, Firestick, Android, iOS, and PCs, guided step-by-step by our 24/7 support team and covered by a 7-day money-back guarantee.</p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2 className="section-title">What We <span>Offer</span></h2>
            <p className="section-intro">Everything you need for total home entertainment, all in one subscription.</p>
            <div className="contact-cards">
              {aboutOffers.map(({ icon, title, text }) => (
                <article className="contact-card" key={title}>
                  <span className="contact-card-icon" aria-hidden="true"><img src={icon} alt="" style={{ display: 'block', width: '34px', height: '34px', objectFit: 'contain' }} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-cta"><div className="wrap support-cta-wrap"><h2>Join GoSharkTV The BEST<br />IPTV Service</h2><p>Stream thousands of live channels, movies, and sports with zero freezing. Simple setup, rock-solid stability<br className="support-cta-break" /> and ultimate entertainment for the whole family on any device.</p><a className="support-cta-button" href="/#pricing">Subscribe Now</a></div></section>
      </main>
      <SiteFooter />
    </>
  );
}