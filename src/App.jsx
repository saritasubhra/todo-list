import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      id: Math.random(),
      name: todo,
    };
    setList([...list, data]);
    setTodo("");
  }

  function handleDelete(item) {
    const newList = list.filter((i) => i.id !== item.id);
    setList(newList);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
