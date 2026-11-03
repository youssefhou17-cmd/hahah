import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer id="contact" className="reference-footer">
      <div className="wrap reference-footer-wrap">
        <div className="max-w-6xl mx-auto flex justify-center gap-14 md:gap-20 lg:gap-32 xl:gap-44 reference-footer-grid">
          <div className="reference-footer-brand">
            <Link href="/#home" aria-label="GoSharkTV Home">
              <img
                src="/devices/coverpng.webp"
                alt="GoSharkTV Logo"
                className="h-12 w-auto shrink-0 object-contain reference-footer-logo"
                style={{ height: '90px', width: 'auto', flexShrink: 0, objectFit: 'contain', display: 'block' }}
              />
            </Link>
            <p className="reference-footer-address">
              788 W State St<br />
              El Centro, CA 92243<br />
              United States
            </p>
          </div>
          <div className="reference-footer-column">
            <h2>Useful Links</h2>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/dmca">DMCA</Link>
          </div>
          <div className="reference-footer-column">
            <h2>Community</h2>
            <a href="/blog">Blog</a>
            <a href="#contact">Instagram</a>
            <a href="#contact">YouTube</a>
            <a href="#contact">Reddit</a>
            <a href="#contact">TrustPilot</a>
          </div>
          <div className="reference-footer-column">
            <h2>Contact</h2>
            <a href="#contact">WhatsApp</a>
            <a href="mailto:support@gosharktv.com">support@gosharktv.com</a>
          </div>
        </div>
        <div className="reference-footer-bottom">Copyright © 2026 GoSharkTV All Rights Reserved</div>
      </div>
    </footer>
  );
}
