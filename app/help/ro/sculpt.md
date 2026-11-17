---
title: Sculptarea unei plase
summary: Modelați o plasă ca lutul cu pensule — desenare, lut, netezire, apucare, umflare, crestare, ciupire, aplatizare — protejați părți cu o mască, oglindiți pe X și adăugați detalii acolo unde sculptați.
keywords: sculptare, sculptură, pensulă, pensule, lut, desenare, netezire, apucare, umflare, crestare, ciupire, aplatizare, mască, simetrie, oglindire, detaliu, topologie dinamică, creion, presiune, tabletă, stylus
from: 5477801a
---

Spațiul de lucru Sculptare modelează o plasă cu pensule, ca lutul: trageți peste suprafață și ea se ridică, se scufundă, se netezește sau urmează cursorul sub o pensulă rotundă, cu intensitate maximă la mijloc și dispărând spre margine.

## Start

Selectați o plasă și alegeți {{ui:Sculpt}} din lista Spațiu de lucru. Un grup sau o componentă devine întâi plasă, ca în spațiul de lucru Plasă. Pensulele lucrează pe vârfurile plasei, deci o plasă cu mai multe vârfuri ia forme mai fine: subdivizați-o întâi ({{ui:Subdivide}} din spațiul de lucru Plasă, sau un modificator de suprafață de subdiviziune pe care îl aplicați), ori activați {{ui:Detail}}.

## Pensule

| Pensulă | Tastă | Ce face |
| --- | --- | --- |
| {{ui:Draw}} | {{key:D}} | Ridică suprafața de sub pensulă |
| {{ui:Clay}} | {{key:C}} | Construiește straturi plate, umplând întâi depresiunile |
| {{ui:Smooth}} | {{key:S}} | Netezește denivelările; țineți {{key:Shift}} pentru a netezi cu orice pensulă |
| {{ui:Grab}} | {{key:G}} | Trage suprafața după cursor |
| {{ui:Inflate}} | {{key:I}} | Umflă suprafața pe direcția ei proprie |
| {{ui:Crease}} | {{key:Shift+C}} | Taie un șanț ascuțit |
| {{ui:Pinch}} | {{key:P}} | Trage suprafața spre mijlocul pensulei |
| {{ui:Flatten}} | {{key:T}} | Presează suprafața spre planul ei mediu |
| {{ui:Mask}} | {{key:M}} | Pictează o mască ce protejează suprafața de celelalte pensule |

Țineți {{key:Ctrl}} în timp ce trasați pentru a lucra invers (coboară în loc să ridice, o creastă în loc de un șanț, elimină masca), sau activați {{ui:Take away}}.

## Dimensiune și intensitate

Dimensiunea pensulei este în pixeli pe ecran, așa că se simte la fel oricât ați apropia: {{key:[}} și {{key:]}} o micșorează și o măresc, iar {{key:Shift+[}} și {{key:Shift+]}} schimbă intensitatea. Panoul arată amândouă.

Cu un creion pe tabletă, apăsarea mai tare face pensula mai mare și mai puternică; panoul le dezactivează pe amândouă.

## Oglindire, mască și detaliu

- {{ui:Mirror X}} ({{key:X}}) sculptează ambele părți peste roșu deodată, pentru fețe și figuri.
- Masca apare mai întunecată cât sculptați. {{ui:Clear mask}} ({{key:Alt+M}}) o îndepărtează, iar {{ui:Invert mask}} ({{key:Ctrl+I}}) mască ce era liber și eliberează ce era mascat. Masca se păstrează împreună cu plasa.
- {{ui:Detail}} adaugă triunghiuri acolo unde sculptați: muchiile mai lungi decât dimensiunea setată în panou (pixeli pe ecran) sunt împărțite sub pensulă. Are nevoie de o plasă de triunghiuri și cere să creați întâi una.

Fiecare trăsătură este un pas de anulare.

:::note
Detaliul adaugă doar triunghiuri; nu elimină pe cele care au devenit minuscule. Refacerea plasei (Remesh) din spațiul de lucru Plasă netezește din nou toată plasa.
:::

Vezi și [Editarea unei plase](topic:mesh-edit), [Plase](topic:meshes) și [Modificatori pe o plasă](topic:modifiers).
