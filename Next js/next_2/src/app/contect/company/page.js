'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const Company = () => {
    const router = useRouter();
    const handleNavigation = (routerName) => {
        router.push(routerName);
    }
  return (
    <div>
      Company Page 
      <div >
         <button onClick={() => handleNavigation('/contect/company/employee')}>Employee </button>
      </div> 
    </div>
  )
}

export default Company
