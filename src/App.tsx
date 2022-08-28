import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
    ageN: 18
  }

  const personList = [
    {
      first: 'Brian',
      last: 'Lara'
    },
    {
      first: 'Sachin',
      last: 'Tendulkar'
    }
  ]

  return (
    <div className="App">
      <Greet name='Bhupendrasinh' messageCount={20} isLoggedIn={false} />
      <Person name={personName} age={personName}/>
      <PersonList names={personList}/>
    </div>
  );
}

export default App;
