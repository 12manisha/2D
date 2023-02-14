import React from "react";
import Card from "./Card";
import Contacts from "./Contacts";

function createcard(Contacts){
    return <Card
    
     name = {Contacts.name} 
    img = {Contacts.img} 
    info = {Contacts.info} />
};

function App(){
    return(
        <div>
        <h2 className="heading"> 2D characters are what love is!</h2>

        {Contacts.map(createcard)}

     {/* <Card
       name= {Contacts[0].name}
        img = {Contacts[0].img}
        info = {Contacts[0].info}
     />
     <Card
       name = {Contacts[1].name}
       img = {Contacts[1].img}
       info = {Contacts[1].info}
     /> */}
     </div>
    )
  }

  export default App;