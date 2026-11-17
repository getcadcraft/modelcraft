---
title: Zasukanje in merilo
summary: Zasukajte stvari okoli točke s klikom ali z vnosom stopinj in jih enakomerno spremenite za faktor.
keywords: ročice merila, raztegni, neenakomerno, po osi, obrni, zrcali, zrcalna kopija, obrni vzdolž, zasukaj, zavrti, kot, stopinje, kotomer, merilo, spremeni velikost, povečaj, pomanjšaj, faktor, enakomerno merilo
from: 45cdcb49
---

## Zasukaj

{{ui:Rotate}} zasuka izbor okoli središčne točke. Potrebni so trije kliki: središče, začetna smer in končna smer.

1. Izberite, kar želite zasukati. Če nič ni izbrano, Zasukaj vzame stvar, na katero najprej kliknete.
2. Pritisnite {{key:Q}}. Obroč sledi kazalcu in prikazuje ravnino, v kateri boste zasukali.
3. Kliknite središče vrtenja.
   - Na tleh ali v prazen prostor obroč leži ravno (modro): zasuk je okoli navpične osi, kot če zavrtite stavbo na njeni parceli.
   - Na ploskvi obroč leži v ravnini te ploskve: zasuk je okoli lastne smeri ploskve. Kliknite na steno, da zasukate nekaj okoli vodoravne osi.
4. Kliknite točko, ki določi, kje se kot začne, na primer vzdolž roba stvari, ki jo zasukate.
5. Premaknite kazalec okoli središča. Kot se prikaže v konici in v polju vrednosti ({{ui:Angle}}). Ko ste blizu enega, se zaskoči v korake po 15°.
6. Kliknite za konec ali vnesite kot v stopinjah in pritisnite {{key:Enter}}: `90`, `45`, `-30`.

   Pozitivni koti se zasukajo v nasprotni smeri urnega kazalca, gledano s strani, na katero kaže obroč.

Med zasukom pritisnite {{key:Ctrl}} (ali {{key:Alt}}), da zasukate **kopijo** in pustite original na mestu, kot pri Premakni; konica pove, ali je kopiranje vklopljeno, ponovni pritisk tipke ga izklopi. Takoj za zasukano kopijo vnesite `3x`, da dobite več kopij okoli istega središča.

Podobno kot pri Premakni zasuk dela povezane geometrije zvije ploskve, ki so nanjo pritrjene. Najprej stvari združite v skupino, da jih zasučete celo.

:::note
Konica pravi, da puščične tipke izbirajo os vrtenja, vendar v tej različici pred prvim klikom namesto tega zavrtijo pogled. Za izbiro osi kliknite središče na ploskvi, ki kaže v želeno smer. Glejte [Še ni izdelano](topic:not-built-yet).
:::

## Merilo

{{ui:Scale}} spremeni velikost izbora. Najprej izberite, kar želite spremeniti, nato pritisnite {{key:S}}: na vogalih, robovih in sredinah stranic njegove škatle se prikažejo majhni kvadratki (ročice).

### Raztegnite ali spremenite merilo z ročicami

- **Vogalna** ročica enakomerno spremeni merilo v vse smeri, okoli nasprotnega vogala.
- Ročica na sredini **stranice** raztegne samo v tej smeri, okoli nasprotne stranice: škatlo naredi daljšo, ne višje.
- Ročica na sredini **roba škatle** se razteza v obeh smereh čez njo.
- Držite {{key:Ctrl}}, ko kliknete ročico, da spremenite merilo okoli središča škatle.

Kliknite ročico, premaknite kazalec in ponovno kliknite; ali kliknite ročico in vnesite faktor (`2` podvoji, `0.5` prepolovi) ter pritisnite {{key:Enter}}. Če želite vsaki smeri svoj faktor, vnesite tri, za rdečo, zeleno in modro: `2,1,0.5`. V odprti skupini so smeri lastne smeri skupine.

### Spreminjanje merila okoli poljubne točke

Kliknite kjer koli drugje kot na ročico, da enakomerno spremenite merilo okoli lastne točke. Potrebni so trije kliki:

1. Izberite, kar želite spremeniti. Če nič ni izbrano, Merilo vzame stvar, na katero najprej kliknete.
2. Pritisnite {{key:S}}.
3. Kliknite točko, ki ostane na mestu (ne na ročici), na primer spodnji vogal.
4. Kliknite referenčno točko. Njena razdalja od prve točke šteje kot 1×.
5. Premaknite kazalec proti prvi točki ali stran od nje. Faktor se prikaže v konici in v polju vrednosti ({{ui:Scale}}).
6. Kliknite za konec ali vnesite faktor in pritisnite {{key:Enter}}: `2` podvoji velikost, `0.5` prepolovi.

### Spreminjanje merila na natančno velikost

Če želite, da bo nekaj natančne dolžine, izračunajte faktor: nova dolžina deljena s trenutno dolžino. Pri načinu s tremi kliki polje vrednosti opravi računanje, zato vnesite `4.2/3.6`, da 3.6 m dolg zid naredite 4.2 m dolg. Ročičino polje vrednosti sprejme samo navadna števila, zato najprej izračunajte faktor (4.2 deljeno z 3.6 je približno 1.1667). Najprej izberite rob, da preberete njegovo trenutno dolžino v {{ui:Entity info}}.

### Popravite uvoz, ki je prišel v napačni velikosti

Datoteke OBJ nimajo enote, zato model, narisan v milimetrih, pride 1000-krat prevelik. Izberite uvoženo skupino, pritisnite {{key:S}}, kliknite vogalno ročico, vnesite `0.001` in pritisnite {{key:Enter}}. Za model, narisan v palcih, vnesite `0.0254`.

## Pomembne stvari

- Spreminjanje merila okoli točke s tremi kliki je enakomerno. Za raztegovanje samo v eni smeri uporabite ročico na stranici ali robu (glejte zgoraj).
- Spreminjanje merila skupine ali komponente spremeni izvod, ki ste ga spremenili; drugi izvodi komponente ohranijo svojo velikost.
- Pred zadnjim klikom pritisnite {{key:Esc}}, da prekličete.

## Obračanje

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} ali {{ui:Flip along blue}} zrcali izbor na mestu, skozi sredino njegove škatle: levo stopnišče postane desno. Ploskve ostanejo obrnjene navzven, skupina ali komponenta pa se zrcali kot celota (njeni notranji deli se ne prepišejo).

{{ui:Flipped copy along red}} (in enako za zeleno, modro) pusti original na mestu in postavi zrcalno kopijo ob njem, čez nasprotno stran škatle izbora: drugo krilo para vrat, drugo krilo stavbe. Geometrija, ki se tam dotika, se pridruži originalu, kot se dotikajoča geometrija vedno pridruži; če želite ohraniti ločenost, najprej naredite original skupino.

V odprti skupini so rdeča, zelena in modra lastne osi skupine.
