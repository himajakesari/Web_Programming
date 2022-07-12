import React from 'react';


const Videos = (props) => {
  
console.log(props.available);
 
	return(
		<div>
		<h1>Videos List</h1>
   	{props.videos.filter((video)=> (props.checked ? (video.title.toLowerCase().includes(props.search.toLowerCase()) & video.available==="1") : video.title.toLowerCase().includes(props.search.toLowerCase()))).map((video) => (
			<div class ="card">
			<div class ="card-body">
			<h5 class="card-title">{video.title}</h5>
			<h6 class="card-subtitle mb-2 text-muted">{video.genre}</h6>
			<p class="card-text">{video.description}</p>
			</div>
			</div>
			))}
    </div>
		)
}





export default Videos;







