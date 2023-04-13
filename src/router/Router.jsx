import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from '../components/ListPage'
import About from '../components/About';

export default function RouteComponent() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ListPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}