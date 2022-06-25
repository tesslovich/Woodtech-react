import Header from "../../components/Header/Header";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import homeSliderData from '../../config/homeSliderData';
import HomeCallback from "../../components/HomeCallback/HomeCallback";
import homeCallbackData from '../../config/homeCallbackData';
import BestWorks from "../../components/BestWorks/BestWorks";
import Advantages from "../../components/Advantages/Advantages";
import advantagesSliderData from '../../config/advatagesSliderData';
import OurPartners from "../../components/OurPartners/OurPartners";
import OurBlog from "../../components/OurBlog/OurBlog";
import blogItemsData from '../../config/blogItemsData';
import Footer from "../../components/Footer/Footer";

function Home() {
	return (
		<div className="home-page">
			<Header />
			<HomeSlider data={homeSliderData} />
			<HomeCallback data={homeCallbackData} />
			<BestWorks />
			<Advantages data={advantagesSliderData} />
			<OurPartners />
			<OurBlog data={blogItemsData} />
			<Footer />
		</div>
	)
}

export default Home;