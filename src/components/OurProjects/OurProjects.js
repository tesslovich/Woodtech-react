import './OurProjects.scss';

function OurProjects(props) {
	const { data } = props;
	return (
		<div className="our-projects">
			<h2 className="our-projects__title">Наши проекты</h2>
			<span className="our-projects__desc">Представляем вам лучшие работы нашей студии дизайна. От потрясающих гостиных до самых необычных эксклюзивных решений.</span>
			<div className="container">
				<div className="row">
					<div className="our-projects__wrapper">
						{data.map((item) => {
							return (
								<div className="our-projects__item">
									<div className="our-projects__item-wrapper">
										<a className="our-projects__item-link" href="#">
											<img alt="1" src={item.src}></img>
										</a>
									</div>
								</div>
							)
						})}

					</div>
				</div>
			</div>
		</div>
	)
}

export default OurProjects;