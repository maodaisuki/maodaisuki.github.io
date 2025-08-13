<script setup>
import InfoCard from '../components/InfoCard.vue';
import LinkCard from '../components/LinkCard.vue';

const currentYear = (new Date()).getFullYear();
</script>
<!-- 主页 -->
<template>
  <main>
    <div class="main-container">
      <InfoCard />
      <LinkCard />
    </div>
    <div class="footer" style="margin: 20px auto; align-items: center; text-align: center;">
      <p style="color: #616161;">
        &copy;2023-{{ currentYear }} mao
      </p>
    </div>
  </main>
</template>

<style scoped>
  .main-container {
    width: 40%;
    margin: 50px auto 10px auto;
    padding: 10px 10px 10px 10px;
    align-items: center;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  @media (max-width: 800px){
  .main-container{
    width: 85%;
    margin: 50px auto 10px auto;
    padding: 10px;
    align-items: center;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
}

</style>
