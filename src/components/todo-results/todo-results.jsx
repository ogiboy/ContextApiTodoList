import { useContext } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-results.scss";

export const TodoResults = () => {
  const { calculateChecked } = useContext(TodosContext);

  return (
    <div className="todo-results">
      Yapılanlar:
      {calculateChecked()}
    </div>
  );
};
