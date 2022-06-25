import './OurPartners.scss';
import Partner from "../Partner/Partner";
import partnersData from '../../config/partnersData'

function OurPartners(props) {
	return (
		<section className="our-partners">
			<div className='our-partners__wrapper'>
				<img className='our-partners__bg' src='/images/portfolio/stairs-2.jpg'></img>
			</div>
			<h3 className="our-partners__title">Наши партнеры</h3>
			<Partner data={partnersData} />

		</section>
	)
}

export default OurPartners;