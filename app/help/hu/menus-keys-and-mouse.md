---
title: Menük, billentyűk és egér
summary: Válasszon olyan menüstílust, amely illeszkedik az ön által már ismert modellezőhöz, adjon bármely parancsnak saját billentyűt, mozgassa a parancsokat menük között, és állítsa be, mit csinál a görgő, valamint a középső és a jobb egérgomb.
keywords: menüstílus, menük, menüsor, eszköztár, billentyűparancsok, gyorsbillentyűk, billentyűk, billentyűstílus, billentyűkiosztás, testreszabás, újrakiosztás, egér, görgő, megfordítás, nagyítás iránya, középső gomb, jobb gomb, körbeforgatás, eltolás, exportálás, importálás, váltás, ismerős, nyomás/húzás, modellező
from: e56fce3d
---

A ModelCraft eszközei ugyanúgy érhetők el, bárhonnan is nyúl hozzájuk. A **menüstílus** határozza meg, hol helyezkednek el a képernyőn, mi a nevük, és melyik billentyű futtatja őket. Válasszon egyet a {{ui:Beállítások}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menük, billentyűk és egér}} menüpontban; a változás azonnal érvényes, és ez a böngésző megjegyzi.

## A stílusok

| Stílus | Mit kap |
|---|---|
| {{ui:ModelCraft}} | A ModelCraft saját eszköztára (Fájl, Rajzolás, Módosítás, Rendezés, Szerkesztés, Kamera) és egybetűs billentyűi: {{key:L}} vonal, {{key:R}} téglalap, {{key:P}} nyomás/húzás, {{key:M}} mozgatás, {{key:Q}} forgatás, {{key:S}} léptékezés, {{key:E}} radír, {{key:O}} körbeforgatás. Ez az induló stílus. |
| {{ui:Nyomás/húzás}} | Menüsor (Fájl, Szerkesztés, Nézet, Kamera, Rajzolás, Eszközök, Ablak) a főeszközök sora fölött, ugyanazokkal az egybetűs billentyűkkel. |
| {{ui:Modellező}} | Fejléc-menüsor (Fájl, Szerkesztés, Nézet, Kijelölés, Hozzáadás, Objektum, Háló) és a hálómodellezők billentyűi: {{key:W}} kijelölés, {{key:G}} mozgatás, {{key:R}} forgatás és {{key:S}} léptékezés a kijelöléssel egyszerre ({{key:X}}, {{key:Y}} vagy {{key:Z}} egy tengelyt rögzít a mozgatás közben), {{key:E}} nyomás/húzás, {{key:B}} téglalap, {{key:X}} törlés, {{key:A}} összes kijelölése, {{key:Alt+A}} kijelölés megszüntetése, {{key:Shift+D}} kettőzés, {{key:Mod+G}} csoport, {{key:H}} elrejtés. A középső gomb körbeforgat; a {{key:Shift}} és a középső gomb eltol, a {{key:Mod}} és a középső gomb nagyít; a jobb gomb megszakítja, amit az eszköz csinál. |
| {{ui:Kezdő}} | Szalag, amelynek {{ui:Készítés}} lapján néhány nagy gomb van: alakzatok, amelyeket elhelyez, furatok, mozgatás, forgatás és méretezés, igazítás, {{ui:Csoport}} (az alakzatokba vágott furatok), valamint a 3D-nyomtatási ellenőrzés; minden más eszköz a {{ui:További eszközök}} lapon. A jobb gomb körbeforgat, a középső eltol. Lásd: [A Kezdő stílus](topic:beginner). |

A billentyűstílus, amelyet a nézet alján jobbra lévő {{ui:Kulcsok}} gombból és az {{ui:Szerkesztés}} › {{ui:Továbbiak}} menüpontból ismer, ugyanaz a választás: ha ott a modellező billentyűket választja, az a {{ui:Modellező}} stílust állítja be, a nyomás/húzás billentyűk pedig a {{ui:ModelCraft}} stílusra váltanak. Ha egy régebbi verzióban a modellező billentyűket választotta, a ModelCraft egyszer, magától a {{ui:Modellező}} stílusban nyílik meg.

:::tip
Az a billentyű, amely a nyomás/húzás billentyűkhöz tartozik, de a stílus más parancsot ad neki, nem csinál semmit, és az állapotsor megmondja, hová került a parancsa („A Modellezőben a nyomás/húzás: E”). A {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} és a nyilak mindig megtartják a jelentésüket, a számok mindig az értékmezőbe mennek, és amíg egy eszköz valamit mozgat, annak saját billentyűi érvényesülnek.
:::

## Saját beállítás

1. Válassza a hozzá legközelebb álló stílust, majd kattintson a {{ui:Testreszabás…}} gombra.
2. A {{ui:Billentyűk és menük}} lapon keressen meg egy parancsot (a keresőmező segít). Kattintson a {{ui:Billentyű hozzáadása}} gombra, majd nyomja le a billentyűt. Egy billentyűre kattintva el is veheti.
3. Menüsor esetén a {{ui:Hol van}} beállítás másik menübe viszi a parancsot, vagy a {{ui:Csak billentyűk}} közé.
4. A {{ui:Egér}} lapon állítsa be a görgőt és azt, mit csinálnak a gombok a 3D nézetben.
5. Adjon nevet, és kattintson a {{ui:Mentés}} gombra.

A beépített stílus mentése saját másolatot készít („Saját Modellező”); a beépített soha nem változik. A másolat ugyanúgy olvassa a billentyűket, mint az a stílus, amelyből indult: a {{ui:Modellező}} stílusból készült másolat a mozgatás, forgatás és léptékezés billentyűit egyszerre tartja működésben.

## Egér

- **Egérgörgő**: {{ui:A felfelé görgetés nagyít}} (az induló) vagy {{ui:A felfelé görgetés kicsinyít}}, és hogy milyen gyorsan. Az érintőpad csippentése mindig úgy nagyít, ahogy az ujjai mozognak.
- **Húzás a 3D nézetben**: {{ui:Mindegyik nézet saját}} megtartja a ModelCraft gombjait (a középső gomb körbeforgat, a jobb gomb vagy a {{key:Shift}} és a középső gomb eltol). Vagy állítsa a középső és a jobb gombot körbeforgatásra, eltolásra, nagyításra vagy semmire; a {{key:Shift}} a gombbal felcseréli a körbeforgatást és az eltolást. A bal gomb mindig az éppen használt eszközé.
- **Érintőpadok**: a {{ui:Beállítások}} › {{ui:ModelCraft}} › {{ui:Görgetés}} eldönti, hogy két ujj körbeforgat (érintőpad) vagy nagyít (egér). Lásd: [Körbeforgatás, eltolás és nagyítás](topic:orbit-pan-zoom).

## Magával viheti

Az {{ui:Exportálás}} a használt stílust egy kis `.ccinput.json` fájlba menti; az {{ui:Importálás…}} hozzáad egyet, másik számítógépről vagy egy kollégától. Egy importált fájl csak a ModelCraft saját parancsaira mutathat: minden más kimarad, és az állapotsorban megszámolódik. Az {{ui:Ennek a stílusnak a törlése}} eltávolít egyet a saját stílusai közül.

:::note
Ezek a beállítások ebben a böngészőben maradnak. A stíluskártyák alatti {{ui:Ennek a stílusnak a használata minden alkalmazásban}} opció minden alkalmazást a neki megfelelő stílusban nyit meg: a {{ui:Nyomás/húzás}} a többi alkalmazás menüsoros stílusaival párosul. A {{ui:Modellező}} stílusnak nincs párja a többi alkalmazásban, ezért ModelCraft-választás marad.
:::

Kapcsolódó: [Billentyűk és egérműveletek](topic:keyboard) · [A ModelCraft beállításai](topic:settings) · [Átállás más modellezőkről](topic:coming-from)
