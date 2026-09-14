export function SidebarSlot() {
  return <div className="sidebarSlot hide" id="l1">
    {/* TODO: implement onclick="loadSidebarSlot(1,1)" */}
    <button className="pkmnsc" id="pkmnL1" type="button"><img id="pkmnL1I" src="image_res/empty-slot.png" /></button>

    {/* TODO: implement onclick="editSidebarSlot(1,1)" */}
    <button className="editsc" id="editL1" type="button" title="Overwrite this slot with what's currently in the panel."><img width="10" height="10" src="image_res/save.png" /></button>

    {/* TODO: implement onclick="removeSidebarSlot(1,1)" */}
    <button className="trashsc" id="trashL1" type="button" title="Remove from the sidebar."><img width="10" height="10" src="image_res/trash.png" /></button>
  </div>;
}

