import './Services.scss';
import Footer from "../../components/Footer/Footer";
import OurServices from "../../components/OurServices/OurServices";
import PageTitle from "../../components/PageTitle/PageTitle";
import ourServicesData from '../../config/ourServicesData';
import HeaderWhite from '../../components/HeaderWhite/HeaderWhite';

function Services() {
	return (
		<div className="services-page">
			<HeaderWhite />
			<PageTitle title={'Наши услуги'} desc={'Здесь мы собрали все ключевые услуги нашей компании, разбитые по категориям. Если необходимой вам услуги нет в списке, напишите нам.'} />
			<OurServices data={ourServicesData} />
			<div className='service-page__btn-wrapper'>
				<a href="#" className="button services-button">Оформить заявку</a>
			</div>
			<Footer />
		</div>
	)
}

export default Services;