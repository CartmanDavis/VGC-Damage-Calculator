import { MovesetSelection } from "./MovesetSelection";
import { Sidebar } from "./Sidebar";

/**
 * TODO: parameterize 
 * TODO: this probably should be broken up more
 **/
export function PokemonDetails() {
  return <div className="panel poke-info" id="p1">
    <input type="checkbox" className="collapse-toggle" id="collapseP1" />
    <div className="panel-heading"><h4 className="panel-title">Pokémon 1</h4><label htmlFor="collapseP1" className="collapse-toggle-btn" title="Show only the set selector">Details</label></div>
    <div className="panel-body">
      <input type="text" className="set-selector calc-trigger" />&nbsp;&nbsp;
      <select className="hidden-power calc-trigger hide">
        <option selected className="hidden-power-type">HP [placeholder] IVs</option>
        <optgroup label="min Atk" className="min-atk"></optgroup>
        <optgroup label="min Atk+Spe" className="min-atk-spe"></optgroup>
        <optgroup label="max IVs" className="max-ivs"></optgroup>
        <optgroup label="min Spe" className="min-spe"></optgroup>
      </select>
      <div className="set-checkbox gen-specific g3 g4 g5 g6 g7 g8 g9 g10">
        <input type="checkbox" className="set-toggle" /> Custom sets only
      </div>
      <div className="info-group">
        <div>
          <label>Type</label>
          <select className="type1 terrain-trigger calc-trigger"></select>
          <select className="type2 terrain-trigger calc-trigger"></select>
        </div>
        <div className="gen-specific g9 hide">
          <label>Tera Type</label>
          <select className="tera-type calc-trigger gen-specific g9"></select>
        </div>
        <div className="hide">
          <label>Forme</label>
          <select className="forme calc-trigger"></select>
        </div>
        <div className="gen-specific g1 g2 g3 g4 g5 g6 g7 g8 g9">
          <label>Level</label>
          <input className="level calc-trigger" value="100" />
        </div>
        <div className="hide">
          <label></label>
          <input className="transform calc-trigger btn-input" type="checkbox" id="transformL" /><label className="btn" htmlFor="transformL" title="Transform this Pokémon into the opposing Pokémon? You can't save/export sets of this Pokémon while it's Transformed.">Transform</label>
        </div>
        <div className="hide">
          <label>Weight (kg)</label>
          <input className="weight calc-trigger" value="10.0" />
        </div>
      </div>
      <Sidebar />
      <div className="info-group">
        <table>
          <tr><th></th><th>Base</th><th className="gen-specific g3 g4 g5 g6 g7 g8 g9">IVs</th><th className="gen-specific g10 hide">Stat Points</th><th className="gen-specific g3 g4 g5 g6 g7 g8 g9">EVs</th><th className="gen-specific g1 g2 hide">DVs</th><th></th><th></th></tr>
          <tr className="hp"><td><label>HP</label></td><td><input className="base calc-trigger" value="100" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="ivs calc-trigger team-trigger" type="number" min="0" max="31" value="31" /></td><td className="gen-specific g10 hide"><input className="sps calc-trigger team-trigger" type="number" min="0" max="32" value="0" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="evs calc-trigger team-trigger" type="number" min="0" max="252" step="4" value="0" /></td><td className="gen-specific g1 g2 hide"><input className="dvs calc-trigger" value="15" disabled={true} /></td><td><span className="total">341</span></td><td></td></tr>
          <tr className="at"><td><label>Attack</label></td><td><input className="base calc-trigger" value="100" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="ivs calc-trigger team-trigger" type="number" min="0" max="31" value="31" /></td><td className="gen-specific g10 hide"><input className="sps calc-trigger team-trigger" type="number" min="0" max="32" value="0" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="evs calc-trigger team-trigger" type="number" min="0" max="252" step="4" value="0" /></td><td className="gen-specific g1 g2 hide"><input className="dvs calc-trigger" value="15" /></td><td><span className="total">236</span></td><td><select className="boost calc-trigger"><option value="6">+6</option><option value="5">+5</option><option value="4">+4</option><option value="3">+3</option><option value="2">+2</option><option value="1">+1</option><option value="0" selected={true}>--</option><option value="-1">-1</option><option value="-2">-2</option><option value="-3">-3</option><option value="-4">-4</option><option value="-5">-5</option><option value="-6">-6</option></select></td></tr>
          <tr className="df"><td><label>Defense</label></td><td><input className="base calc-trigger" value="100" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="ivs calc-trigger team-trigger" type="number" min="0" max="31" value="31" /></td><td className="gen-specific g10 hide"><input className="sps calc-trigger team-trigger" type="number" min="0" max="32" value="0" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="evs calc-trigger team-trigger" type="number" min="0" max="252" step="4" value="0" /></td><td className="gen-specific g1 g2 hide"><input className="dvs calc-trigger" value="15" /></td><td><span className="total">236</span></td><td><select className="boost calc-trigger"><option value="6">+6</option><option value="5">+5</option><option value="4">+4</option><option value="3">+3</option><option value="2">+2</option><option value="1">+1</option><option value="0" selected={true}>--</option><option value="-1">-1</option><option value="-2">-2</option><option value="-3">-3</option><option value="-4">-4</option><option value="-5">-5</option><option value="-6">-6</option></select></td></tr>
          <tr className="sa gen-specific g2 g3 g4 g5 g6 g7 g8 g9 g10"><td><label>Sp. Atk</label></td><td><input className="base calc-trigger" value="100" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="ivs calc-trigger team-trigger" type="number" min="0" max="31" value="31" /></td><td className="gen-specific g10 hide"><input className="sps calc-trigger team-trigger" type="number" min="0" max="32" value="0" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="evs calc-trigger team-trigger" type="number" min="0" max="252" step="4" value="0" /></td><td className="gen-specific g1 g2 hide"><input className="dvs calc-trigger" value="15" /></td><td><span className="total">236</span></td><td><select className="boost calc-trigger"><option value="6">+6</option><option value="5">+5</option><option value="4">+4</option><option value="3">+3</option><option value="2">+2</option><option value="1">+1</option><option value="0" selected={true}>--</option><option value="-1">-1</option><option value="-2">-2</option><option value="-3">-3</option><option value="-4">-4</option><option value="-5">-5</option><option value="-6">-6</option></select></td></tr>
          <tr className="sd gen-specific g2 g3 g4 g5 g6 g7 g8 g9 g10"><td><label>Sp. Def</label></td><td><input className="base calc-trigger" value="100" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="ivs calc-trigger team-trigger" type="number" min="0" max="31" value="31" /></td><td className="gen-specific g10 hide"><input className="sps calc-trigger team-trigger" type="number" min="0" max="32" value="0" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="evs calc-trigger team-trigger" type="number" min="0" max="252" step="4" value="0" /></td><td className="gen-specific g1 g2 hide"><input className="dvs calc-trigger" value="15" disabled={true} /></td><td><span className="total">236</span></td><td><select className="boost calc-trigger"><option value="6">+6</option><option value="5">+5</option><option value="4">+4</option><option value="3">+3</option><option value="2">+2</option><option value="1">+1</option><option value="0" selected={true}>--</option><option value="-1">-1</option><option value="-2">-2</option><option value="-3">-3</option><option value="-4">-4</option><option value="-5">-5</option><option value="-6">-6</option></select></td></tr>
          <tr className="sl gen-specific g1 hide"><td><label>Special</label></td><td><input className="base calc-trigger" value="100" /></td><td><input className="dvs calc-trigger" value="15" /></td><td><span className="total">236</span></td><td><select className="boost calc-trigger"><option value="6">+6</option><option value="5">+5</option><option value="4">+4</option><option value="3">+3</option><option value="2">+2</option><option value="1">+1</option><option value="0" selected={true}>--</option><option value="-1">-1</option><option value="-2">-2</option><option value="-3">-3</option><option value="-4">-4</option><option value="-5">-5</option><option value="-6">-6</option></select></td></tr>
          <tr className="sp"><td><label>Speed</label></td><td><input className="base calc-trigger" value="100" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="ivs calc-trigger team-trigger" type="number" min="0" max="31" value="31" /></td><td className="gen-specific g10 hide"><input className="sps calc-trigger team-trigger" type="number" min="0" max="32" value="0" /></td><td className="gen-specific g3 g4 g5 g6 g7 g8 g9"><input className="evs calc-trigger team-trigger" type="number" min="0" max="252" step="4" value="0" /></td><td className="gen-specific g1 g2 hide"><input className="dvs calc-trigger" value="15" /></td><td><span className="total">236</span></td><td><select className="boost calc-trigger"><option value="6">+6</option><option value="5">+5</option><option value="4">+4</option><option value="3">+3</option><option value="2">+2</option><option value="1">+1</option><option value="0" selected={true}>--</option><option value="-1">-1</option><option value="-2">-2</option><option value="-3">-3</option><option value="-4">-4</option><option value="-5">-5</option><option value="-6">-6</option></select></td><td><span className="p1-speed-mods">236</span></td></tr>
          <tr className="gen-specific g3 g4 g5 g6 g7 g8 g9 g10"><td></td><td></td><td></td><td className='ev-total'>&nbsp;</td><td className='ev-left'>&nbsp;</td><td></td><td></td><td></td></tr>
        </table>
      </div>
      <div className="info-group info-selectors">
        <div className="gen-specific g3 g4 g5 g6 g7 g8 g9 g10">
          <label>Nature</label>
          <select className="nature calc-trigger"><option value="Adamant">Adamant (+Atk, -SpA)</option><option value="Bashful">Bashful</option><option value="Bold">Bold (+Def, -Atk)</option><option value="Brave">Brave (+Atk, -Spe)</option><option value="Calm">Calm (+SpD, -Atk)</option><option value="Careful">Careful (+SpD, -SpA)</option><option value="Docile">Docile</option><option value="Gentle">Gentle (+SpD, -Def)</option><option value="Hardy" selected={true}>Hardy</option><option value="Hasty">Hasty (+Spe, -Def)</option><option value="Impish">Impish (+Def, -SpA)</option><option value="Jolly">Jolly (+Spe, -SpA)</option><option value="Lax">Lax (+Def, -SpD)</option><option value="Lonely">Lonely (+Atk, -Def)</option><option value="Mild">Mild (+SpA, -Def)</option><option value="Modest">Modest (+SpA, -Atk)</option><option value="Naive">Naive (+Spe, -SpD)</option><option value="Naughty">Naughty (+Atk, -SpD)</option><option value="Quiet">Quiet (+SpA, -Spe)</option><option value="Quirky">Quirky</option><option value="Rash">Rash (+SpA, -SpD)</option><option value="Relaxed">Relaxed (+Def, -Spe)</option><option value="Sassy">Sassy (+SpD, -Spe)</option><option value="Serious">Serious</option><option value="Timid">Timid (+Spe, -Atk)</option></select>
        </div>
        <div className="gen-specific g3 g4 g5 g6 g7 g8 g9 g10">
          <label>Ability</label>
          <select className="ability terrain-trigger calc-trigger small-select"></select>
          <input className="abilityToggle calc-trigger hide" type="checkbox" title="Is this Ability active?" />
          <select className="ability-supreme calc-trigger hide"><option value="0">0 down</option><option value="1">1 down</option><option value="2">2 down</option><option value="3">3 down</option><option value="4">4 down</option><option value="5">5 down</option></select>
          <select className="ability-rivalry calc-trigger hide"><option value="">Off</option><option value="Same">Same Gender</option><option value="Opposite">Opposite Genders</option></select>
          <input className="ability-advanced calc-trigger hide" type="checkbox" title="Click here to manually choose the boost. Will be done automatically otherwise." />
          <select className="ability-proto-quark calc-trigger hide"><option value="0">Attack</option><option value="1">Defense</option><option value="2">Sp. Atk</option><option value="3">Sp. Def</option><option value="4">Speed</option></select>
          <div className="gen-specific g2 g3 g4 g5 g6 g7 g8 g9 g10">
            <label>Item</label>
            <select className="item terrain-trigger calc-trigger small-select"></select>
          </div>
          <div>
            <label>Status</label>
            <select className="status calc-trigger"><option value="Healthy">Healthy</option><option value="Poisoned">Poisoned</option><option value="Badly Poisoned">Badly Poisoned</option><option value="Burned">Burned</option><option value="Paralyzed">Paralyzed</option><option value="Asleep">Asleep</option><option value="Frozen">Frozen</option></select>
            <select className="toxic-counter calc-trigger hide"><option value="1">1/16</option><option value="2">2/16</option><option value="3">3/16</option><option value="4">4/16</option><option value="5">5/16</option><option value="6">6/16</option><option value="7">7/16</option><option value="8">8/16</option><option value="9">9/16</option><option value="10">10/16</option><option value="11">11/16</option><option value="12">12/16</option><option value="13">13/16</option><option value="14">14/16</option><option value="15">15/16</option></select>
          </div>
        </div>
        <div className="info-group">
          <label>Current HP</label>
          <input className="current-hp calc-trigger" value="341" />/<span className="max-hp">341</span> (<input className="percent-hp calc-trigger" value="100" />%)
          <input className="max move-max calc-trigger btn-input" type="checkbox" id="maxL" /><label className="btn btn-wide gen-specific g8" htmlFor="maxL" title="Dynamax this Pokémon?">Dynamax</label>
          <img className="gmax-icon gen-specific g8 hide" width="30" height="21" src="image_res/gigantamax-icon.png" /><input className="gmax move-max calc-trigger gen-specific g8 hide" type="checkbox" id="gmaxL" title="Give this Pokémon the Gigantamax factor?" />
          <input className="tera move-tera calc-trigger btn-input" type="checkbox" id="teraL" /><label className="btn btn-wide gen-specific g9" htmlFor="teraL" title="Terastalize this Pokémon?">Terastalize</label>
          <br />
          <input className="hp-bar" type="range" min="0" max="714" step="1" value="714" />
        </div>
        <MovesetSelection />
        <input className="glaive-rush calc-trigger hide" type="checkbox" id="glaiveL" title="Apply double damage from using Glaive Rush?" />
        <div className="info-group">
          <input type="text" className="setCalc" id="setName1" style={{ width: "25%" }} value="My Calc Set" />

          {/* TODO: implement onclick="runSaveCalc(1)" */}
          <button type="button">Save Calc Set</button>

          {/* TODO: onclick="runExportSet(1) */}
          <button type="button">Export Set</button>

          {/* TODO: onclick="runDeleteSet(1)" */}
          <button type="button" className="delset">Delete Set</button>
        </div>
      </div>
    </div>
  </div>;
}


