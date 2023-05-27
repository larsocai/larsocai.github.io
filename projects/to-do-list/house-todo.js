function HouseTodo({houseTodo, index, remove}) {
    function handle() {
        console.log('Ping:',index);
        remove(index);
    }
    return <div className="todo" onClick={handle}>- {houseTodo.text}</div>
}