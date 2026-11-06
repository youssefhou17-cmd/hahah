import './globals.css';
import './content.css';
import './testimonials.css';

export const metadata = {
  title: 'GoSharkTV │ Best IPTV Service │ NO Buffering',
  description: 'GoSharkTV – Enjoy premium IPTV streaming with thousands of 4K/FHD live TV channels, movies, and TV shows. Discover smooth streaming, sports, and entertainment with no buffering.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
