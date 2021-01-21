<template>
   <ion-list>
       <memories-list-item v-for="(memory,key) in memories" :key="key" :memory="memory"></memories-list-item>

    </ion-list>
</template>

<script>
import MemoriesListItem from './MemoriesListItem'
import {IonList} from '@ionic/vue'
export default{
    props:['memories'],
    components:{
        MemoriesListItem,
        IonList
    },


}
</script>