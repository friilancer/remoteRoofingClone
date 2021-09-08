import React, { useEffect } from "react";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const handleScriptLoad = (updateQuery, autoCompleteRef) => {
  const options = {
    fields: ["formatted_address", "place_id", "name"],
    strictBounds: false,
  };
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    options
  );
  autoComplete.addListener("place_changed", () => {
    const {formatted_address, place_id, name} = autoComplete.getPlace();
    updateQuery(name, place_id, formatted_address);
  });
}

const LocationInput = ({id, currentAddress, handleAddressChange, assignedRef, placeholder}) => {

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`,
      () => handleScriptLoad(handleAddressChange, assignedRef)
    );
  }, []);

  return (
    <div>
      <input
        id={id}
        name={id}
        className="input"
        autoComplete="none"
        ref={assignedRef}
        onChange={event => handleAddressChange(event.target.value)}
        placeholder={placeholder || ''}
        value={currentAddress}
      />
    </div>
  );
}

export default LocationInput;