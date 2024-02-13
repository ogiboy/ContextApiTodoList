import { createContext, useState } from "react";

export const TodosContext = createContext();

export const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    // Yeni görev ekleme yeteneğini düzeltin
    if (task) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: crypto.randomUUID(), label: task, checked: false }
      ]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    // Görevi silme özelliğini düzeltin
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCheck = (id) => {
    // Görevi değiştirme yeteneğini düzeltin
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              checked: !todo.checked
            }
          : todo;
      })
    );
  };

  const calculateChecked = () => {
    // Tamamlanan görevleri hesaplama yeteneğini düzeltin
    let todosCount = 0;
    todos.map((todo) => {
      if (todo.checked) {
        todosCount++;
      }
    });
    return todosCount;
  };

  const valuesToShare = {
    todos,
    setTodos,
    handleAddTodo,
    setTask,
    task,
    handleDelete,
    toggleCheck,
    calculateChecked
  };

  return (
    <TodosContext.Provider value={valuesToShare}>
      {children}
    </TodosContext.Provider>
  );
};
