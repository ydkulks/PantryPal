import AuthUser from '../AuthUser';
import React, {useState} from 'react';

const ShoppingList = () => {
  const [item, setItem] = useState(null);
  const [resultData, setResultData] = useState([]);
  const [newItem, setNewItem] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const token = localStorage.getItem('token');

  const getList = async () => {
    const token = localStorage.getItem('token');
    try {
      const request = await fetch('http://localhost:5000/api/shoppinglist', {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      if (response.status === 200) {
        // Extracting items from object and storing in array
        const items = response.data.map(({_id, item, timestamp}) => ({
          id: _id,
          item,
          timestamp,
        }));
        items.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        setResultData(items);
        //console.log('All Data: ', response);
      } else {
        console.log('Server Error: ', response);
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };
  getList();

  const SubmitForm = async event => {
    const formData = {
      item: item,
      timestamp: Date(),
    };
    event.preventDefault();
    event.target.reset();
    try {
      const request = await fetch('http://localhost:5000/api/shoppinglist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorisation: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const response = await request.json();
      if (response.status === 200) {
        getList();
      } else {
        console.log('Server Error!');
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  const deleteListItem = async listID => {
    try {
      const data = {
        id: listID,
      };
      const request = await fetch('http://localhost:5000/api/listdelete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorisation: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const response = await request.json();
      //console.log(response);
      if (response.status === 200) getList();
      console.log(`Server Error: ${response.status}`);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };
  const updateListItem = async (listID, listItem, event) => {
    try {
      const data = {
        id: listID,
        item: listItem,
      };
      const request = await fetch('http://localhost:5000/api/listupdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorisation: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const response = await request.json();
      console.log(response);
      if (response.status === 200) getList();
      console.log(`Server Error: ${response.status}`);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
    event.preventDefault();
    setShowPopover(false);
  };

  return (
    <div className="SListContainer">
      <div id="InstHero" className="SListHero">
        <h2 className="SListTitle">Shopping List</h2>
        <div>
          <form id="SListForm" onSubmit={SubmitForm}>
            <input
              onChange={e => setItem(e.target.value)}
              type="text"
              placeholder="Enter shopping item..."
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      <div id="itemContainer">
        <div className="itemContainer">
          {/* Display item list */}
          {resultData.map(({id, item, timestamp}, i) => (
            <div key={i} className="itemDiv">
              <div>
                <h4>{item}</h4>
                <p>{timestamp}</p>
              </div>
              <div>
                {/* Buttons */}
                <button onClick={() => setShowPopover(true)}>
                  <i className="bi bi-pencil-fill" />
                </button>
                <button onClick={() => deleteListItem(id)}>
                  <i className="bi bi-trash-fill" />
                </button>
                {/* Popover form */}
                {/* Displays when 'showPopover' is true */}
                {showPopover && (
                  <div>
                    <form onSubmit={()=> updateListItem(id, newItem)}>
                      <input
                        type="text"
                        placeholder="Enter new item..."
                        onChange={e => setNewItem(e.target.value)}
                      />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthUser(ShoppingList);
