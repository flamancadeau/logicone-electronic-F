import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileBottomBar from '../components/layout/MobileBottomBar';
import ChatWidget from '../features/chatbot/ChatWidget';

export default function PublicLayout() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen min-h-[100dvh] flex flex-col selection:bg-primary selection:text-on-primary overflow-x-hidden max-w-[100vw]">
      <Header />
      <main className="flex-1 w-full min-w-0 pt-16 sm:pt-20 bg-surface pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
      <ChatWidget />
    </div>
  );
}
