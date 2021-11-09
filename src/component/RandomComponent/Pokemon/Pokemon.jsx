import React from "react";
import "./Pokemon.css"
const Pokemon = ({ name, src, type, power }) => {
	// ({}--> destructing your props gives you easy access in reusing by calling the props directly)
	//     //()---> use the parenthesis in a Boolean logic
	return (
		<div className="pokemon">
			<h3>{name}</h3>
			<img src={src} alt={name} />
			<p>Spec: {type}</p>
			<p>
				<b>Power: {power}</b>
			</p>
		</div>
	);
}
export default Pokemon