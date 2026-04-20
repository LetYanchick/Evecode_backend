console.log("Инициализировались и запустили scheduler");

function TaskManager(name, interval, task){
    setInterval(() => {
        task();
    }, interval);

}
TaskManager('SuperTask', 10000, () => console.log('running'));
