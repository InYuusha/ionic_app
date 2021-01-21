<template>
<form class="ion-padding" @submit.prevent="submitForm()">
<ion-list>
    <ion-item>
        <ion-label>Title</ion-label>
        <ion-input type="text" required v-model="title" />
    </ion-item>
      <ion-item>
        <ion-label>Image url</ion-label>
        <ion-input type="url" v-model="url" required />
    </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea rows="5" type="text" v-model="desc" required />
    </ion-item>

        <ion-button type="submit" class="submit" expand="full">Save</ion-button>

</ion-list>
</form>
</template>
<script>
import {IonList,IonItem,IonLabel,IonInput,IonTextarea,IonButton} from '@ionic/vue'
export default{
    emits:['save-memory'],
    data(){
        return{
            title:'',
            url:'',
            desc:''
        }

    },
        components:{

        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton
    },
    methods:{
        submitForm(){
            const memoryData ={
                title:this.title,
                image:this.url,
                description:this.desc
            }
            this.$emit('save-memory',memoryData)
        }
    }
}
</script>