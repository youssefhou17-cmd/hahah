import Link from 'next/link';

export default function SiteFooter() {
  return (
      <footer id="contact" className="reference-footer"><div className="wrap reference-footer-wrap"><div className="reference-footer-grid"><div className="reference-footer-column"><h2>Useful Links</h2><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/refund-policy">Refund Policy</Link><Link href="/dmca">DMCA</Link></div><div className="reference-footer-column"><h2>Community</h2><a href="#contact">Blog</a><a href="#contact">Instagram</a><a href="#contact">YouTube</a><a href="#contact">Reddit</a><a href="#contact">TrustPilot</a></div><div className="reference-footer-column"><h2>Contact</h2><a href="#contact">WhatsApp</a><a href="mailto:support@optictv.online">support@optictv.online</a></div></div><div className="reference-footer-bottom">Copyright © 2026 GoSharkTV All Rights Reserved</div></div></footer>
  );
}
