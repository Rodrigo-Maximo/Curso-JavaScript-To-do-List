//função que adiciona tarefa

function addtask(){
    const tasTitle=document.querySelector('#task-title').value;
    if (taskTitle){
        const template = document.querySelector('.template')

        const newTask=template.cloneNode(true);

        newTask.querySelector('.task-title').textContent=taskTitle;
        // remover classes

        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        // adiciona tarefa na lista

        const list = document.querySelector('#task-list');
        list.appendChild(newTask);
        // remover botao

        const removerbtn=newTask.querySelector('.remove-btn').addEventListener('click',function(){
            removetask(this)
        });
        // concluir tarefa
        const donebtn=newTask.querySelector('.done-btn').addEventListener('click',function(){
            completetask(this)
        })
        // limpar texto

        document.querySelector('#task-title').value='';

    }

}

// função remover tarefa

function removetask(){
    task.parentNode.remove(true)
}

// concluir tarefa 
function completetask (){
    const taskComplete=task.parentNode;
    taskComplete.classList.toggle('done');
}


// evento de adicionar tarefa
const addbtn = document.querySelector('#add-btn')

addbtn.addEventListener('click',function(e){
    e.preventDefault()
    addtask()
});

