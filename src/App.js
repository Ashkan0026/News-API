import { useState,useEffect } from 'react';
import './index.css'
import Header from './components/Header';
import New from './components/New';
import {FaSearch} from 'react-icons/fa'

function App() {
  const [category,setCategory] = useState('all')
  const [news,setNews] = useState(null)
  const [onCategorySearch, setOnCategorySearch] = useState(false)
  const [counter,setCounter] = useState(0)

  const getData = async (url) => {
    await fetch(url).then((response) => {
      response.json().then((result) => {
        console.log(result)
        setNews(result)
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if(!onCategorySearch){  
      const url = `https://inshorts.deta.dev/news?category=${category}`
      getData(url)
    }
  },[])

  const setTheCategory = (e) => {
    setCategory(e.target.value)
  }

  const sendAFecth = async () => {
    const url = `https://inshorts.deta.dev/news?category=${category}`
    await getData(url)
    setCounter(counter+1)
  }

  return (
      <div className="App">
        <div className='header'>
          <input type='text' className='input' placeholder='Enter the news Category' onChange={setTheCategory}/>
          <button className='search-btn' onClick={sendAFecth}>Search<FaSearch className='search-icon'/></button>
      </div>
        <section className='news'>
          {news !== null && 
            news.data.map((ne) => {
              return(
                <New newHere={ne} key={ne.id}/>
              )
            })
          }
        </section>
      </div>
  );
}

export default App;
