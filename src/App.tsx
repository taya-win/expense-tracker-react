import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";
import ExpenseFilter from "./components/ExpenseFilter.tsx";
import ExpenseForm from "./components/ExpenseForm.tsx";



export default function App() {
    const [expenses, setExpenses] = useState([
            {id: 0, description: "aaa", amount: 10, category: "Utilities"},
            {id: 1, description: "bbb", amount: 10, category: "Utilities"},
            {id: 2, description: "ccc", amount: 10, category: "Utilities"},
            {id: 3, description: "ddd", amount: 10, category: "Utilities"},
    ]);

    const [selectedCategory, setSelectedCategory] = useState("");

    const visibleExpenses = selectedCategory
        ? expenses.filter(expense => expense.category === selectedCategory)
        : expenses;

    return <div className="p-5">
        <div className="mb-5">
            <ExpenseForm onSubmit={(data => {
                setExpenses([...expenses, {...data, id: expenses.length}])
            })} />
        </div>
        <div className="mb-3">
            <ExpenseFilter onSelectCategory={(category => setSelectedCategory(category))} />
        </div>
        {expenses.length != 0 && <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id: number) => {
                setExpenses(expenses.filter(item => item.id !== id));
            }}
        />}
    </div>;
}