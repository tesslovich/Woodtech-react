import './Footer.scss';
import { ReactComponent as InstIcon } from '../../svg/fa-icons/instagram-brands.svg';
import { ReactComponent as VkIcon } from '../../svg/fa-icons/vk.svg';
import { ReactComponent as FbIcon } from '../../svg/fa-icons/facebook-brands.svg';
import { ReactComponent as TwitterIcon } from '../../svg/fa-icons/twitter-brands.svg';

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">

					<div className="col-md-4 footer__desc-wrapper">
						<div className="footer__logo">
							<a className="footer__logo-link" href="#"><i></i>Woodtech<span>Architecture</span></a>
						</div>
						<div className="footer__desc">
							<h3 className="footer__desc-title">Коротко о нас</h3>
							<span className="footer__desc-text">Мы досконально прорабатываем, а затем обсуждаем с нашими клиентами внешний вид каждого изделия. Мы крайне редко повторяемся, ведь мы знаем, что вы цените индивидуальность и не готовы довольствоваться готовыми решениями.</span>
						</div>
					</div>

					<div className="footer__menu col-md-2 col-xs-8">
						<h4 className="footer__menu-title">Меню</h4>
						<ul className="footer__menu-list">
							<li className="footer__menu-item">
								<a className="footer__menu-link" href="#">Главаня</a>
							</li>
							<li className="footer__menu-item">
								<a className="footer__menu-link" href="#">Проекты</a>
							</li>
							<li className="footer__menu-item">
								<a className="footer__menu-link" href="#">Услуги</a>
							</li>
							<li className="footer__menu-item">
								<a className="footer__menu-link" href="#">Блог</a>
							</li>
							<li className="footer__menu-item">
								<a className="footer__menu-link" href="#">Компания</a>
							</li>
						</ul>
					</div>

					<div className="col-md-3 footer__services">
						<h4 className="footer__services-title">Услуги</h4>
						<ul className="footer__services-list">
							<li className="footer__services-item">
								<a className="footer__services-link" href="#">Дизайн интерьера</a>
							</li>
							<li className="footer__services-item">
								<a className="footer__services-link" href="#">Проектирование</a>
							</li>
							<li className="footer__services-item">
								<a className="footer__services-link" href="#">Поставка дерева</a>
							</li>
							<li className="footer__services-item">
								<a className="footer__services-link" href="#">Ремонт</a>
							</li>
							<li className="footer__services-item">
								<a className="footer__services-link" href="#">Концепт</a>
							</li>
							<li className="footer__services-item">
								<a className="footer__services-link" href="#">Выезд мастера</a>
							</li>
						</ul>
					</div>

					<div className="footer__social col-md-3">
						<h4 className="footer__social-title">Мы в соц. сетях</h4>
						<span className="footer__social-desc">Подпишитесь на нас в социальных сетях, чтобы не пропустить выход новых невероятных проектов, разработанных для наших клиентов по всему миру.</span>
						<div className="footer__social-wrapper">
						<a href="#" className="footer-social__link" target="_blank">
								<InstIcon className="footer-social__icon" />
							</a>
							<a href="#" className="footer-social__link" target="_blank">
								<VkIcon className="footer-social__icon" />
							</a>
							<a href="#" className="footer-social__link" target="_blank">
								<FbIcon className="footer-social__icon" />
							</a>
							<a href="#" className="footer-social__link" target="_blank">
								<TwitterIcon className="footer-social__icon" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;