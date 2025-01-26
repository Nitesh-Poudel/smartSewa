<template>
    <div>
        <headerComponent/>
    </div>
    <div class="container border py-5"></div>

</template>
<script>
 import headerComponent from './headerComponent.vue'; // This is correct

    export default {
        name: 'homeComponent',

        components: {
                headerComponent,
            },
    }
</script>
   

<style>

</style>