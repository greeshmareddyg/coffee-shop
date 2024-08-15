import CoffeeCard from "./CoffeeCard";
import { useState, useEffect } from "react";
import { coffeeData } from "../utils/mockData";


const AppContainer = () => {

const [data, setData] = useState([])
const [filteredData, setFilteredData] = useState([])
const[searchText, setSearchText] = useState("")

useEffect(() => {
  getData();
}, [])


const getData = async () => {
  try {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    setData(json);
    setFilteredData(json);
    
  } catch (err) {
    setData(err.message);
  }
}

  return (<main>
    <aside>
      <h3>Filters</h3>
      <button className="menu-button" onClick={() => {

        setSearchText("")
        setFilteredData(data)
        console.log("All coffees", filteredData)
        }}>All
      </button>

      <button className="menu-button" onClick={() => {
        let filteredCoffee = data.filter((item) => item.ingredients.join('').toLowerCase().includes("coffee"))
        setSearchText("")
        setFilteredData(filteredCoffee)
        console.log("filteredCoffee", filteredData)
        }}>Get Coffee Menu
      </button>
      <button className="menu-button" onClick={() => {
        setSearchText("")
        let filteredExpresso= data.filter((item) => item.ingredients.join('').toLowerCase().includes("espresso"))
        setFilteredData(filteredExpresso)
        console.log("filteredexpresso", filteredData)
        }}>Get Espresso Menu
      </button>
    </aside>
    <section>
    {data.length === 0 ? <h1> Loading</h1> : <div className="app-container">
        <input type="text" 
          className="search-input"
         value={searchText}  
         placeholder="Search based on ingredients"
         onChange={(e) => {
            setSearchText((e.target.value))
            console.log("searchText",e.target.value, searchText)
            let filteredSearch = data.filter((item)=> item.ingredients.join('').toLowerCase().includes((e.target.value).toLowerCase()))
            console.log("filteredSearch",filteredSearch)
            setFilteredData(filteredSearch)
          
         }}/>
          <div>

          </div>
        <div className="coffee-container">
          { filteredData.map((coffee) => {
              return <CoffeeCard key={coffee.id} coffee={coffee}/>
              })
          }
        </div>
    </div>}

    </section>
  </main>)
  
    
}

export default AppContainer;