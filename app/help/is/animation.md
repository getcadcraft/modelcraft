---
title: Hreyfðu myndavélina og hluti, og myndgerðu myndskeið
summary: Settu lykla fyrir myndavélina og fyrir hópa og einingar á tímalínu, spilaðu þá í sýninni og myndgerðu hreyfinguna í WebM-myndskeið með himni, sól og efnum myndgerðarinnar.
keywords: hreyfimynd, hreyfa, tímalína, rammalykill, lyklar, lykill, slóð myndavélar, fljúga um, gönguferð, ganga um, myndskeið, kvikmynd, mynd, webm, myndgera myndskeið, rammar, rammatíðni, fps, spilhaus, sjálfvirkur lykill, mýkja, slétta, halda, senur, PNG-röð, hreyfing
from: d3a58249
---

**Tímalínan** færir myndavélina og hvaða hóp eða einingu sem er með tímanum. Þú setur **lykla** (hvar eitthvað er á ákveðnu augnabliki); ModelCraft færir það mjúklega frá lykli til lykils. Spilaðu það í sýninni og myndgerðu það síðan í myndskeið með sama himni, sól, efnum og ljósum og [myndgerðri mynd](topic:render).

## Opna tímalínuna

Smelltu á {{ui:Sýnir}} í hópnum {{ui:Myndavél}}, síðan á {{ui:Tímalína hreyfingar}}. Tímalínan opnast undir sýninni: stýringarnar efst, síðan línan **Myndavél** og lína fyrir hvern hóp eða einingu sem hreyfist. Demantarnir eru lyklar; rauða línan er **spilhausinn**, augnablikið sem sýnt er í sýninni.

:::touch
Á síma opnast tímalínan líka undir sýninni. Stýringar hennar eru ein röð: strjúktu til hliðar til að ná hinu; hnappurinn sem lokar tímalínunni er áfram í enda hennar.
:::

Dragðu rennuna (eða smelltu á línu) til að færa spilhausinn. {{ui:Spila}} spilar frá spilhausnum og breytist í {{ui:Hlé}} meðan það spilar; smelltu aftur til að stöðva þar sem það er. {{key:Space}} gerir það sama meðan tímalínan er opin (með tímalínuna lokaða er {{key:Space}} ennþá {{ui:Velja}}). {{ui:Fyrri lykill}} og {{ui:Næsti lykill}} hoppa á milli lykla. Stíll sem þú átt getur gefið spilun og hléi annan lykil: {{ui:Stillingar}}, síðan valmyndirnar, lyklar og mús, skipunin *Spila eða stöðva hreyfimyndina*.

## Færa myndavélina

1. Færðu spilhausinn þangað sem skotið byrjar (0 s), stilltu sýnina og smelltu á {{ui:Lykilmyndavél}}.
2. Færðu spilhausinn síðar (segjum 4 s), snúðu, hliðraðu eða gakktu um sýnina í næstu stöðu og smelltu aftur á {{ui:Lykilmyndavél}}.
3. Bættu eins mörgum lyklum við og þú vilt, og spilaðu síðan með {{ui:Spila}}.

Myndavélin fer mjúklega í gegnum hvern lykil og byrjar og endar í hvíld.

:::tip
Ertu nú þegar með [senur](topic:scenes)? {{ui:Úr senum}} býr til slóð myndavélarinnar úr þeim: hún staldrar við hverja senu og færist síðan í þá næstu. Ef tímalínan hefur engan lykil gerir {{ui:Myndgerð myndskeiðs…}} þetta sjálft, svo tvær senur eða fleiri duga í gönguferðarmyndskeið.
:::

## Færa hóp eða einingu

1. Veldu hópinn eða eininguna (aðeins heilir hópar og einingar hreyfast; [búðu til hóp](topic:groups-components) fyrst).
2. Á 0 s smelltu á {{ui:Lykill valinn}}.
3. Færðu spilhausinn síðar, [færðu, snúðu eða skalaðu](topic:move-copy) hópinn þangað sem hann á að vera og smelltu aftur á {{ui:Lykill valinn}}.

Hann rennur, snýst og stækkar milli lyklanna. Snúningar taka stystu leiðina.

**Sjálfvirkur lykill** sparar smellinn í skrefi 3: meðan {{ui:Sjálfvirkur lykill}} er kveikt fær valinn hópur eða eining, sem þú færir, snýrð eða skalar, lykil við spilhausinn af sjálfu sér (og, í fyrsta skipti, lykil á 0 s þar sem hann var).

:::note
Að færa hreyfðan hóp án lykils gildir aðeins þar til spilhausinn færist: næst þegar þú spilar eða rennir honum aftur fer hann þangað sem lyklar hans setja hann. Stöðustikan segir það. Ýttu á {{ui:Lykill valinn}} til að halda honum.
:::

## Breyta lyklum

- **Veldu lykil** með því að smella á demantinn hans: spilhausinn fer þangað.
- **Færðu lykil** með því að draga demantinn eftir línu sinni, eða með {{key:Left}} og {{key:Right}} (einn rammi; með {{key:Shift}}, tíu).
- **Eyddu** með {{ui:Eyða lykli}} (valda lyklinum, eða hverjum lykli við spilhausinn) eða {{key:Delete}} á völdum demanti.
- **Hvernig hann færist áfram**, fyrir valinn lykil: {{ui:Slétta}} (ferill í gegnum lyklana í kring), {{ui:Jafnt}} (bein lína á einum hraða), {{ui:Hægt inn og út}} (kemur í hvíld við þennan lykil) eða {{ui:Halda}} (helst kyrr þar til næsti lykill kemur).
- **Lengd (s)** stillir hversu löng hreyfimyndin er; lykill settur eftir endann lengir hana. Til að stytta hana skaltu færa eða eyða lyklunum fyrir aftan nýja endann fyrst.
- **×** á línu hóps hættir að hreyfa hann.

Tímalínan hefur sína eigin {{ui:Afturkalla}} og {{ui:Endurgera}}: afturköllun líkansins ({{key:Mod+Z}}) breytir líkaninu, ekki lyklunum. Hreyfimyndin er vistuð í `.modelcraft`-skránni. Að loka tímalínunni setur hreyfanlega hópa aftur í fyrstu stellingu.

## Myndgera myndskeiðið

1. Smelltu á {{ui:Myndgera myndskeið}} á tímalínunni (eða {{ui:Flytja út}} › {{ui:Myndgerð myndskeiðs…}}).
2. Veldu {{ui:Stærð}}, {{ui:Rammatíðni}}, {{ui:Gæði hvers ramma}} og {{ui:Skrá}}.
3. Smelltu á {{ui:Myndgera myndskeið}}. Hver rammi birtist þegar hann er gerður, með tímanum sem eftir er.
4. Þegar það er búið, smelltu á {{ui:Vista myndskeið}}.

{{ui:Stöðva}} (eða {{key:Esc}}) hættir snemma; {{ui:Vista myndskeið}} vistar þá þegar gerðu ramma sem styttra myndskeið.

Himinn, sól, efni, ljós og birta eru þau sem stillt eru í {{ui:Myndgera mynd…}}: stilltu þau þar fyrst og athugaðu kyrrmynd. Hver rammi er myndgerður á þessari tölvu; ekkert er hlaðið upp.

| Stilling | Hvað hún gerir |
|---|---|
| {{ui:Stærð}} | 480p, 720p HD, 1080p Full HD, eða eigin stærð sýnarinnar (allt að 1920 pixlar á breidd) |
| {{ui:Rammatíðni}} | 24, 25, 30 eða 60 rammar á sekúndu. Tvöfalt fleiri rammar taka tvöfalt lengri tíma |
| {{ui:Gæði hvers ramma}} | {{ui:Hröð}} (4 umferðir), {{ui:Drög}} (16) eða {{ui:Góð}} (64): fleiri umferðir gefa mýkri skugga og kanta |
| {{ui:Skrá}} | {{ui:WebM-myndskeið}}, {{ui:MP4 myndskeið (H.264)}} þar sem vafrinn getur skrifað það, eða {{ui:PNG-myndir, ein á hvern ramma (ZIP)}} fyrir myndvinnsluforrit (og fyrir vafra án myndbandskóðara) |

:::tip
 10 sekúndna myndskeið á 30 ramma á sekúndu eru 301 rammi. Prófaðu {{ui:Hröð}} í 480p fyrst til að athuga hreyfinguna, og myndgerðu síðan {{ui:Drög}} eða {{ui:Góð}} í stærri stærð.
:::

WebM spilast í vöfrum og VLC, og myndvinnsluforrit breyta því. {{ui:MP4 myndskeið (H.264)}} er í boði þar sem vafrinn getur skrifað það. {{ui:Myndgera myndskeið}} notar hraða myndgerðarvélina; til að rekja ljósleiðir í hverjum ramma skaltu velja {{ui:Bæta þessari hreyfimynd í röðina}} í sama glugga: rammarnir eru myndgerðir í [myndgerðarröðinni](topic:render#the-render-queue), sem þarf WebGPU.

:::firefox safari
Myndgerð myndskeiðs þarfnast vafra sem kóðar myndband sjálfur (WebCodecs): nýlegur Chrome, Edge, Firefox og Safari 17 gera það. Án þess skaltu velja {{ui:PNG-myndir, ein á hvern ramma (ZIP)}}.
:::

## Ýmislegt sem þarf að vita

- Aðeins heilir hópar og einingar hreyfast. Fletir, brúnir, tími sólarinnar og stíllinn breytast ekki með tímanum enn.
- {{ui:Flytja út hreyfimynd}} undir [Senum](topic:scenes) skráir enn sýnina eins og hún er á skjánum, í rauntíma; {{ui:Myndgera myndskeið}} myndgerir hvern ramma með himni, skuggum og efnum.
