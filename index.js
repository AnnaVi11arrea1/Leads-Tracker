let myLeads = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
const chkdBtn = document.getElementById("checked-btn")



if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += 
            `<li class="list-item">
                <input tabindex="-1" type="checkbox" class="delete=checkbox" name="list-item-checkbox">
                <a target='_blank' href='${leads[i]}' class="a_tag" >
                    
                ${leads[i]}  
                </a>
        
            </li>`
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


// if checked, remove item on button click

document.getElementById("ul-el").addEventListener("click", function(e) {
   
    if (e.target && e.target.nodeName == "INPUT" ) {
        console.log("list item ", e.target.id.replace("post-", ""), " was clicked!")
        
    }
})


// Remove checked items on button click

document.addEventListener('DOMContentLoaded', function() {
        var deleteCheckedBtn = document.getElementById('checked-btn');
        var listItems = document.querySelectorAll('#ul-el li');
      
        deleteCheckedBtn.addEventListener('click', function() {
            listItems.forEach(function(item) {
            var checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                // Remove the <li> from the DOM
              item.remove();

                    // Remove corresponding data from localStorage
                var itemText = item.textContent.trim(); // Get the text content of the <li> item
                var storedItems = JSON.parse(localStorage.getItem('myLeads')) || []; // Retrieve stored data
                var index = storedItems.indexOf(itemText); // Find the index of the item in stored data
                if (index !== -1) {
                storedItems.splice(index, 1); // Remove the item from stored data
                localStorage.setItem('myLeads', JSON.stringify(storedItems)); // Update localStorage
                }

            }
          });
        });
      });









    // for (var i = 0; i < checkboxes.length; i++) {

        // if (checkboxes) {
            // e.parentNode.parentNode.removeChild(e.parentNode);
            

        
        // if (checkboxes[i].querySelector("delete-checkbox").checked) {
            // var p = document.getElementById("ul-el")
            // var del = document.querySelector("li")
            // p.removeChild(del)
            // alert("removed")
      
        
        
   
    
    


    
