import React, { useState } from 'react';

const vehicles = [
    {
        id: 1,
        name: 'Honda Activa 6G',
        type: 'Bike',
        price: 350,
        image: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Source: BikeWale
    },
    {
        id: 2,
        name: 'Yamaha R15 V4',
        type: 'Bike',
        price: 800,
        image: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Source: BikeWale
    },
    {
        id: 3,
        name: 'Hyundai i20 Sportz',
        type: 'Car',
        price: 1500,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=car-vehicle-luxury-116675.jpg&fm=jpg' // Source: CarDekho
    },
    {
        id: 4,
        name: 'Maruti Swift Dzire',
        type: 'Car',
        price: 1200,
        image: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Source: CarDekho
    },
    {
        id: 3,
        name: 'Hyundai i20 Sportz',
        type: 'Car',
        price: 1500,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=car-vehicle-luxury-116675.jpg&fm=jpg' // Source: CarDekho
    },
    {
        id: 3,
        name: 'Hyundai i20 Sportz',
        type: 'Car',
        price: 1500,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=car-vehicle-luxury-116675.jpg&fm=jpg' // Source: CarDekho
    },
    {
        id: 3,
        name: 'Hyundai i20 Sportz',
        type: 'Car',
        price: 1500,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=car-vehicle-luxury-116675.jpg&fm=jpg' // Source: CarDekho
    },
];


const Home = () => {
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState('All');

    const filteredVehicles = vehicles.filter(vehicle =>
        (filterType === 'All' || vehicle.type === filterType) &&
        vehicle.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">🚗 Car & 🏍️ Bike Rentals</h1>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-4 py-2 rounded shadow-sm w-full sm:w-1/2"
                />

                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="border px-4 py-2 rounded shadow-sm w-full sm:w-1/4"
                >
                    <option value="All">All</option>
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                </select>
            </div>

            {/* Vehicle Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredVehicles.map(vehicle => (
                    <div key={vehicle.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                        <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-48 object-cover rounded"
                        />
                        <h2 className="text-xl font-semibold mt-2">{vehicle.name}</h2>
                        <p className="text-gray-600">{vehicle.type}</p>
                        <p className="mt-1 text-green-600 font-bold">₹{vehicle.price} / day</p>
                        <div className="mt-3 flex gap-2">
                            <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
                                Rent Now
                            </button>
                            <button className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700">
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredVehicles.length === 0 && (
                <p className="text-center mt-6 text-gray-500">No vehicles found.</p>
            )}
        </div>
    );
};

export default Home;
