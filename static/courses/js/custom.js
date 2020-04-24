$(document).ready(function(){
	
// converting ul to divs purely for aesthetic purposes
// get the parent divs containing each list of goals for each course
let learning_goals = $('div[id^="learning_goals-"] ul')
						
learning_goals.each(function(idx, ul){
	let parent_id = $(this).parent().attr("id")
	let desiredHTML = '';
	let goals = $(ul).find("li")
	if(goals.length > 5){
			goals = goals.slice(0, 5)
	}
	goals.each(function(ids, li) { 
		desiredHTML += `<div class="d-flex align-items-center"> 
			<span class="material-icons icon-16pt text-black-50 mr-8pt">check</span> 			<p class="flex text-black-50 lh-1 mb-0"><small>${$(li).text()}</small></p> </div>` 
			$(`#${parent_id}`).html(desiredHTML) 
			
			})
		})
}) 