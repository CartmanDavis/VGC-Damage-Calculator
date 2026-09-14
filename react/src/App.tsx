import './App.css';

import './ap_calc.css'
import './nb_calc.css'
import './select2.css'

import { GenerationSelect } from './GenerationSelect'
import { Header } from './Header';
import { MainResultGroup } from './MainResultGroup';
import { MoveResultGroup } from './MoveResultGroup';
import { StatDisplayDropdown } from './StatDisplayDropdown';

function App() {
  return (
    <div className="dark">
      <Header />
      <GenerationSelect />
      <StatDisplayDropdown />
      <MoveResultGroup />
      <MainResultGroup />
    </div>
  );
}

export default App;
