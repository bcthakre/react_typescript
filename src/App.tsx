import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  const personName = {
    first: 'Tim',
    last: 'Apple'
  }

  const nameList = [
    
    { 
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Bhupendrasinh',
      last: 'Thakre'
    },
    {
      first: 'Ziva',
      last: 'Thakre'
    }
  
]

  return (
    <div className="App">
      <Greet name='Bhupendrasinh' messageCount={20} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
