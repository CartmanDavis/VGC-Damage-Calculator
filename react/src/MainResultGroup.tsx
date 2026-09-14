export function MainResultGroup() {
  return <div className="main-result-group">
    {/* TODO: implement onclick="Clipboard_CopyTo(this.textContent)" */}
    <div className="big-text"><span id="mainResult" title="Click to copy the result.">Loading...</span></div>
    <div className="small-text">
      <span id="damageValues">(If you see this message for more than a few seconds, try enabling JavaScript. If you have that enabled, try deleting your cookies. Otherwise, I won't be able to help you unless you send a screenshot of your browser console [Ctrl+Shift+I on Google Chrome].)</span>
      <br />
      <span id="customModValues" style={{ display: "none" }}>(If this is seen then I think I did something wrong)</span>
    </div>
  </div>;
}

