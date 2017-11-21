/*!
 * formvalidation.js v.1.0
 * by Stefano martinelli
 *
 * Codice javascript per convalidare i campi del modulo webtolead
 *
 * Copyright 2017 Stefano Martinelli
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */

function submit_form() {
        check_webtolead_fields();
        //document.WebToLeadForm.submit();
        if(document.getElementById('convalida').value == '1937'){
          document.WebToLeadForm.action = "https://crm.cryptoteam.it/index.php?entryPoint=WebToPersonCapture";
          //document.WebToLeadForm.submit();
          return true;
        }
        else{
          alert('Compilare per favore tutti i campi con l\'asterisco');
          return false;
        }
}


function validateHuman(){
	document.getElementById('convalida').value = "1937";
}


function validateProva(){
	document.getElementById('department').value = "Ha modificato il campo Nome!";
}


function check_webtolead_fields() {
    if (document.getElementById('bool_id') != null) {
        var reqs = document.getElementById('bool_id').value;
        bools = reqs.substring(0, reqs.lastIndexOf(';'));
        var bool_fields = new Array();
        var bool_fields = bools.split(';');
        nbr_fields = bool_fields.length;
        for (var i = 0; i < nbr_fields; i++) {
            if (document.getElementById(bool_fields[i]).value == 'on') {
                document.getElementById(bool_fields[i]).value = 1;
            } else {
                document.getElementById(bool_fields[i]).value = 0;
            }
        }
    }
};
