import './PageTitle.scss';

function PageTitle(props) {
	const { title, desc } = props;
	return (
		<div className="page-title container">
			<div className='row'>
				<h2 className="page-title__title">{title}</h2>
				<span className="page-title__desc col-md-12">{desc}</span>
			</div>
		</div>

	)
}

export default PageTitle;