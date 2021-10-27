var nativeAlert = window.alert;
window.alert = function(msg) {
	EB.Notification.beep({'frequency':4400, 'volume':3, 'duration':300});
	nativeAlert(msg);
};
