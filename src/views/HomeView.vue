<script setup>
import {ref} from "vue";
import TitleText from "@/components/Pre-styled/TitleText.vue";
import SubTitleText from "@/components/Pre-styled/SubTitleText.vue";
import Card from "@/components/Layout/Card.vue"
import Button from "@/components/Controls/Button.vue"
import Checkbox from "@/components/Controls/Checkbox.vue";
import ImagePicker from "@/components/Controls/ImagePicker.vue";
import HousePreview from "@/components/Layout/HousePreview.vue";
</script>

<template>
  <section class="min-h-96 border-2 border-gray-500 rounded-md flex justify-center items-center shadow-md
  hover:shadow-inner">
    <TitleText>Hero/Welcome image</TitleText>
  </section>
  <section>
    <SubTitleText>description:</SubTitleText>
    <p>Az ingatlan adásvétel életünk során az egyik legjelentősebb pénzügyi döntésünk egyike.</p>
    <p>Mind eladói, mind vevői oldalról fontos, hogy zökkenőmentesen és minél kedvezőbb áron bonyolódjon le az ügylet.
    </p>
    <p>A legnagyobb precizitással, 15 éve ingatlan ügyeket képviselő ügyvéddel dolgozunk együtt, naprakészen tartva az
      aktuális jogszabályi változásokat is.</p>
    <p>Teljeskörű ügyintézést biztosítunk, megkímélve Önt az akár órákig tartó sorban állástól a hivatalos papírok
      beszerzése-, vagy csak egy egyszerű tájékozódás miatt.</p>
    <p>Például földhivatali-, építési-, térkép nyilvántartási és egyéb szükséges iratok.</p>
    <p>Hitel, CSOK, valamint egyéb támogatások igénybe vételekor is teljes körű ügyintézéssel segítjük a sikeres
      adásvételt.</p>
    <p>Nincsenek rejtett költségek, mindenről pontos tájékoztatást adunk!</p>
    <p>A mi ügyfeleink részére az adásvételi szerződés megkötéséhez szükséges tulajdoni lap INGYENES!</p>
    <p>Lehetőség van vevői képviseletre is, amennyiben Ön máshol nézte ki álmai ingatlanát.</p>
    <p>Amiben még segíteni tudunk:</p>
    <ul>
      <li>Energetikai tanúsítvány</li>
      <li>Teljes körű hitelügyintézés<br/>(&nbsp;számla nyitás, személyi hitel, CSOK, egyéb támogatások&nbsp;)</li>
      <li>Villamos hálózat felmérés, tanácsadás</li>
      <li>Ingatlan átalakítás/kialakitás tanácsadás</li>
      <li>Takarítási szolgáltatás</li>
      <li>Lomtalanítás</li>
      <li>Kisebb felújítási-, javítási munkálatok</li>
    </ul>
    <h5 class="text-lg font-semibold">Fontos Önnek a gyorsaság, precizitás, tapasztalat, korrektség?</h5>
    <h3 class="text-xl font-semibold ml-2">Jó helyen van!</h3>
  </section>
  <section class="min-h-lvh">
    <card class="h-full">
      <template #card-header>
        <SubTitleText>House highlights go here</SubTitleText>
      </template>
      <template #default>
        <HousePreview title="A very nice (and expensive) house in Rásonyápberencs, I want to make sure this title is
long enough so I can test how well long titles fit in this component" img-src="/a_house_800x.jpg"
                      location="Rásonyápberencs, Borsod-Abaúj-Zemplén" price="5000000000" area="800000"
                      room-count="3000"></HousePreview>
        <HousePreview title="A short title" img-src=""></HousePreview>
      </template>
    </card>
  </section>
</template>

<style scoped>
p, ul {
  margin-bottom: 6pt;
}

li {
  list-style: disc;
  margin-left: 3rem;
}
</style>