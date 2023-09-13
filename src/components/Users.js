import React from 'react';
import { avaters } from '../assets/img';
const Users = () => {
  return <div className='flex flex-row items-center gap-3'>
    <div className='flex -space-x-2 flex-row'>
    {
      avaters.map((data,index)=>{
        return(
          <img className='w-[25px]' src={data}/>
        )
      })
    }

  </div>
  <div className=''>
    <p className='text-[12px]'> . 400k people online</p>
  </div>
  </div>;
};

export default Users;
