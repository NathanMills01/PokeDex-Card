import { useState } from 'react'
import { useEffect } from 'react';



function PokemonCard() {
  const [count, setcount] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`);
        const result = await response.json();
        console.log(result);
        setData(result);
 

        console.log(result.types[0].type.name);
        if(result.types[0].type.name == "grass"){
          document.body.style.backgroundColor = "green";

        }

        else if(result.types[0].type.name == "fire"){
          document.body.style.backgroundColor = "red";
        }

        else if(result.types[0].type.name == "water"){
          document.body.style.backgroundColor = "blue";
        }

        else{
          document.body.style.backgroundColor = "white";
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);



      }

    };


    fetchData();
  }, [count]);



  return (

    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div
        style={{
          backgroundColor: '#ffff',
          padding: '20px',
          borderRadius: '10px',
          width: '200px',
          color: '#000',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',

        }}
      >

        <div>
          {loading ? (
  
            <p>Loading...</p>
          ) : (

            <ul>
              <p>{data.name}</p>
              <img src={data.sprites.versions['generation-iii'].icons.front_default} />
              <p>Dex Entry:</p>
              <p>{data.types[0].type.name}</p>
              <h1>{count}</h1>
              <button onClick={() => setcount(count + 1)}>Next Pokemon</button>

            </ul>

          
          )}
      
        </div>

      </div>
    </div>
  


  );

}


function App() {

  return (
    <div>
      <PokemonCard />
    </div>

  );

}


export default App
