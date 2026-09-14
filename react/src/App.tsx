import './App.css';

import './ap_calc.css'
import './nb_calc.css'
import './select2.css'

import { GenerationSelect } from './GenerationSelect'
import { Header } from './Header';

function App() {
  return (
    <div className="dark">
      <Header />
      <GenerationSelect />
    </div>
  );
}

export default App;



