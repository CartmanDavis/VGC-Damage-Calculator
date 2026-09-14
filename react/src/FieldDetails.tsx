/**
 * TODO: 
 * This needs to be broken up. 
 * A lot of this code can probably be deleted
 */
export function FieldDetails() {
  return (
    <div className="field-column" id="field-column">
      <div className="panel field-info" id="field-panel">
        <input type="checkbox" className="collapse-toggle" id="collapseField" />
        <div className="panel-heading">
          <h4 className="panel-title">
            Field
            <div className="gen-specific g1 g2 g3 g4 g5 g6 g7 g8 g9" id="autolevel">
              Auto-Level to:
              <div className="onoffswitch" style={{ marginLeft: "1em" }}>
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="douswitch" checked />
                <label className="onoffswitch-label" htmlFor="douswitch">
                  <span className="onoffswitch-inner"></span>
                  <span className="onoffswitch-switch"></span>
                </label>
              </div>
            </div>
          </h4>
          <label htmlFor="collapseField" className="collapse-toggle-btn" title="Hide the field options">Details</label>
        </div>
        <div className="panel-body">
          <div className="gen-specific g3 g4 g5 g6 g7 g8 g9 g10" style={{ width: "11em", margin: "0 auto 5px" }} title="Select the battle format.">
            <input className="btn-input calc-trigger" type="radio" name="format" value="Singles" id="singles" checked={true} /><label className="btn btn-left" htmlFor="singles">Singles</label>
            <input className="btn-input calc-trigger" type="radio" name="format" value="Doubles" id="doubles" /><label className="btn btn-right" htmlFor="doubles">Doubles</label>
          </div>
          <div className="gen-specific g6 g7 g8 g9 g10" style={{ width: "23.0em", margin: "5px auto" }} title="Select the current terrain.">
            <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="" id="noterrain" checked={true} /><label className="btn btn-small btn-left" htmlFor="noterrain">None</label>
            <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="Electric" id="electric" /><label className="btn btn-small btn-mid" htmlFor="electric">Electric</label>
            <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="Grassy" id="grassy" /><label className="btn btn-small btn-mid" htmlFor="grassy">Grassy</label>
            <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="Misty" id="misty" /><label className="btn btn-small btn-mid" htmlFor="misty">Misty</label>
            <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="Psychic" id="psychic" /><label className="btn btn-small btn-right" htmlFor="psychic">Psychic</label>
          </div>
          <hr className="gen-specific g6 g7 g8 g9 g10" />
          <div className="gen-specific g3 g4 g5 g6 g7 g8 g9 g10" style={{ width: "23em", margin: "5px auto" }} title="Select the current weather condition.">
            <input className="btn-input calc-trigger" type="radio" name="weather" value="" id="clear" checked={true} /><label className="btn btn-small btn-left" htmlFor="clear">None</label>
            <input className="btn-input calc-trigger" type="radio" name="weather" value="Sun" id="sun" /><label className="btn btn-small btn-mid" htmlFor="sun">Sun</label>
            <input className="btn-input calc-trigger" type="radio" name="weather" value="Rain" id="rain" /><label className="btn btn-small btn-mid" htmlFor="rain">Rain</label>
            <input className="btn-input calc-trigger" type="radio" name="weather" value="Sand" id="sand" /><label className="btn btn-small btn-mid" htmlFor="sand">Sand</label>
            <input className="btn-input calc-trigger" type="radio" name="weather" value="Hail" id="hail" /><label className="btn btn-small btn-right gen-specific g3 g4 g5 g6 g7 g8" htmlFor="hail">Hail</label>
            <input className="btn-input calc-trigger" type="radio" name="weather" value="Snow" id="snow" /><label className="btn btn-small btn-right gen-specific g9 g10" htmlFor="snow">Snow</label>
          </div>
          <div className="gen-specific g6 g7 natdex-specific n8 n9 n10" id="primal-weather" style={{ width: "23em", margin: "5px auto" }} title="Select the current weather condition.">
            <input className="btn-input calc-trigger" type="radio" name="weather" value="Harsh Sun" id="harsh-sun" /><label className="btn btn-wide btn-left" htmlFor="harsh-sun">Harsh Sun</label>
            <input className="btn-input calc-trigger" type="radio" name="weather" value="Heavy Rain" id="heavy-rain" /><label className="btn btn-wide btn-mid" htmlFor="heavy-rain">Heavy Rain</label>
            <input className="btn-input calc-trigger" type="radio" name="weather" value="Strong Winds" id="strong-winds" /><label className="btn btn-xwide btn-right" htmlFor="strong-winds">Strong Winds</label>
          </div>
          <div className="gen-specific g2 hide" style={{ width: "23em", margin: "0 auto 5px" }} title="Select the current weather condition.">
            <input className="btn-input calc-trigger" type="radio" name="gscWeather" value="" id="gscClear" checked={true} /><label className="btn btn-small btn-left" htmlFor="gscClear">None</label>
            <input className="btn-input calc-trigger" type="radio" name="gscWeather" value="Sun" id="gscSun" /><label className="btn btn-small btn-mid" htmlFor="gscSun">Sun</label>
            <input className="btn-input calc-trigger" type="radio" name="gscWeather" value="Rain" id="gscRain" /><label className="btn btn-small btn-mid" htmlFor="gscRain">Rain</label>
            <input className="btn-input calc-trigger" type="radio" name="gscWeather" value="Sand" id="gscSand" /><label className="btn btn-small btn-right" htmlFor="gscSand">Sand</label>
          </div>
          <div className="gen-specific g6 g7 g8 g10 natdex-specific n9" id="auras" style={{ width: "22em", margin: "5px auto" }} title="Select the current radiating aura.">
            <input className="btn-input calc-trigger independent-field" type="checkbox" name="aura" value="Aura Break" id="aura-break" /><label className="gen-specific g6 g7 g8 btn btn-wide btn-left" htmlFor="aura-break">Aura Break</label>
            <div className="gen-specific g10 divider" id="temp-fairyaura">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <input className="btn-input calc-trigger independent-field" type="checkbox" name="aura" value="Fairy Aura" id="fairy-aura" /><label className="btn btn-wide btn-mid" htmlFor="fairy-aura">Fairy Aura</label>
            <input className="btn-input calc-trigger independent-field" type="checkbox" name="aura" value="Dark Aura" id="dark-aura" /><label className="gen-specific g6 g7 g8 btn btn-wide btn-right" htmlFor="dark-aura">Dark Aura</label>
          </div>
          <div className="gen-specific g9 ruin-group natdex-specific n10" style={{ width: "21em", margin: "5px auto" }} title="Select the current active Ruin abilities.">
            <input className="btn-input calc-trigger independent-field" type="checkbox" name="ruin" value="Tablets of Ruin" id="tablets-of-ruin" /><label className="btn btn-xxxxwide btn-left" htmlFor="tablets-of-ruin">Tablets of Ruin <u>(-Atk)</u></label>
            <input className="btn-input calc-trigger independent-field" type="checkbox" name="ruin" value="Vessel of Ruin" id="vessel-of-ruin" /><label className="btn btn-xxxxwide btn-right" htmlFor="vessel-of-ruin">Vessel of Ruin <u>(-SpA)</u></label>
            <br />
            <input className="btn-input calc-trigger independent-field" type="checkbox" name="ruin" value="Sword of Ruin" id="sword-of-ruin" /><label className="btn btn-xxxxwide btn-left" htmlFor="sword-of-ruin">Sword of Ruin <u>(-Def)</u></label>
            <input className="btn-input calc-trigger independent-field" type="checkbox" name="ruin" value="Beads of Ruin" id="beads-of-ruin" /><label className="btn btn-xxxxwide btn-right" htmlFor="beads-of-ruin">Beads of Ruin <u>(-SpD)</u></label>
          </div>
          <div className="gen-specific g4 g5 g6 g7 g8 g9 g10" style={{ width: "17em", margin: "5px auto" }}>
            <div className="gen-specific g4 g5 g6 g7 g10 divider">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <input className="btn-input calc-trigger" type="checkbox" id="gravity" /><label className="btn" htmlFor="gravity" title="Is gravity in effect?">Gravity</label>
            <div className="gen-specific g8 g9 divider">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input className="btn-input calc-trigger independent-field" type="checkbox" name="neutralgas" id="neutralizingGas" /><label className="btn btn-xxwide" htmlFor="neutralizingGas" title="Is neutralizing gas in effect?">Neutralizing Gas </label>
            </div>
          </div>
          <hr className="gen-specific g2 g3 g4 g5 g6 g7 g8 g9 g10" />
          <div className="btn-group gen-specific g7 g8 g10 natdex-specific n9" id="protect-field">
            <div className="left" title="Is this Pokémon protecting?">
              <input className="btn-input calc-trigger" type="checkbox" id="protectL" /><label className="btn btn-xwide" htmlFor="protectL">Protect</label>
            </div>
            <div className="right" title="Is this Pokémon protecting?">
              <input className="btn-input calc-trigger" type="checkbox" id="protectR" /><label className="btn btn-xwide" htmlFor="protectR">Protect</label>
            </div>
          </div>
          <div className="btn-group gen-specific g3 g4 g5 g6 g7 g8 g9 g10">
            <div className="left" title="Has this Pokémon's power been boosted by an ally's Helping Hand?">
              <input className="btn-input calc-trigger" type="checkbox" id="helpingHandL" /><label className="btn btn-xwide" htmlFor="helpingHandL">Helping Hand</label>
            </div>
            <div className="right" title="Has this Pokémon's power been boosted by an ally's Helping Hand?">
              <input className="btn-input calc-trigger" type="checkbox" id="helpingHandR" /><label className="btn btn-xwide" htmlFor="helpingHandR">Helping Hand</label>
            </div>
          </div>
          <div className="btn-group gen-specific g7 g8 g9 g10">
            <div className="left" title="Is this Pokémon protected by Aurora Veil?">
              <input className="btn-input calc-trigger" type="checkbox" id="auroraVeilL" /><label className="btn btn-xwide" htmlFor="auroraVeilL">Aurora Veil</label>
            </div>
            <div className="right" title="Is this Pokémon protected by Aurora Veil?">
              <input className="btn-input calc-trigger" type="checkbox" id="auroraVeilR" /><label className="btn btn-xwide" htmlFor="auroraVeilR">Aurora Veil</label>
            </div>
          </div>
          <div className="btn-group">
            <div className="left" title="Is this Pokémon protected by Reflect and/or Light Screen?">
              <input className="btn-input calc-trigger" type="checkbox" id="reflectL" /><label className="btn btn-left" htmlFor="reflectL">Reflect</label>
              <input className="btn-input calc-trigger" type="checkbox" id="lightScreenL" /><label className="btn btn-wide btn-right" htmlFor="lightScreenL">Light Screen</label>
            </div>
            <div className="right" title="Is this Pokémon protected by Reflect and/or Light Screen?">
              <input className="btn-input calc-trigger" type="checkbox" id="reflectR" /><label className="btn btn-left" htmlFor="reflectR">Reflect</label>
              <input className="btn-input calc-trigger" type="checkbox" id="lightScreenR" /><label className="btn btn-wide btn-right" htmlFor="lightScreenR">Light Screen</label>
            </div>
          </div>
          <div className="btn-group gen-specific g8">
            <div className="left" title="Has this Pokémon's Weakness Policy been activated?">
              <input className="btn-input calc-trigger" type="checkbox" id="weakL" /><label className="btn btn-xwide" htmlFor="weakL"><img src="Weakness_Policy.png" /><br />Weakness Policy</label>
            </div>
            <div className="right" title="Has this Pokémon's Weakness Policy been activated?">
              <input className="btn-input calc-trigger" type="checkbox" id="weakR" /><label className="btn btn-xwide" htmlFor="weakR"><img src="Weakness_Policy.png" /><br />Weakness Policy</label>
            </div>
          </div>
          <div className="btn-group gen-specific g4 g5 g6 g7 g8 g9 g10">
            <div className="left" title="Has Tailwind been set?">
              <input className="btn-input calc-trigger" type="checkbox" id="tailwindL" /><label className="btn btn-xwide" htmlFor="tailwindL">Tailwind</label>
            </div>
            <div className="right" title="Has Tailwind been set?">
              <input className="btn-input calc-trigger" type="checkbox" id="tailwindR" /><label className="btn btn-xwide" htmlFor="tailwindR">Tailwind</label>
            </div>
          </div>
          <div className="btn-group">
            <div className="left" title="Has this Pokémon been afflicted with Leech Seed?">
              <input className="btn-input calc-trigger" type="checkbox" id="leechSeedL" /><label className="btn btn-xwide" htmlFor="leechSeedL">Leech Seed</label>
            </div>
            <div className="right" title="Has this Pokémon been afflicted with Leech Seed?">
              <input className="btn-input calc-trigger" type="checkbox" id="leechSeedR" /><label className="btn btn-xwide" htmlFor="leechSeedR">Leech Seed</label>
            </div>
          </div>
          <div className="btn-group gen-specific g5 g6 g7 g8 g9">
            <div className="left" title="Has the opponent set up a sea of fire?">
              <input className="btn-input calc-trigger" type="checkbox" id="seaFireL" /><label className="btn btn-wide btn-left" htmlFor="seaFireL">Sea of Fire</label>
            </div>
            <div className="left" title="Has the opponent set up a swamp?">
              <input className="btn-input calc-trigger" type="checkbox" id="swampL" /><label className="btn btn-right" htmlFor="swampL">Swamp</label>
            </div>
            <div className="right" title="Has the opponent set up a swamp?">
              <input className="btn-input calc-trigger" type="checkbox" id="swampR" /><label className="btn btn-right" htmlFor="swampR">Swamp</label>
            </div>
            <div className="right" title="Has the opponent set up a sea of fire?">
              <input className="btn-input calc-trigger" type="checkbox" id="seaFireR" /><label className="btn btn-wide btn-left" htmlFor="seaFireR">Sea of Fire</label>
            </div>
          </div>
          <div className="btn-group gen-specific g8">
            <div className="left" title="Is G-Max Wildfire, Volcalith, Vine Lash, or Cannonade in effect?">
              <input className="btn-input calc-trigger" type="checkbox" id="gMaxFieldL" /><label className="btn btn-xwide" htmlFor="gMaxFieldL">G-Max Field</label>
            </div>
            <div className="right" title="Is G-Max Wildfire, Volcalith, Vine Lash, or Cannonade in effect?">
              <input className="btn-input calc-trigger" type="checkbox" id="gMaxFieldR" /><label className="btn btn-xwide" htmlFor="gMaxFieldR">G-Max Field</label>
            </div>
          </div>
          <div className="btn-group gen-specific g5 g6 g7 g8 g9 g10">
            <div className="left" title="Is this Pokémon protected by an ally's Friend Guard?">
              <input className="btn-input calc-trigger" type="checkbox" id="friendGuardL" /><label className="btn btn-xwide" htmlFor="friendGuardL">Friend Guard</label>
            </div>
            <div className="right" title="Is this Pokémon protected by an ally's Friend Guard?">
              <input className="btn-input calc-trigger" type="checkbox" id="friendGuardR" /><label className="btn btn-xwide" htmlFor="friendGuardR">Friend Guard</label>
            </div>
          </div>
          <div className="btn-group gen-specific g4 g5 g6 g7 g8 g9 g10">
            <div className="left" title="Is Stealth Rock affecting this side of the field?">
              <input className="btn-input calc-trigger" type="checkbox" id="srL" /><label className="btn btn-xwide" htmlFor="srL">Stealth Rock</label>
            </div>
            <div className="right" title="Is Stealth Rock affecting this side of the field?">
              <input className="btn-input calc-trigger" type="checkbox" id="srR" /><label className="btn btn-xwide" htmlFor="srR">Stealth Rock</label>
            </div>
          </div>
          <div className="btn-group gen-specific g3 g4 g5 g6 g7 g8 g9 g10">
            <div className="left" title="Are there Spikes on this side of the field?">
              <input className="btn-input calc-trigger" type="radio" name="spikesL" value="0" id="spikesL0" checked={true} /><label className="btn btn-xsmall btn-left" htmlFor="spikesL0">0</label>
              <input className="btn-input calc-trigger" type="radio" name="spikesL" value="1" id="spikesL1" /><label className="btn btn-xsmall btn-mid" htmlFor="spikesL1">1</label>
              <input className="btn-input calc-trigger" type="radio" name="spikesL" value="2" id="spikesL2" /><label className="btn btn-xsmall btn-mid" htmlFor="spikesL2">2</label>
              <input className="btn-input calc-trigger" type="radio" name="spikesL" value="3" id="spikesL3" /><label className="btn btn-wide btn-right" htmlFor="spikesL3">3 Spikes</label>
            </div>
            <div className="right" title="Are there Spikes on this side of the field?">
              <input className="btn-input calc-trigger" type="radio" name="spikesR" value="0" id="spikesR0" checked={true} /><label className="btn btn-xsmall btn-left" htmlFor="spikesR0">0</label>
              <input className="btn-input calc-trigger" type="radio" name="spikesR" value="1" id="spikesR1" /><label className="btn btn-xsmall btn-mid" htmlFor="spikesR1">1</label>
              <input className="btn-input calc-trigger" type="radio" name="spikesR" value="2" id="spikesR2" /><label className="btn btn-xsmall btn-mid" htmlFor="spikesR2">2</label>
              <input className="btn-input calc-trigger" type="radio" name="spikesR" value="3" id="spikesR3" /><label className="btn btn-wide btn-right" htmlFor="spikesR3">3 Spikes</label>
            </div>
          </div>
          <div className="btn-group gen-specific g4 g5 g6 g7 g8 natdex-specific n9 n10" id="flower-gift">
            <div className="left" title="Does this Pokémon's ally have Flower Gift?">
              <input className="btn-input calc-trigger" type="checkbox" id="flowerGiftL" /><label className="btn btn-xxwide" htmlFor="flowerGiftL">Flower Gift</label>
            </div>
            <div className="right" title="Does this Pokémon's ally have Flower Gift?">
              <input className="btn-input calc-trigger" type="checkbox" id="flowerGiftR" /><label className="btn btn-xxwide" htmlFor="flowerGiftR">Flower Gift</label>
            </div>
          </div>
          <div className="btn-group gen-specific g8 g9">
            <div className="left" title="Does this Pokémon's ally have Steely Spirit?">
              <input className="btn-input calc-trigger" type="checkbox" id="steelySpiritL" /><label className="btn btn-xwide" htmlFor="steelySpiritL">Steely Spirit</label>
            </div>
            <div className="right" title="Does this Pokémon's ally have Steely Spirit?">
              <input className="btn-input calc-trigger" type="checkbox" id="steelySpiritR" /><label className="btn btn-xwide" htmlFor="steelySpiritR">Steely Spirit</label>
            </div>
          </div>
          <div className="btn-group gen-specific g8 g9">
            <div className="left" title="Is this Pokémon boosted by an ally's Power Spot?">
              <input className="btn-input calc-trigger" type="checkbox" id="powerSpotL" /><label className="btn btn-xwide" htmlFor="powerSpotL">Power Spot</label>
            </div>
            <div className="right" title="Is this Pokémon boosted by an ally's Power Spot?">
              <input className="btn-input calc-trigger" type="checkbox" id="powerSpotR" /><label className="btn btn-xwide" htmlFor="powerSpotR">Power Spot</label>
            </div>
          </div>
          <div className="btn-group gen-specific g7 g8 g9">
            <div className="left" title="Has this Pokémon's power been boosted by an ally's Battery?">
              <input className="btn-input calc-trigger" type="checkbox" id="batteryL" /><label className="btn btn-xwide" htmlFor="batteryL">Battery</label>
            </div>
            <div className="right" title="Has this Pokémon's power been boosted by an ally's Battery?">
              <input className="btn-input calc-trigger" type="checkbox" id="batteryR" /><label className="btn btn-xwide" htmlFor="batteryR">Battery</label>
            </div>
          </div>
          <div className="btn-group gen-specific g9 g10">
            <div className="left" title="Is this Pokémon affected by Salt Cure?">
              <input className="btn-input calc-trigger" type="checkbox" id="saltCureL" /><label className="btn btn-xwide" htmlFor="saltCureL">Salt Cure</label>
            </div>
            <div className="right" title="Is this Pokémon affected by Salt Cure?">
              <input className="btn-input calc-trigger" type="checkbox" id="saltCureR" /><label className="btn btn-xwide" htmlFor="saltCureR">Salt Cure</label>
            </div>
          </div>
          <div className="btn-group gen-specific g6 g7">
            <div className="left" title="Has this Pokémon used Geomancy?">
              <input className="btn-input calc-trigger" type="checkbox" id="clangL" /><label className="btn btn-xwide" htmlFor="clangL"><img src="/716.png" /><br />Geomancy</label>
            </div>
            <div className="right" title="Has this Pokémon used Geomancy?">
              <input className="btn-input calc-trigger" type="checkbox" id="clangR" /><label className="btn btn-xwide" htmlFor="clangR"><img src="/716.png" /><br />Geomancy</label>
            </div>
          </div>
          <div className="btn-group gen-specific g7">
            <div className="left" title="Has this Pokémon used Extreme Evoboost?">
              <input className="btn-input calc-trigger" type="checkbox" id="evoL" /><label className="btn btn-xwide" htmlFor="evoL"><img src="133.png" /><br />Extreme Evoboost</label>
            </div>
            <div className="right" title="Has this Pokémon used Extreme Evoboost?">
              <input className="btn-input calc-trigger" type="checkbox" id="evoR" /><label className="btn btn-xwide" htmlFor="evoR"><img src="133.png" /><br />Extreme Evoboost</label>
            </div>
          </div>
          <div className="btn-group gen-specific g9">
            <div className="left" title="Has this Pokémon eaten a Tatsugiri?">
              <input className="btn-input calc-trigger" type="checkbox" id="tatsuL" /><label className="btn btn-xwide" htmlFor="tatsuL"><img src="Tatsugiri.png" width="58" height="58" /><br />Commander</label>
            </div>
            <div className="right" title="Has this Pokémon eaten a Tatsugiri?">
              <input className="btn-input calc-trigger" type="checkbox" id="tatsuR" /><label className="btn btn-xwide" htmlFor="tatsuR"><img src="Tatsugiri.png" width="58" height="58" /><br />Commander</label>
            </div>
          </div>
          <div className="btn-group gen-specific g2">
            <div className="left" title="Are there Spikes on this side of the field?">
              <input className="btn-input calc-trigger" type="checkbox" id="gscSpikesL" /><label className="btn" htmlFor="gscSpikesL">Spikes</label>
            </div>
            <div className="right" title="Are there Spikes on this side of the field?">
              <input className="btn-input calc-trigger" type="checkbox" id="gscSpikesR" /><label className="btn" htmlFor="gscSpikesR">Spikes</label>
            </div>
          </div>
          <div className="btn-group">
            <div className="left" title="Has this Pokémon been rooted by Ingrain?">
              <input className="btn-input calc-trigger" type="checkbox" id="ingrainL" /><label className="btn btn-wide" htmlFor="ingrainL">Ingrain</label>
            </div>
            <div className="right" title="Has this Pokémon been rooted by Ingrain?">
              <input className="btn-input calc-trigger" type="checkbox" id="ingrainR" /><label className="btn btn-wide" htmlFor="ingrainR">Ingrain</label>
            </div>
          </div>
          <div className="btn-group gen-specific g2 g3 g4 g5 g6 g7 g8 g9 g10">
            <div className="left" title="Has this Pokémon been afflicted with Curse?">
              <input className="btn-input calc-trigger" type="checkbox" id="curseL" /><label className="btn btn-wide" htmlFor="curseL">Curse</label>
            </div>
            <div className="right" title="Has this Pokémon been afflicted with Curse?">
              <input className="btn-input calc-trigger" type="checkbox" id="curseR" /><label className="btn btn-wide" htmlFor="curseR">Curse</label>
            </div>
          </div>
          <div className="btn-group">
            <div className="left" title="Has this Pokémon been bound?">
              <input className="btn-input calc-trigger" type="checkbox" id="bindingL" /><label className="btn btn-wide" htmlFor="bindingL">Binding</label>
            </div>
            <div className="right" title="Has this Pokémon been bound?">
              <input className="btn-input calc-trigger" type="checkbox" id="bindingR" /><label className="btn btn-wide" htmlFor="bindingR">Binding</label>
            </div>
          </div>
          <div className="btn-group gen-specific g3 g4 g5 g6 g7 g8 g9 g10">
            <div className="left" title="Is Charge active for this Pokémon?">
              <input className="btn-input calc-trigger" type="checkbox" id="chargeL" /><label className="btn btn-wide" htmlFor="chargeL">Charge</label>
            </div>
            <div className="right" title="Is Charge active for this Pokémon?">
              <input className="btn-input calc-trigger" type="checkbox" id="chargeR" /><label className="btn btn-wide" htmlFor="chargeR">Charge</label>
            </div>
          </div>
          <div className="btn-group gen-specific g2 g3 g4 g5 g6 g7">
            <div className="left" title="Has this Pokémon been revealed with Foresight or Odor Sleuth?">
              <input className="btn-input calc-trigger" type="checkbox" id="foresightL" /><label className="btn btn-wide" htmlFor="foresightL">Foresight</label>
            </div>
            <div className="right" title="Has this Pokémon been revealed with Foresight or Odor Sleuth?">
              <input className="btn-input calc-trigger" type="checkbox" id="foresightR" /><label className="btn btn-wide" htmlFor="foresightR">Foresight</label>
            </div>
          </div>
          <div className="btn-group gen-specific g4 g5 g6 g7 g8 g9 g10">
            <div className="left" title="Does this Pokémon have an Aqua Ring set up?">
              <input className="btn-input calc-trigger" type="checkbox" id="aquaRingL" /><label className="btn btn-wide" htmlFor="aquaRingL">Aqua Ring</label>
            </div>
            <div className="right" title="Does this Pokémon have an Aqua Ring set up?">
              <input className="btn-input calc-trigger" type="checkbox" id="aquaRingR" /><label className="btn btn-wide" htmlFor="aquaRingR">Aqua Ring</label>
            </div>
          </div>
          <div className="btn-group gen-specific g2 g3 g4 g5 g6 g7">
            <div className="left" title="Has this Pokémon been afflicted with a Nightmare?">
              <input className="btn-input calc-trigger" type="checkbox" id="nightmareL" /><label className="btn btn-wide" htmlFor="nightmareL">Nightmare</label>
            </div>
            <div className="right" title="Has this Pokémon been afflicted with a Nightmare?">
              <input className="btn-input calc-trigger" type="checkbox" id="nightmareR" /><label className="btn btn-wide" htmlFor="nightmareR">Nightmare</label>
            </div>
          </div>
          <div className="hide gen-specific g5 g6 g7 g8 g9 g10 custom-mods-group" style={{ float: "left" }}>
            { /* TODO: implement onclick="newCustomMod()" */}
            <button className="custom-mod-add" id="cMAdd" type="button" title="Add a custom modifier. (Affects both sides)"><b>New Modifier</b></button>
            <div className="custom-modifiers" id="cMod"></div>
          </div>
          <br style={{ clear: "both" }} />
        </div>
      </div>
    </div>
  )
}
