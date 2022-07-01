import AdressLine from '../AdressLine/AdressLine';
import adressLineData from '../../config/adressLineData';
import Map from 'react-map-gl';
import './CallBack.scss';
import { useState } from 'react';


function CallBack() {

	const [viewport, setViewport] = useState({
		longitude: -100,
		latitude: 40,
		width: '100vh',
		height: '100vh',
		zoom: 3.5
	});

	mapboxgl.accessToken = 'pk.eyJ1IjoidGVzc2xvdmk0IiwiYSI6ImNsNGloY2t6ejAzMGEzZnFmbW84YmJ2bTkifQ.TkYDk5jjDVKI2-wKrKIOZw'

	return (
		<div className="call-back">
			<div className="call-back__form">
				<h3 className="call-back__form-title">Обратная связь</h3>
				<p className="call-back__desc">Задайте нам любой вопрос, напишите или сделайте заказ.<br />
					Наши менеджеры ответят вам в ближайшее время.</p>
				<form className='form'>
					<input type='text' name="Имя" placeholder="Имя..."></input>
					<input type='tel' name='tel' placeholder="Телефон..."></input>
					<textarea name="Комментарий" rows={4} placeholder='Ваше сообщение...'></textarea>
				</form>
				<a href='#' className='button'>Отправить сообщение</a>
			</div>
			<div className='call-back__map'>
				<h3 className='call-back__map-title'>Наши контакты</h3>
				<AdressLine data={adressLineData} />
				<a className='phone-big home-callback__phone' href='tel+74992467532' title='Позвонить...'>+7 (499) 246-75-32</a>
				<div className='map__wrapper'>
					<Map {...viewport} mapboxAccessToken={mapboxgl}>123</Map>
				</div>

			</div>
		</div>
	)
}

export default CallBack;