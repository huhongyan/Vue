/**
 * Created by Huhy on 2016/8/17.
 */

import { INCREMENT, DECREMENT } from '../constants/count'

// action ���յ� store ��Ϊ���ĵ�һ������
// ��Ȼ����ֻ���¼��ķַ���dispatch ���󣩸���Ȥ����state Ҳ������Ϊ��ѡ����룩
// ���ǿ������� ES6 �Ľ⹹��destructuring���������򻯶Բ����ĵ���
export const incrementCounter = function ({ dispatch, state }, value) {
		dispatch(INCREMENT, value || 1)
}
export const decrementCounter = function ({ dispatch, state }, value) {
		dispatch(DECREMENT, value || 1)
}