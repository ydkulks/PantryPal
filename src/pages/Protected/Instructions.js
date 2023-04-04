import AuthUser from '../AuthUser';
import {useEffect} from 'react';

const Instructions = () => {
  const ID = localStorage.getItem('RecipeID');
  const GetInstruction = async () => {
    const url = `http://localhost:5000/api/instructions`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: ID}),
    });
    const data = await res.json();
    console.log(data);
    const div = document.getElementById('InstContent');
    data[0].steps.forEach(steps => {
      const row = document.createElement('div');
      row.className = 'row';
      const col = document.createElement('div');
      col.className = 'col';
      const step = document.createElement('p');

      const equip = document.createElement('p');
      equip.textContent = "Equipments:";
      steps.equipment.forEach(item=>{
        const p = document.createElement('p');
        p.textContent = item.name;
        equip.appendChild(p);
      })

      const ing = document.createElement('p');
      ing.textContent = "Ingredients:";
      steps.ingredients.forEach(item=>{
        const p = document.createElement('p');
        p.textContent = item.name;
        ing.appendChild(p);
      })
      step.textContent = steps.step;
      col.appendChild(ing);
      col.appendChild(equip);
      col.appendChild(step);
      row.appendChild(col);
      div.appendChild(row);
    });
  };
  useEffect(() => {
    GetInstruction();
  }, []);
  return (
    <div className="InstContainer">
      <h2>Recipe Instruction for {ID}</h2>
      <div id="InstContent" className="InstContent"></div>
    </div>
  );
};

export default AuthUser(Instructions);
