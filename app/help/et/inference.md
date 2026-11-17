---
title: Suunad ja haakumine
summary: Mida värvilised märgised tähendavad, milline haakumine võidab ja kuidas lukustada suund nooleklahvidega või Shiftiga.
keywords: suunatuvastus, haakumine, lõpp-punkt, keskpunkt, tahu keskpunkt, keskus, servas, tahul, telg, punane telg, roheline telg, sinine telg, paralleelne, risti, lukusta, shift, osnap
from: e78984e9
---

Kui joonistamise või muutmise tööriist töötab, vaatab ModelCraft, mis on kursori all, ja haakub lähimale kasulikule asjale. Märgis näitab, mida see leidis, ja tipp alumises vasakus nurgas nimetab selle.

## Märgised ja vihjed

| Vihje | Märgis | Haakub |
|---|---|---|
| Lõpp-punkt | Roheline ring | Serva ots |
| Keskpunkt | Tsüaanvärvi ring | Serva keskpunkt |
| Tahu keskpunkt | Sinine ring | Kursori all oleva tahu keskpunkt |
| Abipunkt | Hall | Mõõdulindi jäetud abipunkt |
| Algpunkt | Okker | Koht, kus punane, roheline ja sinine telg kohtuvad |
| Punasel teljel / Rohelisel teljel / Sinisel teljel | Selle värvi joon | Joon sinu algpunktist selles suunas |
| Paralleelne servaga / Risti servaga | Magenta joon | Joon sinu algpunktist paralleelselt või risti meelde jäetud servaga (vt allpool) |
| Lukustatud | Magenta joon | Suund, mille lukustasid nooleklahvi või {{key:Shift}}-ga |
| Servas | Punane ruut | Kuhu tahes mööda serva |
| Abijoonel | Hall | Kuhu tahes mööda abijoont |
| Tahul | Sinine teemant | Kuhu tahes tahul |
| Tasandil | puudub | Tasand, millelt alustasid, kui kursor on tühja ruumi kohal |
| Maapinnal | puudub | Maapind (punane-roheline tasand), kui muud pole |

Kui telg algpunktist ristub serva või abijoonega, haakub ModelCraft ristumiskohta ja tipp nimetab mõlemat, näiteks „Punasel teljel, servas“.

## Milline haakumine võidab

1. **Punktid** umbes 12 pikslit: kõigepealt lõpp-punktid, seejärel abipunktid, keskpunktid, kursori all oleva tahu keskpunkt ja algpunkt.
2. **Suunad** algpunktist: punane, roheline ja sinine telg ning paralleelne või risti meelde jäetud servaga.
3. **Servas** või abijoonel.
4. **Tahul.**
5. **Joonistustasand** või maapind.

Tahu taga peidetud asjad ei haakugi kunagi. Pööra vaadet, et näeksid soovitud punkti.

## Joonistamine tahul punktist

{{ui:Ristkülik}}, {{ui:Ring}} või {{ui:Hulknurk}}, mis alustati nurgast, keskpunktist, servast või tahu keskpunktist, joonistatakse **kursori all oleva tahu tasandil** ja lõikab selle tahu. Serv kuulub kahele tahule, seega otsustab serva külg, kus kursor on: et joonistada pika kasti otsa, alusta selle ühe serva keskpunktist, kursor otsatahu sees.

## Paralleelne ja risti

ModelCraft mäletab **viimast serva, mille kursor läbis enne sinu esimest klõpsu**. Alustamine nurgast või servast loetakse selle serva läbimiseks. Kui tööriist töötab, ei asenda sind mööda liikuvad teised servad seda.

Joone joonistamiseks olemasolevaga paralleelselt:

1. Vajuta {{key:L}} ja liigu kursoriga serva kohale, mida tahad sobitada.
2. Liigu alguspunkti, võimalusel ilma teisi servi ületamata, ja klõpsa.
3. Liigu selle servaga paralleelses suunas. Joon muutub magentaks ja tipp ütleb „Paralleelne servaga“. Risti käib sama, joonistustasandi piires.

Kui mäletati vale serv, vajuta {{key:Esc}}, liigu õige serva kohale ja alusta uuesti.

## Suuna lukustamine

Pärast tööriista esimest klõpsu saad hoida järgmise punkti ühel joonel:

| Klahv | Lukustub |
|---|---|
| {{key:Right}} | Punasele teljele |
| {{key:Left}} | Rohelisele teljele |
| {{key:Up}} | Sinisele teljele (otse üles) |
| {{key:Down}} | Paralleelselt meeldejäetud servaga (vt ülal) |

Sama noole uuesti vajutamine lukustuse tühistab. Olekuriba ütleb „Lukustatud punasele teljele. Lukustuse eemaldamiseks vajuta sama noolt.“

Lukustatud olekus liigub punkt joonel sinna, kuhu kursor on, ja joondub ikka kursori all olevate punktidega: kui kursor on teise kasti nurga peal, joonista joon punase suunas täpselt nii kaugele kui see nurk.

{{key:Shift}} lukustab suuna, millega praegu haakud (telje või paralleelse), nii kaua kui hoiad. Lase lahti, et lukustus tühistada.

Lukustused töötavad tööriistades {{ui:Joon}}, {{ui:Ristkülik}}, {{ui:Ring}}, {{ui:Hulknurk}}, {{ui:Teisalda}}, {{ui:Mõõtkava}} ja {{ui:Mõõdulint}}. Enne esimest klõpsu pööravad nooleklahvid hoopis vaadet.

## Grupi sees

Kui redigeerid gruppi või komponenti, on teljed grupi enda teljed (need liiguvad koos grupiga ja pöörduvad koos sellega, kui see oli pööratud). Haakumine leiab siiski punktid ja servad väljaspool gruppi, nii et saad asju joondada ülejäänud mudeliga.
