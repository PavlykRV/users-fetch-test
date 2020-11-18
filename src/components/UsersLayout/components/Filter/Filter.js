import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const PER_PAGE_COUNT = [10, 25, 50, 100];

const selectNextSince = (state) => state.nextSince;

const Filter = () => {
  const nextSince = useSelector(selectNextSince);
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    dispatch({
      type: 'CHANGE_QUANTITY',
      payload: { quantity: event.target.value },
    });
  };

  const handleNextPage = () => {
    dispatch({
      type: 'CHANGE_SINCE',
      payload: { nextSince },
    });
  }

  return (
    <div>
      <select onChange={handleSelectChange}>
        {PER_PAGE_COUNT.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default Filter;
