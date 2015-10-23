const $ = require('NodObjC');

const send = function(id, msg) {
	const script = `
		tell application "Messages"
		set targetService to 1st service whose service type = iMessage
		set targetBuddy to buddy "${id}" of targetService
		send "${msg}" to targetBuddy
		end tell
		`;

	$.import('Foundation');

	// create the mandatory NSAutoreleasePool instance
	const pool = $.NSAutoreleasePool('alloc')('init');
	const appleScript = $.NSAppleScript('alloc')('initWithSource', $(script));
	const resultObj = appleScript('executeAndReturnError', null);

	// resultObj may be `null` or an NSAppleEventDescriptor instance, so check first
	if (resultObj) {
		//   // print out the value
		if(resultObj('stringValue')) {
			console.dir(resultObj('stringValue').toString());
		}
	}
};
var messagesapp = {};
messagesapp.send = send;

module.exports = messagesapp;
