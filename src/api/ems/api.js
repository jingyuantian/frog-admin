import request from '@/plugins/axios'
export function putApiBomManageUpdateBomStatus(bomId,operator,operationType,reason,remark,){return request({url: '/api1/api/BomManage/UpdateBomStatus',method:'put',params:{bomId,operator,operationType,reason,remark,},}).then(res => {
		return res.data
	})}export function deleteApiBomManageDeleteBomInfo(bomId,operator,){return request({url: '/api1/api/BomManage/DeleteBomInfo',method:'delete',params:{bomId,operator,},}).then(res => {
		return res.data
	})}export function postApiDocInfoSaveDocInfo(data){return request({url: '/api1/api/DocInfo/SaveDocInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiDocInfoDeleteDocInfo(docInfoId,operator,){return request({url: '/api1/api/DocInfo/DeleteDocInfo',method:'delete',params:{docInfoId,operator,},}).then(res => {
		return res.data
	})}export function getApiDocInfoGetDocInfoList(folderId,){return request({url: '/api1/api/DocInfo/GetDocInfoList',method:'get',params:{folderId,},}).then(res => {
		return res.data
	})}export function postApiEquipmentConfigurationScrapEquipment(data){return request({url: '/api1/api/EquipmentConfiguration/ScrapEquipment',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getApiEquipmentHistoryGetEquipmentHistoryInfoList(equipmentCode,equipmentName,dataStatus,startTime,endTime,){return request({url: '/api1/api/EquipmentHistory/GetEquipmentHistoryInfoList',method:'get',params:{equipmentCode,equipmentName,dataStatus,startTime,endTime,},}).then(res => {
		return res.data
	})}export function getApiEquipmentInventoryGetEquipmentInventoryList(inventoryOrder,dataStatus,beginDate,endDate,){return request({url: '/api1/api/EquipmentInventory/GetEquipmentInventoryList',method:'get',params:{inventoryOrder,dataStatus,beginDate,endDate,},}).then(res => {
		return res.data
	})}export function getApiEquipmentInventoryGetEquipmentInventoryDetailList(inventoryId,){return request({url: '/api1/api/EquipmentInventory/GetEquipmentInventoryDetailList',method:'get',params:{inventoryId,},}).then(res => {
		return res.data
	})}export function postApiEquipmentInventorySaveEquipmentInventoryInfo(data){return request({url: '/api1/api/EquipmentInventory/SaveEquipmentInventoryInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiEquipmentInventoryDeleteEquipmentInventoryInfo(inventoryId,operator,){return request({url: '/api1/api/EquipmentInventory/DeleteEquipmentInventoryInfo',method:'delete',params:{inventoryId,operator,},}).then(res => {
		return res.data
	})}export function postApiEquipmentInventorySaveEquipmentInventoryDetailDataStatus(inventoryDetailId,operator,){return request({url: '/api1/api/EquipmentInventory/SaveEquipmentInventoryDetailDataStatus',method:'post',params:{inventoryDetailId,operator,},}).then(res => {
		return res.data
	})}export function postApiEquipmentInventorySaveEquipmentInventoryDataStatus(inventoryId,operator,){return request({url: '/api1/api/EquipmentInventory/SaveEquipmentInventoryDataStatus',method:'post',params:{inventoryId,operator,},}).then(res => {
		return res.data
	})}export function getApiEquipmentRecordGetEquipmentClassList(classCode,className,classType,){return request({url: '/api1/api/EquipmentRecord/GetEquipmentClassList',method:'get',params:{classCode,className,classType,},}).then(res => {
		return res.data
	})}export function postApiEquipmentRecordSaveEquipmentClassInfo(data){return request({url: '/api1/api/EquipmentRecord/SaveEquipmentClassInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiEquipmentRecordDeleteEquipmentClassInfo(equipmentClassId,operator,){return request({url: '/api1/api/EquipmentRecord/DeleteEquipmentClassInfo',method:'delete',params:{equipmentClassId,operator,},}).then(res => {
		return res.data
	})}export function getApiEquipmentRecordGetEquipmentRecordList(equipmentCode,equipmentName,dataStatus,orgId,startTime,endTime,){return request({url: '/api1/api/EquipmentRecord/GetEquipmentRecordList',method:'get',params:{equipmentCode,equipmentName,dataStatus,orgId,startTime,endTime,},}).then(res => {
		return res.data
	})}export function getApiEquipmentRecordGetEquipmentRecordDetailInfo(equipmentCode,){return request({url: '/api1/api/EquipmentRecord/GetEquipmentRecordDetailInfo',method:'get',params:{equipmentCode,},}).then(res => {
		return res.data
	})}export function postApiEquipmentRecordSaveEquipmentInfo(data){return request({url: '/api1/api/EquipmentRecord/SaveEquipmentInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function postApiEquipmentRecordUpdateEquipmentInfo(data){return request({url: '/api1/api/EquipmentRecord/UpdateEquipmentInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiEquipmentRecordDeleteEquipmentInfo(equipmentId,operator,){return request({url: '/api1/api/EquipmentRecord/DeleteEquipmentInfo',method:'delete',params:{equipmentId,operator,},}).then(res => {
		return res.data
	})}export function postApiFaultManageSaveFaultClassInfo(data){return request({url: '/api1/api/FaultManage/SaveFaultClassInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getApiFaultManageGetFaultClassInfoList(faultCode,faultDesc,createTime_start,createTime_End,){return request({url: '/api1/api/FaultManage/GetFaultClassInfoList',method:'get',params:{faultCode,faultDesc,createTime_start,createTime_End,},}).then(res => {
		return res.data
	})}export function deleteApiFaultManageDeleteFaultClassInfo(faultClassInfoid,operator,){return request({url: '/api1/api/FaultManage/DeleteFaultClassInfo',method:'delete',params:{faultClassInfoid,operator,},}).then(res => {
		return res.data
	})}export function postApiFaultManageAddFaultConfigInfo(data){return request({url: '/api1/api/FaultManage/AddFaultConfigInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiFaultManageDeleteFaultConfigInfo(faultClassInfoid,operator,){return request({url: '/api1/api/FaultManage/DeleteFaultConfigInfo',method:'delete',params:{faultClassInfoid,operator,},}).then(res => {
		return res.data
	})}export function postApiFaultManageAddFaultConfigDetailInfo(data){return request({url: '/api1/api/FaultManage/AddFaultConfigDetailInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiFaultManageDeleteFaultConfigDetailInfo(faultConfigDetailInfoid,operator,){return request({url: '/api1/api/FaultManage/DeleteFaultConfigDetailInfo',method:'delete',params:{faultConfigDetailInfoid,operator,},}).then(res => {
		return res.data
	})}export function postApiFolderManageSaveFolderInfo(data){return request({url: '/api1/api/FolderManage/SaveFolderInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getApiFolderManageGetFolderInfoList(typeId,){return request({url: '/api1/api/FolderManage/GetFolderInfoList',method:'get',params:{typeId,},}).then(res => {
		return res.data
	})}export function deleteApiFolderManageDeleteFolderInfo(folderInfoId,operator,){return request({url: '/api1/api/FolderManage/DeleteFolderInfo',method:'delete',params:{folderInfoId,operator,},}).then(res => {
		return res.data
	})}export function getApiInspectionPlanInfoGetInspectionPlanInfoList(planName,startTime,endTime,){return request({url: '/api1/api/InspectionPlanInfo/GetInspectionPlanInfoList',method:'get',params:{planName,startTime,endTime,},}).then(res => {
		return res.data
	})}export function getApiInspectionPlanInfoGetInspectionPlanDetailInfoList(inspectionPlanInfoId,){return request({url: '/api1/api/InspectionPlanInfo/GetInspectionPlanDetailInfoList',method:'get',params:{inspectionPlanInfoId,},}).then(res => {
		return res.data
	})}export function postApiInspectionPlanInfoSaveInspectionPlanInfo(data){return request({url: '/api1/api/InspectionPlanInfo/SaveInspectionPlanInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function postApiInspectionPlanInfoSaveInspectionPlanInfoStatus(data){return request({url: '/api1/api/InspectionPlanInfo/SaveInspectionPlanInfoStatus',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiInspectionPlanInfoDeleteInspectionPlanInfo(inspectionPlanInfoId,operator,){return request({url: '/api1/api/InspectionPlanInfo/DeleteInspectionPlanInfo',method:'delete',params:{inspectionPlanInfoId,operator,},}).then(res => {
		return res.data
	})}export function deleteApiInspectionPlanInfoDeleteInspectionPlanInfoDeatil(inspectionRouteDetailInfoId,operator,){return request({url: '/api1/api/InspectionPlanInfo/DeleteInspectionPlanInfoDeatil',method:'delete',params:{inspectionRouteDetailInfoId,operator,},}).then(res => {
		return res.data
	})}export function postApiInspectionPlanInfoAddInspectionPlanInfoDeatil(data){return request({url: '/api1/api/InspectionPlanInfo/AddInspectionPlanInfoDeatil',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getApiInspectionPointInfoGetInspectionPointClassInfoList(inspectionPointCode,inspectionPointName,){return request({url: '/api1/api/InspectionPointInfo/GetInspectionPointClassInfoList',method:'get',params:{inspectionPointCode,inspectionPointName,},}).then(res => {
		return res.data
	})}export function getApiInspectionPointInfoGetInspectionPointInfoList(inspectionClassId,){return request({url: '/api1/api/InspectionPointInfo/GetInspectionPointInfoList',method:'get',params:{inspectionClassId,},}).then(res => {
		return res.data
	})}export function postApiInspectionPointInfoSaveInspectionClassInfo(data){return request({url: '/api1/api/InspectionPointInfo/SaveInspectionClassInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiInspectionPointInfoDeleteInspectionClassInfo(inspectionClassId,operator,){return request({url: '/api1/api/InspectionPointInfo/DeleteInspectionClassInfo',method:'delete',params:{inspectionClassId,operator,},}).then(res => {
		return res.data
	})}export function deleteApiInspectionPointInfoDeleteInspectionPointInfo(inspectionPointInfoId,operator,){return request({url: '/api1/api/InspectionPointInfo/DeleteInspectionPointInfo',method:'delete',params:{inspectionPointInfoId,operator,},}).then(res => {
		return res.data
	})}export function postApiInspectionPointInfoSaveInspectionPointInfo(data){return request({url: '/api1/api/InspectionPointInfo/SaveInspectionPointInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getApiInspectionRecordInfoGetInspectionInfoList(inspectionOrder,dataStatus,startTime,endTime,){return request({url: '/api1/api/InspectionRecordInfo/GetInspectionInfoList',method:'get',params:{inspectionOrder,dataStatus,startTime,endTime,},}).then(res => {
		return res.data
	})}export function getApiInspectionRecordInfoGetInspectionDetailInfoList(inspectionId,){return request({url: '/api1/api/InspectionRecordInfo/GetInspectionDetailInfoList',method:'get',params:{inspectionId,},}).then(res => {
		return res.data
	})}export function getApiInspectionRecordInfoGetInspectionRecordInfoList(inspectionDetailId,){return request({url: '/api1/api/InspectionRecordInfo/GetInspectionRecordInfoList',method:'get',params:{inspectionDetailId,},}).then(res => {
		return res.data
	})}export function postApiInspectionRecordInfoSaveInspectionRecordInfo(data){return request({url: '/api1/api/InspectionRecordInfo/SaveInspectionRecordInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getApiInspectionRouteGetInspectionRouteInfoList(inspectionRouteCode,inspectionRouteName,){return request({url: '/api1/api/InspectionRoute/GetInspectionRouteInfoList',method:'get',params:{inspectionRouteCode,inspectionRouteName,},}).then(res => {
		return res.data
	})}export function getApiInspectionRouteGetInspectionRouteDetailInfoList(routeInfoId,){return request({url: '/api1/api/InspectionRoute/GetInspectionRouteDetailInfoList',method:'get',params:{routeInfoId,},}).then(res => {
		return res.data
	})}export function postApiInspectionRouteSaveInspectionRouteInfo(data){return request({url: '/api1/api/InspectionRoute/SaveInspectionRouteInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiInspectionRouteDeleteInspectionRouteInfo(inspectionRouteInfoId,operator,){return request({url: '/api1/api/InspectionRoute/DeleteInspectionRouteInfo',method:'delete',params:{inspectionRouteInfoId,operator,},}).then(res => {
		return res.data
	})}export function deleteApiInspectionRouteDeleteInspectionRouteDetailInfo(InspectionRouteDetailInfoId,operator,){return request({url: '/api1/api/InspectionRoute/DeleteInspectionRouteDetailInfo',method:'delete',params:{InspectionRouteDetailInfoId,operator,},}).then(res => {
		return res.data
	})}export function postApiInspectionRouteSaveInspectionRouteDetailInfo(data){return request({url: '/api1/api/InspectionRoute/SaveInspectionRouteDetailInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getApiMaintenanceGetMaintenanceClassList(classCode,className,classType,){return request({url: '/api1/api/Maintenance/GetMaintenanceClassList',method:'get',params:{classCode,className,classType,},}).then(res => {
		return res.data
	})}export function postApiMaintenanceSaveMaintenanceClassInfo(data){return request({url: '/api1/api/Maintenance/SaveMaintenanceClassInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiMaintenanceDeleteMaintenanceClassInfo(maintenanceClassId,operator,){return request({url: '/api1/api/Maintenance/DeleteMaintenanceClassInfo',method:'delete',params:{maintenanceClassId,operator,},}).then(res => {
		return res.data
	})}export function getApiMaintenanceGetMaintenanceItemList(maintenanceClassId,itemCode,itemName,){return request({url: '/api1/api/Maintenance/GetMaintenanceItemList',method:'get',params:{maintenanceClassId,itemCode,itemName,},}).then(res => {
		return res.data
	})}export function postApiMaintenanceSaveMaintenanceItemInfo(data){return request({url: '/api1/api/Maintenance/SaveMaintenanceItemInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiMaintenanceDeleteMaintenanceItemInfo(maintenanceItemId,operator,){return request({url: '/api1/api/Maintenance/DeleteMaintenanceItemInfo',method:'delete',params:{maintenanceItemId,operator,},}).then(res => {
		return res.data
	})}export function postApiMaintenanceSaveMaintenanceItemDataStatus(maintenanceItemId,dataStatus,operator,){return request({url: '/api1/api/Maintenance/SaveMaintenanceItemDataStatus',method:'post',params:{maintenanceItemId,dataStatus,operator,},}).then(res => {
		return res.data
	})}export function getApiMaintenanceGetMaintenancePlanList(planName,planType,){return request({url: '/api1/api/Maintenance/GetMaintenancePlanList',method:'get',params:{planName,planType,},}).then(res => {
		return res.data
	})}export function postApiMaintenanceSaveMaintenancePlanInfo(data){return request({url: '/api1/api/Maintenance/SaveMaintenancePlanInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiMaintenanceDeleteMaintenancePlanInfo(maintenancePlanId,operator,){return request({url: '/api1/api/Maintenance/DeleteMaintenancePlanInfo',method:'delete',params:{maintenancePlanId,operator,},}).then(res => {
		return res.data
	})}export function postApiMaintenanceSaveMaintenancePlanDataStatus(maintenancePlanId,dataStatus,operator,){return request({url: '/api1/api/Maintenance/SaveMaintenancePlanDataStatus',method:'post',params:{maintenancePlanId,dataStatus,operator,},}).then(res => {
		return res.data
	})}export function getApiMaintenanceGetMaintenanceList(planName,maintenanceOrder,maintenanceType,){return request({url: '/api1/api/Maintenance/GetMaintenanceList',method:'get',params:{planName,maintenanceOrder,maintenanceType,},}).then(res => {
		return res.data
	})}export function getApiMaintenanceGetMaintenanceDetailList(maintenanceId,){return request({url: '/api1/api/Maintenance/GetMaintenanceDetailList',method:'get',params:{maintenanceId,},}).then(res => {
		return res.data
	})}export function getApiMaintenanceGetMaintenanceRecordList(maintenanceRecordId,){return request({url: '/api1/api/Maintenance/GetMaintenanceRecordList',method:'get',params:{maintenanceRecordId,},}).then(res => {
		return res.data
	})}export function deleteApiMaintenanceDeleteMaintenanceInfo(maintenanceId,operator,){return request({url: '/api1/api/Maintenance/DeleteMaintenanceInfo',method:'delete',params:{maintenanceId,operator,},}).then(res => {
		return res.data
	})}export function postApiMaintenanceSaveMaintenanceDataStatus(maintenanceId,dataStatus,operator,){return request({url: '/api1/api/Maintenance/SaveMaintenanceDataStatus',method:'post',params:{maintenanceId,dataStatus,operator,},}).then(res => {
		return res.data
	})}export function postApiMaintenanceSaveMaintenanceRecordInfo(maintenanceRecordId,maintenanceResult,determineResultStatus,remark,operator,){return request({url: '/api1/api/Maintenance/SaveMaintenanceRecordInfo',method:'post',params:{maintenanceRecordId,maintenanceResult,determineResultStatus,remark,operator,},}).then(res => {
		return res.data
	})}export function getApiTechnicianGetTechnicianList(userCode,userName,){return request({url: '/api1/api/Technician/GetTechnicianList',method:'get',params:{userCode,userName,},}).then(res => {
		return res.data
	})}export function postApiTechnicianSaveTechnicianInfo(data){return request({url: '/api1/api/Technician/SaveTechnicianInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiTechnicianDeleteTechnicianInfo(technicianId,operator,){return request({url: '/api1/api/Technician/DeleteTechnicianInfo',method:'delete',params:{technicianId,operator,},}).then(res => {
		return res.data
	})}export function getApiTechnicianGetSkillClassList(skillDesc,){return request({url: '/api1/api/Technician/GetSkillClassList',method:'get',params:{skillDesc,},}).then(res => {
		return res.data
	})}export function postApiTechnicianSaveSkillClassInfo(data){return request({url: '/api1/api/Technician/SaveSkillClassInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiTechnicianDeleteSkillClassInfo(skillClassId,operator,){return request({url: '/api1/api/Technician/DeleteSkillClassInfo',method:'delete',params:{skillClassId,operator,},}).then(res => {
		return res.data
	})}export function getApiTechnicianGetTechnicianListBySkillClassId(skillClassId,){return request({url: '/api1/api/Technician/GetTechnicianListBySkillClassId',method:'get',params:{skillClassId,},}).then(res => {
		return res.data
	})}export function postApiTechnicianSaveSkillClassTechnicianInfo(data){return request({url: '/api1/api/Technician/SaveSkillClassTechnicianInfo',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function deleteApiTechnicianDeleteSkillClassTechnicianInfo(operator,data){return request({url: '/api1/api/Technician/DeleteSkillClassTechnicianInfo',method:'delete',data,params:{operator,},}).then(res => {
		return res.data
	})}
