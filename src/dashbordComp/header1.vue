<template>
    <div class=" relative m-3">
        <div class="flex gap-6 absolute right_">
            <div>
                <button
                    class="p-2 rounded-full md:h-[35px] h-[32px] mt-5 flex items-center justify-around text-slate-800 width2 bg-transparent right-5"
                    @click="isActive = !isActive">
                    <img src="../assets/rusflag.png" alt="country" class="w-6">
                    <span class="uppercase text-sm color1">RU</span><i class="fas fa-caret-down color1"></i>
                </button>
                <div v-if="isActive">
                    <div>
                        <div
                            class="w-[200px] p-2 h-auto absolute right-16 z-20 md:top-[84px] top-[60px] rounded-xl bg-white shadow-xl">
                            <span class="gap-4 flex item-center p-3 w-full hover:bg-slate-50 rounded-lg cursor-pointer">
                                <img src="https://b2b.eb-system.uz/src/assets/images/Authorization/languages/flag_rus.svg"
                                    alt="">
                                Русский</span>
                            <span class="gap-4 flex item-center p-3 w-full hover:bg-slate-50 rounded-lg cursor-pointer">
                                <img src="https://b2b.eb-system.uz/src/assets/images/Authorization/languages/en.svg" alt="">
                                English</span>
                            <span class="gap-4 flex item-center p-3 w-full hover:bg-slate-50 rounded-lg cursor-pointer">
                                <img src="https://b2b.eb-system.uz/src/assets/images/Authorization/languages/flag_uzb.svg"
                                    alt="">
                                O`zbek tili</span>
                        </div>
                    </div>
                </div>
            </div>


            <a href="" class="mt-5">
                <i class="fas fa-bell color1 text-xl"></i>
                <span class="badge badge-notification bg-danger p-1 text-white">32</span>
            </a>
            <img src="../assets/trailing-icon.png" alt="country" class="mt-3 h-12">
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
let isActive = ref(false)
</script>

<style scoped>
.width2 {
    width: 85px;
}

.color1 {
    color: #475569;
}

.badge-notification {
    position: absolute;
    font-size: var(--mdb-badge-font-size);
    padding: var(--mdb-badge-padding-y) var(--mdb-badge-padding-x);
    margin-top: var(--mdb-badge-margin-top);

    margin-left: -5px;
}

.badge {
    display: inline-block;
    border-radius: 100px !important;
    line-height: 1;
    background: #6A67F8;
    text-align: center;
    font-size: 11px;
    line-height: 11px;

    padding: 3px;
    border-radius: var(--mdb-badge-border-radius);
}

.right_ {
    right: 10px;
}
</style>