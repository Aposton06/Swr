import SWRProvider from './providers';

export const metadata = {
  title: 'SWR Demo App',
  description: 'Демонстрация возможностей SWR',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <SWRProvider>
          {children}
        </SWRProvider>
      </body>
    </html>
  );
}