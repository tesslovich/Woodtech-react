import './Partner.scss';

function Partner(props) {
	const { data } = props;
	return (
		<div className="container">
			<div className="row">
				{data.map((item) => {
					return (
						<div className="col-md-3 partner__wrapper">
							<img className="partner__img" src={item.src}></img>
							<div className="partner__name">{item.name}<span>{item.desc}</span></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Partner;