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
import { FieldDetails } from './FieldDetails';

function App() {
  return (
    <div className="dark">
      <Header />
      <GenerationSelect />
      <StatDisplayDropdown />
      <MoveResultGroup />
      <MainResultGroup />
      <PokemonDetails />
      <FieldDetails />
      <PokemonDetails />
    </div>
  );
}

export default App;
