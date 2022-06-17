import './App.css';
import Create from './components/create/create';
import Read from './components/delete/read';

function App() {
  return (
    <div className='main'>
      <div>
          <h3>React Crud operations</h3>
      </div>
      
      <div>
        <Create/>
      </div>

      <div style={{marginTop:20}}>
        <Read/>
      </div>
    </div>
  );
}

export default App;
