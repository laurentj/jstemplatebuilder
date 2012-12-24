/****** BEGIN LICENSE BLOCK *****
 *
 * The contents of this file are subject to the Mozilla Public License Version 1.1
 * (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis, WITHOUT
 * WARRANTY OF ANY KIND, either express or implied. See the License for the specific
 * language governing rights and limitations under the License.
 *
 * The Original Code is jsTemplate code.
 *
 * The Initial Developer of the Original Code is Laurent Jouanneau. Portions created
 * by the initial developer are Copyright (C) 2004 Disruptive Innovations.
 * All Rights Reserved.
 *
 * Contributor(s): .
 *
 * Alternatively, the contents of this file may be used under the terms of the GNU
 * General Public License Version 2 or later (the "GPL"), or the GNU Lesser General
 * Public License Version 2.1 or later (the "LGPL"), in which case the provisions
 * of the GPL or the LGPL are applicable  instead of those above.  If you wish to
 * allow use of your version of this file only under the terms of the GPL or the LGPL
 * and not to allow others to use your version of this file under the MPL, indicate your
 * decision by deleting  the provisions above and replace  them with the notice and other
 * provisions required by the GPL or the LGPL.  If you do not delete the provisions above,
 * a recipient may use your version of this file under either the MPL or the GPL or the LGPL
 ***** END LICENSE BLOCK ******/

function runDemo(){
 var toClean = document.getElementById('withclean').checked;

 // instanciate the builder
 var jstpl = new jsTemplateBuilder();

 // create some internal variable
 jstpl.assign('message','Bonjour !');
 jstpl.assign('othermessage', ['lorem','ispum','dolor']);
 jstpl.assign('firsttest',0);
 jstpl.assign('desactive','true');
 jstpl.assign('firstname', ['Laurent','Daniel','Tristan']);

 // generate the template
 jstpl.build( 'testtemplate.jstpl' , "democontent" , toClean);
}

function runDemoHTML(){
 var toClean = document.getElementById('withclean').checked;

 // instanciate the builder
 var jstpl = new jsTemplateBuilder();

 // create some internal variable
 jstpl.assign('message','Bonjour !');
 jstpl.assign('othermessage', ['lorem','ispum','dolor']);
 jstpl.assign('firsttest',0);
 jstpl.assign('desactive','true');
 jstpl.assign('firstname', ['Laurent','Daniel','Tristan']);

 // generate the template
 jstpl.build( 'testtemplatehtml.jstpl' , "democontent" , toClean);
}