import {IApplication, IUser, IAlbumFile} from '../../../interfaces';
import add from '../../../core/addFileToAlbum';

/**
 * アルバムにファイルを追加します
 * @app: API利用App
 * @user: API利用ユーザー
 * @fileName: ファイル名
 * @mimetype: ファイルの種類
 * @file: 内容
 */
export default function(app: IApplication, user: IUser, fileName: string, mimetype: string, file: Buffer, size: number)
	: Promise<Object> {
	'use strict';
	if (fileName.length > 100) {
		return <Promise<any>>Promise.reject('too-long-filename');
	} else {
		return new Promise<Object>((resolve, reject) => {
			const appId: string = app !== null ? app.id : null;
			add(appId, user.id, fileName, mimetype, file, size).then((file: IAlbumFile) => {
				resolve(file.toObject());
			}, (err: any) => {
				reject(err);
			});
		});
	}
}
