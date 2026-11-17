---
title: Objekty kriviek
summary: Kreslite krivky Bézier, NURBS a krivky z priamych segmentov, dajte im hrúbku, šírku alebo zúženie, vyplňte ploché, nastavte text ako krivku a premeňte ich na siete.
keywords: krivka, krivky, bézier, nurbs, spline, splajn, dráha, rúra, potrubie, kábel, lano, zrazenie, vytiahnutie, zúženie, sklon, polomer, výplň, profil, text, písmená, logo, krivka na sieť
from: 602bf077
---

**Objekt krivky** je krivka, ktorá vytvára tvar: rúra pozdĺž nej (zrazenie), pás (vytiahnutie), zužujúci sa roh (zúženie), alebo – keď je plochá a uzavretá – vyplnená doska alebo písmená. Tvar nasleduje krivku: presuniete bod a rúra sa s ním pohne. Keď je tvar správny, premeňte ho na sieť.

## Pridanie krivky

V zozname pracovných priestorov vyberte {{ui:Krivka}} a stlačte {{ui:Pridať}}:

| Druh | Čo to je |
| --- | --- |
| Krivka Bézier, kružnica Bézier | Prechádza svojimi bodmi; každý bod má dva úchyty, ktoré určujú smer krivky |
| Krivka NURBS, kružnica NURBS, Dráha | Hladká, kreslená smerom k svojim bodom (začína a končí v koncových bodoch); každý bod má váhu |
| Text | Váš text ako ploché, vyplnené obrysy písmen |

Nová krivka dostane tenkú rúru, aby sa dala vidieť a vybrať; pre holú krivku nastavte hĺbku zrazenia na 0.

Môžete začať aj z niečoho nakresleného: v pracovnom priestore Model vyberte oblúk, kružnicu, mnohouholník alebo nakreslenú krivku a stlačte {{ui:Vytvoriť objekt krivky}} v {{ui:Informácie o entite}}. Nakreslené čiary zostanú.

## Úprava bodov

Dvojklikom na objekt krivky (alebo ho vyberte a zvoľte {{ui:Krivka}}) ho upravte.

- Kliknite na bod alebo úchyt (Shift pridá alebo odoberie); potiahnutím ho presuniete. Potiahnutím po prázdnom priestore vyberte rámcom.
- {{ui:Predĺžiť}} ({{key:E}}, alebo {{key:Ctrl}}+kliknutie) pridá bod za vybraný koniec, na mieste kurzora.
- {{ui:Rozdeliť}} ({{key:W}}) vloží bod medzi každú dvojicu vybraných susedov; Bézier si zachová tvar.
- {{ui:Presunúť}}, {{ui:Otočiť}}, {{ui:Mierka}} presúvajú vybrané body kurzorom (klávesy modelára {{key:G}} {{key:R}} {{key:S}}, klávesy tlač/ťah {{key:M}} {{key:Q}} {{key:S}}); kliknutím potvrďte, {{key:Esc}} zruší.
- {{ui:Zavrieť}} ({{key:C}}) uzavrie otvorený splajn alebo otvorí uzavretý; {{ui:Obrátiť}} ({{key:Shift+R}}) ho prejde opačným smerom.
- Úchyty Bézier: {{ui:Vyhladiť}} ({{key:V}}) ich umiestni pre hladkú krivku, {{ui:Roh}} ({{key:Shift+V}}) ich nasmeruje na susedov, {{ui:Voľný}} ({{key:Alt+V}}) ich nechá tam, kde ste ich dali. Potiahnutie úchytu ho urobí voľným.
- {{ui:Bézier}}, {{ui:NURBS}} a {{ui:Poly}} zmenia typ vybraných splajnov a body zachovajú.

Každá zmena je jeden krok späť.

## Tvar

Nastavenia sú v paneli (a v {{ui:Informácie o entite}} v pracovnom priestore Model):

- **Tvar:** 3D krivky idú ľubovoľným smerom; plochá krivka zostáva vo svojej rovine a dá sa vyplniť.
- **Vyplniť uzavreté splajny** (ploché): obrysy sa stanú doskou; obrys vnútri iného je diera, takže písmená si zachovajú svoje diery.
- **Vytiahnutie:** polovica šírky pásu (otvorené alebo 3D krivky), alebo polovica hrúbky dosky (vyplnené).
- **Hĺbka zrazenia** a **zaoblenie:** okrúhla rúra pozdĺž krivky (pri vytiahnutí: zaoblený pás); pri vyplnenom tvare zaoblená hrana.
- **Uzavrieť konce:** viečka na otvorenej rúre.
- **Zúženie pozdĺž:** rovnomerne mení mierku pozdĺž každého splajnu, napríklad `1, 0.2` pre roh, `0, 1, 0` pre vreteno.
- **Hladkosť** a pri NURBS **rád**: ako jemne sa kreslí a aká je hladká (2 priamo … 6 najhladšie).
- Pri vybraných bodoch: **polomer** (hrúbka rúry v nich, vynásobená zrazením), **sklon** (otáča pás okolo krivky) a pri NURBS **váha**.

Modifikátory fungujú nad objektom krivky rovnako ako nad sieťou: pole pozdĺž nej, Zrkadlo, povrch Subdivision. Pozri [Modifikátory na sieti](topic:modifiers).

## Premena na sieť

{{ui:Na sieť}} (v pracovnom priestore Krivka alebo v {{ui:Informácie o entite}}, {{ui:Krivka na sieť}}) premení objekt krivky na sieť, ktorú zobrazuje teraz; jeho modifikátory zostanú navrchu. Potom ju upravte v pracovnom priestore Sieť. {{ui:Späť}} to vráti.

Pozri tiež [Siete](topic:meshes) a [Úprava siete](topic:mesh-edit).
