import Vue from 'vue'
import Vuex from 'vuex'
// �������ģ��ĳ�ʼ״̬�� mutations
import  count from './modules/Count'
import  other from './modules/Other'

// ���� vue ��ʹ�á� vuex
Vue.use(Vuex)

// ���ϳ�ʼ״̬�ͱ�����������Ǿ͵õ������������ store
// ���ˣ���� store �Ϳ������ӵ����ǵ�Ӧ����
export default new Vuex.Store({
		// ����ģʽ�£������ϸ�ģʽ
		strict: process.env.NODE_ENV !== 'production',
		// ��ϸ���ģ��
		modules: {
				// count ģ��ĳ�ʼ״̬����Ϊ store.state.count �����õ��ײ� state ����
				// ��������ģ���϶���� mutations ��ֻ�ܸı䵱ǰ�������ģ���ϵ� state ����
				// ������ count ģ���϶���� mutations ���յ��ĵ�һ������������ store.state.count
				count,
				other
		}
})