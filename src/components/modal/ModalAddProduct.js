import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addProductCreator} from '../../redux/actions/menu';

const ModalAddProduct =()=> {

  const category = useSelector((state)=>state.menu.category)

  const dispatch =useDispatch();

  const [form,setForm]=useState({
    name:null,
    image:null,
    price:null,
    category_id:null,
  })

  const handleAddButton =()=>{
    dispatch(addProductCreator(form));
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setForm({
      ...form,
      name:null,
      image:null,
      price:null,
      category_id:null,
    })
  }

  const handleButtonCancel =()=>{
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setForm({
      ...form,
      name:null,
      image:null,
      price:null,
      category_id:null,
    })
  }
  console.log(form)
  return (
    <div className="modal fade" id="modalAddProduct" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h6 className='title-add-product'>Add Item</h6>
            <form>
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control form-add-product" id="name"
                  onChange={(e)=>setForm({...form,name:e.target.value})}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                  <input type="file" id="image"
                  onChange={(e)=>setForm({...form,image:e.target.files[0]})}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control form-add-product" id="price"
                  onChange={(e)=>setForm({...form,price:e.target.value})}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                <div className="form-group col-md-5">
                  <select id="category" className="form-control form-add-product" 
                  onChange={(e)=>setForm({...form,category_id:e.target.value})}>
                    <option defaultValue>Category</option>
                    {category.map((item)=>{
                      return (
                        <option key={item.id} value={item.id}>{item.category}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="footer-modal-add">
            <button type="button" className="btn btn-cancel-add" data-dismiss='modal' onClick={handleButtonCancel}>Cancel</button>
            <button type="button" className="btn btn-add" onClick={handleAddButton} data-dismiss='modal'>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddProduct;
