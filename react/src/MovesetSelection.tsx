export function MovesetSelection() {
  return (
    <>
      <MoveSelection />
      <MoveSelection />
      <MoveSelection />
      <MoveSelection />
    </>
  );
}

/** TODO: parameterize **/
function MoveSelection() {
  return <div className="move1">
    <select className="move-selector calc-trigger small-select"></select>
    <input className="move-bp calc-trigger" value="50" />
    <select className="move-type calc-trigger"></select>
    <select className="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8 g9 g10"><option value="Physical">Physical</option><option value="Special">Special</option><option value="Status">Status</option></select>
    <input className="move-crit calc-trigger btn-input" type="checkbox" id="critL1" /><label className="btn crit-btn" htmlFor="critL1" title="Force this attack to be a critical hit?">Crit</label>
    <input className="move-z calc-trigger btn-input" type="checkbox" id="zL1" /><label className="btn x-btn gen-specific g7 natdex-specific n8 n9 n10" htmlFor="zL1" title="Use the corresponding Z-Move?">Z-Move</label>
    <select className="move-hits calc-trigger hide"><option value="1">1 hit</option><option value="2">2 hits</option><option value="3">3 hits</option><option value="4">4 hits</option><option value="5">5 hits</option><option value="6">6 hits</option><option value="7">7 hits</option><option value="8">8 hits</option><option value="9">9 hits</option><option value="10">10 hits</option></select>
    <input className="move-double calc-trigger btn-input hide" type="checkbox" id="doubleL1" /><label className="double-btn btn x-btn" htmlFor="doubleL1" title="Force this attack to deal double damage?">2x BP</label>
    <select className="move-pledge calc-trigger hide"><option value="Grass Pledge">Grass Pledge</option><option value="Fire Pledge">Fire Pledge</option><option value="Water Pledge">Water Pledge</option></select>
    <select className="move-linearAddedBP calc-trigger hide"><option value="0">0x effect</option><option value="1">1x effect</option><option value="2">2x effect</option><option value="3">3x effect</option><option value="4">4x effect</option><option value="5">5x effect</option><option value="6">6x effect</option></select>
    <select className="move-opponent calc-trigger hide"><option value="1">Move 1</option><option value="2">Move 2</option><option value="3">Move 3</option><option value="4">Move 4</option></select>
    <input className="move-stellar calc-trigger btn-input hide" type="checkbox" id="stellarL1" checked={true} /><label className="stellar-btn btn xx-btn" htmlFor="stellarL1" title="Is this the first time using a move of this type after Terastalizing?">1st Use</label>
  </div>;
}
