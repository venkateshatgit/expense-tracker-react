import './App.css'
import Headers from './components/Headers'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
  return (
    <div className="container">
      <Headers/>
      <div className="balance-container">
        <Balance/>
        <IncomeExpenses/>
      </div>
    </div>
  );
}

export default App;
