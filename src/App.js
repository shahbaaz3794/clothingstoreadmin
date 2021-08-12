import React from 'react';
import {db} from "./config/firebaseConfig";
import { carouselImages } from './carouselData';

const App=()=> {

  const handleSet =async()=>{
    try{
      await carouselImages.map((value,index) => db.collection('carouselImages').doc(`${index}`).set(value))
      
      console.log("success");
    } catch(error) {
      console.log(error,"error");
    }
    
  }

  const handleget =async()=>{
    try{
      const carousel = await db.collection('carouselImages')
      const snapshot = await carousel.get();
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    } catch (error){
      console.log("error");
    }
  }

  return (
    <div className="App">
      <button onClick={()=>handleSet()}>Set</button>
      <button onClick={()=>handleget()}>Get</button>
    </div>
  );
}

export default App;
