import './HomeSlider.scss';
import { Navigation, Pagination, EffectCreative, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/scss/effect-creative";



function HomeSlider(props) {
	const { data } = props;
	return (
		<div className="home-slider">
			<Swiper
				effect={"creative"}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, 0, -400],
					},
					next: {
						translate: ["100%", 0, 0],
					},
				}}
				className="mySwiper"
				speed={600}
				modules={[Navigation, Pagination, EffectCreative, Scrollbar]}
				spaceBetween={50}
				slidesPerView={1}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				pagination={{
					clickable: true,
					el: '.home-slider__pagination',
					type: 'custom',
					renderCustom: (swiper, current, total) => {
						const indT = total >= 10 ? total : `0${total}`
						const indC = total >= 10 ? current : `0${current}`
						return `<b>${indC}</b><span></span>${indT}`
					}
				}}
				scrollbar={{
					el: 'home-slider__scrollbar',
					draggable: true,
				}}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{data.map((slide) => {
					return (
						<SwiperSlide className='home-slider__slide'>
							<img className='slide__bg' src={slide.src}></img>
							<div className='continer__wrapper'>
								<div className='container'>
									<h2 className='home-slider__heading'>{slide.title}<br /><span>{slide.subtitle}</span></h2>
									<p className='home-slider__text'>{slide.description}</p>
								</div>
							</div>
						</SwiperSlide>
					)
				})}


				<div className='row home-slider__bottom' >
					<div className='col-3 home-slider__paggination-wrapper'>
						<div className='home-slider__pagination'></div>
					</div>
					<div className='col-6 home-slider__scrollbar swiper-scrollbar'>
					</div>
					<div className='col-3'>
						<div className='swiper-button__wrapper'>
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</Swiper >
		</div >
	)
}

export default HomeSlider;


