import Navigation from 'components/navigation';
import '../styles/globals.css';

type RootLayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang="fr">
      <head></head>
      <body className="relative bg-gray-50 dark:bg-[#70c4bc] ">
        <Navigation />
        <div className="flex flex-col h-vh65 px-4 bg-[#f8fcfc] w-90% rounded-md m-auto mt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
