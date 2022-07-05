import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';
import Projects from './pages/ProjectsPage/Projects';
import Services from './pages/ServicesPage/Services';
import CompanyBlogs from './pages/CompanyBlogsPage/CompanyBlogs';
import CompanyPage from './pages/CompanyPage/CompanyPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';


function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route index element={<Home />} />
					<Route path='projects' element={<Projects />} />
					<Route path='projectpage' element={<ProjectPage />} />
					<Route path='services' element={<Services />} />
					<Route path='companyblogs' element={<CompanyBlogs />} />
					<Route path='company' element={<CompanyPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
