import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './style.css';
class Movies extends React.Component{
    getMovie = (name , likes , banner) => {
  return <Movie name= {name} likes={likes} banner={banner}/>
    };
    render(){
       return (
       <div className='movies-section'>
           {this.getMovie('Maharshi', '123,0k', 'https://upload.wikimedia.org/wikipedia/en/7/7f/Jersey_poster.jpg')}
           {this.getMovie('Avengers', '1M', 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2019%2F03%2FPayoff_1-Sht_Online_v6_Domestic_Lg-1200x675.jpg')}
           {this.getMovie('Maharshi', '123,0k', 'https://www.sify.com/uploads/maharshi600x40009-tfjr6Giedbeae.jpg')}
       

        </div>
       );

    }
}
export default Movies;