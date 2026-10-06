import Topbar from '../components/Topbar';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Refund Policy | OpticTv',
  description: 'OpticTv refund policy: 7-day money-back guarantee, eligibility criteria and refund process.'
};

export default function RefundPolicy() {
  return (
    <>
      <Topbar />
      <main className="policy-page">
      <div className="wrap policy-page-wrap">
        <h1>Refund <span>Policy</span></h1>
        <p className="policy-page-updated">Last updated: September 2026</p>
        <div className="policy-page-body">
          <p>At OpticTv, we take pride in offering our customers the best IPTV service possible. We believe in our service and we stand behind it. We want you to be completely satisfied with your purchase, and we understand that sometimes things may not work out as expected.</p>
          <p>Therefore, we offer a 7-day money-back guarantee on all our subscription plans. You can request a refund within the first 7 days of your subscription, subject to the eligibility criteria below. After the 7-day period, no refunds will be issued.</p>

          <h2>Refund Eligibility:</h2>
          <p>To be eligible for a refund, you must meet the following criteria:</p>
          <ul>
            <li>Your request for a refund must be made within 7 days of your subscription start date.</li>
            <li>You must have purchased the subscription directly from our website or authorized resellers.</li>
            <li>Your subscription must not have been used for more than 7 days.</li>
            <li>You must provide us with a valid reason for your refund request.</li>
          </ul>
          <p>Please note that we do not provide refunds for issues related to your device, Internet service provider, or your inability to use our service due to technical issues outside of our control. Additionally, if we suspect fraudulent or abusive behavior, we reserve the right to deny a refund request.</p>

          <h2>Refund Process:</h2>
          <p>To request a refund, please email us at support@optictv.online or our number on Whatsapp with your order number and reason for requesting a refund. Our support team will review your request and respond within 24 hours.</p>
          <p>If your refund request is approved, we will process the refund to your original method of payment within 7 business days.</p>
          <p>Please note that if you paid with a credit or debit card, the refund may take several days to appear on your statement depending on your bank&apos;s policies.</p>

          <h2>Cancellation:</h2>
          <p>If you decide to cancel your subscription before the end of the subscription term, your service will continue until the end of the term, and no refunds will be issued for the remaining period.</p>
          <p>If you have any questions about our refund policy or need assistance with your refund request, please contact our support team at support@optictv.online</p>
          <p>Thank you for choosing OpticTv. We are committed to providing you with the best IPTV service and support.</p>
        </div>
      </div>
      </main>
      <SiteFooter />
    </>
  );
}
