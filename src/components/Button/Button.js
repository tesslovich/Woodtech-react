import './Button.scss';
import classNames from 'classnames';

function Button(props) {
	return (
		<button className={classNames('button', props.className)} onClick={props.onClick}>Оформить заявку сейчас</button>
	)
}

export default Button;