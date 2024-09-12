import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './menu.module.css';

const CreateMenu = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [newItem, setNewItem] = useState({ categoryId: '', itemName: '', price: '', imageUrl: '', description: '' });
  const [isOwner, setIsOwner] = useState(false);
  const [tables, setTables] = useState([]);
  const [newTable, setNewTable] = useState({ table_number: '', capacity: '' });

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/restaurant/menu', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCategories(response.data.categories);
        setIsOwner(response.data.role === 'owner'); // Check if the user is the owner
      } catch (error) {
        console.log('Error fetching menu:', error);
      }
    };

    const fetchTables = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/restaurant/gettables', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTables(response.data.tables);
      } catch (error) {
        console.log('Error fetching tables:', error);
      }
    };

    fetchMenu();
    fetchTables();
  }, []);

  // Handle adding a new category (Owner only)
  const handleAddCategory = async () => {
    if (!newCategory) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/restaurant/category', {
        category_name: newCategory,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories([...categories, response.data.category]);
      setNewCategory(''); // Clear input
    } catch (error) {
      console.log('Error adding category:', error);
    }
  };

  // Handle adding a new menu item (Owner only)
  const handleAddItem = async (categoryId) => {
    if (!newItem.itemName || !newItem.price || !newItem.imageUrl) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/restaurant/menu', {
        category_id: categoryId,
        item_name: newItem.itemName,
        price: newItem.price,
        image_url: newItem.imageUrl,
        description: newItem.description,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedCategories = categories.map((cat) => {
        if (cat._id === categoryId) {
          return { ...cat, items: [...cat.items, response.data.item] };
        }
        return cat;
      });

      setCategories(updatedCategories);
      setNewItem({ categoryId: '', itemName: '', price: '', imageUrl: '', description: '' }); // Clear inputs
    } catch (error) {
      console.log('Error adding item:', error);
    }
  };

  // Handle deleting a menu item (Owner only)
  const handleDeleteItem = async (itemId, categoryId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8000/api/restaurant/menu/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Remove the item from the UI
      const updatedCategories = categories.map((cat) => {
        if (cat._id === categoryId) {
          return { ...cat, items: cat.items.filter((item) => item._id !== itemId) };
        }
        return cat;
      });

      setCategories(updatedCategories);
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  // Handle adding a new table
  const handleAddTable = async () => {
    if (!newTable.table_number || !newTable.capacity) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/restaurant/table', {
        table_number: newTable.table_number,
        capacity: newTable.capacity,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTables([...tables, response.data.table]);
      setNewTable({ table_number: '', capacity: '' });
    } catch (error) {
      console.log('Error adding table:', error);
    }
  };

  return (

    <div className={style.menuContainer}>
      {/* <h2>Menu and Tables</h2> */}
      {/* {isOwner && (
        <div className={style.addCategoryContainer}>
          <input
            type="text"
            value={newCategory}
            placeholder="New Category Name"
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={handleAddCategory} className={style.addButton}>Add Category</button>
        </div>
      )} */}

      {categories.map((category) => (
        <div key={category._id} className={style.category}>
          {/* <h3>{category.category_name}</h3> */}
          {/* {isOwner && (
            <div className={style.addItemContainer}>
              <input
                type="text"
                placeholder="Item Name"
                onChange={(e) => setNewItem({ ...newItem, categoryId: category._id, itemName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL"
                onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
              />
              <textarea
                placeholder="Description"
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              ></textarea>
              <button onClick={() => handleAddItem(category._id)}>Add Item</button>
            </div>
          )} */}

          <ul className={style.itemList}>
            {
              {/* category.items.map((item) => (
                <li key={item._id} className={style.menuItem}>
                  <img src={item.image_url} alt={item.item_name} className={style.menuImage} />
                  <p>{item.item_name}</p>
                  <p>{item.price}</p>
                  {isOwner && (
                    <div className={style.actionButtons}>
                      <button onClick={() => handleDeleteItem(item._id, category._id)}>Delete</button>
                    </div>
                  )}
                </li>
              )) */}
            }
          </ul>
        </div>
      ))}

      <h2>Create Menu</h2>
      <div className='d-flex gap-5'>
        <div className={style.addTableContainer}>
        <h2>Category</h2>
          <div class="mb-2">
            <label for="category_name" class="form-label">Category Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Category Name" />
          </div>
          
          <button onClick={handleAddTable} className={style.addButton}>Add Category</button>
        </div>

        <div className={style.addTableContainer}>
        <h2>Item</h2>
          <div class="mb-2">
            <label for="item_name" class="form-label">Item Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Item Name" />
          </div>
          {/* <input
          type="text"
          placeholder="Table Number"
          value={newTable.table_number}
          onChange={(e) => setNewTable({ ...newTable, table_number: e.target.value })}
        /> */}
          <div class="mb-2">
            <label for="description" class="form-label">Item Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          {/* <input
          type="text"
          placeholder="Capacity"
          value={newTable.capacity}
          onChange={(e) => setNewTable({ ...newTable, capacity: e.target.value })}
        /> */}
          <div class="mb-2">
            <label for="item_price" class="form-label">Price</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price" />
          </div>
          {/* <input
          type="text"
          placeholder="Capacity"
          value={newTable.capacity}
          onChange={(e) => setNewTable({ ...newTable, capacity: e.target.value })}
        /> */}
          <div class="mb-2">
            <label for="image" class="form-label">Image</label>
            <input type="file" class="form-control" id="exampleFormControlInput1" placeholder='Image_Url' />
          </div>
          {/* <input
          type="text"
          placeholder="Capacity"
          value={newTable.capacity}
          onChange={(e) => setNewTable({ ...newTable, capacity: e.target.value })}
        /> */}
          <button onClick={handleAddTable} className={style.addButton}>Add Item</button>
        </div>
      </div>

      <ul className={style.tableList}>
        {tables.map((table) => (
          <li key={table._id} className={style.tableItem}>
            <p>Table {table.table_number} - Capacity: {table.capacity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateMenu;
