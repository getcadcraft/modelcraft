---
title: Mýkja og slétta brúnir
summary: Feldu brúnirnar milli flata sem mætast í grunnu horni, svo bogin form virki sem eitt slétt yfirborð, í ModelCraft og í útfluttum skrám.
keywords: mýkja, slétta, mjúkar brúnir, slétt skygging, fela brúnir, fasettur, fasettaður, bogið, normalar, herða, horn
from: 52d32453
---

Bogið form í ModelCraft er gert úr flötum fleti. **Mjúkar** brúnir milli þessara flata eru ekki teiknaðar, og flatirnir sem þær tengja eru skyggðir sem eitt slétt yfirborð, svo 24 hliða strokkur lítur út fyrir að vera kringlóttur.

Þegar þú dregur hring upp með {{ui:Ýta/toga}} eru hliðar hans mýktar fyrir þig. Fyrir önnur form, mýktu eftir horni.

## Mýkja eftir horni

1. Veldu það sem á að mýkja: fleti og brúnir, eða hóp eða eind (allar brúnir hans).
2. Í {{ui:Upplýsingar um eind}} skrifarðu horn í {{ui:Mýkja allt að}}, til dæmis `20`, og smellir á {{ui:Mýkja}}.

Sérhver brún í valinu þar sem flatirnir tveir beygjast um það horn eða minna verður mjúk; brúnir með skarpari beygju verða harðar. Hliðar 12 hliða prisma beygjast um 30° og brúnir hans um 90°, svo `31` mýkir aðeins hliðarnar.

{{ui:Herða allt}} gerir allar brúnir í valinu harðar aftur. Hvert er eitt afturköllunarskref.

## Gott að vita

- Aðeins brúnir milli nákvæmlega tveggja flata eru mýktar. Lausar brúnir haldast eins.
- Slétt skygging virkar aðeins yfir mjúkar brúnir: flötur án mjúkrar brúnar er skyggður flatur.
- Mjúkar brúnir eru varðveittar í ModelCraft-skránni. **glTF (.glb)** og **OBJ**-útflutningur ber sléttu skygginguna (einn normal á hvert horn), svo önnur forrit sýni sama yfirborð. Collada og STL flytja út flata fleti.
- Mjúkar brúnir eru faldar í öllum flatastílum, líka {{ui:Röntgen}} og {{ui:Vírlíkan}}. Til að sjá þær, veldu formið og smelltu á {{ui:Herða allt}}; afturköllun skilar mýkingunni.
