export function StatDisplayDropdown() {
  // TODO: implement change handler: onChange="toggleResultDisplay(this.value)"
  return <select style={{ float: "right" }} className="hide calc-trigger gen-specific g10" id="toggleResult">
    <option value="SPs">SPs</option>
    <option value="raw">Actual Stats</option>
    <option value="EVs">EVs</option>
  </select>;
}

