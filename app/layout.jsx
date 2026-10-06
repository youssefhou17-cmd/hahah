import './globals.css';
import './content.css';
import './testimonials.css';

export const metadata = {
  title: 'On the Go | Streaming Provider',
  description: 'Worldwide streaming, available on every screen.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
