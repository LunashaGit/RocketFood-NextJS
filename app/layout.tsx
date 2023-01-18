import Navigation from 'components/navigation';
import '../styles/globals.css';

type RootLayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-primary min-h-screen flex flex-col gap-72">
        <Navigation />
        <div className="bg-light grow">{children}</div>
      </body>
    </html>
  );
}
