import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
width: 100%;
`;

const BalanceBox  = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-size: 20px;
width: 100%;
`;

const AddTransaction = styled.div`
background-color: black;
color: white;
padding: 5px 10px;
border-radius: 4px;
text-align: center;
cursor: pointer;
font-size: 1em;
font-weight: bold;
`;

const AddTransactionContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
gap: 10px;
padding: 15px 20px;
margin: 10px 20px;
& input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid gray;
}
`;

const RadioBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
& input {
    width: unset;
    margin: 0px 10px;
}
`;

const AddTransactionView = () => {
    return (
        <AddTransactionContainer>
            <input placeholder='Amount' />
            <input placeholder='Description'  />
            <RadioBox>
                <input type="radio" name="type" id="expense" value="EXPENSE" />
                <label htmlFor="expense">Expense</label>
                <input type="radio" name="type" id="income" value="INCOME" />
                <label htmlFor="income">Income</label>
            </RadioBox>
            <AddTransaction>Add Transaction</AddTransaction>
        </AddTransactionContainer>

    )
}
function Data() {
    const [addButton, CancelButton] = useState(true);
  return (
    <Container>
      <BalanceBox>
        Balance: $100
        <AddTransaction>
          {addButton? "Cancel" : "ADD"}
      </AddTransaction>
      </BalanceBox>
      {addButton && <AddTransactionView />}
    </Container>
  )
}

export default Data;