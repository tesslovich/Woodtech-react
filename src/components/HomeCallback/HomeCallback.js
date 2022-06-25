import { useState } from 'react';
import Button from '../Button/Button';
import './HomeCallback.scss';
import Modal from '../Modal/Modal';


function HomeCallback(props) {
	const { data } = props;

	const [showModal, setShowModal] = useState(false);

	return (
		<section className="home-callback">
			<Modal isOpen={showModal} onModalClose={() => setShowModal(false)} />
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-6">
						<h3 className="home-callback__header">Нам доверяют</h3>
						<ul className="home-callback__list">
							{data.map((item) => {
								return (
									<li key={item.id} className="home-callback__item"><span>{item.number}</span>{item.text}</li>
								)
							})}
						</ul>
					</div>
					<div className="col-xl-4 col-lg-6 home-callback__text-right">
						<p>Позвоните нам или оставьте заявку с сайта.<br />Мы перезвоним вам в течение 10 минут.</p>
						<a className='phone-big home-callback__phone' href='tel+74992467532' title='Позвонить...'>+7 (499) 246-75-32</a>
						<Button className='home-callback__button' onClick={() => setShowModal(true)} />
					</div>
				</div>
			</div>
		</section >
	)
}

export default HomeCallback;

