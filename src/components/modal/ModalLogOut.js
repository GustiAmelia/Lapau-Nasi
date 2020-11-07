import React from 'react';
import {useDispatch} from 'react-redux';
import {logOutCreator} from '../../redux/actions/auth';

const ModalLogOut =()=> {
  
  const dispatch = useDispatch()

  const handleLogout = ()=>{
    dispatch(logOutCreator())
  }
  return (
    <div className="modal fade" id="modalLogout" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Log Out</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to leave this page?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
            <button type="button" className="btn btn-primary" onClick={handleLogout} data-dismiss="modal">Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalLogOut
