import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 群内荣誉等级变更提示
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E6%88%90%E5%91%98%E8%8D%A3%E8%AA%89%E5%8F%98%E6%9B%B4%E6%8F%90%E7%A4%BA
 */
export type FriendHonorUpdateType = GeneralNoticePost & {
	notice_type: 'notify';
	sub_type: 'honor';
	user_id: number;
	/**
	 * 龙王、群聊之火、快乐源泉
	 */
	honor_type: 'talkative' | 'performer' | 'emotion';
};
