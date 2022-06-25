import classNames from 'classnames';
import './AdressLine.scss';

function AdressLine(props) {
	const { data } = props;
	return (
		<div className={classNames('adress-line', props.className)}title='Санкт-Петербург, Английский Пр.'>{data[0].adress}</div>
	)
}

export default AdressLine;