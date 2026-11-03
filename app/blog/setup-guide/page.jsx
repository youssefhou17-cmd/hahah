import Topbar from '../../components/Topbar';
import SiteFooter from '../../components/SiteFooter';

export const metadata = {
  title: 'Setup Guide | GoSharkTV Blog',
  description: 'Step-by-step guide to setup GoSharkTV on Smart TV, Firestick, Android, iOS, and PC in 5 minutes.'
};

export default function SetupGuide() {
  return (
    <>
      <Topbar />
      <main className="policy-page">
        <div className="wrap policy-page-wrap about-hero">
          <h1>How to Setup GoSharkTV on Any Device in 5 Minutes</h1>
          <p className="policy-page-updated">Oct 22, 2026 · 5 min read</p>
          <p className="contact-hero-copy">Step-by-step guide to installing GoSharkTV on Smart TV, Firestick, Android, iOS, and PC. Get streaming fast with our easy setup instructions and 24/7 support.</p>
        </div>

        <div className="wrap">
          <section className="blog-section">
            <article className="blog-article">
              <h2>Before You Start</h2>
              <p>Make sure you have an active GoSharkTV subscription and a stable internet connection (minimum 10 Mbps recommended for HD, 25 Mbps for 4K). Your login credentials will be sent to your email after purchase.</p>

              <h2>1. Smart TV (Samsung, LG, Hisense, Android TV)</h2>
              <p>Open your TV's app store and search for <strong>Smart IPTV</strong>, <strong>SS IPTV</strong>, or <strong>TiviMate</strong>. Install the app, open it, and enter your M3U playlist URL or Xtream Codes provided in your welcome email. Restart the app and your channels will load automatically.</p>

              <h2>2. Amazon Fire TV Stick</h2>
              <p>Go to Settings &gt; My Fire TV &gt; Developer Options and enable <em>Apps from Unknown Sources</em>. Use the Downloader app to install <strong>TiviMate</strong> or <strong>IPTV Smarters Pro</strong>. Open the app, enter your playlist URL or Xtream Codes, and you're ready to stream.</p>

              <h2>3. Android Phone &amp; Tablet</h2>
              <p>Download <strong>TiviMate</strong> or <strong>IPTV Smarters Pro</strong> from the Google Play Store. Open the app, tap <em>Add Playlist</em>, enter your M3U URL or Xtream Codes credentials, and your channel list will appear within seconds.</p>

              <h2>4. iPhone &amp; iPad</h2>
              <p>Download <strong>GSE Smart IPTV</strong> or <strong>IPTV Smarters Pro</strong> from the App Store. Open the app, add a new playlist using your M3U URL or Xtream Codes login, and start watching immediately.</p>

              <h2>5. PC (Windows &amp; Mac)</h2>
              <p>Download <strong>VLC Media Player</strong> or <strong>IPTV Smarters Pro</strong> for desktop. Open VLC, go to Media &gt; Open Network Stream, paste your M3U playlist URL, and click Play. All your channels will be available to watch.</p>

              <h2>Need Help?</h2>
              <p>If you get stuck at any step, our support team is available 24/7 via WhatsApp or email. We'll walk you through the setup personally until you're streaming.</p>

              <a href="/blog" className="blog-card-cta" style={{ marginTop: '24px' }}>← Back to Blog</a>
            </article>
          </section>
        </div>

        <section className="support-cta"><div className="wrap support-cta-wrap"><h2>Join GoSharkTV The BEST<br />IPTV Service</h2><p>Stream thousands of live channels, movies, and sports with zero freezing. Simple setup, rock-solid stability<br className="support-cta-break" /> and ultimate entertainment for the whole family on any device.</p><a className="support-cta-button" href="/#pricing">Subscribe Now</a></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
