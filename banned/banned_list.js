const api = {
      "div_1":"================================================",
      "name": "MCB BANNED LIST LOCAL",
      "file": "https://github.com/mrcharlesbrown/mcb-license-local/blob/main/banned/banned_list.js",
      "raw": "https://raw.githubusercontent.com/mrcharlesbrown/mcb-license-local/main/banned/banned_list.js",
      "task": "Handles banned IP addresses, license keys, temporary keys, and upgraded keys for refunds, security and integrity purposes. This list is used to prevent access from known malicious entities and to manage license compliance.",
      "version": "1.0.0",
      "author": "mrcharlesbrown [mcbdesk@hotmail.com]",
      "copyright": "All Rights Reserved.",
      "div_2":"================================================",

      /* ================================================
      Ban IP Address and Device ID (format): IP_ADDRESS or IP_ADDRESS,DEVICE_ID or NA,DEVICE_ID
      Ban only IP Address or Ban IP Address with Device ID or Ban only Device ID (use NA for IP if banning only Device ID)
      */
      "ipAddresses": [
            "192.168.1.1",
            "10.0.0.1"
      ],

      /* Ban License, Temporary, Upgrade Keys: 
      Ban specific keys that are known to be fraudulent, misused, or associated with abuse. 
      This prevents those keys from being used to activate the software. 
      */
      "licenseKeys": [
            "LICENSE-KEY-1",
            "LICENSE-KEY-2",
            "LICENSE-KEY-3"
      ],
      "div_3":"================================================",
      "temporaryKeys": [
            "EXAMPLE-KEY-1234",
            "ANOTHER-KEY-5678"
      ],
      "div_4":"================================================",
      "upgradeKeys": [
            "EXAMPLE-KEY-1234",
            "ANOTHER-KEY-5678"
      ]
}