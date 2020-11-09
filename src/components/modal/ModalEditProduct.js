import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {editProductCreator} from '../../redux/actions/menu';

const ModalEditProduct =({item})=> {

  const category = useSelector((state)=>state.menu.category);
  
  const dispatch =useDispatch();

  const [form,setForm]=useState({
    name:item.product_name,
    image:item.image,
    price:item.price,
    category_id:item.category_id,
  })

  const handleAddButton =()=>{
    dispatch(editProductCreator(item.id,form))
  }

  return (
    <div className="modal fade" id="modalEditProduct" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h6 className='title-add-product'>Add Item</h6>
            <form>
              <div className='errorMessage'>
                {form.message === null ? null : <p>{form.message}</p>}
              </div>
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control form-add-product" id="name" defaultValue={form.name}
                  onChange={(e)=>setForm({...form,name:e.target.value,message:null})}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                  <input type="file" id="image"
                  onChange={(e)=>setForm({...form,image:e.target.files[0],message:null})}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control form-add-product" id="price" defaultValue={form.price}
                  onChange={(e)=>setForm({...form,price:e.target.value,message:null})}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                <div className="form-group col-md-5">
                  <select id="category" className="form-control form-add-product" 
                  onChange={(e)=>setForm({...form,category_id:e.target.value,message:null})}>
                    <option defaultValue>{item.category}</option>
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
            <button type="button" className="btn btn-cancel-add" data-dismiss='modal'>Cancel</button>
            <button type="button" className="btn btn-add" onClick={handleAddButton}>Add</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEditProduct;
