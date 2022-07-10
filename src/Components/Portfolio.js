import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

function Portfolio() {
  const [selected, setSelected] = useState("All");

  return (
    <div className="Portfolio">
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(filter) => {
          console.log(filter);
          setSelected(filter);
        }}
      />
      <ProjectList selected={selected} />
    </div>
  );
}

export default Portfolio;
