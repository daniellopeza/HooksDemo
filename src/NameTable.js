import React from 'react';

export default class NameTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'enter name',
            surname: 'enter surname',
            width: window.innerWidth
        }

        // need to bind methods to use "this"
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    // REPEATED LOGIC
    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }

    handleSurnameChange(e){
        this.setState({
            surname: e.target.value
        });
    }

    handleResize(){
        this.setState({
            width: window.innerWidth
        });
    }

    // updating doc title is a  "side effect" in a class 
    componentDidMount(){
        document.title = `${this.state.name} ${this.state.surname}`;
        window.addEventListener('resize', this.handleResize);
    }

    // need this or class wont know state changed 
    componentDidUpdate(){
        document.title = `${this.state.name} ${this.state.surname}`;
    }

    // REPEATED LOGIC
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    render(){
        return (
            <div className="inputForm" style={{textAlign:'center', backgroundColor: 'grey', borderRadius: '4px'}}>
                Enter Name (using "this" Obj)
                <div>
                    <input
                    value={this.state.name} 
                    onChange={this.handleNameChange}
                    />
                </div>
                <div>
                    <input 
                    value={this.state.surname} 
                    onChange={this.handleSurnameChange}
                    />
                </div>
                <div>
                    <input 
                    value={this.state.width}
                    />
                </div>
            </div>
        );  
    }
}