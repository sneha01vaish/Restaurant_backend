import React from 'react'
import style from './MenuList.module.css';

function MenuList() {
  return (
    <div className={style.tableWrapper}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">SL No</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Description</th>
            <th scope="col">Item Price</th>
            <th scope="col">Img url</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-success'>Edit</button>
              <button className='btn btn-danger ms-2'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-success'>Edit</button>
              <button className='btn btn-danger ms-2'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-success'>Edit</button>
              <button className='btn btn-danger ms-2'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-success'>Edit</button>
              <button className='btn btn-danger ms-2'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <button className='btn btn-success'>Edit</button>
              <button className='btn btn-danger ms-2'>Delete</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  )
}

export default MenuList
