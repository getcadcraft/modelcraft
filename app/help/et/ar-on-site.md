---
title: Vaata mudelit objektil Android-telefoniga (AR)
summary: Hoia Android-telefon Chrome'iga üles ja vaata mudelit täissuuruses kaamerapildi peal, joondatud hoone järgi kahe punkti abil, kus seisad, koos röntgenläätsega ja kiire kontrolliga järgmisel külastusel. Vaatamiseks, mitte märkimiseks.
keywords: ar, liitreaalsus, telefon, android, chrome, webxr, objektil, objekt, kaamera, täissuurus, röntgen, joonda, joondamine, kontrolli uuesti, arcore
from: 0f43b50b
---

{{ui:Vaade objektil (AR, telefon)}} menüüs {{ui:Vaated}} näitab mudelit tegelikus suuruses telefoni kaamera peal. See töötab **Android-telefonil Chrome'iga**, turvalisel (https) lehel, kus telefon AR-i toetab. iPhone'is või iPadis, arvutis või Android-rakenduses, mis näitab ainult veebilehte, ütleb üksus, miks see ei saa käivituda; kasuta sel juhul 3D-vaadet või ava see leht telefonis Chrome'is.

**Telefon on vaatamiseks.** Ära mõõda, märgi ega lõika midagi sellest, mida ekraan näitab: telefon triivib, kui kõnnid, ning suunamisviga kasvab kaugusega kahest punktist, kuhu joondasid (paar sentimeetrit nende lähedal, rohkem kaugemal). Siin ei ole midagi geodeetilise täpsusega.

## Joonda mudel

1. Ava mudel telefonis ja vali {{ui:Vaade objektil (AR, telefon)}}. Luba kaamera.
2. Alumine paneel nimetab esimese punkti (mudeli maapinna nurk). Seisa seal objektil, suuna roheline rõngas maapinnale ja puuduta {{ui:Aseta punkt}}.
3. Kõnni teise punkti juurde, vähemalt pool meetrit eemale (mida kaugemal, seda parem sobivus) ja tee sama.
4. Mudel ilmub täissuuruses, pööratud ja nihutatud nii, et sobiks kahte kohta. Paneel ütleb, kui hästi kaks punkti kokku langevad.

{{ui:Alusta otsast}} tühjendab punktid. Joondus salvestatakse mudelifaili, nii et järgmisel korral, kui avad mudeli objektil, algab see joondatult.

## Röntgenlääts

{{ui:Röntgenlääts}} näitab kogu mudelit kasti sees telefoni ees (umbes meeter ja pool laiust ning kolm meetrit sügavust) ning mujal ainult kahvatut kummitust, nii et näed seina taga olevat, kaotamata päris seina.

## Järgmine külastus

Seisa esimeses punktis ja puuduta {{ui:Kontrolli uuesti}}, siis {{ui:Aseta punkt}}. Kui kõrvalekalle on alla 5 sentimeetri, jääb joondus alles. Kui kõrvalekalle on kuni pool meetrit, liigub mudel vahe võrra. Rohkem kui see, ja paneel palub sul näidata kaks kohta uuesti.

## Lahku

{{ui:Lahku AR-ist}} lõpetab seansi. Kaamerapilt jääb brauserisse: midagi ei laadita üles.
