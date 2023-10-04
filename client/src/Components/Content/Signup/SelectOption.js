import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function AnimatedMulti({ handleProfileChanges }) {
  const options = [
    { value: "farmer", label: "Farmer" },
    { value: "rentel-service", label: "Rental Service" },
    { value: "corperate", label: "Corperate" },
    // { value: "seller", label: "Khad Seller" },
  ];
  return (
    <label style={{ width: "300px", height: "40px" ,marginBottom:'4rem'}}>
      Choose User Profile*:
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={[options[0]]}
        isMulti
        options={options}
        onChange={(e) => handleProfileChanges(e)}
      />
    </label>
  );
}
