import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);

    // console.log(pricingData)
    return (
        <div className=' mx-5 my-10 grid   md:grid-cols-2 lg:grid-cols-3 '>
            {pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard> 
       )}

            {pricingData.map(item => {
                
                return <DaisyPricingCard key={item.id} features={item} />
            })}


        </div>
    );
};

export default PricingOptions;