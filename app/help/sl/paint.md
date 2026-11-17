---
title: Barvanje z barvami in materiali
summary: Ploskvam, skupinam in komponentam dajte enotno barvo ali material, kot so opeka, fasadna obloga, skodle ali les, in ju ohranite pri izvozu.
keywords: pobarvaj, barva, barvni, material, materiali, tekstura, teksture, opeka, fasadna obloga, skodle, kritina, les, kamen, ploščice, beton, omet, trava, gramoz, steklo, kovina, vedro za barvo, polnilo, vzorec, kapalka, privzeto, glb, obj, mtl, collada
from: b1500523
---

Barve vam pomagajo ločiti dele modela, **materiali** (opeka, fasadna obloga, kritina, les, kamen, ploščice, beton, omet, teren, steklo, kovina) pa naredijo, da model izgleda kot to, iz česar je zgrajen. Oboje se barva enako.

## Izbira barve

Razdelek {{ui:Colors}} na desni prikazuje vrsto enotnih barv, {{ui:Default}} (tisto, prečrtano s črto: brez barve) in vzorec {{ui:+}} za katero koli drugo barvo. Kliknite eno, da postane trenutna barva. Orodje za barvanje začne z njo.

## Barvanje

1. Pritisnite {{key:B}} za orodje {{ui:Paint}} ali brez izbora kliknite barvo. (Če je nekaj izbrano, klik na barvo takoj pobarva izbor.)
2. Kliknite ploskev, da jo pobarvate.
3. Kliknite skupino ali komponento, da pobarvate ta izvod: njene ploskve, ki nimajo lastne barve, prevzamejo to barvo. Ploskve, ki ste jih pobarvali znotraj nje, ohranijo svojo.

Če želite pobarvati več stvari hkrati, jih najprej izberite in nato kliknite barvo ali kliknite katero koli od njih z orodjem {{ui:Paint}}. To je en korak razveljavitve.

| Držite | Nato kliknete ploskev | Kaj se pobarva |
|---|---|---|
| — | | Ta ploskev |
| {{key:Ctrl}} | | Vsaka povezana ploskev z isto barvo |
| {{key:Shift}} | | Vsaka ploskev te barve v skupini, v kateri delate |
| {{key:Alt}} | | Nič: namesto tega prevzamete to barvo |

Če želite ploskev vrniti na brez barve, izberite {{ui:Default}} in jo kliknite.

## Barvanje z materialom

Razdelek {{ui:Materials}} pod {{ui:Colors}} navaja knjižnico materialov po vrstah: opeka in bloki, fasadna obloga, kritina, les, kamen, ploščice, beton, omet, teren, steklo in kovina. Zadržite miško nad vzorcem, da vidite ime. Kliknite enega, nato barvajte natanko kot z barvo: {{key:B}}, kliknite ploskve, skupine ali komponente; ali izberite najprej in nato kliknite material.

- V slogu **Osenčeno** ploskve prikazujejo teksturo materiala. Skrite črte, žični model in rentgen prikažejo njegovo barvo.
- Teksture so narisane **vodoravno vzdolž vsake ploskve** in **navzgor** po njej: opečni redovi ostanejo vodoravni na vsaki steni, skodle tečejo po naklonu strehe, deske na tleh sledijo rdeči osi. So v pravi velikosti (opeka je približno 215 mm dolga), zato izgledajo prav na vsaki razdalji.
- V [upodobljeni sliki](topic:render) materiali ohranijo svojo teksturo, hrapavost in pri steklu ter kovini tudi svoj sijaj.
- {{key:Alt}}-klik z orodjem {{ui:Paint}} prevzame tudi material ploskve.

Teksture nariše sam ModelCraft, zato delujejo brez povezave in so prosto uporabne za vse (CC0).

## Komponente in barve

Barva, nanesena na ploskev **znotraj** komponente, se prikaže na vsakem izvodu, ker si izvodi delijo eno definicijo. Barva, nanesena na **izvod** od zunaj (ko je komponenta zaprta), pripada samo temu izvodu, zato imata lahko dva izvoda ene komponente različni barvi. {{ui:Entity info}} prikaže barvo izbrane ploskve, skupine ali komponente.

## Barve v datotekah

- Datoteka ModelCraft hrani vsako barvo in vsak material.
- Druge oblike dobijo **barvo materiala** (njegov videz od daleč) namesto teksture: glTF, Collada, OBJ, DWG in DXF ter preverjanje za 3D-tiskanje. V glTF, Collada in OBJ material ohrani svoje ime, na primer `Material_brick-red`.
- **glTF (.glb)** in **Collada (.dae)**: vsaka barva postane material. Komponenta, prikazana v različnih barvah, se zapiše enkrat za vsako barvo. glTF uvožene teksture zapiše tudi kot teksture.
- **OBJ**: izvoz prenese dve datoteki, `.obj` in datoteko z materiali `.mtl` z barvami. Shranite ju v isto mapo. Z uvoženimi teksturami so `.obj`, `.mtl` in slike v enem `.zip`.
- **DWG** ohrani natančne barve; **DXF** uporabi najbližjo od 255 standardnih barv CAD.
- **STL** in **PLY** prenašata barve: STL v konvenciji VisCAM / SolidView (programi, ki je ne berejo, jo prezrejo), PLY kot barvo vsake točke. Glejte [Podrobno o oblikah datotek](topic:formats).

:::tip
Za model zaslona pobarvajte okvir temno sivo in steklo modro, potem ko sprednjo ploskev s [funkcijo odmik](topic:draw-faces) odmaknete.
:::
