<template>
    <div class='ContactGroup'>
     <h3>{{ title }}({{ people.length }})</h3>
    </div>
</template>
 
<script>
export default {
    name: 'ContactGroup',
    props: ["people", "title", "offline"]
};
</script>
 
<style lang='scss'>
@import '../../assets/_scss/_contactgroup'
</style>