import AuthUser from '../AuthUser';
import {useEffect} from 'react';

const Instructions = () => {
  const NAME = localStorage.getItem('RecipeNAME');
  useEffect(() => {
    const GetInstruction = async () => {
      const ID = localStorage.getItem('RecipeID');
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
      var count = 1;
      data[0].steps.forEach(steps => {
        const row = document.createElement('div');
        row.className = 'row';
        row.setAttribute("id","step");
        const col = document.createElement('div');
        col.className = 'col-lg';
        const col0 = document.createElement('div');
        col0.className = 'col-lg';

        const equip = document.createElement('p');
        equip.textContent = 'Equipments :';
        equip.setAttribute("class","heading");
        const equipPara = document.createElement('p');
        steps.equipment.forEach(item => {
          const p = document.createElement('p');
          p.textContent = item.name;
          equipPara.appendChild(p);
        });

        const ing = document.createElement('p');
        ing.textContent = 'Ingredients :';
        ing.setAttribute("class","heading");
        const ingPara = document.createElement('p');
        steps.ingredients.forEach(item => {
          const p = document.createElement('p');
          p.textContent = item.name;
          ingPara.appendChild(p);
        });

        const stepCount = document.createElement('h3');
        stepCount.textContent = `Step ${count}`;

        const description = document.createElement('p');
        description.textContent = 'Description :';
        description.setAttribute("class","heading");
        const step = document.createElement('p');
        step.textContent = steps.step;

        col.appendChild(ing);
        col.appendChild(ingPara);
        col.appendChild(equip);
        col.appendChild(equipPara);
        col.appendChild(description);
        col.appendChild(step);
        col0.appendChild(stepCount);
        row.appendChild(col0);
        row.appendChild(col);
        div.appendChild(row);
        count += 1;
      });
    };
    GetInstruction();
  }, []);
  return (
    <div className="InstContainer">
      <h2 className="InstTitle">{NAME}</h2>
      <div id="InstContent" className="InstContent"></div>
    </div>
  );
};

export default AuthUser(Instructions);
