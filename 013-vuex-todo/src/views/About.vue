<template>
  <div class="about">
    <h1 class="header">{{ header }}</h1>
    <p class="desc">{{ description }}</p>
    <a
      href="https://www.csn.se/om-nagot-hander-eller-andras/ogiltig-franvaro-pa-gymnasiet---information-om-skolk.html"
      target="_blank"
      >{{ link }}</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "Att skolka från skolan",
      link:
        "https://www.csn.se/om-nagot-hander-eller-andras/ogiltig-franvaro-pa-gymnasiet---information-om-skolk.html",
      description:
        "Om du är borta från skolan utan giltig anledning, räknas det som skolk. Då kan du bli av med dina bidrag från CSN. Om din familj har bidrag från Försäkringskassan kan de också påverkas, till exempel bostads­bidrag och flerbarns­tillägg. Här kan du läsa mer om vad som händer om du har ogiltig frånvaro från skolan.",
    };
  },
};
</script>

<style>
.about {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-top: 10%;
  padding: 1rem;
  transition: 0.5s;
  width: 60%;
}

.header {
  text-align: center;
  font-size: 4em;
  color: white;
}

.desc {
  font-size: 1.5rem;
}
a {
  color: white;
}
a:hover {
  color: lightgray;
}
</style>
