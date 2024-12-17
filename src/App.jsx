import react ,{useState}from "react";
import Card from "./Vard";
import axios from "axios";
import './style.css'
import { FaSearch } from "react-icons/fa";

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
      
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDEhkDsPRvhFKWadhvz0nq4ehSKoNmhZfU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        
    }
    const searchBookByEnter=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDEhkDsPRvhFKWadhvz0nq4ehSKoNmhZfU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyDown={searchBookByEnter}/>
                        <button onClick={searchBook} ><FaSearch /></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main,
