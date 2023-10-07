//document.querySelector('form').addEventListener('submit',todo);
var todoarr=JSON.parse(localStorage.getItem("todoobj"))||[];
display(todoarr);

function todo()
{
    //for form tag we have to used event.preventDefault();
    event.preventDefault();
    var task=document.getElementById('task').value;
    var code=document.getElementById('code').value;
    var toar={task:task,code:code};
    todoarr.push(toar);
    localStorage.setItem("todoobj",JSON.stringify(todoarr));
    display(todoarr);
}

    function display(data)
    {
        document.querySelector("tbody").innerHTML="";
        data.map(function(elem,index)
        {
        
        var tr=document.createElement('tr');
        var td1=document.createElement('td');
        td1.innerHTML=elem.task;
    
        var td2=document.createElement('td');
        td2.innerHTML=elem.code;
    
        var td3=document.createElement('td');
        td3.innerHTML='delete';
    
        td3.addEventListener('click',function()
        {
            deletetask(index);                       
        });
    
        tr.append(td1,td2,td3);
        document.querySelector('tbody').append(tr);
    }
        )
    }

function deletetask(index)
{
    //event.target.parentNode.remove();
    todoarr.splice(index,1);
    display(todoarr);
    localStorage.setItem("todoobj",JSON.stringify(todoarr))
}


