$(function () {
   let taskInput = $('#taskInput');
   let addBtn = $('#addBtn');
   let list = $('#list');

    function createList(data){
        console.log(data);
        list.empty();
        for(let i=0; i<data.length;i++){
            console.log("Frontend",data[i].task);
            list.append(`<li>${data[i].task}</li>`)
        }
    }

   addBtn.click(function(event){
       event.preventDefault();
       $.post('/todos',
           {
               task: taskInput.val()
           },
           (data)=>createList(data)
       )
   })
});
