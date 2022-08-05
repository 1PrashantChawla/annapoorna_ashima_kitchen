import logo from './logo.svg';
import './App.css';


import Caraousel from './components/Caraousel';
import Navbar from './components/Navbar';

import Recipes from './components/Recipes';


function App() {
  return (
    <>
  <Navbar heading="Annapoorna | Ashima Kitchen" item1="Breakfast"  item2="Brunch"  item3Dropdown="Snacks"  item4="Dinner" />
   <Caraousel/>
   <Recipes/>
    </>
  );
}

export default App;
