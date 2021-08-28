<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <tr v-for="(item, index) in ip" :key="index">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
    </tr>
  </div>
  
</template>

<script>
  console.log("fafafafaf");
  export default {
    async asyncData({ $axios }) {
      const ip = await $axios.$get('http://localhost:5000/api')
      console.log(ip);
      return { ip }
    },
  }
</script>