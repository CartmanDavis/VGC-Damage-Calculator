export function TerrainSelect() {
  return <div className="gen-specific g6 g7 g8 g9 g10" style={{ width: "23.0em", margin: "5px auto" }} title="Select the current terrain.">
    <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="" id="noterrain" checked={true} /><label className="btn btn-small btn-left" htmlFor="noterrain">None</label>
    <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="Electric" id="electric" /><label className="btn btn-small btn-mid" htmlFor="electric">Electric</label>
    <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="Grassy" id="grassy" /><label className="btn btn-small btn-mid" htmlFor="grassy">Grassy</label>
    <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="Misty" id="misty" /><label className="btn btn-small btn-mid" htmlFor="misty">Misty</label>
    <input className="btn-input terrain-trigger calc-trigger" type="radio" name="terrain" value="Psychic" id="psychic" /><label className="btn btn-small btn-right" htmlFor="psychic">Psychic</label>
  </div>;
}

