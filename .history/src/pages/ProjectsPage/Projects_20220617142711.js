import React, { useState } from 'react';
import './Projects.scss';
import ourProjectsData from '../../config/ourProjectsData';
import PageTitle from '../../components/PageTitle/PageTitle';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';

function Projects() {
	return (
		<div className="projescts-page">
			<Header />
			<PageTitle title={'Наши проекты'} desc={'Представляем вам лучшие работы нашей студии дизайна. От потрясающих гостиных до самых необычных эксклюзивных решений.'} />
			<div className='container'>
				<div className='row'>
					<div className='projescts__wrapper col-xl-12'>
						{ourProjectsData.map((item) => {
							return (
								<div className="projescts-page__item">
									<div className="projescts-page__item-wrapper">
										<a className="projescts-page__item-link" href="#">
											<img alt="1" src={item.src}></img>
										</a>
										<div className='projescts-page__item--hover'>
											<span>Заказчик: Компания «Арес»</span>
											<h4>Холл для гостей</h4>
											<Link className='projescts-page__hover--link' to='/projectpage'>Ознакомиться</Link>
										</div>
									</div>

								</div>
							)
						})}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Projects;
