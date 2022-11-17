<script setup>

</script>

<template>
  <div class="content-info" @click.stop="()=>{}">
    <img src="../public/images/worker.svg" alt="">
    <slot />
  </div>
</template>

<style>
.content-info img{
    max-width: 32px;
    margin-right: 10px;
}
.content-info {
  background: rgb(134, 218, 241);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 20px;
  border-radius: 4px;
  color: #444;
  font-weight: 600;
}
</style>
