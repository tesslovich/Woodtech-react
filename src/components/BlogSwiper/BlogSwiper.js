import './BlogSwiper.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/scss';

function BlogSwiper(props) {
	const { data } = props;
	return (

		<div className="blog-swiper__wrapper">
			<Swiper
				speed={600}
				spaceBetween={25}
				slidesPerView={12}
				modules={Pagination}
				pagination={{
					clickable: true,
					el: '',
					type: 'custom',
				}}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{data.map((item) => {
					return (
						<SwiperSlide>
							<div className='blog-item'>
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

		</div>
	)
}

export default BlogSwiper;