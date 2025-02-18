import CoffeeCard from './components/coffeeCard';
import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
   return (
    <div className='text-center p-12 m-20'>
      <h1 className='text-3xl font-bold mb-10'>Our Popular Products</h1>
      <div className='grid grid-cols-2 gap-8'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees = {coffees}
            setCoffees = {setCoffees}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App;
