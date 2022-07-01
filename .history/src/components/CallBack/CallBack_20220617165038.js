import AdressLine from '../AdressLine/AdressLine';
import adressLineData from '../../config/adressLineData';
import Map from 'react-map-gl';
import './CallBack.scss';
import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';


function CallBack() {

	mapboxgl.accessToken = 'pk.eyJ1IjoidGVzc2xvdmk0IiwiYSI6ImNsNGloY2t6ejAzMGEzZnFmbW84YmJ2bTkifQ.TkYDk5jjDVKI2-wKrKIOZw'

	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
		container: mapContainer.current,
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [lng, lat],
		zoom: zoom
		});
		});

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
				<a className='phone-big home-callback__phone callback--phone' href='tel+74992467532' title='Позвонить...'>+7 (499) 246-75-32</a>
			
					<div ref={mapContainer}></div>
			

			</div>
		</div>
	)
}

export default CallBack;