import { Layout } from "../layout/Layout.jsx";
import { Restaurants } from "../restaurants/Restaurants.jsx";
import { Pagination } from "../pagination/Pagination.jsx";
import { useState } from "react";

export const App = ({ topic, restaurants }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
    restaurants.map((item) => item.index === currentPage);
  };

  return (
    <Layout>
      <div>
        <h1>{topic}</h1>
        <Pagination totalItems={restaurants.length} itemsPerPage={1} onPageChange={onPageChange} />
        <Restaurants restaurants={restaurants} page={currentPage} />
      </div>
    </Layout>
  );
};