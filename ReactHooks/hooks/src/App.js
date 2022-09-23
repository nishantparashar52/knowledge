import logo from './logo.svg';
import './App.css';
import { useFetch } from './useFetch';
import {useState} from 'react';

function App() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({
    url
  });
  console.log('App rerendering');
  return (
    <div className="App">
      <div>{data && JSON.stringify(data)}</div>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/users/1')}>User 1 </button>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/users/2')}>User 2</button>
    </div>
  );
}

export default App;
