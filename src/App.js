import React, { useState } from "react";

const Transaction = ({ incomeType, incomeAmount, onChangeValue, onDelete }) => {
    return (
        <div>
            <span>{incomeType}</span> -{" "}
            <input type="text" value={incomeAmount} onChange={onChangeValue} />
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

const App = () => {
    const [transactions, setTransactions] = useState([
        { type: "income", amount: 400 }
    ]);

    const onAddTransaction = () => {
        setTransactions([...transactions, { type: "income", amount: 0 }]);
    };

    const onChangeValue = (value, index) => {
        let transactionsCopy = [...transactions];
        let concreteTransactionCopy = {
            ...transactionsCopy[index],
            amount: value
        };
        transactionsCopy[index] = concreteTransactionCopy;

        setTransactions(transactionsCopy);
    };

    const onDelete = index => {
        setTransactions(
            transactions.filter(
                (_, transactionIndex) => transactionIndex !== index
            )
        );
    };

    return (
        <div>
            {transactions.map((transaction, index) => (
                <Transaction
                    key={index}
                    incomeType={transaction.type}
                    incomeAmount={transaction.amount}
                    onChangeValue={event =>
                        onChangeValue(event.target.value, index)
                    }
                    onDelete={() => onDelete(index)}
                />
            ))}

            <button onClick={onAddTransaction}>Add Transaction</button>
        </div>
    );
};

export default App;
