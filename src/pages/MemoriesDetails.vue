<template>
<base-layout :page-title="loadedMemory?loadedMemory.title:'Loading'" page-default-back-link="/memories">
<h1 v-if="!loadedMemory">Could not find the memory</h1>
<memory-overview v-else :title="loadedMemory.title" :description="loadedMemory.description" :image="loadedMemory.image"></memory-overview>

</base-layout>

</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview'
export default{
    components:{
        MemoryOverview
    },
    data(){
        return{
            memoryId:this.$route.params.id
        }

    },
     watch: {
            '$route'(currentRoute){
                this.memoryId = currentRoute.params.id
            }
        },
        computed:{
            loadedMemory(){
                return this.$store.getters.memory(this.memoryId)
            }

        }

}
</script>