import AuthUser from '../AuthUser';
import React, {useState, useEffect} from 'react';

const ShoppingList = () => {
  useEffect(() => {
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
          const items = [];
          // Extracting items from object and storing in array
          response.data.forEach(item => {
            items.push(item.item);
          });
          items.sort((a, b) => a.localeCompare(b));
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
  }, []);

  const [item, setItem] = useState(null);
  const [resultData, setResultData] = useState([]);
  const token = localStorage.getItem('token');

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
        const items = [];
        // Extracting items from object and storing in array
        response.data.forEach(item => {
          items.push(item.item);
        });
        // sorting array
        items.sort((a, b) => a.localeCompare(b));
        setResultData(items);
      } else {
        console.log('Server Error!');
      }
    } catch (err) {
      console.log('Error:', err);
    }
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
      <div>
        {resultData.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default AuthUser(ShoppingList);
