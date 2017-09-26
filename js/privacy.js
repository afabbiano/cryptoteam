/*!
 * privacy.js v.1.0
 * by Stefano martinelli
 *
 * Codice javascript per impostare i cookie nel popup privacy
 *
 * Copyright 2017 Stefano Martinelli
 * Released under the MIT license
 */

 document.getElementById("privacyButton").addEventListener("click", impostaCookie);

 function impostaCookie(){
     $.cookie('privacy-ack-20170913', 'true', { expires: 365, path: '/{{site.lang}}' });
     $('#privacy-message').hide();
 };
