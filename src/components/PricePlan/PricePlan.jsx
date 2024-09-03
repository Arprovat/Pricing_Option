import { duration } from '@mui/material';
import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const PricePlan = ({plan}) => {
    return (
        <div className='flex bg-slate-200 flex-col leading-normal mb-6 rounded-lg shadow-lg p-5 '>
            <h1 className='text-center text-amber-500 mb-4 text-3xl font-semibold'>{plan.price}/{plan.duration}</h1>
            <h1 className='text-center font-sans text-2xl underline mb-4 '>{plan.name}</h1>
            <p className='text-sm text-center font-serif text-slate-800 mb-6' >{plan.description}</p>
            <ul className='mb-6 flex-grow pl-4'>
                {
                plan.features.map( (feature,idx) => (<li key={idx} className='text-slate-700 mb-2 flex font-sans items-center'><AiFillCaretRight /> {feature}</li>))
                }
            </ul>
            <button className='w-full bg-white rounded-lg shadow-lg py-2 px-4 border-2 hover:bg-blue-500 font-semibold'> Choose Plan</button>
        </div>
    );
};

export default PricePlan;