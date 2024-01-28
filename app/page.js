import Header from '../Components/Header/Header';
import Banner from '../Components/MainBanner/Banner';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer/Footer';
import Overview from '@/Components/PlatformOverview/Overview';
import BenefitsOfUnaport from '@/Components/BenefitsOfUnaport/BenefitsOfUnaport';
import AboutUnaport from '@/Components/About/AboutUnaport';
import Article from '@/Components/Article/Article';
import ArticleBelow from '@/Components/Article/ArticleBelow';
import AboutUnaportBelow from '@/Components/About/AboutUnaportBelow';

export default function Home() {
  return (
   <div className=' overflow-hidden'>
    <Header/>
    <Banner/>
    <Cards/>
    <Article/>
    <ArticleBelow/>
    <AboutUnaport/>
    {/* <AboutUnaportBelow/> */}
    {/* <BenefitsOfUnaport/> */}
    {/* <Overview/> */}
    <Footer/>
   </div>
  )
}
