import React, { useState } from "react";
import SearchStyle from "./style";

function Search({ handleSubmit }: any): JSX.Element {
  const [value, setValue] = useState<string>("");
  return (
    <SearchStyle className="my-5" data-test="input-component">
      <form onSubmit={(e) => handleSubmit(e, value)}>
        <div className="form-group text-center">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Recipe"
            data-test="input-box"
          />
          <button className="font-weight-bold" data-test="submit-button">
            Search
          </button>
        </div>
      </form>
    </SearchStyle>
  );
}

export default Search;
