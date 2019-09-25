import React from "react";
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination'

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
items.push(
    <Pagination.Item key={number} active={number === active}>
    {number}
    </Pagination.Item>,
);
}

export default function PageTab(){
    return (

        const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
            <br />

            <Pagination size="lg">{items}</Pagination>
            <br />

            <Pagination size="sm">{items}</Pagination>
        </div>
        );

        render(paginationBasic);
    );
}

