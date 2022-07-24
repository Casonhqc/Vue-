<template>
    <div class="worklist">
        <el-table :data="tableData" v-loading="loading" border style="width: 100%">
            <el-table-column prop="id" label="用户ID" align="center">
            </el-table-column>
            <el-table-column prop="userId" label="班级" align="center">
            </el-table-column>
            <el-table-column prop="title" label="作业名称" align="center">
            </el-table-column>
            <el-table-column prop="completed_text" label="完成情况" align="center">
            </el-table-column>
            

        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="page" :page-sizes="[5, 10, 20, 40]" :page-size="size"
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
    </div>
</template>
<script>
import { getTableData } from '@/ulties/table'
export default {
    data() {
        return {
            tableData: [],
            total: 0,
            size: 10,
            page: 1,
            loading:true
        }
    },
    created() {
        getTableData(this, '/works', {page:this.page,size:this.size}, ['completed'])
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.size = val
            this.page = 1
            getTableData(this, '/works', {page:this.page,size:val}, ['completed'])
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.page = val
            getTableData(this, '/works', {page:val,size:this.size}, ['completed'])
        },
    }
}
</script>
<style lang="less">
.worklist{
    .el-pagination{
        text-align: left;
        margin-top: 20px;
    }
}

</style>