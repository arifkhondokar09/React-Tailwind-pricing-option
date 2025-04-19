import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div >
            <p className='flex text-gray-700 text-base '><CircleCheckBig className='mr-3 text-gray-700 w-3 '></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default Feature;