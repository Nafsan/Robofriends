import React from 'react';


const Card = ({name, email, id, username}) => {
	return(
    <div className='tc bg-light-green dib br1 pa1 ma1 grow bw1 shadow-1'>
			{/*<h1>Robofriends</h1>*/}
			<img alt = "Hudai" src = {`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<h3>{username}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
	// return <div style={divStyle}>This should work cross-browser</div>;
	//className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'
}


export default Card;

