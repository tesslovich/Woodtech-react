import './OurServices.scss';

function OurServices(props) {
	const { data } = props;
	return (
		<div className="our-services container">
			<div className='row'>
				{data.map((item) => {
					return (
						<a className="services__item col-xl-6 col-md-12" href='#'>
							<div className="services__item-wrapper">
								<h4 className='services__item-title'>{item.title}</h4>
								<span className="services__item-desc">{item.desc}</span>
							</div>
							<img className="services__item-img" alt="2" src={item.src}></img>
						</a>
					)
				})}
			</div>
		</div>
	)
}

export default OurServices;