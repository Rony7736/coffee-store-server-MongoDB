
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

    return (
        <div>
            <h2>Welcome Coffee home: {loadedCoffees.length}</h2>

            <div className='grid grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
        </div>
    );
};

export default Home;