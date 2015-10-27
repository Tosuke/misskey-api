import * as fs from 'fs';
import { MisskeyExpressRequest } from '../../misskeyExpressRequest';
import { MisskeyExpressResponse } from '../../misskeyExpressResponse';
import upload from '../../endpoints/album/upload';

module.exports = (req: MisskeyExpressRequest, res: MisskeyExpressResponse): void => {
	'use strict';
	if (Object.keys(req.files).length === 1) {
		const file: Express.Multer.File = req.files['file'];
		const path: string = file.path;
		const name: string = file.originalname;
		const mimetype: string = file.mimetype;
		const fileBuffer: Buffer = fs.readFileSync(path);
		fs.unlink(path);

		upload(req.misskeyApp, req.misskeyUser.id, name, mimetype, fileBuffer).then((status: Object) => {
			res.apiRender(status);
		}, (err: any) => {
			res.apiError(500, err);
		});
	}
};
