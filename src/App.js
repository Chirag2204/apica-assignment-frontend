import React, { useEffect, useState } from 'react';
import { getCache, setCache, deleteCache } from './api/cache';

function App() {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
  const [response, setResponse] = useState('');
  
  // useEffect(() => {
  //   createCache()
  // }, [])

    const handleGet = async () => {
        try {
            const data = await getCache(key);
            setResponse(`Value: ${data}`);
        } catch (error) {
            setResponse('Error fetching value');
        }
    };

    const handleSet = async () => {
        try {
            await setCache(key, value);
            setResponse('Value set successfully');
        } catch (error) {
            setResponse('Error setting value');
        }
    };

    const handleDelete = async () => {
        try {
            await deleteCache(key);
            setResponse('Value deleted successfully');
        } catch (error) {
            setResponse('Error deleting value');
        }
    };

    return (
        <div className="App">
            <h1>LRU Cache Client</h1>
            <div>
                <input
                    type="text"
                    placeholder="Key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleGet}>Get</button>
                <button onClick={handleSet}>Set</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div>
                <p>{response}</p>
            </div>
        </div>
    );
}

export default App;
