import './CompanyBlogs.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import blogItemData from '../../config/blogItemsData';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';

function CompanyBlogs() {
	return (
		<div className="company-blogs">
			<Header />
			<PageTitle title={'Блог компании'} desc={'Список новостей компании Woodtech и статей на тему архитектурного дизайна, проектирования и дизайна интерьеров.'} />
			<div className='company-blog__items-wrapper container'>
				<div className='row'>
					{blogItemData.map((item) => {
						return (
							<div className='col-xl-4 col-lg-4 col-md-4'>
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
			</div>
			<div className='company-blogs__pagination'>
				<nav>
					<ul class="company-blogs__pagination-list">
						<li><a className='company-blogs__pagination--prev' href="#">Назад</a></li>
						<li><a className='company-blogs__pagination--number pagination--number__active' href="#">1</a></li>
						<li><a className='company-blogs__pagination--number' href="#">2</a></li>
						<li><a className='company-blogs__pagination--number' href="#">3</a></li>
						<li><a className='company-blogs__pagination--next' href="#">Вперёд</a></li>
					</ul>
				</nav>
			</div>
			<Footer />
		</div>
	)
}

export default CompanyBlogs;