'use strict';

const exec = require('child_process').exec,
      IS_WIN = process.platform.indexOf('win') === 0;

const nodeopen = (url, callback) => {

	let cmd = '"' + url + '"';

	if (IS_WIN) {
		cmd = 'start "" ' + cmd;
	} else {
		if (process.env['XDG_SESSION_COOKIE'] || process.env['XDG_CONFIG_DIRS'] || process.env['XDG_CURRENT_DESKTOP']) {
			cmd = 'xdg-open ' + cmd;
		} else if (process.env['GNOME_DESKTOP_SESSION_ID']) {
			cmd = 'gnome-open ' + cmd;
		} else {
			cmd = 'open ' + cmd;
		}
	}
	exec(cmd, callback && typeof callback === 'function' && callback());
};

module.exports = nodeopen;