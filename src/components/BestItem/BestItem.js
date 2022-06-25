import AdressLine from '../AdressLine/AdressLine';
import './BestItem.scss';
import adressLineData from '../../config/adressLineData';

function BestItem(props) {
	const { data } = props;

	return (
		<div className='best-item__wrapper'>
			{data.map((item) => {
				return (
					<div className='col-md-4'>
						<a href='#' className='best-item'>
							<div className='best-item__img-wrapper'>
								<img src={item.src} alt={item.alt}></img>
							</div>
							<div className='best-item__content'>
								<AdressLine data={adressLineData} />
								<div className='best-item__desc'>{item.desc}</div>
							</div>
						</a>
					</div>
				)
			})}
		</div>

	)
}


export default BestItem;