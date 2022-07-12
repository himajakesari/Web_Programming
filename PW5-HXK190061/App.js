import React, {Component} from 'react';
import Videos from './components/videos';

class App extends Component {
    
      state = {
        videos:[],
      search:"",
    checked:false

      }

      componentDidMount(){

        fetch('videos.json', {
          headers : { 
            'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( (data) => {
            this.setState({ videos: data })
            console.log( this.state.videos )
        })
        .catch(console.log)


      }



      render(){
        return(
          <div>
          <input type="text" placeholder="search..." onChange={(event)=>{this.setState({search:(event.target.value)})}}/>
          <button onClick={(event)=>{this.setState({finalSearch:this.state.search})}}>Search</button>
         
      <label>
        <input type="checkbox"   onChange={(event)=>{this.setState({checked: !this.state.checked})}}/>
        Available only
       </label>
         
          <Videos videos={this.state.videos}   search={this.state.search}  checked={this.state.checked} />
          </div>          
          );
        }
      



}

export default App;
