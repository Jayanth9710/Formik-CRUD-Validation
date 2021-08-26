import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Product(props) {
  const [prodList, setProdList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect( () => {
      let FetchData = async() => {
    try {
      let products = await axios.get(
        "https://60efffc0f587af00179d3c19.mockapi.io/users"
      );
      setProdList([...products.data]);
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
};
FetchData();
  }, [props]);

  let handleDelete = async(id) => {
    let confirm = window.confirm("Are you sure want to delete the product?")
    if(confirm){
      try {
        await axios.delete(`https://60efffc0f587af00179d3c19.mockapi.io/users/${id}`);
        let prodIndex = prodList.findIndex(obj=> obj.id===id)
        prodList.splice(prodIndex,1)
        setProdList([...prodList])
      } catch (error) {
        
      }
    }
    
  };
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">Products</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net" rel="noreferrer">
          official DataTables documentation
        </a>
        .
      </p>

      <Link
        to="/create-product"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        Create Product
      </Link>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {
            
            isLoading ? <h3>Loading Data da Wait!!</h3> : 
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                
                  
                
                <tbody>
                  {prodList.map((products,index) => {
                    return (
                      <tr key={index*5+20}>
                        <td>{products.id}</td>
                        <td>{products.ProductName}</td>
                        <td>{products.Price}</td>
                        <td>
                          <Link
                            to={`/product/edit/${products.id}`}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(products.id);
                            }}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
