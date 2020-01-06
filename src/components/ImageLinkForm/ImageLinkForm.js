import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonChange}) => {
	return(
		<div>
		<p className='f3'>
			{'This Magic Brain will detect faces in your pictures. Give it a try.'}
		</p>
		<div className='center'>
		<div className=' form center pa4 br3 shadow-5'>
		<input className='f5 w-70 pa2 center' 
		type='text' placeholder= "URL" onChange={onInputChange}> 
		</input>
			<button className='w-30 grow f5 link ph3 pa2 dib white bg-light-purple'
			onClick={onButtonChange}>Detect</button>
			</div>
		</div>
		</div>
 
  );
}


export default ImageLinkForm;