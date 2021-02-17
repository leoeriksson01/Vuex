<template>
<div class="character card"> 
    <img v-bind:src="character.picture" alt="Mario Character">
    <div class="container">
        <h4 class="name"> </h4>
            <b> {{ character.name }} </b> 
        </div>
    </div>
</template>

<script>
export default {
props: ["character"],

}

</script>

<style scoped>
.card {
    background: rgba(211, 211, 211, 0.5);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 80% 20%;
    padding: 0.5rem;
    transition: 0.5s;
    color: white;
    text-align: center;
    }

    .card:hover {
        background: lightgray;
    
        }

        .card img {
            width: 100%;
            }

 </style>