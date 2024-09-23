import React, { useState } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';

const Card = () => {
  const [val, setval] = useState([
    {
      title: "Soil Testing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyz0pIyi-Tqp9Wi8m6Erpk5BRT6MhiTHCMvmPZpIVuA0caaZy2k_tpGQyoQfB4lUq6_0&usqp=CAU",
      description: "Get accurate crop yield forecasts based on soil and climate data. Plan your farming season with confidence."
    },

    {
      title: "Crop Predictor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYZ4VsJyTmdYmuwcUQTVaOrthg4XZOH9HopmnFN-I6q2-pp7WwyGnQSRe6XA9iYuxpjw&usqp=CAU",
      description: "Get accurate crop yield forecasts based on soil and climate data. Plan your farming season with confidence."
    },

    {
      title: "Rent Storage",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q3Xme7L5VwK2b4ii1_OkXMsRSecZv8BX2Ji7cuzdCwdW-4JPwm2lC1L0rLPYDhYwaOI&usqp=CAU",
      description: "Find nearby storage facilities for rent to securely store your harvested crops and equipment."
    },

    {
      title: "Livestock",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS029HmWL04OlydZYp0UIfri09cQhQFUqL8HuJ3azBYm5u78Yi2HMAMqy8c3FAKGdfYZi8&usqp=CAU",
      description: "Access tools and resources for managing and improving livestock health and productivity."
    },

    {
      title: "Rent Equipment",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEy76S07BCrnf48I6C0Z-vstSgJ9MPptdgr-PmFOckhLeAWWCkjCcDjQIp1nHEP6K7AQ&usqp=CAU",
      description: "Buy or sell agricultural equipment through a trusted platform for better efficiency in your farming operations."
    },

    {
      title: "Government Schemes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzaeV3lNqfD-gPX67_HmvDiAWTejSR4v2GFC7xufK-c30KZXImDH6DTBroHwJ9fcFEWg&usqp=CAU",
      description: "Stay updated with the latest government schemes and subsidies designed to benefit the farming community."
    },
    
  ]);

  return (
    
    <div className="w-full h-screen flex flex-wrap justify-center items-center">
       
      {val.map((data, index) => (
        
        <div key={index} className="m-5 w-full max-w-sm p-6 bg-zinc-100 text-center shadow-2xl transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl">
           
          <div className="flex items-center justify-center mb-4">
            <img src={data.image} alt="" className="h-16 w-16 " />
          </div>
          <h3 className="text-xl font-bold text-black mb-2">{data.title}</h3>
          <p className="text-black leading-relaxed mb-4">
            {data.description}
          </p>
          <div className="flex justify-end ">
            
            <LaunchIcon className="text-gray-500 " />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
