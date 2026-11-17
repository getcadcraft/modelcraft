---
title: Flytja inn SKP-líkan
summary: Flyttu inn .skp-skrá með hópum, einingum, litum, áferðum, merkjum og mjúkum jöðrum, sjáðu hvað kom inn og hvað ekki, og haltu áfram að móta.
keywords: skp, flytja inn, opna skp, einingar, hópar, merki, lög, efni, litir, áferðir, falið, mjúkir jaðrar, 3d warehouse, flytja yfir, skipti
from: 325d3c81
---

ModelCraft les SketchUp-skrár (`.skp`) með sínum eigin lesara, á síðunni. Ekkert er hlaðið upp, og það virkar án nettengingar hvenær sem ModelCraft gerir það. Skrár frá SketchUp 3 og upp til 2026 hafa verið prófaðar.

## Flytja inn skrána

1. Smelltu á {{ui:Flytja inn}} í hópnum {{ui:Skrá}} (eða slepptu `.skp`-skránni á þrívíddarsýnina).
2. Veldu skrána.

   Stöðustikan segir „Les house.skp…“ meðan hún les, og síðan hvað kom inn, til dæmis „Flutt inn house.skp (SketchUp 25.0.575): 1240 fletir, 6 einingar, í hópi.“

Allt líkanið kemur sem einn hópur sem heitir eftir skránni, valinn, og sýnin þysjar að honum. Einn {{key:Mod+Z}} tekur allt aftur í burtu, þar með talin merki.

:::tip
Sundurliðaðu innflutningshópinn ({{ui:Upplýsingar um eind}} › {{ui:Sundurliða}}) þegar þú vilt að innihald hans sé laust í líkaninu þínu frekar en í einum hópi.
:::

## Hvað kemur inn

- **Fletir** með götum sínum, og **jaðrar** sem eru ekki hluti af fleti.
- **Hópar** koma inn sem hópar, og **einingar** sem einingar: sérhvert eintak einingar er staðsetning einnar skilgreiningar, svo breyting á einu eintaki breytir þeim öllum, eins og í SketchUp. Heiti fylgja með.
- **Litir.** Eigið efni flatar gefur honum lit sinn. Efni sem málað er á hóp eða einingu verður málning þeirrar staðsetningar, svo fletir inni í henni án eigin lit taka hann, eins og í SketchUp. Eining sem er máluð rauð á einum stað og blá á öðrum helst ein eining.
- **Áferðir.** Flötur sem málaður er með áferðarefni kemur inn með áferð sinni, lögð á flötinn eins og í skránni, og stíllinn {{ui:Skyggt}} sýnir hana. Myndin varðveitist í ModelCraft-skránni þegar þú vistar, og [birt mynd](topic:render) sýnir hana líka. Áferðarefni sem málað er á heilan hóp eða einingu gefur því eintaki aðeins lit efnisins.
- **Merki.** Hópur eða eining á SketchUp-merki fær ModelCraft-merki með sama heiti, skráð í {{ui:Merki}}, sýnilegt eða falið eins og það var í SketchUp. Ef líkanið þitt er þegar með merki með því heiti, er það merki notað.
- **Falið kemur inn falið:** fletir, jaðrar, hópar og einingar, og fletir og jaðrar á földu merki. Þú sérð það sem SketchUp sýndi, og ekkert tapast: {{ui:Breyta}} › {{ui:Meira}} › {{ui:Sýna allt}} sýnir þá. Sjá [Fela, einangra og sýna](topic:hide-isolate).
- **Mjúkir og sléttir jaðrar** haldast mjúkir, svo bogadregnir fletir líta enn út fyrir að vera sléttir.
- **Stærðir** koma rétt út í hvaða einingu sem er: SketchUp-skrár eru í tommum innan í sér, og ModelCraft breytir þeim.

## Hvað kemur ekki inn

Stöðustikan segir hvað var skilið eftir, með tölum.

- **Sumar áferðir** halda aðeins lit efnisins síns: áferð sem vantar í skrána, mynd á sniði sem vafrar geta ekki birt (til dæmis Photoshop-skrá), eða áferð án stærðar. Fletir með varpaðri áferð koma inn með áferðinni staðsettri um það bil.
- **Merki á lausum fletum og jöðrum.** ModelCraft merkir aðeins hópa og einingar, svo flötur eða jaðar með eigið merki kemur inn án merkis, og stöðustikan telur þá. Gerðu slíka fleti að hópi ({{key:Shift+G}}) og merktu hópinn.
- **Myndir** settar inn í líkanið, texti, málsetningar, leiðbeiningar, sniðplön, senur og stílar.

## Vandamál

- „Þetta er ekki SketchUp-skrá.“ eða „Þessi SketchUp-skrá er skemmd: …“: skráin er skorin af eða er eitthvað annað með `.skp`-heiti. Vistaðu hana aftur úr SketchUp, eða biddu um nýtt eintak.
- Skrá frá SketchUp-útgáfu nýrri en ModelCraft þekkir er hafnað, með útgáfunni sem fannst.
- Líkan sem samanstendur allt af myndum, texta eða málsetningum segir að það hafi ekkert að sýna.

## Taktu líkanið aftur

ModelCraft getur ekki vistað `.skp`-skrár. Fluttu út Collada ({{ui:Flytja út}} › `.dae`) og fluttu það inn í SketchUp: hópar, einingar og litir fara yfir; áferðir fara sem lit efnisins. Sjá [Flytja út líkanið þitt](topic:export-model).
