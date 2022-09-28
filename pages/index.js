import { Product, FooterBanner, HeroBanner } from '../components'
//import client is the sanity client
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p className='hero__header__subtext'>
          Best of the Best in CPU technology
        </p>
      </div>
      <div className='product-list'>
        {products?.map((product) => product.name)}
      </div>
      {/* <div className='deal-of-the-day'>
        <h3 className='deal-of-the-day__title'>Deal of the Day</h3>
        <p>Get the best deals while they last!</p>
        <a href='#'>alkshdlakshd</a>
      </div> */}
      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  // write queries for the things you want to fetch from sanity

  const query = '*[_type == "product"]'
  // this query will return all products in the databaseq
  const products = await client.fetch(query)
  // products is an array of objects returned from the query

  const bannerQuery = '*[_type == "banner"]'
  // get everything which has a type of banner
  const bannerData = await client.fetch(bannerQuery)

  // return the data as props data to be used in the component
  return {
    props: {
      products, // products: products
      bannerData, // bannerData: bannerData
    },
  }
}

export default Home
