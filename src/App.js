import React, { useState } from "react";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Navigation from "./Components/Navigation/Navigation";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({});

  const onLocationSelectionChange = (item) => {
    setSelectedLocation(item);
  };
  
  return (
    <div className="bg-secondary" style={{height: '100vh'}}>
      <Navigation handleLocationSelectionChange={onLocationSelectionChange} />
      <WeatherDetails selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;
library.add(fab, fas, far);
