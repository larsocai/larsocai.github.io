function App() {
    const [todos, setTodos] = React.useState([]);
    const [appointmentTodo, setAppointmentTodo] = React.useState([]);
    const [houseTodo, setHouseTodo] = React.useState([]);
    
    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }

    const addAppointment = text => {
        const newAppointment = [...appointmentTodo, {text:text, isCompleted:false}];
        setAppointmentTodo(newAppointment);
    }

    const removeAppointmentTodo = index => {
        let temp = [...appointmentTodo];
        temp.splice(index, 1);
        setAppointmentTodo(temp);
    }

    const addHouseTodo = text => {
        const newHouse = [...houseTodo, {text:text, isCompleted:false}];
        setHouseTodo(newHouse);
    }

    const removeHouseTodo = index => {
        let temp = [...houseTodo];
        temp.splice(index, 1);
        setHouseTodo(temp);
    }

    return(
        <div className="app">
            <div className="todo-list"><h2>Need to get done</h2>  
                {todos.map((todo, i) => 
                    <Todo key={i} index={i} todo={todo} remove={removeTodo}/>)}
                <TodoForm addTodo={addTodo} />
            </div>

            <div className="appointment"><h2>Want to get done</h2>  
                {appointmentTodo.map((appointmentTodo, i) => 
                    <AppointmentTodo key={i} index={i} appointmentTodo={appointmentTodo} remove={removeAppointmentTodo}/>)}
                <AppointmentForm addAppointment={addAppointment} />
            </div>

            <div className="housetasks"><h2>Everything else</h2>  
                {houseTodo.map((houseTodo, i) => 
                    <HouseTodo key={i} index={i} houseTodo={houseTodo} remove={removeHouseTodo}/>)}
                <HouseForm addHouseTodo={addHouseTodo} />
            </div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)