import Image  from 'next/image'
import { Inter } from 'next/font/google';
import Button from './button.jsx'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})
async function productList()  {
  console.log('i called ');
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products
}

const Products =  async () => {
    const products = await productList();
    console.log("products",products)
  return (
    <>
    <div>
      <Image
      className='bg-white px-3 py-4 rounded-md '
      src='/next.svg'
      width= '200'
      height= '200'
      /> 
    </div>
    <div>
      Product List: 
      {
        products.map((item) => <><div className={inter.className} key={item.id}> {item.title}
        <Button price={item.price} />
        </div>
        </>
        )
      }

    </div>
    
    </>
  )
}

export default Products
