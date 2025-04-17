import React from 'react';

const Link = ({route}) => {
   const {name, path}= route
    return (
        <li className='mr-10'> <a href={path}  >{name}</a></li>


//    <li> <a href={route.url}>{route.name}</a></li>
    );
};

export default Link;