import './App.css';
import WithWebWorkers from './components/with-web-worker';
// import WithOutWebWorkers from './components/without-web-worker';

function App() {
  return (
    <div>
      {/* <WithOutWebWorkers/> */}
      <WithWebWorkers/>
    </div>
  );
}

export default App;
