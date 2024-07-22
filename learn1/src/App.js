import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Content1 from './Content1';
import { useState,useEffect } from 'react';
import Additem from './Additem';
import Searchitem from './Searchitem';
import ApiRequest from './ApiRequest';

function App() {
  const API_URL='http://localhost:3200/items'
  const [items, setItems] = useState( []  //- if use this when reload data is not store
                       //or
    // JSON.parse(localStorage.getItem('todo_list')) ||[]
    
    // [
    //   {
    //     id: 1,
    //     checked: true,
    //     item: "practice coding"
    //   },
    //   {
    //     id: 2,
    //     checked: false,
    //     item: "play cricket"
    //   },
    //   {
    //     id: 3,
    //     checked: false,
    //     item: "read about react"
    //   }
    // ])
  )
  const [newItem,setNewItem]=useState('')//to store a variable
  const [search,setSearch]=useState('')
  
  // console.log("before useeffect");
  const [fetchError,setFetchError]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
useEffect(()=>{
  // console.log("load time inside");
  // JSON.parse(localStorage.getItem('todo_list'))// if use ->[] only this line

  const fetchItems=async ()=>{
    try {
      const response= await fetch(API_URL)
      if(!response.ok) throw Error("data not received")
      console.log(response);
      const listItems=await response.json()
      console.log(listItems);
      setItems(listItems)
      setFetchError(null)
      
    } catch (error) {
      // console.log(error.Stack);
      setFetchError(error.message)
    }finally{
      setIsLoading(false)
    }
  }
  setTimeout(()=>{
    (async ()=> await fetchItems())()
  },2000)
  // fetchItems() //or
  // (async ()=> await fetchItems())()
}, [])
    // console.log("after useeffect");


  const addItem=async(item)=>{
    const id=items.length ? items[items.length-1].id +1 :1
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    // localStorage.setItem("todo_list", JSON.stringify(listItems)) // this use for local storage

    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }
    const result=await  ApiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
  }

  const handleCheck =async (id) => {
    // console.log(`id:${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    // localStorage.setItem("todo_list", JSON.stringify(listItems))

    const myItem=listItems.filter((item)=> item.id===id)
    const updateOptions={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl=`${API_URL}/${id}`
    const result=await  ApiRequest(reqUrl,updateOptions)
    if(result) setFetchError(result)
  
  }
  const handleDelete =async (id) => {
    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems)
    // localStorage.setItem("todo_list", JSON.stringify(listItems))

    const deleteOptions ={method: 'DELETE'}
    const reqUrl=`${API_URL}/${id}`
    const result=await  ApiRequest(reqUrl,deleteOptions)
    if(result) setFetchError(result)
  }

  const handlesubmit=(e)=>{
    e.preventDefault()//use to don't reload the page
    // console.log("submitted");
    if(!newItem) return;
    console.log(newItem);
    //add
    addItem(newItem)
    setNewItem('')
  }
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Header title="Course List" />
      {/* <Content /> */}
      <Additem
      newItem={newItem}
      setNewItem={setNewItem}
      handlesubmit={handlesubmit}
      />
      <Searchitem
      search={search}
      setSearch={setSearch}
      />
      {isLoading && <p>Loading items...</p>}
      {fetchError && <p>{`error: ${fetchError}`}</p>}
      {!isLoading && !fetchError && <Content1
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      <Footer
        length={items.length}
      />
  
    </div>
  );
}

export default App;
