import './App.css';

import './ap_calc.css'
import './nb_calc.css'
import './select2.css'

import { GenerationSelect } from './GenerationSelect'
import { Header } from './Header';
import { MainResultGroup } from './MainResultGroup';
import { MoveResultGroup } from './MoveResultGroup';
import { StatDisplayDropdown } from './StatDisplayDropdown';
import { PokemonDetails } from './PokemonDetails';

function App() {
  return (
    <div className="dark">
      <Header />
      <GenerationSelect />
      <StatDisplayDropdown />
      <MoveResultGroup />
      <MainResultGroup />
      <PokemonDetails />
      <PokemonDetails />
    </div>
  );
}

export default App;
