import React from "react";
import Background from  '../Assests/globallogic_cover.jpg'
import bot from '../Assests/Groot.jpg'


const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Search Bar */}
       
        
        {/* Profile Header */}
        <div className="relative mt-6">
          <img
            src={Background}
            alt="Cover"
            className="w-full h-40 object-cover rounded-md "
          />
          <div className="absolute bottom-0 left-4 transform translate-y-1/2">
          <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white overflow-hidden">
            <img
              src={bot}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>
        
        {/* Profile Info */}
        <div className="mt-10 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold">Groot</h2>
          <p className="text-gray-500"> Guardian of Galaxy</p>
          <p className="text-gray-500">📍 Planet X , Space</p>
        </div>
        
        {/* Work Details */}
        <div className="mt-6 p-6 bg-white shadow-md rounded-md">
          <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Work Details</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-500">Employee ID</p>
              <p className="text-gray-900 font-semibold">127897</p>
            </div>
            <div>
              <p className="text-gray-500">Reports to</p>
              <p className="text-orange-500 font-semibold">Iron Man</p>
            </div>
            <div>
              <p className="text-gray-500">Organization</p>
              <p className="text-orange-500 font-semibold">Engineering</p>
            </div>
            <div>
              <p className="text-gray-500">HRBP</p>
              <p className="text-orange-500 font-semibold">Natasha</p>
            </div>
            <div>
              <p className="text-gray-500">Job Title</p>
              <p className="text-gray-900 font-semibold">Trainee Software Engineer, Engineering</p>
            </div>
          </div>
        </div>
       
      </main>
    </div>
  );
};

export default ProfilePage;
