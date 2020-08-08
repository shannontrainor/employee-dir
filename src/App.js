import React, {useMemo, useState, useEffect} from 'react';
import './App.css';
import Table from "./components/Table";
import axios from 'axios';


function App() {
  //store API data, empty array

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "results.name.first"  
          },
          {
            Header: "Last Name",
            accessor: "results.name.last"
          }
        ]
      },
      {
        Header: "Location",
        columns: [
          {
            Header: "Location",
            accessor: "results.location.state"
          }
        ]
      }
    ]
  );

  const [data, setData] = useState([]);
 
  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/?results=10&nat=us");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data}/>
    </div>
  );
}

export default App;
