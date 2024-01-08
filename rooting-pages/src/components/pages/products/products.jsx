import React, { useEffect, useState } from "react";
import TableComponent from "../../table/table";
import axios from "axios";
import Spinner from "../../spinner/spinner";

const Products = () => {
  const BASE_URL = "https://northwind.vercel.app/api/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copyData, setCopyData] = useState();
  const getData = async () => {
    try {
      setLoading(true);
      let response = await axios.get(`${BASE_URL}`);
      setData(response.data);
      setCopyData(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="products">
      <div className="container">
        <div className="products">
          <h1>Products</h1>
          <input
            type="search"
            onInput={(e) => {
              setData(
                copyData.filter((item) =>
                  item.name
                    .toLocaleLowerCase()
                    .includes(e.target.value.toLocaleLowerCase())
                )
              );
            }}
          />
          {loading ? <Spinner /> : <TableComponent products={data} />}
        </div>
      </div>
    </section>
  );
};

export default Products;
