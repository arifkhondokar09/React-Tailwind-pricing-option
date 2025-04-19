import { Check, CircleCheckBig } from 'lucide-react';
import React from 'react';
import Feature from '../Feature/Feature';

const Pricing = ({ pricing }) => {
  // console.log(pricing)
  const { title, price, description, features } = pricing;
  return (
    <div className='border-2 border-blue-200 m-5 p-3 flex flex-col space-y-3 rounded-xl'>
      {/* card header */}
      <div className='space-y-3'>
        <h1 className='font-semibold text-4xl'>{title}</h1>
        <h3 className='font-semibold text-xl text-blue-700'>{price}</h3>

      </div>
      {/* {
                features.map(feature => <p className='flex text-gray-700 font-medium'><CircleCheckBig className='mr-3'></CircleCheckBig>{feature} </p>)
                } */}

      {/* card body */}

      <div className='space-y-3 flex-1 bg-blue-50 rounded-xl  p-3'>
        <p className='font-semibold text-lg'>{description}</p>
        {
          features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
        }

      </div>

      <button className='btn w-full btn-primary '>Subscribe</button>

    </div>
  );
};

export default Pricing;