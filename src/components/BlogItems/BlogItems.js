import './BlogItems.scss'

function BlogItems(props) {
	const { data } = props;
	return (
		<div className="blog-item__wrapper">
			{data.map((item) => {
				return (
					<div className='col-md-4'>
						<div className="blog-item__wrapper-img">
							<span className="blog-item__img--date">{item.date}</span>
							<img className="blog-item__img" alt="1" src={item.src}></img>
						</div>
						<h4 className="blog-item__title">{item.title}</h4>
						<p className="blog-item__desc">{item.desc}</p>
						<a className="blog-item__link" href="#">Читать полностью</a>
					</div>
				)
			})}
		</div>


	)
}

export default BlogItems;