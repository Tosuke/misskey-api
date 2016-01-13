import {AlbumFile} from '../../../models';
import {IUser, IAlbumFile} from '../../../interfaces';

/**
 * アルバムのファイルを取得します
 * @param user API利用ユーザー
 * @param fileId 対象のファイルID
 * @return ファイルオブジェクト
 */
export default function(user: IUser, fileId: string): Promise<Object> {
	'use strict';

	return new Promise<Object>((resolve, reject) => {
		AlbumFile.findById(fileId, (findErr: any, file: IAlbumFile) => {
			if (findErr !== null) {
				reject(findErr);
			} else if (file === null) {
				reject('file-not-found');
			} else if (file.user.toString() !== user.id) {
				reject('file-not-found');
			} else {
				resolve(file.toObject());
			}
		});
	});
}
