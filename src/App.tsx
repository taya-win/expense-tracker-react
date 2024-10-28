import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";

export default function App() {
    const [expenses, setExpenses] = useState([
            {id: 0, description: "aaa", amount: 10, category: "Utilities"},
            {id: 1, description: "bbb", amount: 10, category: "Utilities"},
            {id: 2, description: "ccc", amount: 10, category: "Utilities"},
            {id: 3, description: "ddd", amount: 10, category: "Utilities"},
    ]);

    return <div className="p-5">
        {expenses.length != 0 && <ExpenseList
            expenses={expenses}
            onDelete={(id: number) => {
                setExpenses(expenses.filter(item => item.id !== id));
            }}
        />}
    </div>;
}