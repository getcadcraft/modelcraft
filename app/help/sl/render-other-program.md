---
title: Narišite sliko z drugim programom
summary: Naš lastni sledilnik poti nariše sliko Upodobi; drug program jo lahko nariše samo prek dodatka pogona v CadCraft Studio. Kaj se prenese in zakaj nekateri programi nikoli niso ponujeni.
keywords: upodobi, pogon, zunanji program, dodatek pogona, studio, ozadje, vrsta, usd, gltf, nariše, blender, gpl
from: 150f94f1
---

Sliko v {{ui:Upodobi sliko…}} narišejo **naši lastni pogoni**: Hitri in Sledilnik poti, v brskalniku in v CadCraft Studio. Drug program jo lahko nariše samo, ko jo prinese **dodatek upodobitvenega pogona**: glejte [Dodajte upodobitveni pogon z dodatkom](topic:render-engine-addons). Da prizor odnesete v drug program in tam delate naprej, uporabite [Odprite prizor v drugem programu](topic:render-open-in) ali [Pošljite prizor v pogon za igre](topic:render-unreal).

## Narišite sliko z dodatkovim pogonom

1. Vklopite dodatek v Nastavitve › Dodatki. Njegov pogon se prikaže na seznamu Pogon v {{ui:Upodobi sliko…}}.
2. Izberite ga. Njegove lastne nastavitve so prikazane pod seznamom Pogon.
3. Kliknite {{ui:Upodobi}}. V Studiu vas prvič, ko dodatek zažene program, Studio vpraša v svojem pogovornem oknu. Napredek se prikazuje med risanjem; {{ui:Ustavi}} ga konča. Slika se prikaže, označena s pogonom, ki jo je narisal.

Pogon, napisan v JavaScriptu, deluje tudi v brskalniku. Pogon, ki zažene program na tem računalniku, deluje samo v Studiu; v brskalniku se prikaže kot datoteka za shranjevanje.

## Kaj se prenese

Pogon dobi **paket**: model kot datoteko USD (in datoteko glTF, kadar jo zahteva), ter datoteko nastavitev z natančnimi vrednostmi materialov, soncem in nebom, vsako svetilko, ki je vklopljena, z njeno močjo in profilom svetlobe, kamero in osvetlitvijo. Vsak program osvetljuje, tonira in vzorči po svoje, zato so slike podobne po kameri, soncu, svetilkah in osvetlitvi, ne pa piksel za pikslom.

## Programi, ki jih CadCraft nikoli ne zažene

CadCraft nikoli ne zažene programa pod licenco GNU GPL in ga nikoli ne navede kot pogon ali cilj Odpri v. Blender je eden od njih, zato ni na seznamu pogonov. Datoteka USD ali glTF, shranjena iz {{ui:Upodobi sliko…}}, se v njem še vedno odpre kot v vsakem programu, ki bere te datoteke.

:::note
Panoramske in stereo kamere ter slika neba (uporabljene so barve neba) se ne prenesejo v drug program. Nič, narejenega v drugem programu, se ne vrne v model.
:::
