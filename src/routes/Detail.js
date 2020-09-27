import React from "react";
import "./Detail.css";

class Detail extends React.Component{

    // Detail에서 state를 가져오지 못할 경우 Home으로 보낸다. 
    componentDidMount(){
        const { location, history } = this.props; 
        if (location.state === undefined){
            history.push("/");  
        }
    }



    render(){
        const { location } = this.props;

        if(location.state) {
            return <div className="movie-detail">
                <h1>{location.state.title}</h1>
                <h3>{location.state.year}</h3>
                <h3 className="genres">{location.state.genres}</h3>
                <h3>{location.state.summary}</h3>
                <img src={location.state.poster} />
                </div>
        } else {
            return null;
        }
    }
}

export default Detail;
