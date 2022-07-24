<template>
    <div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
            :page-sizes="[5, 10, 20, 40]" :page-size="size" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>
<script>
import { getTableData } from '@/ulties/table'
export default {
    props:{
        "total":Number,
        "url":String
    },
    data() {
        return {
            page: 1,
            size: 10
        }
    },
    created() {
        getTableData(this.$parent, '/works', { page: this.page, size: this.size }, ['completed'])
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.size = val
            this.page = 1
            getTableData(this.$parent, '/works', { page: this.page, size: val }, ['completed'])
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.page = val
            getTableData(this.$parent, '/works', { page: val, size: this.size }, ['completed'])
        },
    }
}
</script>