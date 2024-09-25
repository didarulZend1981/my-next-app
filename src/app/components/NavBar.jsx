'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const pathName=usePathname();
  const isActive = (path) => path === pathName;
  console.log(pathName);
  const links=[
      {
        title:'About',
        path: 'about'
      },
      {
        title:'Contact',
        path: 'contact'
      },
      {
        title:'Services',
        path: 'services'
      }

  ]

  return (
    <>
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
          <h2 className="text-3xl">logo</h2>
          <ul className='flex justify-between items-center space-x-4 text-[white]'>

           {
            links?.map((link)=><Link className={isActive(link.path) ? 'text-cyan-900' : ''} key={link.path} href={link.path}>{link.title}</Link>)
           }
          </ul>
          <button className='bg-white text-cyan-400 p-2'>Login</button>
          </nav>
    </>
  );
};

export default NavBar;