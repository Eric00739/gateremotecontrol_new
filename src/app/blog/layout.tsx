import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadModalProvider from '@/components/LeadModalProvider';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <LeadModalProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LeadModalProvider>
  );
}
