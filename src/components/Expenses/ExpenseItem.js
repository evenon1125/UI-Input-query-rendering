// import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

  const title = props.title;

  // const [title,setTitle] = useState(props.title);

  // const clickHandler = () =>{
  //   setTitle('updated!');
  //   console.log('wwww');
  // }
  return (
    <li>
      <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler} >Change Title</button> */}
      </div>
    </li>
  );
}
export default ExpenseItem;
