import equipment from '@/router/equipment'
const dynamicRoutes = [
	{
		path: '/test',
		name: 'Test',
		components: {
			default: () => import('@/views/common/Test'),
		},
		meta: {
			icon: 'ant-formatpainter-fill',
			role: 'root',
		}
	},
	equipment,
];

export default dynamicRoutes;
