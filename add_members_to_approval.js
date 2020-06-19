//Get approval order. This will set the next group to search for.
var groupOrder = 1;

var gr = new GlideRecord('u_m2m_access_release_groups');
gr.addQuery('u_access_release_profiles','3e75f56c1b6d1c50d52432681b4bcbbf');
gr.addQuery('u_approval_order',groupOrder);
gr.query();
gr.next();

//using the u_group field from the task, get the members of the first approval group.
var members = new WorkflowApprovalUtils().getMembersOfGroup(gr.u_group);

//create the approval for each member.
for(var i = 0; i < members.length; i++){
	var createApproval = new GlideRecord ('sysapproval_approver');
	createApproval.initialize();
	createApproval.state = 'requested';
	createApproval.approver = members[i];
	createApproval.sysapproval = '1a9bc6681ba95850a59bb8481b4bcbf1';
	createApproval.insert();
}