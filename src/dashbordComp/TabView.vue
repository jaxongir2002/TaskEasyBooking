<template>
    <div>
        <div>
            <TabView class="tabview-custom box_sh min-w-min">
                <TabPanel>
                    <template #header>
                        <img src="../assets/icons/samalyot.svg" alt="" class="me-2">
                        <span>Перелеты</span>
                    </template>
                    <p>
                        <Flights />
                    </p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <img src="../assets/icons/domNIiconi.svg" alt="" class="me-2">
                        <span>Отели</span>
                        <i class="pi pi-user ml-2"></i>
                    </template>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam
                        eius modi.
                    </p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <img src="../assets/icons/jdu.svg" alt="" class="me-2">
                        <span>Ж/Д</span>
                        <i class="pi pi-cog ml-2"></i>
                    </template>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                        et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus.
                    </p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <img src="../assets/icons/transferi.svg" alt="" class="me-2">
                        <span>Трансферы</span>
                        <i class="pi pi-cog ml-2"></i>
                    </template>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                        et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus.
                    </p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <img src="../assets/icons/palma.svg" alt="" class="me-2">
                        <span>Туры</span>
                        <i class="pi pi-cog ml-2"></i>
                    </template>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                        et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus.
                    </p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <img src="../assets/icons/straxovka.svg" alt="" class="me-2">
                        <span>Страхование</span>
                        <i class="pi pi-cog ml-2"></i>
                    </template>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                        et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script setup>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Flights from '../dashbordComp/flights/flights.vue'
</script>

<style lang="scss" ></style>