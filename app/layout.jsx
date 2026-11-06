import './globals.css';
import './content.css';
import './testimonials.css';

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://gosharktv.com';

export const metadata = {
  title: 'GoSharkTV │ Best IPTV Service │ NO Buffering',
  description:
    'GoSharkTV – Enjoy premium IPTV streaming with thousands of 4K/FHD live TV channels, movies, and TV shows. Discover smooth streaming, sports, and entertainment with no buffering.',
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
