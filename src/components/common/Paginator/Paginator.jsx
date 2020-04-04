import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages
        .filter(p => p > currentPage - 5 && p < currentPage + 5)
        .map(p => (
          <span
            key={p.toString()}
            className={currentPage === p ? classes.selectedPage : undefined}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {" "}
            {p}{" "}
          </span>
        ))}
    </div>
  );
};
export default Paginator;

// map(p => {
//   if (p > currentPage - 5 && p < currentPage + 5) {
//     return ;
//   }
// })
