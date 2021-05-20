import React from 'react';

class Caluculator extends React.Component {
    state ={
        a: 0,
        b:0,
        showResult:true
    };
    setA = e =>{
        this.setState({
            a:parseInt(e.target.value),
            showResult:false
        });
    };
    setB = e=>{
        this.setState({
            b:parseInt(e.target.value),
            showResult:false

        });
    };
    setShowResultToTrue= e=>{
        this.setState({
            showResult:true
        });
    }
 render (){
    const add = this.state.a + this.state.b;
    const sub = this.state.a - this.state.b;
    const mul = this.state.a * this.state.b;
    const div = this.state.a / this.state.b;
    return (<div> 
        <input
        className="ipa"
        onChange={this.setA}
        />
      <input
        className="ipb"
        onChange={this.setB} /> 
        <button onClick={this.setShowResultToTrue}>Result</button> <br /> <hr/>
   
    <br></br>
    
   {this.state.showResult ?
   (
<div>
{'A:'+this.state.a }  {'B:'+this.state.b }<br/>
{'Add:' +add} <br/>
    {'sub:' +sub}<br/>
    {'Mul:' +mul}<br/>
    {'div:' +div}<br/>
</div>
   ):(
       <div>Click on result button</div>
   )}
    
    </div>
    );
 }
}
export default Caluculator;