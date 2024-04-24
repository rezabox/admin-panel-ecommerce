import React from "react";

function PaginateTable() {
  return (
    <div class="d-flex justify-content-center mt-4">
      <nav aria-label="navigation">
        <ul class="pagination">
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default PaginateTable;
