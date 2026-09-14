import { SidebarSlot } from "./SidebarSlot";

export function Sidebar() {
  return <div className="gen-specific g3 g4 g5 g6 g7 g8 g9 g10" style={{ float: "right" }}>
    {/* TODO: there are 6 sidebar slots */}
    <SidebarSlot />
    <div className="sidebarAdd" id="sbL">
      {/* TODO: implement onclick="addSidebarSlot(1)" */}
      <button className="addsc" id="addL" type="button" title="Add the current Pokémon to the sidebar.">+</button>
    </div>
    <div className="sidebarExportDelete hide" id="edL">
      {/* TODO: implement onclick="exportSidebarTeam(1)" */}
      <button className="halfsc" id="exportL" type="button" title="Export all Pokémon sets on the sidebar.">Export Team</button>
      {/* TODO: implement onclick="clearSidebar(1)" */}
      <button className="halfsc" id="deleteL" type="button" title="Remove all Pokémon sets on the sidebar."><img width="10" height="10" src="image_res/scorch.png" /></button>
    </div>
  </div>;
}

