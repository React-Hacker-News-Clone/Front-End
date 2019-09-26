import React from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

let active = 1;
let items = [];
for (let number = 1; number <= 14; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const paginationBasic = (
  <div>
    <Pagination size="lg">{items}</Pagination>
  </div>
);
export default function PageTab() {
  return <div>{paginationBasic}</div>;
}
