import './SideBar.scss'
import { sideBarData } from '../../config/sideBarData';
import classNames from 'classnames';

function SideBar(props) {
	const handleClick = (index) => {
		props.onClick(index)
	}
	return (
		<div className='sidebar'>
			<h3 className='sidebar__title'>Информация о нас</h3>
			<ul className='sidebar__list'>
				{sideBarData.map((val, key) => {
					return (
						<li
							// className='sidebar__item'
							className={classNames('sidebar__item', {"active" :props.activeIndex} )}
							
							key={key}
							// id={props.activeIndex === key ? "active" : ""}
						>
							<a onClick={(e) => {
								e.preventDefault()
								handleClick(key)
							}}>{val.title}</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default SideBar;