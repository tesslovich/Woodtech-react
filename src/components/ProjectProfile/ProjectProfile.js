import React from 'react'
import './ProjectProfile.scss'

function ProjectProfile() {
	return (
		<div className='container project-profile'>
			<div className='row'>
				<h3 className='project-profile__title'>Панорамная чилаут зона для чтения и отдыха</h3>
				<div className='col-md-8 project-profile__desc'>
					<p className='project-profile__text'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных.</p>
					<img className='project-profile__img' alt='5' src='/images/projectContent/plan1.jpg'></img>
					<p className='project-profile__text'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных.</p>
					<img className='project-profile__img' alt='5' src='/images/projectContent/plan2.jpg'></img>
					<p className='project-profile__text'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных.</p>
					<img className='project-profile__img' alt='5' src='/images/projectContent/interior-5.jpg'></img>
					<p className='project-profile__text'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных.</p>
					<img className='project-profile__img' alt='5' src='/images/projectContent/house-1.jpg'></img>
					<p className='project-profile__text'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных.</p>
				</div>
				<div className='col-md-4 project-profile__profile'>
					<h4 className='profile__title'>Старший архитектор</h4>
					<div className='profile__img-wrapper'>
						<img className='profile__img' src='/images/projectContent/photo.jpg' alt='6'></img>
					</div>
					<p className='profile__name'>Евгений Григорьев</p>
					<p className='profile__desc'>Выпускник гарвардского университета, кандидат наук, профессиональный архитектор. В общей сложности реализовал более 120 проектов.</p>
					<div className='profile__info-project'>

						<h5 className='profile__info-title'>Информация о проекте</h5>
						<div>Заказчик<span>Частное лицо</span></div>
						<div>Площадь<span>24 кв. м.</span></div>
						<div>Время разроботки<span>3 недели</span></div>
						<div>Высота потолка<span>3.4 метра</span></div>
						<div>Толщина стен<span>45 см.</span></div>


					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectProfile