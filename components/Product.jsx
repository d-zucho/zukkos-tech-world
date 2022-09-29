import { useNextSanityImage } from 'next-sanity-image'
// import Image from 'next/image'
import Link from 'next/link'
import { client } from '../lib/client'

import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`product/${slug.current}`}>
        <div className='product-card'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(image && image[0])}
            alt=' '
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
