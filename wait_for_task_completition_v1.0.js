function callQuery(){
	gs.log('Started waiting condition');
	//Get current ART using RITM ID
	var grart = new GlideRecord('u_access_release_task');
	grart.addQuery('u_request', current.sys_id);
	grart.addQuery('active',true);
	grart.query();
	
	//loop through the records
	if(grart.hasNext()){
		
		gs.log('Entered while loop');
		return false;
		
	}else {
		return true;
	}
}


answer = callQuery();
gs.log('answer is = ' + answer);
