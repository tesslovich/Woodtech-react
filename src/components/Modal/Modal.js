import classNames from 'classnames';
import '../Modal/Modal.scss'
import { ReactComponent as CloseMenu } from '../../svg/closeMenu.svg';

function Modal(props) {
	return (
		<div className={classNames("modal", { 'modal__active': props.isOpen })}>
			<h4 className="modal__title">Оформить заявку</h4>
			<div className='modal__close'>
				<CloseMenu className='modal__close-icon' onClick={props.onModalClose} />
			</div>
			<form className='modal__from'>
				<input type='text' name='Имя' placeholder="Ваше имя..."></input>
				<input type='text' name='Телефон' placeholder='Ваш телефон...'></input>
				<textarea name='Комментарий' rows='4' placeholder='Комментарий...'></textarea>
				<div className='modal__footer'>
					<button className='button'>Отправить</button>
				</div>
			</form>
		</div>
	)
}

export default Modal;




