import * as React from 'react';
import './style.css'; 
class Movie extends React.Component{
    render(){
        return <div className="movie-card">
        <img src={this.props.banner} alt='mahesh babu'/>
<label>{this.props.likes}{this.props.name}</label>
    </div>
}
    }


   
export default Movie;