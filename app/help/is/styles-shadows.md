---
title: Stílar og sólarskuggar
summary: Sýndu líkanið skyggt, sem falnar línur, sem vírlíkan eða gegnsætt, og skoðaðu skuggana sem það varpar á hvaða dagsetningu, tíma og stað sem er.
keywords: kynningarsýn, hrein sýn, fela leiðbeiningar, fela ása, stíll, skyggt, falin lína, vírlíkan, röntgen, brúnir, skuggar, sól, sólarathugun, sólarstaða, dagsetning, tími, breiddargráða, lengdargráða, tímabelti, norður
from: 09c95329
---

Spjaldið {{ui:Stíll}} hægra megin breytir því hvernig líkanið er teiknað. Ekkert í því breytir líkaninu sjálfu og það er ekki hluti af afturköllun. Hver [sena](topic:scenes) man sinn eigin stíl og skráin man stílinn sem þú hafðir þegar þú vistaðir hana.

## Fletir

Veldu einn í listanum {{ui:Fletir}}:

| Stíll | Lítur út eins og |
|---|---|
| {{ui:Skyggt}} | Fastir fletir, mjúklega lýstir. Fletir sem sjást að aftan eru blágráir. Litir sem fluttir eru inn sjást. |
| {{ui:Falin lína}} | Fletir í bakgrunnslit með brúnum í bleki: hrein línuteikning þar sem faldar línur eru fjarlægðar. Hvítt á {{ui:Pappír}}, dökkt á {{ui:Líkan}}. |
| {{ui:Vírlíkan}} | Aðeins brúnir. Fletir eru ekki teiknaðir, en þeir telja samt þegar þú smellir og festir: þú getur ekki valið í gegnum þá. |
| {{ui:Röntgen}} | Gegnsæir fletir, til að sjá það sem er á bak við eða inni í. Eins og í vírlíkani stoppa smellir og festingar samt við næsta flöt. |

{{ui:Sýna brúnir}} kveikir eða slekkur á brúnum í öllum stílum nema {{ui:Vírlíkan}}. Þegar hún er slökkt sýnir {{ui:Falin lína}} næstum ekkert, því fletirnir eru í sama lit og bakgrunnurinn. Mjúkar brúnir, eins og hliðar hrings sem hefur verið dreginn út, eru aldrei teiknaðar.

## Kveiktu á sólarskuggum

1. Hakaðu við {{ui:Sólarskuggar}}. Sólarstillingarnar fyrir neðan verða virkar og líkanið varpar skuggum á sjálft sig og á jörðina.
2. Stilltu staðsetninguna:
   - {{ui:Breiddargráða}}: norður er jákvætt, suður neikvætt (New York er um 40.7, Sydney um -33.9).
   - {{ui:Lengdargráða}}: austur er jákvætt, vestur neikvætt (New York er um -74.0).
   - {{ui:Tímamismunur frá UTC}}: tímamismunur staðarins frá UTC í klukkustundum, til dæmis `-5` fyrir New York að vetri. ModelCraft beitir ekki sumartíma; notaðu `-4` fyrir New York að sumri.
3. Stilltu {{ui:Dagsetning}} (mánuð og dag) og dragðu sleðann {{ui:Tími}}. Tíminn breytist í 15 mínútna skrefum og birtist við hliðina á sleðanum, til dæmis „15:00“.

Lína undir stillingunum segir hvar sólin er, til dæmis „Sólin 52° upp, 250° frá norðri. Norður er græni ásinn.“ Um nótt segir hún „Sólin er niðri á þessum tíma.“

Nýtt líkan byrjar með sólina 21. júní klukkan 15:00, breiddargráðu 40, lengdargráðu -105 og tímamismun frá UTC -7.

## Snúðu líkaninu í norður

Norður í ModelCraft er alltaf **græni ásinn**. Til að rannsaka raunverulega staðsetningu skaltu snúa líkaninu þannig að norðurhliðin snúi eftir græna ásnum: veldu allt ({{key:Mod+A}}), ýttu á {{key:Q}}, smelltu á miðju á jörðinni og snúðu því um horn staðarins frá norðri (sjá [Snúa og mælikvarði](topic:rotate-scale)).

## Sólarathugun

1. Stilltu staðsetningu og dagsetningu.
2. Bættu við senu ({{ui:Bæta við senu}} í {{ui:Senur}}).
3. Færðu tímasleðann og bættu síðan við annarri senu. Endurtaktu fyrir hverja klukkustund sem þú vilt.
4. Smelltu á {{ui:Spila}} til að fletta í gegnum þær. Sjá [Vista sýnir sem senur](topic:scenes).

## Atriði sem gott er að vita

- Skuggar geta litið tenntir út á mjög stóru líkani, því eitt skuggakort nær yfir allt líkanið.
- Skuggar eru ekki teiknaðir í {{ui:Vírlíkan}}.
- Staða sólarinnar fylgir NOAA-sólarútreikningnum og er nákvæm innan brots úr gráðu, sem er nóg fyrir massarannsóknir. Ljósbrot í lofthjúpnum er hunsað, þannig að mjög lágar sólarhæðir við sólarupprás og sólsetur geta skeikað lítillega.

## Kynningarsýn

{{ui:Sýnir}} › {{ui:Kynningarsýn}} (eða {{key:Shift+P}}) sýnir eingöngu líkanið: ása, leiðbeiningarlínur og leiðbeiningarpunkta, útlínur sniðflata (skurðurinn helst), merki ljósa, kassa opins hóps, festimerkin og ábendingarnar og auðkenningu valsins hverfa. Notaðu hana til að skoða líkanið skýrt, eða áður en þú tekur skjámynd. Verkfærin virka enn og festa enn; þú sérð bara ekki merkin. Ýttu aftur á {{key:Shift+P}} til að sækja þau. Málsetningar haldast, því þær eru hluti af teikningunni. Meðan þú breytir innan hóps dofnar restin af líkaninu ekki: það sést eins og það er, þar með taldar áferðir.
