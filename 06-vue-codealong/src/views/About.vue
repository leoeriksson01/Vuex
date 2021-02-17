<template>
  <div class="about">
      <h1 class="header"> {{ header }} </h1>
      <p class="desc"> {{ description }} </p>
  </div>
</template>

<script>
export default {
data () {
    return {
        header:"Super Mario Galaxy",
        description: "Mario blir inbjuden till tepartaj hos Ivan där de firar en komet som färdas förbi Mushroom Kingdom vart hundrade år. Bowser dyker upp och kidnappar Peach genom att flyga iväg med hela hennes slott; Mario hoppar upp mot slottet för att stoppa honom, men blir skjuten av en Magikoopa. Han ramlar av det flygande slottet, landar på en liten planet och tappar medvetandet. Han blir senare väckt av kaniner, som visar sig vara en form av levande stjärnor under förklädnad, så kallade Lumas. Dessa berättar för honom att han befinner sig på en planet ute i rymden. De berättar också om en person som de kallar 'mamma' (Mama), och som behöver Marios hjälp. Lumornas 'mamma', en mystisk kvinna vid namn Rosalina (Rosetta i det japanska originalet) behöver hjälp med att samla ihop stjärnor som Bowser har stulit från henne. Stjärnorna används till att driva den enorma farkosten Rosalina och alla lumor reser i. Genom att hjälpa henne kan Mario färdas längre ut i rymden, och på så sätt rädda Peach och föra henne tillbaka till Mushroom Kingdom."

}
}
}
</script>

<style scoped>
.about {
    background:rgba(151, 150, 150, 0.507);
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    transition: 0.5s;
    }
    .about:hover {
        background-color: rgba(255, 255, 255, 0.5);
        }

        .desc {
            font-size: 1.5rem;
            }

</style>