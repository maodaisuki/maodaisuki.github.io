<script setup>
import SNSCard from '../components/SNSCard.vue';
// import ProjectCard from '../components/ProjectCard.vue';
</script>
<template>
    <div class="link-card">
        <hr>
        <SNSCard />
        <!-- <a-tabs type="capsule" size="medium" justify="true">
            <a-tab-pane key="1" title="SNS">
                
            </a-tab-pane>
            <a-tab-pane key="2" title="サイト">
                <SiteCard />
            </a-tab-pane>
            <a-tab-pane key="3" title="Projects">
                <ProjectCard />
            </a-tab-pane>
        </a-tabs> -->
    </div>
</template>
<style scoped>
    .link-card {
        margin: 10px 0;
        width: 100%;
    }
    .link-card a-tabs a-tab-pane {
        width: 100%;
    }

    .arco-tabs-nav-tab-list {
        width: 100% !important;
    }
    .arco-tabs-content {
        padding-top: 5px !important;
    }
    hr {
        border: none;
        border-top: 1px solid rgb(221, 221, 221);
        margin: 10px 0;
    }
</style>