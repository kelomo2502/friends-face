import React,{useState} from 'react'
import data from './data'
import List from './List'
import './App.css'

const App = () => {
  const [people, setPeople] = useState(data)
  const handleDelete = (id)=>{
    setPeople(prevData=>prevData.filter(person=>person.id !== id));
  }

  const handleEdit = (id) =>{
    
  };

  return (
    <section className="container">
      <h2 className="text-center mb-5"> You have 
         <span className='ps-2 text-warning'>{people.length}</span> on your friends List
      </h2>
      <div className="row justify-content-md-center">
        <List people={people} 
        handleDelete={handleDelete}
        handleEdit={handleEdit}
         />
      </div>
    </section>
  );
}

export default App