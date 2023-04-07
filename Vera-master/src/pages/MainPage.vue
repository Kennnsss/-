<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <main-header />
                <header-hero />
            </el-header>
            <el-main>
                <main-rovers @select-rover="selectRover"/>
                <div class="result-modal">
                    <main-date-picker @change-date="selectDate" />
                    <div>
                        <img src="" alt="">
                    </div>
                </div>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MainRovers from '../components/MainRovers.vue'
import MainHeader from '../components/MainHeader.vue'
import MainDatePicker from '../components/MainDatePicker.vue';

import { getNasaData } from "@/api/getNasaApi.api.js"

const roverName = ref('')
const currentDate = ref('')

function selectRover(roverTitle) {
    roverName.value = roverTitle
    getNasaData(roverName, currentDate)
}

function selectDate (selectedDate) {
    currentDate.value = selectedDate
    getNasaData(roverName, currentDate)
}

</script>

<style lang="scss" scoped></style>