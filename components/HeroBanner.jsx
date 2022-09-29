import Image from 'next/image'
import Link from 'next/link'

// import urlFor to load image frin client
import { urlFor } from '../lib/client'

// import styles from '../styles/heroBanner.module.css'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(heroBanner.image)}
          alt='headphones'
          className='hero-banner-image'
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.description}</p>
          </div>
        </div>
      </div>
    </div>

    // <div className={styles.heroBannerContainer}>
    //   <div className={styles.grab_attention}>
    //     {/* @Todo Replace following with dynamic info from sanity */}
    //     <h3 className={styles.midText}>{heroBanner.midText}</h3>
    //     <h1 className={styles.banner_largeText1}>{heroBanner.largeText1}</h1>
    //     <p className={styles.smallText}>{heroBanner.smallText}</p>
    //     <Link href='product/ID'>
    //       <button className={styles.banner_button} type='button'>
    //         {heroBanner.buttonText}
    //       </button>
    //     </Link>
    //     {/* eslint-disable-next-line @next/next/no-img-element */}
    //     <img
    //       src={urlFor(heroBanner.image)}
    //       alt=''
    //       className={styles.bannerImage}
    //     />
    //     {/* <Image
    //       src={urlFor(heroBanner.image)}
    //       alt=' '
    //       width={heroBanner.image.asset.metadata.dimensions.width}
    //       height={heroBanner.image.asset.metadata.dimensions.height}
    //     /> */}
    //   </div>
    //   <div className={styles.banner_details}>
    //     {/* <Link href='product/ID'>
    //       <button type='button'>{heroBanner.buttonText}</button>
    //     </Link> */}
    //     <div className='desc'>
    //       <h5>Description</h5>
    //       <p>{heroBanner.description}</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default HeroBanner
