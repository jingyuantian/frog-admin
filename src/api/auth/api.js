import request from '@/plugins/axios'
export function getApiOrgGetOrgTreeList(dataStatus,){return request({url: '/api2/api/Org/GetOrgTreeList',method:'get',params:{dataStatus,},}).then(res => {
		return res.data
	})}export function getApiOrgGetOrgList(dataStatus,){return request({url: '/api2/api/Org/GetOrgList',method:'get',params:{dataStatus,},}).then(res => {
		return res.data
	})}export function postApiOrgSaveOrgInfo(data){return request({url: '/api2/api/Org/SaveOrgInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiOrgDeleteOrgInfo(orgId,operator,){return request({url: '/api2/api/Org/DeleteOrgInfo',method:'delete',params:{orgId,operator,},}).then(res => {
		return res.data
	})}export function postApiOrgSaveOrgDataStatus(orgId,dataStatus,operator,){return request({url: '/api2/api/Org/SaveOrgDataStatus',method:'post',params:{orgId,dataStatus,operator,},}).then(res => {
		return res.data
	})}export function getApiRightGetRoleList(){return request({url: '/api2/api/Right/GetRoleList',method:'get',}).then(res => {
		return res.data
	})}export function getApiRightGetPageInfo(rightSubjectType,rightSubjectValue,){return request({url: '/api2/api/Right/GetPageInfo',method:'get',params:{rightSubjectType,rightSubjectValue,},}).then(res => {
		return res.data
	})}export function postApiRightSaveRightInfo(data){return request({url: '/api2/api/Right/SaveRightInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getApiUserUserLogin(username,password,){return request({url: '/api2/api/User/UserLogin',method:'get',params:{username,password,},}).then(res => {
		return res.data
	})}export function getApiUserUserTokenVerify(userToken,){return request({url: '/api2/api/User/UserTokenVerify',method:'get',params:{userToken,},}).then(res => {
		return res.data
	})}export function getApiUserGetSystemId(){return request({url: '/api2/api/User/GetSystemId',method:'get',}).then(res => {
		return res.data
	})}