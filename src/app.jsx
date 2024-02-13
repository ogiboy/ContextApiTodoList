import { useContext, useEffect, useState } from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import { TodosContext } from "./todo-context";
import "./index.scss";

const todosTemplate = [
  {
    id: 0,
    label: "Tüm görevleri görüntüleme özelliğini düzeltin",
    checked: true
  },
  {
    id: 1,
    label: "Sayfa düzenini düzeltin, onay kutuları sütunda listelenmelidir",
    checked: true
  },
  {
    id: 2,
    label: "Yeni bir görev ekleme yeteneğini düzeltin",
    checked: true
  },
  {
    id: 3,
    label: "Görevi değiştirme yeteneğini düzeltin",
    checked: true
  },
  {
    id: 4,
    label: "Görevi silme özelliğini düzeltin",
    checked: true
  },
  {
    id: 5,
    label: "Tamamlanan görevleri sayma özelliğini düzeltin",
    checked: true
  }
];

export const App = () => {
  const { setTodos } = useContext(TodosContext);

  useEffect(() => {
    setTodos(todosTemplate);
  }, []);

  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
    </div>
  );
};
