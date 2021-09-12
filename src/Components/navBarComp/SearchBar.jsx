import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../Redux/selectors";
import { actions } from "../../Redux/actions";
import { useHistory } from "react-router";

export default function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const shoppingList = useSelector(selectors.shoppingList);
  const searchBarToggle = useSelector(selectors.searchBarToggle);
  const [filteredArray, setFilteredArray] = useState([]);

  const filterByValue = (array, input) => {
    if (input.length === 0) return [];
    return array
      .filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
      .slice(0, 8);
  };

  useEffect(() => {
    setFilteredArray(filterByValue(shoppingList, searchInput));
  }, [searchInput, shoppingList]);

  return (
    <div className="searchContainer">
      <div
        className="searchDropDownWrapper"
        onBlur={() => dispatch(actions.hideSearchBar())}
      >
        <div className="subSearchContainer">
          <input
            onFocus={() => dispatch(actions.showSearchBar())}
            className="searchInput"
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="searchBtn">
            <span>Search</span>
          </div>
        </div>
        <div
          className="searchDropDown"
          style={{
            display:
              searchBarToggle && filteredArray.length > 0 ? "flex" : "none",
          }}
        >
          {filteredArray.map((item, index) => (
            <span
              key={index}
              className="searchDropDownItem"
              onMouseDown={() => {
                history.push(`/single-item/${item.id}`);
              }}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
