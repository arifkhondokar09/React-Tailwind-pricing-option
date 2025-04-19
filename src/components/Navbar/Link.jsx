import React from 'react';

const Link = ({route}) => {
   const {name, path}= route
    return (
        <li className=' lg:mr-10 m-2 hover:text-amber-500'> <a href={path}  >{name}</a></li>


//    <li> <a href={route.url}>{route.name}</a></li>
    );
};

export default Link;