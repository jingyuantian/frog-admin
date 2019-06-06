const equ = {
	path: '/equipment',
	name: 'equipment',
	component: () => import('../../views/equipment'),
	// hidden: true,
	meta:{
		sideName: '设备管理',
		icon:'ant-subnode',
	},
	children: [
		{
			path: 'manage',
			name: 'manage',
			component: () => import('../../views/equipment/management'),
			meta: {
				sideName:'',
				icon:' ',
			},
		},

	]
};

export default equ;
