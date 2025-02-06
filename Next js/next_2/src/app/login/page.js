"use client"
import { useRouter } from 'next/navigation'
import Script from 'next/script';


const page = () => {
  const router = useRouter(); 
  const handler = ( event ) => {
    event.preventDefault(); 
    router.push('/home');    
  }
  return (
    <div className=' container  flex items-center justify-center mx-auto  '>
      <Script 
      src='./location.js'
      onLoad={() => console.log('file loaded')}
      />
       <div className='bg-white rounded-md px-3 py-4 '>
      <form>
        <div >
          <label className='text-slate-400 font-bold  text-sm py-2'>Username </label>
          <div>
            <input
              className='block '
              type='text'
              name='name'
              placeholder='Username or Email Address ..'
            />
          </div>
        </div>
        <div className=''>
          <label className='text-slate-400 font-bold text-sm py-2'>Password </label>
          <div>
            <input
              className=''
              type='password'
              name='name'
              placeholder='Enter your password ...... '
            />
          </div>
        </div>
        <button className='px-3 py-2 mt-5  rounded-md bg-orange-300'
        onClick={handler}>
          Sign Up 
        </button>
      </form>
      </div>

    </div>
  )
}

export default page
