import { useState } from "react";

export function WeatherSelect() {

  const [selected, setSelected] = useState<string>("");

  return <>
    <div className="gen-specific g3 g4 g5 g6 g7 g8 g9 g10" style={{ width: "23em", margin: "5px auto" }} title="Select the current weather condition.">
      <input className="btn-input calc-trigger" type="radio" name="weather" value="" id="clear" checked={(selected == "")} onClick={() => setSelected("")} /><label className="btn btn-small btn-left" htmlFor="clear">None</label>
      <input className="btn-input calc-trigger" type="radio" name="weather" value="Sun" id="sun" checked={(selected == "sun")} onClick={() => setSelected("sun")} /><label className="btn btn-small btn-mid" htmlFor="sun">Sun</label>
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
  </>;
}

