import React from 'react';
import Link from './Link';
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

const Navbar = () => {
    return (


  <ul className='flex'>
    {
        apiData.map( route => <Link route={route}> </Link>)
    }
  </ul>

        

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