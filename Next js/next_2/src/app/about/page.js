import Link from 'next/link'
import React from 'react'


const About = () => {
  const routes = [
    {id: 1, name: 'Preet', route: '/preet'},
    {id: 2, name: 'Ankit', route: '/ankit'},
    {id: 3, name: 'Pratham', route: '/pratham'},
    {id: 4, name: 'Happy', route: '/happy'},
    {id: 5, name: 'Kamal', route: '/kamal'},
];

  return (
    <>    <div className=' mb-5 text-2xl'>
      About Page 

    </div>
     {
      routes.map((item) =>  <div className='px-4'>{<Link key={item.id} href={`/about/${item.route}`}> {item.name}</Link> }</div>)
     }
    <div>
    
    </div>
    </>
  )
}

export default About
