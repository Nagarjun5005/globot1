import { useState } from "react";

const vacancies = [
  { id: "IRC258189", title: "Avenger", location: "Newyork, California", reward: "25000 INR" },
  { id: "IRC251984", title: "Fantastic 4", location: "India, Noida", reward: "25000 INR" },
  { id: "IRC251983", title: "Guardians Of Galaxy", location: "India, Noida", reward: "25000 INR" }
];

const ReferralPortal = () => {
  const [filters, setFilters] = useState({ vacancy: "", country: "", city: "", tech: "" });

  const handleChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-orange-500">IRP</span> <span>Internal Referral Portal</span>
        </h1>
        <div className="border-b mt-4 flex space-x-6 text-lg">
          <button className="text-orange-500 border-b-2 border-orange-500 pb-2">Hot Vacancies List</button>
        </div>

        <p className="mt-4 text-gray-600">You have a great opportunity to recommend your friends for open projects and receive a referral bonus.</p>

        <div className="mt-4 flex flex-wrap gap-3 justify-between">
          <input type="text" name="vacancy" placeholder="Enter IRC Vacancy" className="border p-2 rounded " onChange={handleChange} />
          <select name="country" className="border p-2 rounded" onChange={handleChange}>
            <option>All Countries</option>
          </select>
          <select name="city" className="border p-2 rounded" onChange={handleChange}>
            <option>All Cities</option>
          </select>
          <input type="text" name="tech" placeholder="Technology" className="border p-2 rounded" onChange={handleChange} />
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Search</button>
        </div>

        {/* <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded float-right">Invite your friend to GlobalLogic</button> */}

        <div className="mt-6">
          {vacancies.map((vacancy) => (
            <div key={vacancy.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
              <div>
                <h3 className=" text-xl font-bold">{vacancy.title} ({vacancy.id})</h3>
                <p className="text-gray-600">{vacancy.location}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{vacancy.reward}</p>
                <button className="bg-orange-500 text-white px-3 py-1 mt-2 rounded">Add A Referral</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralPortal;
