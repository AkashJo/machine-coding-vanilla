let input = document.querySelector(".todo-input")
let button = document.querySelector(".btn-element") 
let list = document.querySelector(".ul-list")
let li_element = document.getElementsByTagName('li')

console.log(input,button,list,li_element);

button.addEventListener('click',()=> {
    let text = input.value;
    if(text === "" ) {
        alert("Add something in the task")
    } else {
        let li = document.createElement('li') 
        li.innerHTML = text;
        list.insertBefore(li,list.childNodes[0])
        input.value = ""    
    }
})