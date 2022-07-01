import './Header.scss';
import { ReactComponent as MenuWhite } from '../../svg/menuWhite.svg';
import { ReactComponent as CloseMenu } from '../../svg/closeMenu.svg';
import { ReactComponent as InstIcon } from '../../svg/fa-icons/instagram-brands.svg';
import { ReactComponent as VkIcon } from '../../svg/fa-icons/vk.svg';
import { ReactComponent as FbIcon } from '../../svg/fa-icons/facebook-brands.svg';
import { ReactComponent as TwitterIcon } from '../../svg/fa-icons/twitter-brands.svg';
import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';




function Header(props) {
	const [showMenu, setShowMenu] = useState(false);

	const handleClick = () => {
		setShowMenu(!showMenu)
	}

	const renderMenu = () => {
		if (showMenu === true) {
			return <CloseMenu className="close-menu" onClick={handleClick} />
		} else {
			return <MenuWhite className="burger-menu" onClick={handleClick} />
		}
	}

	return (
		<div className='header'>
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-6">
						<div className="header__logo">
							<a className="header__logo-link" href="#"><i></i>Woodtech<span>Architecture</span></a>
						</div>
					</div>
					<div className="col-md-9 col-lg-6 col-6">
						<i className="header__menu-toggle" >
							{renderMenu()}
						</i>
						<ul className={classNames("header__menu", { "header__menu_active": showMenu })}>
							<li className="header__menu-item">
								<Link className="header__menu-link header__menu-link--main" to='/'>Главаня</Link>
							</li>
							<li className="header__menu-item">
								<Link className="header__menu-link" to='/projects'>Проекты</Link>
							</li>
							<li className="header__menu-item">
								<Link className="header__menu-link" to='/services'>Услуги</Link>
							</li>
							<li className="header__menu-item">
								<Link className="header__menu-link" to='/companyblogs'>Блог</Link>
							</li>
							<li className="header__menu-item">
								<Link className="header__menu-link" to='/company'>Компания</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-3 d-none d-lg-block heder__social-menu">
						<div className="header__nav-social">
							<a href="#" className="nav-social__link" target="_blank">
								<InstIcon className="nav-social__icon" />
							</a>
							<a href="#" className="nav-social__link" target="_blank">
								<VkIcon className="nav-social__icon" />
							</a>
							<a href="#" className="nav-social__link" target="_blank">
								<FbIcon className="nav-social__icon" />
							</a>
							<a href="#" className="nav-social__link" target="_blank">
								<TwitterIcon className="nav-social__icon" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Header;