import React from 'react'
import { useState } from 'react'
import Cart from './Cart'

const ParentComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("activeIndex",activeIndex)
   return (
    <div className='bg-slate-100 px-3 py-2'  >
      <Cart title={'About Me'} isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>  
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quam maiores consectetur. Quae porro voluptates ad nemo, ullam libero accusamus.</p>
        <p className=''>__________________________________________________________</p>
      </Cart> 
      <Cart title={'Etymology'} isActive={activeIndex === 1} onShow={() => {setActiveIndex(1); console.log("button clicked : ")}}> 
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt modi debitis, voluptatibus, laboriosam minima aperiam repudiandae, ipsum quod molestias culpa natus mollitia harum ducimus? Quam delectus enim distinctio quos suscipit officiis repudiandae cupiditate tenetur harum inventore dolores, asperiores veritatis rem voluptatem odit accusantium blanditiis nisi! Neque, possimus debitis! Ipsam illum quis odit id sunt mollitia unde beatae, qui numquam deleniti, accusantium voluptatibus inventore aut sit nostrum ea doloribus molestiae ipsum!
        </p>
      </Cart> 
      

    </div>
  )
}

export default ParentComp
