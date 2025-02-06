import Link from 'next/link'
import React from 'react'

const Layout = () => {
  return (
    <div className='flex px-3 py-3 justify-between mb-4 gap-4 bg-orange-500   '>
   
      <Link href='/home ' > Home</Link>
      <Link href='/contect'> Contact</Link>
      <Link href='/doc' > Docs</Link>
      <Link href='/about' > About</Link>
      <Link href='/login' > Login</Link>
      <Link href='/signup' > Sign Up</Link>
    </div>
  )
}

export default Layout
