import Axios from 'axios';
import CONST from '@/constants';


let apiToken = '';
const axios = Axios.create({
	baseURL: CONST.API_SERVER,
	timeout: 1000 * 60 * 3,
	headers: {},
});
axios.interceptors.request.use(
	conf => {
		eventBus.$emit(CONST.EVENTS.DATA_LOADING);
		return conf;
	},
	error => {
		eventBus.$emit(CONST.EVENTS.DATA_LOADED);
		return Promise.reject(error);
	},
);
axios.interceptors.response.use(
	response => {
		eventBus.$emit(CONST.EVENTS.DATA_LOADED);
		return response;
	},
	error => {
		eventBus.$emit(CONST.EVENTS.DATA_LOADED);
		return Promise.reject(error);
	},
);
let apiServerUrl = CONST.API_SERVER;
export default {
	install(Vue) {
		Vue.prototype.$apiClient = {
			getClient: function() {
				return Axios;
			},
			getInstance: function() {
				return axios;
			},
			getApiToken: function() {
				return apiToken;
			},
			setApiServer: function(t) {
				apiServerUrl = t;
			},
			getApiServer: function() {
				return apiServerUrl;
			},
			setApiToken: function(t) {
				apiToken = t;
				axios.defaults.headers.common['Authorization'] = `OKTA_MOBILE ` + t;
			},
		};
	},
};
