import './ProjectPage.scss';
import AdressLine from '../../components/AdressLine/AdressLine';
import adressLineData from '../../config/adressLineData';
import ProjectProfile from '../../components/ProjectProfile/ProjectProfile';
import ProjectPageSwiper from '../../components/ProjectPageSwiper/ProjectPageSwiper';
import Footer from '../../components/Footer/Footer';
import HeaderWhite from '../../components/Header/Header';



function ProjectPage() {
	return (
		<div className='project-page'>
			<HeaderWhite />
			<div className='container project-page__nav'>
				<div className='row'>
					<ul className='project-page__nav-list col-md-9'>
						<li className='project-page__nav-item'>
							<a className='project-page__nav-link' href='#'>Главная</a>
						</li>
						<li className='project-page__nav-item'>
							<a className='project-page__nav-link' href='#'>Проекты</a>
						</li>
						<li className='project-page__nav-item'>
							<a className='project-page__nav-link--active' href='#'>Панорамная чилаут зона для чтения и отдыха</a>
						</li>
					</ul>
					<AdressLine className='col-md-3 project-page--adress' data={adressLineData} />
				</div>
			</div>
			<ProjectPageSwiper />
			<ProjectProfile />
			<Footer />
		</div >
	)
}


export default ProjectPage;