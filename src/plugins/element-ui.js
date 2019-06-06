import Vue from 'vue'
import {
	Button,
	Menu,
	Submenu,
	MenuItem,
	Tooltip,
	Loading,
	MessageBox,
	Message,
	Notification,
	Table,
	TableColumn,
} from 'element-ui'

Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Tooltip);
Vue.use(Loading.directive);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
