import React, { useState } from 'react'

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

const ProductImages = ({images = [{url:''}]}:any) => {
  const[main,setMain] = useState(images[0]);

  return (
    <section>
      <img src={main.url} className='h-300px w-full block rounded object-cover md:h-500px sm:h-600px' alt="main image" />
      <div className='mt-4 grid grid-cols-5 gap-x-4'>
        {images.map( (image : any, index : any) =>
          (<img className={classNames(
                  image.url === main.url ? 'shadow-primary-clr-primary-5 shadow' : '',
                  'w-full block rounded object-cover cursor-pointer h-50px md:h-75px sm:h-100px'
                )}
                src={image.url}
                key={index}
                alt={image.filename}
                onClick={() => setMain(images[index])} />))}
      </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   .main {
//     height: 600px;
//   }
//   img {
//     width: 100%;
//     display: block;
//     border-radius: var(--radius);
//     object-fit: cover;
//   }
//   .gallery {
//     margin-top: 1rem;
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     column-gap: 1rem;
//     img {
//       height: 100px;
//       cursor: pointer;
//     }
//   }
//   .active {
//     box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
//   }
//   @media (max-width: 576px) {
//     .main {
//       height: 300px;
//     }
//     .gallery {
//       img {
//         height: 50px;
//       }
//     }
//   }
//   @media (min-width: 992px) {
//     .main {
//       height: 500px;
//     }
//     .gallery {
//       img {
//         height: 75px;
//       }
//     }
//   }
// `

export default ProductImages
