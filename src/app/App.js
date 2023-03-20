// eslint-disable-next-line @typescript-eslint/no-unused-vars

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConCreate from '../components/ConCreate';
import ConListing from '../components/ConListing';
import ConUpdate from '../components/ConUpdate';
import ConView from '../components/ConView';

function App() {
  return (
    <div className="App">
      <h1>Contact Listing</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConListing />}></Route>
          <Route
            path="/song-training-project/create"
            element={<ConCreate />}
          ></Route>
          <Route
            path="/song-training-project/update/:conid"
            element={<ConUpdate />}
          ></Route>
          <Route
            path="/song-training-project/view/:conid"
            element={<ConView />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
