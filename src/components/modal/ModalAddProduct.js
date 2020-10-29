import React from 'react'

const ModalAddProduct =()=> {
  return (
    <div className="modal fade" id="modalAddProduct" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h6>Add Item</h6>
            <form>
              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="name"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="image" class="col-sm-2 col-form-label">Image</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="image"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="price" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="price"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="category" class="col-sm-2 col-form-label">Category</label>
                <div class="form-group col-md-4">
                  <select id="category" class="form-control">
                    <option selected>Choose...</option>
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
