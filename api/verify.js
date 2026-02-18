/**
 * MCB LICENSE LOCAL
 * File: https://github.com/mrcharlesbrown/mcb-license-local/api/verify.js 
 * Raw: https://raw.githubusercontent.com/mrcharlesbrown/mcb-license-local/main/api/verify.js
 * 
 * Handles Priviledges, Integrity Check, Verification, Deactivation, etc. For Offline Validation
 * 
 * Note: user shorter const for public files
 * 
 * @version 1.0.0
 * @author mrcharlesbrown [mcbdesk@hotmail.com]
 * @copyright All Rights Reserved.
 * 
 */
function verify() {
	const localAP = true; // SECURITY SWITCH: Set to true to enable priviledges from the client. Keep false for production.
	const priviledgeProductId = ['MCB_Fileslync']; // Only allow specified customProductId to authorize priviledges. If false or [], allow all apps to use priviledge.

	// Expose API
	return {
		localAP: localAP,
		priviledgeProductId: priviledgeProductId,
	}
};
return verify();


