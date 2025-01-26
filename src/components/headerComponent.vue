<template>
    <div class="w-100 header p-3">
        <div class="border p-3">Logo here</div>
        <div class="d-flex">
            
            <div class="nav-items w-100  d-flex justify-content-around">
                <div>User name</div>
                
                <div class="nav-items d-flex justify-content-around">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Services</a>
                  <a href="#">Contact</a>
                </div>
                
                <div class=" profile d-flex">
                    <div>Profile</div>
                    <div>Notification</div>
                    <div>Setting</div>
                </div>

            </div>
        </div>
    </div>

</template>
<script>
 export default {
        name: 'headerComponent',
    }
</script>
   
<style scoped>
.header{background-color:#006D79; color:white}
a{color:white; text-decoration: none; margin:0px 10px}
.profile div{margin:0px 10px; border: 1px solid red}
</style>