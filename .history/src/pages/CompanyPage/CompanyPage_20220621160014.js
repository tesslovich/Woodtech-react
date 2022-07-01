import { useState } from "react";
import './CompanyPage.scss';
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import HeaderWhite from "../../components/HeaderWhite/HeaderWhite";
import SideBar from "../../components/SideBar/SideBar";
import Footer from '../../components/Footer/Footer';
import CompanyPartners from "../../components/CompanyPartners/CompanyPartners";
import companyPartnersData from '../../config/companyPartnersData';
import OurBenefits from "../../components/OurBenefits/OurBenefits";
import ourBenefitsData from "../../config/ourBenefitsData";
import CallBack from "../../components/CallBack/CallBack";
import HeaderWhite from "../../components/Header/Header";

function CompanyPage() {
	const [activeIndex, setActiveIndex] = useState(0);

	const renderContent = () => {
		if (activeIndex === 0) {
			return <AboutCompany />
		} else if (activeIndex === 1) {
			return <OurBenefits data={ourBenefitsData} />
		} else if (activeIndex === 2) {
			return <CompanyPartners data={companyPartnersData} />
		} else if (activeIndex === 3) {
			return <CallBack />
		}

		// switch (activeIndex) {
		// 	case 0: 
		// 	return <AboutCompany />;
		// 	case 1:
		// 	return <Benefits />
		// }

	}

	return (
		<div className="company-page">
			<HeaderWhite />
			<div className="container">
				<div className="row">
					<div className="sidebar__wrapper col-lg-3 col-md-12">
						<SideBar onClick={(index) => setActiveIndex(index)} activeIndex={activeIndex} />
					</div>
					<div className="company-page__content col-lg-9 col-md-12">
						{renderContent()}
					</div>
				</div>
			</div>
			<Footer />
		</div>

	)
}

export default CompanyPage;