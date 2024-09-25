import { Layout } from "../layout/Layout.jsx";
import { Restaurants } from "../restaurants/Restaurants.jsx";
import { Pagination } from "../pagination/Pagination.jsx";
import { useState } from "react";
import {restaurants} from "../../constants/materials/mock.js";

export const App = ({ topic }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div>
        <h1>{topic}</h1>
        <Pagination totalItems={restaurants.length} itemsPerPage={1} onPageChange={onPageChange} currentPage={currentPage}/>
        <Restaurants restaurantId={restaurants[currentPage - 1].id} />
      </div>
    </Layout>
  );
};