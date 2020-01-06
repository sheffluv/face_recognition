import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return(
<div className= 'ma4 mt0'>
<Tilt className="Tilt br3 shadow-2" options={{ max : 60 }} style={{ height: 120, width: 150 }}>
 <div className="Tilt-inner pa3 br--top"> 
 <img style={{paddingTop: '5px'}} alt='logo' src={brain} /> </div>
</Tilt>

</div>

);
}

export default Logo;