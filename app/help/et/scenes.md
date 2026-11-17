---
title: Salvesta vaated stseenidena
summary: Salvesta kaamera ja stiil stseenina, uuenda ja nimeta see ümber ning liigu stseenide vahel või esita neid disaini tutvustamiseks.
keywords: stseen, vaade, salvestatud vaade, kaamera, esitlus, animatsioon, esita, slaidiesitus, page up, page down, sakid, ekskursioon
from: 38680d6e
---

**Stseen** mäletab kaamera asukohta, stiili ja seda, mis on peidetud: kust vaatad, perspektiiv või paralleelprojektsioon, pinna stiil, servad, päikese sätted, peidetud grupid, välja lülitatud sildid ja lõige. Stseenid salvestatakse `.modelcraft`-faili.

## Lisa stseen

1. Seadista vaade: orbiteeri, suumi, vali stiil, sea päike.
2. Paremal asuvas paneelis {{ui:Stseenid}} klõpsa {{ui:Lisa stseen}}.

   Stseen ilmub loendisse nimega „Stseen 1“, „Stseen 2“ jne ja 3D-vaate kohal sakina. Olekuriba ütleb „Stseen 1 salvestatud: see kaamera, stiil ja peidetud asjad.“

## Mine stseeni

- Klõpsa selle sakil 3D-vaate kohal või selle nimel loendis {{ui:Stseenid}}.
- Või vajuta {{key:PageDown}} järgmise stseeni jaoks ja {{key:PageUp}} eelmise jaoks. {{ui:Järgmine}} ja {{ui:Eelmine}} loendi all teevad sama.

Kaamera libiseb stseeni veidi üle poole sekundi. Kui arvuti on seatud liikumist vähendama, hüppab see sinna kohe.

## Muuda, nimeta ümber või kustuta stseen

Igal stseenil loendis on nime järel kolm väikest nuppu:

- **Uuenda** (ringnoolud): salvestab praeguse kaamera, stiili ja peidetud asjad sellesse stseeni. „Stseen 2 uuendatud.“
- **Nimeta ümber** (pliiats): avab dialoogi „Nimeta stseen ümber“. Sisesta uus nimi ja klõpsa {{ui:Salvesta}}.
- **Kustuta** (prügikast): eemaldab stseeni. „Stseen 2 kustutatud. Ctrl+Z toob selle tagasi.“

Stseenide lisamine, uuendamine, ümbernimetamine ja kustutamine on tagasivõtmise sammud, nagu muudatused mudelis.

## Lukusta stseeni kaamera

Kui renderdad sama vaadet korduvalt, kui disain muutub, lukusta selle stseeni kaamera, et vaade ei liiguks kogemata.

1. Stseenide loendis klõpsa stseeni nime järel **lukku** nuppu (avatud lukk). See sulgub ja stseeni sakil 3D-vaate kohal on väike lukk. Olekuriba ütleb „Stseen 2: kaamera lukustatud.“
2. Mine stseeni, kui tahad renderdada: kaamera läheb täpselt salvestatud vaatesse, nii et sellest tehtud pildid joonduvad varasematega.

Kui kaamera on lukus, salvestab **Uuenda** ikkagi stiili ja peidetud asjad stseeni, kuid kaamera jääb sinna, kus oli, isegi kui oled orbiteerinud kaugemale. Vajuta lukku uuesti, et lukustus eemaldada; siis salvestab Uuenda jälle praeguse vaate. Lukustamine ja lukustuse eemaldamine on tagasivõtmise sammud ning lukk salvestatakse `.modelcraft`-faili.

## Esita

1. Lisa kaks või enam stseeni.
2. Klõpsa loendi all {{ui:Esita}}. ModelCraft liigub iga paari sekundi järel järgmisse stseeni ja pärast viimast läheb tagasi esimesse.
3. Klõpsa {{ui:Peata}} (sama nupp) või vajuta {{key:Esc}}, et peatada.

Päikese uuringu jaoks lisa iga tunni kohta üks stseen, kus muudetud on ainult {{ui:Kellaaeg}}, ja esita need. Vt [Stiilid ja päikesevarjud](topic:styles-shadows#a-sun-study).

Esitamiseks ilma ribadeta vajuta {{key:Ctrl+Shift+F}} kaks korda: esimene kord täisekraanil, teine kord täisekraanil, kus ribad on peidetud. Stseenisakid jäävad vaate kohale.

## Mis stseen näitab

Stseen mäletab, mis oli salvestamisel peidetud: grupid ja komponendid, mille [peitsid](topic:hide-isolate), [sildid](topic:tags), mille välja lülitasid, ja millised [lõiketasandid](topic:sections) lõikavad. Stseeni minek peidab ja näitab need jälle. Nii võib üks stseen näidata kogu maja, järgmine maja ilma katuse sildita, järgmine lõiget läbi selle.

Peidetud vabad tahud ja servad ei ole stseenide osa. Stseeni minek ei tee tagasivõtmise sammu. Varasema ModelCraft-versiooniga salvestatud stseenid jätavad peidetu oma seisu; klõpsa Uuenda, et salvestada see neisse.

## Ekspordi animatsioon

{{ui:Ekspordi animatsioon}}, loendi all, esitab stseenid esimesest viimaseni, liigutades kaamerat nende vahel sujuvalt, ja salvestab filmi **WebM**-videona (kaks sekundit liikumist ja lühike paus stseeni kohta). See salvestab vaate nii, nagu sa seda näed, oma ekraanisuuruses, [esitlusvaates](topic:styles-shadows#presentation-view) (ilma telgede, juhikute ja valikuta). Vajuta {{key:Esc}} või klõpsa nuppu uuesti, et peatada salvestamata. WebM töötab brauserites ja VLC-s; videotoimetajad teisendavad selle.

Renderdatud ekskursiooni jaoks (taevas, päike, varjud, materjalid) valitud suurusega kasuta {{ui:Renderda video…}}: ilma animatsioonivõtmeteta võtab see stseenid järjekorras kaamera teekonnana. Vt [Animeeri kaamerat ja objekte](topic:animation).

## Asjad, mida teada

- Stseeni mineku järel stiili muutmine või kaamera liigutamine ei muuda stseeni enne, kui klõpsad Uuenda.
- Stseene ei eksportida Collada, OBJ, glTF, STL ega IFC formaati.
