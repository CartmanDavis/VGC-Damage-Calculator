import './App.css';

import './ap_calc.css'
import './nb_calc.css'
import './select2.css'

import { GenerationSelect } from './GenerationSelect'

function App() {
  return (
    <div className="dark">
      <div className="header">
        <div className="wrapper">
          <span className="header-logo"><a href="http://nimbasacitypost.com" target="_blank" rel="noopener noreferrer"><img src="image_res/Logo Nimbasa City Post White Text PNG.png" alt="Nimbasa City Post" style={{ height: "45px", paddingTop: "5px" }} /></a></span><input type="checkbox" id="navToggle" className="nav-toggle-input" /><label htmlFor="navToggle" className="nav-toggle" aria-label="Menu" title="Menu">&#9776;</label><span className="nav"><a href="http://nimbasacitypost.com" target="_blank" rel="noopener noreferrer">Home</a> | <a href="http://play.pokemonshowdown.com/vgc" target="_blank" rel="noopener noreferrer">Showdown</a> | <a href="https://statcrusher.com/" target="_blank" rel="noopener noreferrer">StatCrusher</a> | <a href="https://docs.google.com/spreadsheets/d/1axlwmzPA49rYkqXh7zHvAtSP-TKbM0ijGYBPRflLSWw" target="_blank" rel="noopener noreferrer">VGCPastes Repository</a> | <a href="https://github.com/nerd-of-now/NCP-VGC-Damage-Calculator" target="_blank" rel="noopener noreferrer">GitHub Page</a> | <a href="https://www.nimbasacitypost.com/2019/12/vgc-resources.html" target="_blank" rel="noopener noreferrer">Other VGC Resources</a><span className="header-toggles"><button className="btn" id="switchTheme">Dark theme</button><input className="btn-input" type="checkbox" id="switchDex" /><label className="btn dex-change gen-specific g8 g9 g10" htmlFor="switchDex" title="Include Pokémon that aren't in this gen?">National Dex</label><input className="btn-input" type="checkbox" id="toggleCustMods" /><label className="btn dex-change gen-specific g5 g6 g7 g8 g9 g10" htmlFor="toggleCustMods" title="Enable custom modifiers? (Technical; intended for mechanics testing)">Custom Mods</label><span className="stat-type-mobile"><span className="stat-type-label">Stat type</span><select className="stat-type-select"><option value="SPs">SPs</option><option value="raw">Actual Stats</option><option value="EVs">EVs</option></select></span></span></span>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
      <div className="wrapper">
        <div>
          <span className="title-text">VGC 2026: Champions Damage Calculator</span>
          <GenerationSelect />
        </div>
      </div>
    </div>
  );
}

export default App;
