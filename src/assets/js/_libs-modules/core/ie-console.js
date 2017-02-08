/** ======================================================
 *
 * ie-console
 * fix console error for old IE.
 *
 ======================================================*/

if(!window.console) {
    window.console = { log: function(msg){} };
}
