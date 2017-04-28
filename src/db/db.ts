import * as mongoose from 'mongoose';
import config from '../config';

// use native promise
(<any>mongoose).Promise = global.Promise
const options = Object.assign(
    {
        promiseLibrary: global.Promise
    },
    config.mongo.options
)

const db = mongoose.createConnection(config.mongo.uri, options);

import albumFile from './schemas/album-file';
import albumFolder from './schemas/album-folder';
import albumTag from './schemas/album-tag';
import application from './schemas/application';
import bbsPost from './schemas/bbs-post';
import bbsTopic from './schemas/bbs-topic';
import bbsWatching from './schemas/bbs-watching';
import hashtag from './schemas/hashtag';
import notification from './schemas/notification';
import {post, status, reply, repost} from './schemas/post';
import postLike from './schemas/post-like';
import postMention from './schemas/post-mention';
import * as talk from './schemas/talk-message';
import talkGroup from './schemas/talk-group';
import talkGroupInvitation from './schemas/talk-group-invitation';
import {talkHistory, talkUserHistory, talkGroupHistory} from './schemas/talk-history';
import user from './schemas/user';
import userFollowing from './schemas/user-following';

/* tslint:disable:variable-name */
export const AlbumFile = albumFile(db);
export const AlbumFolder = albumFolder(db);
export const AlbumTag = albumTag(db);
export const Application = application(db);
export const BBSPost = bbsPost(db);
export const BBSTopic = bbsTopic(db);
export const BBSWatching = bbsWatching(db);
export const Hashtag = hashtag(db);
export const Notification = notification(db);
export const Post = post(db);
export const Status = status(db);
export const Reply = reply(db);
export const Repost = repost(db);
export const PostLike = postLike(db);
export const PostMention = postMention(db);
export const TalkMessage = talk.message(db);
export const TalkUserMessage = talk.userMessage(db);
export const TalkGroupMessageBase = talk.groupMessageBase(db);
export const TalkGroupMessage = talk.groupMessage(db);
export const TalkGroupSendInvitationActivity = talk.groupSendInvitationActivity(db);
export const TalkGroupMemberJoinActivity = talk.groupMemberJoinActivity(db);
export const TalkGroupMemberLeftActivity = talk.groupMemberLeftActivity(db);
export const TalkRenameGroupActivity = talk.renameGroupActivity(db);
export const TalkTransferGroupOwnershipActivity = talk.transferGroupOwnershipActivity(db);
export const TalkHistory = talkHistory(db);
export const TalkUserHistory = talkUserHistory(db);
export const TalkGroupHistory = talkGroupHistory(db);
export const TalkGroup = talkGroup(db);
export const TalkGroupInvitation = talkGroupInvitation(db);
export const User = user(db);
export const UserFollowing = userFollowing(db);
