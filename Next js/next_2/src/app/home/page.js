'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const home = () => {
  const router = useRouter();
  const handleNavigation = (routerName) => {
    router.push(routerName); 
  }
  return (
    <div>
      Home
      <div>
        <button onClick={() => handleNavigation('/contect')}>Contect</button> 
        <span className=' px-6 '>  ---  Routing with Navigation</span>
      </div>
        <Link href='/product'> Products </Link>
        <Link href='/user'> Go to User Page  </Link>
    </div>
  )
}

export default home
