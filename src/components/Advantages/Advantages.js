import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../SectionTitle/SectionTitel";
import './Advantages.scss';
import { Autoplay } from "swiper";
import 'swiper/scss';
import Benefits from '../Benefits/Benefits';
import benefitsData from '../../config/benefitsData';

function Advantages(props) {
	const { data } = props;
	return (
		<section className="advantages">
			<div className="container">
				<div className="row">


					<div className="col-md-6 advantages-slider-wrapeer">
						<div className="advantages-slider">
							<Swiper className='advantages-slider__custom'
								effect='Autoplay'
								modules={[Autoplay]}
								slidesPerView={1}
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: true,
								}}
							>
								{data.map((slide) => {
									return (
										<SwiperSlide>
											<img className="slide-advantages__bg" src={slide.src}></img>
											<div className="advantages-slide__caption">{slide.number}<span>{slide.textOne} <br />{slide.textTwo} </span></div>
										</SwiperSlide>
									)
								})}

							</Swiper>
						</div>
					</div>
					<div className="col-md-6">
						<SectionTitle name={'Коротко о нас'} desc={'Проектируем и создаём экологичный комфорт'} />
						<p className='advantages-paragraph'>В работе мы используем только лучшие материалы на рынке по доступным ценам. Наши специалисты подберут наиболее подходящие породы дерева, специалисты по дизайну разработают готовое решение.</p>
						<Benefits data={benefitsData} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages;