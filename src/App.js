import React,{Component} from 'react';
import './App.css';
import Person  from './Person/Person';

class App extends Component {
    state = {
        persons:[
            {id: 'sffg',name:'Rajnish',age:28},
            {id: 'gfhj', name:'Alok',age:23}
        ]
    }

    switchNameHandler = (newName) =>
    {
        //console.log("was clicked");
        this.setState( {
            persons:[
                      {name:newName,age:28},
                      {name:'Rajnish',age:23}
                    ]
        })
    }

    nameChangeHandler = (event,id) =>
    {
        const personIndex = this.state.persons.findIndex(p=>{
           return p.id ===id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons= [...this.state.persons];
        persons[personIndex]=person;

        this.setState({persons:persons});
    }

    deletePersonHandler =(personIndex)=>{
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons});
    }
    render(){

      const style = {
          background: 'white',
          font: 'inherit',
          border: '1x solid blue',
          padding: '8px',
          cursor: 'pointer'
        };

      return(
        <div className="App">
        <h1>Lets start react js</h1>
            <button style={style} onClick={()=>this.switchNameHandler("Alok Raj")}>Switch Name</button>
            {
                this.state.persons.map((person,index)=>{
                return <Person
                    click1 = {()=>this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    nameChanged = {(event)=>this.nameChangeHandler(event,person.id)}/>
                })
            }
        </div>
      );
    }
}
// <div>
//     <Person
//         name={this.state.persons[0].name}
//         age={this.state.persons[0].age}
//         click1={this.switchNameHandler.bind(this,"Alok Raj")}
//         changedName={this.nameChangeHandler}>
//         from {this.state.persons[0].name} greeeting
//     </Person>
//     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
// </div>

export default App;
