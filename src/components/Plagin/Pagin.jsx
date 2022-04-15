import React from "react";

const Pagin = ({ countriesPerPage, totalCounris, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCounris / countriesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="btn_plag">
      {pageNumber.map((nubmer) => (
        <div key={nubmer} className="btn_block">
          <button onClick={() => paginate(nubmer)} className="btn_block_plaf">
            {nubmer}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pagin;
