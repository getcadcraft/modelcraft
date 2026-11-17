---
title: Ku hay moodeel .3dm oo toos ah
summary: Ka beddel moodeelka barnaamijka uu ku sameeyay oo halkan ka arag isbeddelka, Rhino 8 ama qeexidda Grasshopper, adigoo mar kale dhoofin ama kaydin.
keywords: rhino, grasshopper, xiriir toos ah, xiriirka toosa ah, 3dm, nurbs, parametric, xidh, isku-waafaqsan, script, moodeel tixraac, riix
from: 331b0a7e
---

Sii wad moodeelka meesha aad ku moodeeleyso, natiijadana halkan isticmaal: si aad u rendarto, u iftiimiso, ama goob ku habayso. Isbeddel kasta oo ka dhaca barnaamijka kale wuxuu cusboonaysiinayaa hal koox oo ModelCraft ah.

:::note
Xiriirku wuxuu u baahan yahay **CadCraft Studio** isla kombiyuutarkan. Tab browser ma qaadi karo xiriirka. Waxba ma marayo internetka: qoraalku wuxuu la hadlaa Studio ciwaanka kombiyuutarkan, oo leh calaamad.
:::

:::warning
Xiriirkan waxaa lagu tijaabiyay qoraalka qoraha faylka iyo barnaamij ku badal ah, weli ma aha Rhino ama Grasshopper laftoodu. Haddii halkaas wax fashilmaan, nagu sheeg waxa ay yidhi.
:::

## Deji

1. Studio gudihiisa, fur ModelCraft. Gudaha {{ui:Dejinta}} › {{ui:ModelCraft}} › {{ui:Kaaliyayaasha}}, calaamee **Ogolow kaaliyada AI iyo qoraallada inay isticmaalaan ModelCraft**, kadibna **Tafatir**.
2. Studio gudihiisa, dooro {{ui:Ku xidh kaaliye}}. Waxay tusinaysaa ciwaanka iyo calaamadda aad ku dhejin doonto hoose.
3. Soo deji qoraalka: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino gudaha

1. Shaqee `cadcraft_link.py` tafatiraha qoraalka ee Rhino (Python 3 ee Rhino 8).
2. Markii ugu horreysay, geli ciwaanka iyo calaamadda. Waxay ku kaydsan yihiin `.cadcraft-link.json` faylka guriga, weligeedna kuma jiraan moodeelka. Studio wuxuu sameeyaa calaamad cusub mar kasta oo bilaabmo, sidaas darteed qoraalku mar kale wuu weydiin doonaa.

Moodeelka oo dhan wuxuu imanayaa hal koox oo magaceeda ah sida dukumentiga, tusaale ahaan "chair (linked)". Kadibna isbeddel kasta wuxuu imanayaa marka aad wax yar joogsato, oo kaliya walxaha isbeddelay ayaa la diraa. Shaqee qoraalka mar kale si aad u joojiso.

## Grasshopper gudaha

Shaqee qoraalka mar hore Rhino, si ciwaanka iyo calaamaddu u kaydsamaan.

1. Ku dar component Script (Python 3) oo ku dheji qoraalka `cadcraft_link.py` oo dhan.
2. Siiso gelinnadan: `G` (joomatariga, oo leh liis-helid), `N` (magac, ikhtiyaari), `On` (badhanka haa/maya), iyo `Target` (ikhtiyaari: `model` ama `part`, haddii labada app ay furan yihiin).
3. Hagaaji `On` inuu noqdo true.

Xal kasta, `G` wuxuu diraa oo wuxuu beddelaa waxa component-kan u diray markii hore. Sidaas darteed jiidista xagxagga ayaa cusboonaysiinaysa kooxda halkan. Natiijadiisa `a` waxay sheegaysaa waxa dhacay. Component kasta wuxuu leeyahay kooxdiisa gaarka ah.

## Waxa aad ku samayn karto kooxda

- **Dhaqdhaqaaq, calaamee, ku dhis agteeda.** Meesha aad kooxda ku dhigtay iyo calaamaddeeda waxay joogtaan cusboonaysiin kasta, sidaas oo kalena wax kasta oo ku dhow.
- **Ha ku tafatirin gudaheeda.** Cusboonaysiin kasta wuxuu beddelaa wixii ku jira kooxda. Barnaamijka kale ayaa leh walxahaas.
- **Ka noqo.** Cusboonaysiinta laba ilbiriqsi ku dhow midba midka kale wuxuu wadaagaa hal tallaabo oo ka noqo, sidaas darteed {{key:Mod+Z}} wuxuu ka noqonayaa jiid oo dhan. Cusboonaysiinta xigta ayaa soo celinaysa moodeelka si uu ula mid noqdo.
- **Kaydi.** Faylka la kaydiyay wuxuu hayaa xiriirka. Shaqee qoraalka mar kale marka aad dib u furto, kooxda isku mid ahna way cusboonaysiinaysaa.

## Waxa soo gala

Mesh-yada, polysurface-yada, surface-yada iyo extrusion-yada, oo ah mesh-ka aad ku aragto shaashadda; SubD oo ah mesh-kiisa; curve-yada oo ah xuduudo; blocks-yada oo ah walxo kala gaar ah meesha ay taagan yihiin (ma aha components); layers-yada oo ah calaamado, midabyo iyo unitiyo. Eeg [Soo geli moodeel .3dm](topic:import-3dm-files) si aad u ogaato sida ay halkan u muuqdaan.

Waxa laga reebay, oo tirada ku taal barnaamijka kale: dhibcaha, qoraalka, cabbiraadyada iyo waxyaabaha la mid ah.

**Hal jihood oo keliya.** Isbeddelada halkan ma soo laabanayaan barnaamijka kale.

## Haddii wax khalad ah dhaco

- **"Ma jiro daaqad ModelCraft ama PartCraft oo ogolaanaysa":** samee tallaabada 1 ee deynta.
- **"Studio diiday calaamadda":** Studio dib ayuu u bilaabay. Koobiyee calaamadda cusub oo shaqee qoraalka mar kale. Grasshopper ahaan, marka hore ku shaqee Rhino.
- **"Ma gaari karo CadCraft Studio":** Studio ma shaqaynayo, ama ciwaanku waa isbeddelay.
