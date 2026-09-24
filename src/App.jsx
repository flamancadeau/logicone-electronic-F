import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { ChatbotProvider } from './contexts/ChatbotContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <ChatbotProvider>
            <AppRoutes />
          </ChatbotProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
