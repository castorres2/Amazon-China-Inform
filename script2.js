/*var word = "China",
    queue = [document.body],
    curr
;
while (curr = queue.pop()) {
    if (!curr.textContent.match(word)) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
        switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE : // 3
                if (curr.childNodes[i].textContent.match(word)) {
                    console.log("China Found!");
                    console.log(curr);
            
                    // you might want to end your search here.
               //then change default_popup to popup.html
               
                }
                break;
            case Node.ELEMENT_NODE : // 1
                queue.push(curr.childNodes[i]);
                break;
        }
    }
}
*/
var word = "China",
    queue = [document.body],
    curr
;
var word_found = false;
while (curr = queue.pop()) {
    if (!curr.textContent.match(word)) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
        switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE : // 3
                if (curr.childNodes[i].textContent.match(word)) {
                    console.log("China Found!");
                    //alert("'China' was found on this webpage.");
                    appendCustomAlert()
                   word_found = true;
                }
                break;
            case Node.ELEMENT_NODE : // 1
                queue.push(curr.childNodes[i]);
                break;
        }
    }
    if(word_found) break;
}


function appendCustomAlert(){
    //create the dialog
    let alert_dialog = document.createElement("dialog");
    alert_dialog.id = "aws_pd_s_word_found";
    document.body.appendChild(alert_dialog)
    
    alert_dialog.innerHTML += '<p>"China" was found on this webpage.</p><div style="align-items: center; display: flex; justify-content: center; "><button style="margin-top: 5px">Close</button></div>';

    alert_dialog.querySelector("button").addEventListener("click", function() {
        alert_dialog.close()
    })

    alert_dialog.showModal()
  }
