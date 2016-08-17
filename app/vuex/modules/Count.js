/**
 * Created by Huhy on 2016/8/17.
 */
import { INCREMENT, DECREMENT } from '../comstants/count'

// ��ģ��ĳ�ʼ״̬
// ����һ������������Ӧ������ʱ�ĳ�ʼ״̬
const state = {
		// Ӧ������ʱ��count ��Ϊ0
		count: 0
}

// ��ص� mutations
// ����һ������洢һϵ�����ǽ�����Ҫд�� mutation ����
const mutations = {
		// mutation �ĵ�һ�������ǵ�ǰ�� state
		// ������ں������޸� state
		[INCREMENT] (state, amount) {
				state.count = state.count + amount
		},
		[DECREMENT] (state, amount) {
				state.count = state.count - amount
		}
}

export default {
		state,
		mutations
}