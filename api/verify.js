const api = {
      "div_1":"================================================",
      "name": "MCB INTEGRITY VERIFICATION LOCAL",
      "file": "https://github.com/mrcharlesbrown/mcb-license-local/blob/main/api/verify.js",
      "raw": "https://raw.githubusercontent.com/mrcharlesbrown/mcb-license-local/main/api/verify.js",
      "task": "Handles privileges, Integrity Check, Verification, Deactivation, etc. For Offline Validation",
      "version": "1.0.0",
      "author": "mrcharlesbrown [mcbdesk@hotmail.com]",
      "copyright": "All Rights Reserved.",
      "div_2":"================================================",

     /*
      Author's section only:
      If privilegeProductId is specified, privileges only apply to the specified productId(s). If not specified or empty, privileges apply to all products.
      */
      "localAP": true,
      "privilegeProductId":[
            "MCB_Fileslync"
      ],

      /* 
      Client's section only:
      */
      "gracePeriod": 3, // 3 days grace period if there is no internet connection. If 0, there is no grace period and user loses access immediately.
      "apps": {
            "Fileslync": {
                  /* If appKeys are specified, app is killed if version does not match any of the specified appKeys */
                  "appKeys": ["v1_build160326_ref1827", "v1_build210426_ref2873"],

                  /* ==================================================
                  Expiration Types: User needs new license key after expiration. [Important for 3rd-party marketplace license keys + vercel record].
                        "infinite": app never expires. It ignores expirationDays and expirationVersion. 
                        "days" [expirationDays]: expires after a certain number of days. 
                        "version" [expirationVersion]: expires when a specific version is released e.g. 1.0.0 to 2.0.0, etc. 
                        "update" [expirationVersion]: expires when any new update is released e.g 1.0.0 to 1.1.0, etc. 
                        "version-update" [expirationVersion]: expires when a specific version or any newer update is released.
                  */
                  "expirationType": "infinite", // 'infinite', 'days', 'version', 'update', or 'version-update'
                  "expirationDays": 365, // used if expirationType is 'days'
                  "expirationVersion": "version-update", // used if expirationType is 'version', 'update', or 'version-update'

                  /* ==================================================
                  Trial Days: [days, seats, isOnline, "uxp-electron-browser"]
                        Trial is valid for specified number of days and/or seats and/or online verification and/or environment. 
                        If days is 0, trial does not expire based on days. If seats is 0, trial does not expire based on seats. 
                        If isOnline is false, trial does not require online verification. 
                        If "uxp-electron-browser" is specified, trial is only valid for UXP Electron Browser and expires if used in any other environment.
                  */
			"trialDays": 0 // 0 or [1, 2, true, "uxp-electron-browser"]
            }
      }
}
