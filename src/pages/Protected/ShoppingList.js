import AuthUser from '../AuthUser';
const ShoppingList = () => {
  return (
    <div className="SListContainer">
      <h2 className="SListTitle">Shopping List</h2>
    </div>
  );
};

export default AuthUser(ShoppingList);
