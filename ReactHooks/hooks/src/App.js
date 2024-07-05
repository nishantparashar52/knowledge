import './App.css';
import { useFetch } from './useFetch';
import {useState, useEffect} from 'react';
import { Rating } from './components/Ratings/Rating';
import { Tabs } from './components/Tabs/Tabs';
import { Dropdown } from './components/Dropdown';
import { Comment } from './components/Comments/Comments';
import {Boxes} from './components/Uberboxes/Boxes';
import { dropdownData, comments, TabsData } from './public/dropdownData.js';
import { fetchData } from './data';
import { PageTree } from './components/PageTree';


function App() {
  const [url, setUrl] = useState(null);
  const [pageTree, setPageTree] = useState([]);
  const { data } = useFetch({
    url
  });
  console.log('App rerendering');
  const selectedTabHandler = (tabID) => {
    console.log(`tab Clicked ${TabsData[tabID]?.label}`);
  }

  useEffect(() => {
    async function getData() {
      const response = await fetchData();
      setPageTree(response);
    }
    getData();
  }, [])
  return (
    <div className="App">
      <>
      {/* <div>{data && JSON.stringify(data)}</div>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/users/1')}>User 1 </button>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/users/2')}>User 2</button> */}
      </>
      {/* <Rating length="20"/>

      <Tabs tabs={TabsData} defaultTab="0" selectedTabHandler={selectedTabHandler} tabClassName="tabs" contentClassName="content" />
      <Dropdown data={dropdownData} />
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))} */}
      <PageTree data={pageTree} />

      <Boxes len="9" />
    </div>
  );
}

export default App;
