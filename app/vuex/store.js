import Vue from 'vue'
import Vuex from 'vuex'

import  count from './modules/Count'
import  other from './modules/Other'

Vue.use(Vuex)

export default new Vuex.Store({
		// ����ģʽ�£������ϸ�ģʽ
		strict: process.env.NODE_ENV !== 'production',
		// ��ϸ���ģ��
		modules: {
				count,
				other
		}
})