// import ListBlock from './components/dataList';
// import './App.css';

// // แก้ไขที่นี่: ใช้ `id` เป็นค่า `key`
// const jsonData = fetch("https://fastapi-todo-nx3l.onrender.com/getTodos",{method : "get"})
// .then((data) => {
//   return data.json()})

// function editData() {
  
// }


// function deleteData(id) {
//   fetch("https://fastapi-todo-nx3l.onrender.com/deleteTodo", {
//     method: "delete",
//     body: JSON.stringify({ id: id }),
//   }).then(() => {
//     setData(prevData => prevData.filter(item => item.id !== id));
//   });
// }

// const blockData = jsonData.map((ele) => {
//   return <ListBlock key={ele.id} {...ele} editLogic = {editData} 
//   deleteLogic = {deleteData}/>;
// });



// function App() {
//   return (
//     <section id="app-section">
//       <div id="app-container">
//         {blockData}
//       </div>
//     </section>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import ListBlock from './components/dataList';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fastapi-todo-nx3l.onrender.com/getTodos", { method: 'get' });
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  function editData() {
   
  }
  

  function deleteData(id) {
    fetch("https://fastapi-todo-nx3l.onrender.com/deleteTodo", {
      method: "delete",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      setData(preDat => preDat.filter(item => item.id !== id));
    });
  }

  const blockData = data.map((ele) => {
    return <ListBlock key={ele.id} {...ele} editLogic={editData} 
    deleteLogic={() => deleteData(ele.id)} />;
  });

  return (
    <section id="app-section">
      <div id="app-container">
        {blockData}
      </div>
    </section>
  );
}

export default App;
