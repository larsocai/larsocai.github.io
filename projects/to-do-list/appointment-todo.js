function AppointmentTodo({appointmentTodo, index, remove}) {
    function handle() {
        console.log('Ping:',index);
        remove(index);
    }
    return <div className="todo" onClick={handle}>- {appointmentTodo.text}</div>
}