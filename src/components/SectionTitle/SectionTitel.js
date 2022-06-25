import './SectionTitle.scss';

function SectionTitle(props) {
	const { name, desc, paragraph } = props;
	return (
		<div className="section-title">
			<div className='section-title__name'>{name}</div>
			<h2 className='section-title__desc'>{desc}</h2>
			<p className='section-title__paragraph'>{paragraph}</p>
		</div>
	)
}

export default SectionTitle;