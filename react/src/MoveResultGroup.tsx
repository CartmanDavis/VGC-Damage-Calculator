export function MoveResultGroup() {
  return <div className="move-result-group" title="Select a move to show detailed results.">
    <div className="move-result-subgroup">
      <div className="result-move-header"><span id="resultHeaderL">Pokémon 1's Moves (select one to show detailed results)</span></div>
      <div><input className="result-move btn-input" type="radio" name="resultMove" id="resultMoveL1" checked={true} /><label className="btn btn-xxxwide btn-top" htmlFor="resultMoveL1">Hi Jump Kick</label> <span id="resultDamageL1">??? - ???%</span></div>
      <div><input className="result-move btn-input" type="radio" name="resultMove" id="resultMoveL2" /><label className="btn btn-xxxwide btn-mid" htmlFor="resultMoveL2">Falcon Punch</label> <span id="resultDamageL2">??? - ???%</span></div>
      <div><input className="result-move btn-input" type="radio" name="resultMove" id="resultMoveL3" /><label className="btn btn-xxxwide btn-mid" htmlFor="resultMoveL3">Suspicious Odor</label> <span id="resultDamageL3">??? - ???%</span></div>
      <div><input className="result-move btn-input" type="radio" name="resultMove" id="resultMoveL4" /><label className="btn btn-xxxwide btn-bottom" htmlFor="resultMoveL4">Tombstoner</label> <span id="resultDamageL4">??? - ???%</span></div>
    </div>
    <div className="move-result-subgroup">
      <div className="result-move-header"><span id="resultHeaderR">Pokémon 2's Moves (select one to show detailed results)</span></div>
      <div><input className="result-move btn-input" type="radio" name="resultMove" id="resultMoveR1" /><label className="btn btn-xxxwide btn-top" htmlFor="resultMoveR1">Hi Jump Kick</label> <span id="resultDamageR1">??? - ???%</span></div>
      <div><input className="result-move btn-input" type="radio" name="resultMove" id="resultMoveR2" /><label className="btn btn-xxxwide btn-mid" htmlFor="resultMoveR2">Falcon Punch</label> <span id="resultDamageR2">??? - ???%</span></div>
      <div><input className="result-move btn-input" type="radio" name="resultMove" id="resultMoveR3" /><label className="btn btn-xxxwide btn-mid" htmlFor="resultMoveR3">Suspicious Odor</label> <span id="resultDamageR3">??? - ???%</span></div>
      <div><input className="result-move btn-input" type="radio" name="resultMove" id="resultMoveR4" /><label className="btn btn-xxxwide btn-bottom" htmlFor="resultMoveR4">Tombstoner</label> <span id="resultDamageR4">??? - ???%</span></div>
    </div>
  </div>;
}

