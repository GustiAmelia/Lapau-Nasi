import React from 'react';

const ModalAddProduct =()=> {
  return (
    <div className="modal fade" id="modalAddProduct" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h6>Add Item</h6>
            <form>
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="image"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" id="price"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                <div className="form-group col-md-4">
                  <select id="category" className="form-control">
                    <option defaultValue>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="footer-modal-add">
            <button type="button" className="btn btn-cancel-add" >Cancel</button>
            <button type="button" className="btn btn-add">Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddProduct;
