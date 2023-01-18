import Navigation from 'components/navigation';
import '../styles/globals.css';

type RootLayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-primary min-h-screen flex flex-col">
        <Navigation />
        <div className="bg-light grow mt-60">{children}</div>
      </body>
    </html>
  );
}
