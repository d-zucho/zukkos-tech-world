import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { client } from '../lib/client'

import { urlFor } from '../lib/client'

const Product = ({ product }) => {
  const imageProps = useNextSanityImage(client, product.image)
  return (
    <div className='product-container'>
      <h3>{product.name}</h3>
      <div className='product-image'>
        <Image
          {...imageProps}
          src={urlFor(product.image)}
          width='250px'
          height='250px'
          alt='product image from product.js'
          layout='fill'
        />
      </div>
    </div>
  )
}

export default Product
