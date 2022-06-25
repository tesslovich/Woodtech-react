import BestItem from '../BestItem/BestItem';
import bestItemData from '../../config/bestItemData';
import './BestWorks.scss';
import SectionTitle from '../SectionTitle/SectionTitel';

function BestWorks() {
	return (
		<section className="best-works">
			<div className='best-works__top'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-10 offset-xl-1 col-lg-12 best-works__top-wrapper'>
							<div className='best-works__left'>Представляем вам лучшие проекты, разработанные нашей командой профессионалов с любовью и заботой о клиентах. Портфолио позволит вам выбрать интересующий стиль, цвет дерева, фактуру, дизайн и расположение элементов.</div>
							<div className='best-works__right'>
								<SectionTitle name={'Лучшие работы'} desc={'Создаём тёплую атмосферу вашего отдыха'} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='best-works__botoom'>
				<div className='container'>
					<div className='row'>
						<div className='best-works__item-wrapper'>
							<BestItem data={bestItemData} />
						</div>
					</div>
				</div>
				<div className='best-works__button-wrapper'>
					<a href='#' className='button'>
						<span className='button__text'>Загрузить еще</span>
					</a>
				</div>
			</div>
		</section>
	)
}

export default BestWorks;