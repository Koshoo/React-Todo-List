import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div
      onChange={(e) => handleFilterChange(e.target.value)}
      className="filter"
    >
      <label className="radio-label" htmlFor="all">
        <input
          className="radio"
          type="radio"
          id="all"
          name="filter"
          value="all"
          defaultChecked
        />
        All
      </label>

      <label className="radio-label" htmlFor="not-done">
        <input
          className="radio"
          type="radio"
          id="not-done"
          name="filter"
          value="not-done"
        />
        Active
      </label>

      <label className="radio-label" htmlFor="done">
        <input
          className="radio"
          type="radio"
          id="done"
          name="filter"
          value="done"
        />
        Completed
      </label>
    </div>
  );
};

export default Filter;
