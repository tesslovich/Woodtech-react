import ourBenefitsData from "../../config/ourBenefitsData";
import './OurBenefits.scss';

function OurBenefits() {
	return (
		<div className="our-benefits">

			<div className="our-benefits__wrapper container">
				<div className="row">
					{ourBenefitsData.map((item) => {
						return (
							<div className="our-benefit__item col-md-4">
								<a href='#' className="our-benefit__item-heading">
									<img className="our-benefit__icon" src={item.src}></img>
									<div className="our-benefit__heading--text">{item.title}</div>
								</a>
								<p className="our-benefit__desc">{item.desc}</p>
								<a href="#" className="read-more our-benefits__more">Подробнее</a>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default OurBenefits;