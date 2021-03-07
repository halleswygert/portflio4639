import React from 'react';

class Facts extends React.Component{
    
    render(){
        return (
        <>

        <h1> Fun Facts </h1>
    
        <p>1. Black Mirror first premiered in {this.props.showDate}.</p>

        <p>2. {this.props.showName} is the first show to feature a choice-based element.</p>

        <p>3. Black Mirror originated in the {this.props.showCountry}. </p>
       
        <p>4. {this.props.showChannel} picked up the show and has been streaming since its popularity has gone up. </p>
       </>

        )
    }

}

export default Facts; 