$(document).ready(function(){


let learningGoals = $('*[id^="learning_goals-"] ul')
    
    
    learningGoals.each(function(i, ul) {
        let desiredHTML = "";
        let ulWrapper = $(this).parent()
        let goals = $(this).find("li")
        if(goals.length > 4) {
            goals = goals.slice(0, 4)
        }
        goals.each(function(i, li){
            desiredHTML += `<div class="d-flex align-items-center">
                <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                <p class="flex text-black-50 lh-1 mb-0"><small>${$(this).text()}</small></p>
            </div>`
            
        })
        ulWrapper.html(desiredHTML)
    })

    function AJAXContentCreation(formID, icon){
        $(`*[id^="${formID}"]`).each(function(i, form){
            let parentID = $(form).attr("id")
            
            $(this).submit(function(e){
                let data = new FormData(form)
                data.append("csrfmiddlewaretoken", window.csrftoken)
                e.preventDefault()
        
                axios.post($(this).data("action"), data)
                .then(response=> {
        
                    let HTMLtoAppend = `<li class="list-group-item" data-id="{{ content.id }}">
                        <span class="material-icons icon-16pt icon--left text-body">${icon}</span>   
                        ${ data.get("title") }
                        <div class="float-right">
                            <a href="" 
                               class="text-underline">Edit</a>
                            <form action="" method="post" style="display: inline">
                                <input type="submit" value="Delete" class="text-underline btn btn-link">
                            </form>
                        </div>
                    </li>`
                    if( response.status == 201) {
                        let key = `last-item-${parentID.split("-")[1]}`
                        $(HTMLtoAppend).insertBefore($(`.${key}`))
                        
                        document.getElementById($(this).attr('id')).reset();
                        
                        
                    }
                    
                })
                .catch(error => {
                    console.log(error)
                })
                
            })/
            
        })
    }
    AJAXContentCreation("videoform-", "play_circle_outline")
    AJAXContentCreation("textform-", "note")
    AJAXContentCreation("imageform-", "image")
    AJAXContentCreation("fileform-", "attach_file")
})