//Get current ART using RITM ID
var gr_art = new GlideRecord('u_access_release_task');
gr_art.addQuery('u_request', current.sys_id);
gr_art.query();

//Use while to get all the ART Assigned to the RITM
while(gr_art.next()){
	//Retrieve the Profile
	var profileId = gr_art.u_profile;
	
	//Check on Profile table for the record by ID
	var gr_ap = new GlideRecord('u_access_release_profiles');
	gr_ap.addQuery('sys_id', profileId);
	gr_ap.query();
	
	//Get approval needed value
	if(gr_ap.next()){
		//If approval is not needed, change the values to make it auto-approved
		if(gr_ap.u_necessary_approval == 'no' || current.variables.u_revoke_access == true){
			gr_art.approval = 'approved';
			gr_art.state = 3;
			gr_art.update();
		}
	}
}