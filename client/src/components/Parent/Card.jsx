import React, { useState } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';

const Card = () => {
  const [val] = useState([
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
    }
  ]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 p-6">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-8"> Additional Features</h2>

     
      <div className="w-full flex flex-wrap justify-center items-center gap-6">
        {val.map((data, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            
            <div className="bg-gray-200 p-4 flex justify-center items-center">
              <img src={data.image} alt="" className="h-16 w-16 rounded-full object-cover object-center" />
            </div>

           
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h3>
              <p className="text-gray-600 font-semibold text-sm mb-4">{data.description}</p>

              
              <div className="flex justify-end">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-400 hover:scale-110 transition-transform duration-300 ease-in-out ">
                  <LaunchIcon className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;