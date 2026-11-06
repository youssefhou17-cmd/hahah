import './globals.css';
import './content.css';
import './testimonials.css';

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://optictv.online';

export const metadata = {
  title: 'GoSharkTV │ Best IPTV Service │ NO Buffering',
  description:
    'GoSharkTV – Enjoy premium IPTV streaming with thousands of 4K/FHD live TV channels, movies, and TV shows. Discover smooth streaming, sports, and entertainment with no buffering.',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/eng'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
