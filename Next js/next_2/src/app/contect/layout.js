'use client'
import { usePathname } from "next/navigation"

 export default function Layout({children}) { 
    const currentPath = usePathname();
    return (
        <>
        { currentPath !== '/contect/company/employee' ? <h1>Hello Boy</h1> : null }
        
            {children}
        </>
    )
 }