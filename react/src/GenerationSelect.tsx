export function GenerationSelect() {
  return (
    <div className="wrapper">
      <div>
        <span className="title-text">VGC 2026: Champions Damage Calculator</span>
        <select title="Select the generation.">
          <option value="1">RBY</option>
          <option value="2">GSC</option>
          <option value="3">ADV</option>
          <option value="4">DPP</option>
          <option value="5">B/W</option>
          <option value="6">ORAS</option>
          <option value="7">USUM</option>
          <option value="8">SWSH</option>
          <option value="9">S/V</option>
          <option value="10">CHAMP</option>
        </select>
      </div>
    </div>
  )
}
