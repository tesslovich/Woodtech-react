import './OurBlog.scss';
import '../BlogItems/BlogItems.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/scss';


function OurBlog(props) {
	const { data } = props;
	return (
		<section className="our-blog">
			<h3 className="our-blog__title">Наш Блог</h3>


			<div className='container'>
				<div className='row'>
					<div className="our-blog__wrapper col-md-12">
						<Swiper className="our-blog__swiper"
							speed={600}
							spaceBetween={25}
							slidesPerView={2}
							modules={Pagination}
							pagination={{
								clickable: true,
								el: '.our-blog__pagintation',
								type: 'custom',
							}}
							onSwiper={(swiper) => console.log(swiper)}
							onSlideChange={() => console.log('slide change')}
						>
							{data.map((item) => {
								return (
									<SwiperSlide>
										<div className='blog-item col-md-4'>
											<div className="blog-item__wrapper-img">
												<span>{item.date}</span>
												<img className="blog-item__img" alt="1" src={item.src}></img>
											</div>
											<h4 className="blog-item__title">{item.title}</h4>
											<p className="blog-item__desc">{item.desc}</p>
											<a className="blog-item__link" href="#">Читать полностью</a>
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
						<a className="col-md-4 blog-all__link" href="#">
							<div className='blog-all__link--wrapper'>
								<img className='blog-all__link-img' alt='2' src='/images/wood-decoration.jpg'></img>
								<div className="blog-all__desc">Перейти ко всем
									записям блога</div>
							</div>
						</a>
					</div>
				</div>
			</div>


			<div className="our-blog__pagination-wrapper">
				<div className="our-blog__pagintation"></div>
			</div>
		</section>
	)
}

export default OurBlog;