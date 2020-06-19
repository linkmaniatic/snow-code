//Get current ART using RITM ID

function checkRejected(){
	
	var allrejected = 'yes';
	var grart = new GlideRecord('u_access_release_task');
	grart.addQuery('u_request', current.sys_id);
	grart.query();
	
	//Use while to get all the ART Assigned to the RITM
	while(grart.next()){
		if(grart.approval == 'approved'){//If there is at least one approved, set the flag to false.
			allrejected = 'no';
		}
	}
	
	return allrejected;
}

answer = checkRejected();
gs.log('rejected = ' + rejected);