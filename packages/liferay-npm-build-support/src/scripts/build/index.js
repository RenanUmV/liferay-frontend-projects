/**
 * © 2017 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

import {error, info, print} from 'liferay-npm-build-tools-common/lib/format';
import project from 'liferay-npm-build-tools-common/lib/project';

import angularCli from './angular-cli';
import createReactApp from './create-react-app';

const msg = {
	unsupportedProjectType: [
		error`
		Oops! Your project type is not supported by {Liferay JS Toolkit} or 
		cannot be autodetected.
		`,
		info`
		Please visit http://bit.ly/js-toolkit-wiki for the full list of 
		supported project types and how they are detected.
		`,
	],
};

export default function() {
	switch (project.probe.type) {
		case project.probe.TYPE_ANGULAR_CLI:
			angularCli();
			break;

		case project.probe.TYPE_CREATE_REACT_APP:
			createReactApp();
			break;

		default:
			print(msg.unsupportedProjectType);
			process.exit(1);
	}
}
