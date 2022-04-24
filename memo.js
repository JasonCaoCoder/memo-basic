const events = document.getElementById("event");
const dates = document.getElementById("date");
const times = document.getElementById("time");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const list = document.getElementById("list");
const listEvents = [];
//渲染htmlfuntion method 1 ,use the forEach
// function render(){
//     var htmlStr= " ";
//     listEvents.forEach(function(item){
//         htmlStr += `
//         <div class="listItem">
//             <div>
//                 <p>Event:${item.events}</p>
//                 <p>Date: ${item.dates} ${item.times}</p>
//             </div>
//         </div>
//     `
//     })
//     list.innerHTML = htmlStr;
// }
// 渲染html funtion methon2, use the for loop
function render(){
    var htmlStr = " ";
    for(var i = 0; i < listEvents.length; i++){
        htmlStr += `
        <div class="listItem">
            <div>
                <p><span>Event: </span>${listEvents[i].events} </p>
                <p><span>Date: </span>${listEvents[i].dates} ${listEvents[i].times}</p>
            </div>
        </div>  `
    }
    list.innerHTML = htmlStr;
}
//增加事件
addBtn.addEventListener("click", function(){
    // console.log(events.value);
    // console.log(dates.value);
    // console.log(times.value);
    listEvents.unshift({
        events: events.value,
        dates: dates.value,
        times: times.value
    })
    //调用渲染页面function
    render();
})
//删除最后一个事件
deleteBtn.addEventListener("click", function(){
    listEvents.shift();
    //渲染页面html
    render();
})
      