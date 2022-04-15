import React from "react";

const PaginBest = ({ bestsellerPerPage, totalCounris, paginatee }) => {
  const pageNumbere = [];
  for (let i = 1; i <= Math.ceil(totalCounris / bestsellerPerPage); i++) {
    pageNumbere.push(i);
  }
  return (
    <div className="btn_plag">
      {pageNumbere.map((nubmer) => (
        <div key={nubmer} className="btn_block">
          <button onClick={() => paginatee(nubmer)} className="btn_block_plaf">
            {nubmer}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaginBest;
