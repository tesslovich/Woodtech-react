import './Benefits.scss';

function Benefits(props) {
	const { data } = props;
	return (
		<div className="row">
			{data.map((item) => {
				return (
					<div className="col-md-6 benefit__item-wrapper">
						<div className="benefit-item">
							<a href='#' className="benefit-item__heading">
								<img className="benefit-item__icon-wrapper" src={item.src}></img>
								<div className="benefit-item__heading-text">{item.title}</div>
							</a>
							<p className="benefit-item__desc">{item.desc}</p>
							<a href="#" className="read-more benefit-item__more">Подробнее</a>
						</div>
					</div>
				)
			})}
		</div>

	)
}

export default Benefits;