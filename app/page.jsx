'use client';

import { useEffect, useState } from 'react';
import Topbar from './components/Topbar';
import SiteFooter from './components/SiteFooter';
import VideoSlider from './components/VideoSlider';

const deviceLogos = [
  ['New Project 9.png', 'Hisense'], ['New Project 8.png', 'Roku TV'],
  ['New Project 7.png', 'Google TV'], ['New Project 5.png', 'Android TV'],
  ['New Project (1).png', 'LG'], ['New Project 3.png', 'Samsung Smart TV'],
  ['New Project 2.png', 'Apple TV'], ['New Project.png', 'Fire TV']
];

const payLogos = ['Visa', 'Mastercard', 'American express', 'Discover (1)', 'Apple pay', 'Gpay', 'amazon pay'];

const plans = [
  ['12 Months', '$80', '365 Days', 'Annual plan'],
  ['1 Month', '$16', '30 Days', 'One month plan'],
  ['3 Months', '$34', '90 Days', 'Three month plan'],
  ['6 Months', '$54', '180 Days', 'Six month plan']
];

// Prices per selected device count (order: 12 Months, 1 Month, 3 Months, 6 Months)
const devicePrices = {
  1: [80, 16, 34, 54],
  2: [144, 29, 61, 97],
  3: [200, 40, 85, 135],
  4: [248, 50, 105, 167],
  5: [288, 58, 122, 194]
};

const planFeatures = [
  'HD/FHD/4K',
  '55,000+ Channels',
  '240,000+ VOD',
  'Anti-Freeze 8.0',
  'Works on All devices',
  'Instant Activation',
  '24/7 support',
  'NO Adult content (+18)',
  'TV Guide (EPG)',
  '7 Days Money-Back',
  '99.9% Uptime'
];

const deviceImages = [
  ['https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=80', 'Television remote'],
  ['https://images.unsplash.com/photo-1601944177325-f8867652837f?auto=format&fit=crop&w=500&q=80', 'Streaming remote control'],
  ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500&q=80', 'Smart television'],
  ['https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=500&q=80', 'White streaming device']
];

// Comparison rows: [with your current IPTV, with GoSharkTV]
const comparisonRows = [
  ['Lagging and Bad Streaming Quality', 'No Lagging and HD | FHD | 4K Quality'],
  ['Doesn’t include your favorite Channels', 'All your favorite Channels Available'],
  ['You cannot watch on any device', 'Watch on any device'],
  ['Legal and Security Risks', 'No Legal and No Security Risks'],
  ['No Customer Support', '24/7 Customer Support'],
  ['Paid IPTV Setup on your Device', 'Free IPTV Setup on your Device']
];

const markX = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
const markCheck = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;

const faqItems = [
  {
    question: 'What is GoSharkTV?',
    answer: "GoSharkTV brings you thousands of worldwide live channels, new movies, live sports, and big TV shows. It all streams clean without freezing on any device, so you can just kick back and watch."
  },
  {
    question: 'Does GoSharkTV provide adult content?',
    answer: 'No, GoSharkTV is strictly family-friendly with zero adult content. We focus entirely on sports, news, movies, local programming, and kids, shows, keeping the catalog clean and entertaining for everyone at home.'
  },
  {
    question: 'Does GoSharkTV work on all devices?',
    answer: 'Yes, GoSharkTV works on virtually any device, including Smart TVs, Firestick, Android, iOS, and PCs. Whatever gear you use, our team guides you step-by-step so you are up and running in minutes.'
  },
  {
    question: 'Does GoSharkTV offer a refund?',
    answer: 'Yes, GoSharkTV offers a 7-day money-back guarantee. If you are not happy with our service during your first week, you might be eligible for a refund. Check our policy for full details. Refunds do not cover personal device or internet issues.'
  },
  {
    question: 'Does GoSharkTV have freezing?',
    answer: 'GoSharkTV runs smooth because we built our own strong setup. If you ever experience freezing, it is not always the service that is the issue. Just message our support team, and we will gladly troubleshoot and help you fix it right away.'
  }
];

const OFFER_DURATION_MS = 2 * 24 * 60 * 60 * 1000;
const OFFER_END_KEY = 'gosharktv-offer-end';

const getOfferEndTime = () => {
  if (typeof window === 'undefined') return Date.now() + OFFER_DURATION_MS;
  try {
    const stored = window.localStorage.getItem(OFFER_END_KEY);
    const end = stored ? Number(stored) : NaN;
    if (Number.isFinite(end) && end > Date.now()) return end;
  } catch (e) {}
  const end = Date.now() + OFFER_DURATION_MS;
  try {
    window.localStorage.setItem(OFFER_END_KEY, String(end));
  } catch (e) {}
  return end;
};

export default function Home() {
  const [category, setCategory] = useState('Movies');
  const [selectedDevices, setSelectedDevices] = useState(1);
  const [countdown, setCountdown] = useState({ days: 1, hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    let targetTime = getOfferEndTime();

    const updateCountdown = () => {
      const now = Date.now();
      let difference = targetTime - now;
      if (difference <= 0) {
        targetTime = now + OFFER_DURATION_MS;
        try {
          window.localStorage.setItem(OFFER_END_KEY, String(targetTime));
        } catch (e) {}
        difference = OFFER_DURATION_MS;
      }
      const totalSeconds = Math.max(0, Math.floor(difference / 1000));
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Topbar />
      <main id="home">
        <div className="wrap hero"><p className="eyebrow">Anything · Anywhere · Any Device</p><h1>GoSharkTV - <span>Best IPTV</span><br />Service Provider</h1><p className="hero-copy">Love watching TV but hate those annoying freezes? Join thousands who’ve switched to GoSharkTV as the most reliable IPTV service of 2026.</p><a className="cta" href="#pricing">Claim Offer Now</a><small className="hero-discount">20% Discount on all yearly plans*</small><VideoSlider /><div className="device-carousel" aria-label="Supported streaming devices"><div className="device-track">{[...deviceLogos, ...deviceLogos].map(([src, alt], index) => <img className="device-logo" src={`/devices/${src}`} alt={alt} key={`${src}-${index}`} />)}</div></div></div>
<section id="services">
          <div className="wrap">
            <h2 className="section-title">Why choose <span>GosharkTV</span>?</h2>
            <p className="section-intro">Powerful features built for smooth streaming on every device. Here is what makes GoSharkTV different.</p>
            <div className="cmp-grid">
              <span className="cmp-vs" aria-hidden="true">VS</span>
              <article className="cmp-card cmp-card-bad">
                <div className="cmp-head">
                  <h3>Your Current IPTV <span className="cmp-emoji">🐌 😞</span></h3>
                </div>
                <ul className="cmp-list">
                  {comparisonRows.map(([bad]) => (
                    <li key={bad}>
                      <span className="cmp-mark cmp-mark-bad" aria-hidden="true">{markX}</span>
                      {bad}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="cmp-card cmp-card-good">
                <div className="cmp-head">
                  <h3>Your Device with our <span className="cmp-brand">IPTV</span> <span className="cmp-emoji">🚀 😍</span></h3>
                </div>
                <ul className="cmp-list">
                  {comparisonRows.map(([, good]) => (
                    <li key={good}>
                      <span className="cmp-mark cmp-mark-good" aria-hidden="true">{markCheck}</span>
                      {good}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="content-section"><div className="wrap"><h2 className="section-title">Enjoy <span>Effortless Streaming</span> with On The Go</h2><p className="section-intro">From blockbuster movies to live sports, explore everything you can stream with GoSharkTV.</p><div className="content-grid" id="streaming-cards"><article className="content-card"><img src="/icons/f1-the-movie.jpg" alt="Movies — F1 theatrical blockbuster" /><div><h3>Movies</h3><p>Stream thousands of cinematic blockbusters, timeless classics, and direct-to-video releases in crisp HD and 4K quality, complete with full multi-language audio and subtitle support.</p></div></article><article className="content-card"><img src="/icons/kids%20shows.webp" alt="Kids watching shows" /><div><h3>Kids Content</h3><p>Enjoy family-friendly animation, educational series, and popular cartoon networks with full peace of mind, featuring dedicated parental controls to keep screen time safe and entertaining.</p></div></article><article className="content-card"><img src="/icons/Movies%20section.jpg" alt="Movie theater seats" /><div><h3>Shows/Series</h3><p>Binge full seasons of trending TV shows, critically acclaimed original series, and daily soap operas without missing a single episode or waiting for weekly TV schedules.</p></div></article><article className="content-card"><img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85" alt="Basketball game" /><div><h3>Sports</h3><p>Catch every live match, main card event, and high-stakes tournament in ultra-smooth high frame rate streams, covering everything from global football leagues to combat sports and motorsport racing.</p></div></article></div></div></section>
          <section className="video-section"><div className="wrap"><div className="video-heading"><h2 className="section-title"><span>GoSharkTV</span> in 1 Minute</h2><p className="section-intro">A quick look at GoSharkTV: live channels, movies, sports, and series in one minute.</p><div className="video-frame"><iframe src="https://www.youtube.com/embed/Z7Xqj4VbRG0" title="GoSharkTV in 1 minute" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></div></div></section>
        <section className="testimonials-section"><div className="wrap"><h2 className="section-title">What Our Clients Say</h2><p className="testimonials-intro">Customers love GoSharkTV for its quality and support. Experience the difference with the best IPTV service.</p><div className="testimonials-grid"><article className="testimonial-card"><div className="testimonial-stars"><img src="/icons/5-stars-transparent-background-17.webp" alt="5 star rating" /></div><p className="testimonial-quote">“I used to deal with constant buffering and dropped streams during live sports. Since switching to GoSharkTV, everything has been rock-solid. Zero lag, incredible quality, and I haven't missed a key moment since day one!"”</p><div className="testimonial-person"><span className="testimonial-avatar">PC</span><div><strong>Peter C. <span className="testimonial-flag">🇬🇧</span></strong><small>Client</small></div><span className="testimonial-contact"><img src="/icons/whatsapp-logo.webp" alt="Contact" /></span></div></article><article className="testimonial-card"><div className="testimonial-stars"><img src="/icons/5-stars-transparent-background-17.webp" alt="5 star rating" /></div><p className="testimonial-quote">“After trying countess sub-par IPTV providers over the last few years, GoSharkTV is the first one to actually deliver on its promises. Flawless picture quality, zero buffering, and a support team that’s available the second you need help!”</p><div className="testimonial-person"><span className="testimonial-avatar">CA</span><div><strong>Noah A. <span className="testimonial-flag">🇨🇦</span></strong><small>Client</small></div><span className="testimonial-contact"><img src="/icons/whatsapp-logo.webp" alt="Contact" /></span></div></article><article className="testimonial-card"><div className="testimonial-stars"><img src="/icons/5-stars-transparent-background-17.webp" alt="5 star rating" /></div><p className="testimonial-quote">"Finding a reliable service was a headache until I found GoSharkTV. The streams run smoothly without buffering, the quality is insanely clear, and their support team is super fast and helpful. Easily the best setup I've used!"</p><div className="testimonial-person"><span className="testimonial-avatar">LP</span><div><strong>Laurette P. <span className="testimonial-flag">🇺🇸</span></strong><small>Client</small></div><span className="testimonial-contact"><img src="/icons/whatsapp-logo.webp" alt="Contact" /></span></div></article></div></div></section>
        <section className="how-it-works-section"><div className="wrap"><h2 className="section-title">How does it work?</h2><p className="section-intro">Getting started takes three simple steps: pick a plan, pay securely, and start watching.</p><div className="steps"><article className="step"><span className="step-number">Step 1</span><h3>Choose Your Package</h3><p>Select your preferred plan and click "Order on WhatsApp." You will be instantly redirected to WhatsApp with a pre-filled message, just send the message to start your order.</p></article><article className="step"><span className="step-number">Step 2</span><h3>Instant Response</h3><p>A dedicated support agent will reply to you immediately and provide a secure payment link. Pay conveniently using your Credit/Debit Card, Apple Pay, or Google Pay or Amazon pay.</p></article><article className="step"><span className="step-number">Step 3</span><h3>Instant Activation</h3><p>Once your payment is confirmed, your agent will generate your subscription credentials and walk you through setting up the service on your device step-by-step. And you're ready to Go!</p></article></div></div></section>
        <section id="pricing"><div className="wrap"><div className="pricing-head"><div><h2>Pricing and Packages</h2><p className="section-intro">Flexible plans for every need: pick the subscription that fits how you watch.</p></div></div><div className="device-tabs-wrapper"><div className="device-tabs">{[1,2,3,4,5].map((n) => <button key={n} className={`device-tab${selectedDevices === n ? ' device-tab-active' : ''}`} onClick={() => setSelectedDevices(n)}>{n} {n === 1 ? 'Device' : 'Devices'}</button>)}</div></div><div className="plans" id="packages">{plans.map(([title, price, days, subject], index) => { const currentPrice = devicePrices[selectedDevices]?.[index] ?? plans[index][1]; const cardFeatures = index === 0 ? planFeatures.filter((f) => f !== '7 Days Money-Back' && f !== '99.9% Uptime').map((f) => f === 'TV Guide (EPG)' ? 'TV Guide, 7-Day Guarantee, 99% Uptime' : f) : planFeatures; return <article className={`plan ${index === 0 ? 'popular' : ''}`} key={title}>{index === 0 && <span className="discount-badge">20% OFF</span>}<h3>{title}</h3><div className="plan-price"><strong>{'$' + currentPrice}</strong><span className="plan-devices">{selectedDevices} {selectedDevices === 1 ? 'device' : 'devices'}</span></div><ul className="plan-features">{cardFeatures.map((feature) => <li key={feature}><svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}><polyline points="20 6 9 17 4 12" /></svg>{feature}</li>)}</ul><a className="buy" href={`mailto:hello@onthego.tv?subject=${subject}`}>Subscribe Now</a><small>{days}</small>{index === 0 && <div className="offer-timer" aria-live="polite"><div className="offer-timer-box"><span className="offer-timer-value">{String(countdown.days).padStart(2, '0')}</span><span className="offer-timer-label">Day</span></div><div className="offer-timer-divider">:</div><div className="offer-timer-box"><span className="offer-timer-value">{String(countdown.hours).padStart(2, '0')}</span><span className="offer-timer-label">Hour</span></div><div className="offer-timer-divider">:</div><div className="offer-timer-box"><span className="offer-timer-value">{String(countdown.minutes).padStart(2, '0')}</span><span className="offer-timer-label">Minute</span></div><div className="offer-timer-divider">:</div><div className="offer-timer-box"><span className="offer-timer-value">{String(countdown.seconds).padStart(2, '0')}</span><span className="offer-timer-label">Second</span></div></div>}{index === 0 && <div className="offer-space" aria-hidden="true" />}</article>; })}</div><div className="pay-types">{payLogos.map((name) => <img key={name} className="pay-logo" src={`/payment%20methods/${encodeURIComponent(name)}.png`} alt={`${name} logo`} />)}</div><div className="pay-marquee" aria-hidden="true"><div className="pay-track">{[...payLogos, ...payLogos].map((name, index) => <img key={`${name}-${index}`} className="pay-logo" src={`/payment%20methods/${encodeURIComponent(name)}.png`} alt="" />)}</div></div></div></section>
        <section className="faq-section"><div className="wrap faq-wrap"><h2 className="section-title faq-title">Frequently Asked Questions about <span className="faq-brand-gradient">GoSharkTV</span></h2><p className="section-intro">Everything you need to know about GoSharkTV: plans, setup, payments, and support.</p><div className="faq-grid">{faqItems.map(({ question, answer }, index) => <article className={`faq-card${index === faqItems.length - 1 ? ' faq-card-wide' : ''}`} key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div></section>
        <section className="support-cta"><div className="wrap support-cta-wrap"><h2>Join GoSharkTV The BEST<br />IPTV Service</h2><p>Stream thousands of live channels, movies, and sports with zero freezing. Simple setup, rock-solid stability<br className="support-cta-break" /> and ultimate entertainment for the whole family on any device.</p><a className="support-cta-button" href="#contact">Subscribe Now</a><div className="support-cta-stats"><div><strong>20K+</strong><span>Happy Customers</span></div><div><strong>55k+</strong><span>Live Channels</span></div><div><strong>240K+</strong><span>Movies and Series</span></div></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}