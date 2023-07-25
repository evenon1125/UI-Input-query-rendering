import Chart from '../Chart/Chart';

const ExpensesChart = (props) =>{
    const chartDataPoints = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ];
    // console.log(props.expenses)

    for (const expense of props.expenses){
        // console.log(expense)
        const expenseMonth = expense.date.getMonth();  // starting at 0 => Januart => 0
        // console.log(expenseMonth,expense.amount)
        chartDataPoints[expenseMonth].value += expense.amount;
        // console.log(chartDataPoints[expenseMonth].value)
    }
    console.log(chartDataPoints)

    return <Chart dataPoints={chartDataPoints}/>;
}

export default ExpensesChart;