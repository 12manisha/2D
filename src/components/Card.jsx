import React from "react";
import Anime from "./Anime";
import Details from "./Details";

function Card(props){
    return (
<div >
<div className="card" >
<div className="top" >
<h2 className="name" >
<p> {props.id} </p>
 {props.name} </h2>
<Anime img={props.img} />
</div>
<div className="bottom" >
<Details info = {props.info} />
</div>
</div>
</div>
);
}

export default Card;