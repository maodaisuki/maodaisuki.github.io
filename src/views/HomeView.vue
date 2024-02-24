<script setup>
import InfoCard from '../components/InfoCard.vue';
import LinkCard from '../components/LinkCard.vue';
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
        &copy;mao / <a target="_blank" style="color: #616161;" href="https://nyanpasu.space/status">Sites Status</a>
      </p>
    </div>
  </main>
</template>

<style scoped>
  .main-container {
    width: 40%;
    margin: 50px auto 10px auto;
    padding: 20px 10px 50px 10px;
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
