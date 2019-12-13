import React from 'react';

class Countup extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
        this.countUp=this.countUp.bind(this);
    }
    CountUp(){
        this.setState({ count: this.state.count + 1});
    }
    render (){
        return(
            <div>
                <p>count:{this.state.count}</p>
                <button onClick={this.CountUp}>Count Up!</button>
            </div>
        );
    }
};

export default Countup;