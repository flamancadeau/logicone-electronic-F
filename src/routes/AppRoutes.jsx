import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import BookService from '../pages/BookService';
import RequestQuote from '../pages/RequestQuote';
import Training from '../pages/Training';
import CourseDetail from '../pages/CourseDetail';
import ApplyTraining from '../pages/ApplyTraining';
import TrackRequest from '../pages/TrackRequest';
import Market from '../pages/Market';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:id" element={<ServiceDetail />} />
        <Route path="market" element={<Market />} />
        <Route path="book-service" element={<BookService />} />
        <Route path="request-quote" element={<RequestQuote />} />
        <Route path="training" element={<Training />} />
        <Route path="training/:id" element={<CourseDetail />} />
        <Route path="apply-training" element={<ApplyTraining />} />
        <Route path="track-request" element={<TrackRequest />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
