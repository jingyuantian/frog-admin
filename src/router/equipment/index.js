const equ = {
	path: '/equipment',
	name: 'equipment',
	component: () => import('../../views/equipment'),
	// hidden: true,
	meta:{
		sideName: '设备管理',
		icon:'subnode',
	},
	children: [
		{
			path: 'manage',
			name: 'manage',
			component: () => import('../../views/equipment/management'),
			meta: {
				sideName:'',
			},
		},

	]
};

export default equ;
