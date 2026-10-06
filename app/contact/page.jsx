import Topbar from '../components/Topbar';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Contact | GoSharkTV',
  description: 'Get in touch with the GoSharkTV team.'
};

const whatsappIcon = <img src="/icons/Whatsapp%20logo.png" alt="" aria-hidden="true" style={{ display: 'block', width: '38px', height: '38px', objectFit: 'contain' }} />;

const mailIcon = <img src="/icons/mail.webp" alt="" aria-hidden="true" style={{ display: 'block', width: '30px', height: '30px', objectFit: 'contain' }} />;

const questionIcon = <img src="/icons/question.png" alt="" aria-hidden="true" style={{ display: 'block', width: '30px', height: '30px', objectFit: 'contain' }} />;

const contactChannels = [
  {
    icon: whatsappIcon,
    title: 'WhatsApp Chat',
    text: 'The fastest way to reach us. Message our team anytime and get an instant response, day or night.',
    cta: 'Chat on WhatsApp',
    href: '#contact'
  },
  {
    icon: mailIcon,
    title: 'Email Support',
    text: 'Send us the details of your question or issue and we will reply with a full answer within hours.',
    cta: 'Send an Email',
    href: 'mailto:support@optictv.online'
  },
  {
    icon: questionIcon,
    title: 'Quick Answers',
    text: 'Looking for plans, setup steps, payments or refund info? Most questions are already answered below.',
    cta: 'See the FAQ',
    href: '#faq'
  }
];

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

export default function Contact() {
  return (
    <>
      <Topbar />
      <main className="policy-page">
        <div className="wrap policy-page-wrap contact-hero">
          <h1>We’re here to <span>Help!</span></h1>
          <p className="policy-page-updated">Contact forms</p>
          <p className="contact-hero-copy">Need help about about setup, payments or anything else? Pick the card that suits you best, our team is available 24/7.</p>
        </div>

        <div className="wrap">
          <div className="contact-cards">
            {contactChannels.map(({ icon, title, text, cta, href }) => (
              <article className="contact-card" key={title}>
                <span className="contact-card-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={href}>{cta}</a>
              </article>
            ))}
          </div>
        </div>

        <section className="faq-section" id="faq">
          <div className="wrap faq-wrap">
            <h2 className="section-title faq-title">Frequently Asked Questions about <span className="faq-brand-gradient">GoSharkTV</span></h2>
            <p className="section-intro">Everything you need to know about GoSharkTV: plans, setup, payments, and support.</p>
            <div className="faq-grid">
              {faqItems.map(({ question, answer }, index) => (
                <article className={`faq-card${index === faqItems.length - 1 ? ' faq-card-wide' : ''}`} key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-cta"><div className="wrap support-cta-wrap"><h2>Join GoSharkTV The BEST<br />IPTV Service</h2><p>Stream thousands of live channels, movies, and sports with zero freezing. Simple setup, rock-solid stability<br className="support-cta-break" /> and ultimate entertainment for the whole family on any device.</p><a className="support-cta-button" href="/#pricing">Subscribe Now</a><div className="support-cta-stats"><div><strong>20K+</strong><span>Happy Customers</span></div><div><strong>55k+</strong><span>Live Channels</span></div><div><strong>240K+</strong><span>Movies and Series</span></div></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}