<template>
    <div id="management">
        <!--{{ddd}}-->
        <el-table :data="dddd.RtnData">
            <el-table-column prop="Id" label="id"/>
            <el-table-column prop="OrgId" label="组织架构"/>
            <el-table-column prop="CurrentBomId" label="BOM"/>
            <el-table-column prop="EquipmentCode" label="EquipmentCode"/>
            <el-table-column prop="EquipmentName" label="EquipmentCode"/>
            <el-table-column prop="Model" label="EquipmentCode"/>
            <el-table-column prop="Class" label="EquipmentCode"/>
            <el-table-column prop="Price" label="EquipmentCode"/>
            <el-table-column prop="Version" label="EquipmentCode"/>
            <el-table-column prop="Remark" label="EquipmentCode"/>
            <el-table-column prop="DataStatus" label="EquipmentCode"/>
            <el-table-column prop="Creator" label="EquipmentCode"/>
            <el-table-column prop="CreateDate" label="EquipmentCode"/>
            <el-table-column prop="Operator" label="EquipmentCode"/>
            <el-table-column prop="OperateDate" label="EquipmentCode"/>
        </el-table>
    </div>
</template>

<script>

    import * as ems from '@/api/ems/api'

    export default {
        name: "management",
        data() {
            return {
                ddd:[],
            }
        },
         mounted() {
             // ems.getApiEquipmentRecordGetEquipmentRecordList('', '', '', 0, '', '').then(res=>{
             //     this.ddd = res.RtnData;
             // });
        },
        asyncComputed:{
            async dddd(){
                return await ems.getApiEquipmentRecordGetEquipmentRecordList('', '', '', 0, '', '');
                // return (await ems.getApiEquipmentRecordGetEquipmentRecordList('', '', '', 0, '', '')).RtnData;
            }
        }

    }
</script>

<style scoped>

</style>
