import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProductCreate(props) {
    const history = useHistory()
    const [isLoading, setLoading] = useState(false);

    const formik = useFormik({
      initialValues : {
        ProductName:"",
        Price:"",
      },

      validate : (values) => {
         let errors ={};
         if(!values.ProductName || !values.Price){
           errors.ProductName = "Required";
           errors.Price = "Required";
         }
         return errors;
      },
      onSubmit: async (values) => {
        try {
          setLoading(true);
          await axios.post("https://60efffc8f587af00179d3c3b.mockapi.io/product",   {
            ProductName :  values.ProductName,
            Price :  values.Price,
          });
          history.push("/product");
          setLoading(true);
        } catch (err) {
          setLoading(false);
        }
      }
  
    })
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
              id="ProductName"
                type="text"
                value={formik.values.ProductName}
                onChange={formik.handleChange}
                className="form-control"
              />
              {formik.touched.ProductName ? (
              <span className="text-danger">{formik.errors.ProductName}</span>
            ) : null}
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
              id="Price"
                type="text"
                value={formik.values.Price}
                onChange={formik.handleChange}
                className="form-control"
              />
              {formik.touched.Price ? (
              <span className="text-danger">{formik.errors.Price}</span>
            ) : null}
            </div>
            <div className="col-lg-12">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mt-3 "
                  disabled={isLoading}
                />
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductCreate;
