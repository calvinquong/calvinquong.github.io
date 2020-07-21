import React, {Component}from 'react';
import Todos from './Todos'
import AddForm from './AddForm'
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Club from './components/Club'
import Rackets from './components/Rackets'





class App extends Component{

  
  /*state={
    todos:[
      {id:1, content: 'buy some milk'},
      {id:2, content: 'play mario kart'}
    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo=(todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
  }*/
 

  
      

    
  
  
  componentDidMount(){
    
    /*const script1 = document.createElement("script1");
    script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script2");
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script3");
    script3.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement("script4");
    script4.src = "https://code.jquery.com/jquery-1.12.4.js"
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement("script5");
    script5.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js"
    script5.async = true;
    document.body.appendChild(script5);*/

  




  }
  render(){
   
 
  return (
    <BrowserRouter>
    <div className="todo-app container  ">
    
      
       <h1 className="center blue-text"></h1>
       <Navbar/>
       <Route exact path='/' component={Home}/>
       
       <Route path='/rackets' component={Rackets}/>
       <Route path='/club' component={Club}/>
       <Route path='/about' component={About}/>
       <Route path='/contact' component={Contact}/>
       
       
        {/*<Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo}/>*/}
    </div>
    </BrowserRouter>
  );
}
}

export default App;
