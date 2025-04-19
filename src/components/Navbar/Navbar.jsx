import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const apiData = [
    {
        name: "Home",
        path: "/home/",
        id: 12345,
        url: "https://example.com/users/home/12345"
    },
    {
        name: "About",
        path: "/about/",
        id: 987,
        url: "https://blogsite.com/posts/about/987"
    },
    {
        name: "Blog",
        path: "/blog/",
        id: 456789,
        url: "https://shop.com/product/blog/456789"
    }

];


const links=   apiData.map((route , index) => <Link key={index} route={route}> </Link>);
const Navbar = () => {
    const [open, setOpen]= useState(false)
    return (


 <nav className='flex justify-between p-3 bg-gray-200 '>
    <div className='flex   ' onClick={()=> setOpen(!open)}>
        {open ? <X className='lg:hidden'></X> :  <Menu className='lg:hidden'></Menu> }
   
    {/* <AlignJustify className='lg:hidden'></AlignJustify> */}
    <ul className={`lg:hidden absolute p-3 bg-gray-300 hover:text-amber-400 ${open ? "top-12": "-top-40"}`}>
    {
            links
        }
    </ul>
    <h1 className='ml-4 mt-2 font-bold'>MyNavBar</h1>
    </div>
     <ul className=' hidden lg:flex '>
    {
     links
    }
  </ul>
  <button className='btn'>Sign In</button>
 </nav>

        

        // <ul>
        //     {
        //         apiData.map (route => <li key={route.id} className='mr-10'><a href={route.url}>{route.name}</a></li>)
        //     }
        // </ul>


        // <ul className='flex'>
        //     <li className='mr-10'><a href="/">Home</a></li>
        //     <li className='mr-10'><a href="about"></a>About</li>
        //     <li className='mr-10'><a href="blog">Blog</a></li>

        // </ul>

    );
};

export default Navbar;