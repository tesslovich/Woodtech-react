import React, { useRef, useState } from "react";
import projectPageSwiperData from '../../config/projectPageSwiperData';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import './ProjectPageSwiper.scss';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


function ProjectPageSwiper() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className='container project-page__swiper'>
			<div className='row'>
				<Swiper
					spaceBetween={10}
					navigation={false}
					thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
					modules={[FreeMode, Navigation, Thumbs]}
					className="project-page__swiper--top"
				>
					{projectPageSwiperData.map((item) => {
						return (
							<SwiperSlide>
								<img className='project-page__swiper--big' src={item.src} alt='3'></img>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<Swiper
					onSwiper={(swiper) => setThumbsSwiper(swiper)}
					spaceBetween={10}
					slidesPerView={8}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="project-page__swiper--bootom"
				>
					{projectPageSwiperData.map((item) => {
						return (
							<SwiperSlide>
								<img className='project-page__swiper--small' src={item.src} alt='3'></img>
							</SwiperSlide>
						)
					})}
				</Swiper >
			</div>
		</div>
	)
}

export default ProjectPageSwiper