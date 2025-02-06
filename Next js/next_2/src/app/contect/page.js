'use client'
import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation';

const page = () => { 
    const router = useRouter();
    const handleNavigation = (routerName) => {
        router.push(routerName);
    }
  return (
    <div>
      Contect  
      <div>
        <Link href='/home' > Home </Link>
          -- Linking Routing 
      </div>
      <div>
        <button onClick={() => handleNavigation('/contect/company')}>Company</button>
      </div>
    </div>
  )
}

export default page
