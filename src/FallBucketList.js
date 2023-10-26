import { useState } from 'react';
import { data } from './data';
import './App.css';

function FallBucketList (){
    const [list, setList] = useState(data);

    const removeItem =(id)=>{
        let newList=list.filter(item=>item.id !== id);
        setList(newList);
    }
   
    return( <div>
      {list.map((element => {
     const {id, title, image, description} =element;
    return(<div key={id}>
        <div className="container">
            <h2>{id} - {title}</h2>
        </div>

        <div className="container">
            <img src={image} width="300px" alt="fall"/>
        </div>

        <div className="container">
            <p>{description}</p>
        </div>

        <div className="container">
            <button className="btn" onClick={()=>removeItem(id)}>Check off my list</button>
        </div>
    </div>)
}))}
        <div className="container">
            <button onClick={()=> setList([])}>Completed all</button>
        </div>

        </div>
    )
}
export default FallBucketList;