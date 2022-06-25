import Partner from '../Partner/Partner';
import './CompanyPartners.scss';
import companyPartnersData from '../../config/companyPartnersData';


function CompanyPartners() {
	return (
		<div className='company-partners'>
			<h3 className='company-partners__title col-md-12'>Наши партнёры</h3>
			{companyPartnersData.map((item) => {
				return (
					<div className='company-partners__wrapper'>
						<div className='company-partners__wrapper--img'>
							<img className='company-partners--img' src={item.src} alt='3'></img>
						</div>
						<div className='company-partners__item-title'>{item.title}
							<p>{item.desc}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default CompanyPartners;