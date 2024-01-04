import Header from './Header/page'
import Banner from './MainBanner/page'
import Cards from './Cards/page'

export default function Home() {
  return (
   <div className='container'>
    <Header/>
    <Banner/>
    <Cards/>
   </div>
  )
}
