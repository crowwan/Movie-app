import React, { useState } from "react";

function Search() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return <input type="text" value={value} onChange={onChange} />;
}

export default Search;
