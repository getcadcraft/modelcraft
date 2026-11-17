---
title: Pripravte model na 3D tlač
summary: Skontrolujte, či je model uzavretý a plochy smerujú správne, pozrite jeho veľkosť, podstavu a previsy, opravte chyby a stiahnite ho ako STL alebo 3MF pre váš slicer.
keywords: 3d tlač, 3d tlačiareň, tlačiť, slicer, stl, 3mf, vodotesný, uzavretý, manifold, teleso, diery, naruby, previs, podpory, podstava, podložka, milimetre, export, opraviť, oprava, dutý, veľkosť podložky, začiatočník, hrúbka stien, nástroje na tlač
from: 948e19af
---

Slicer potrebuje uzavretý tvar: žiadne diery, každá plocha smerujúca von, nič, čo by prechádzalo samo sebou. {{ui:Exportovať}} › {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}} to overí presne pred stiahnutím súboru.

## Kontrola a stiahnutie

1. Vyberte, čo chcete vytlačiť: jednu alebo viac skupín alebo komponentov, alebo niektoré plochy. Ak nič nie je vybrané, vytlačí sa všetko zobrazené.
2. Kliknite na {{ui:Exportovať}} v skupine {{ui:Súbor}}, potom na {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}}.

   Dialóg začína jedným riadkom: "Pripravené na tlač", koľko vecí treba opraviť pred tlačou, alebo koľko treba najprv pozrieť. Každý problém má tri časti: čo je zle, prečo to záleží a čo s tým urobiť. Potom nasleduje veľkosť v milimetroch, objem, počet trojuholníkov a vaša podložka tlačiarne.

3. Ak dialóg uvádza veci na opravu, kliknite na {{ui:Opraviť, čo sa dá}} (pozri nižšie). Kontrola sa spustí znova sama.
4. Kliknite na {{ui:Stiahnuť 3MF}} alebo {{ui:Stiahnuť STL}}.

Čo sa tlačí, je to, čo vidíte: skryté plochy, skryté skupiny a komponenty a čokoľvek na skrytej značke sa vynechá. Veľkosti sú vždy v milimetroch, jednotke, ktorú slicery očakávajú, bez ohľadu na jednotku, ktorú model zobrazuje.

:::tip
Dajte prednosť 3MF, ak ho váš slicer číta: zachováva farby aj jednotky. STL nemá ani jedno a slicery predpokladajú milimetre.
:::

## Čo kontrola hľadá

Tieto veci tlač zastavia alebo ju pokazia a spôsobia, že dialóg ukáže "Nepripravené na tlač":

| Problém | Čo to znamená | Čo robiť |
|---|---|---|
| Plocha iba na jednej strane | Diera: hrana má plochu na jednej strane a nič na druhej | Nakreslite chýbajúcu plochu (čiara cez medzeru ju často uzavrie), alebo použite {{ui:Opraviť}} (nižšie) |
| Zdieľa ju tri alebo viac plôch | Plochy sa stretajú v tenkej priečke alebo stene vnútri telesa | Zmažte vnútornú plochu |
| Plochy smerujú opačne | Niektoré plochy smerujú dnu, niektoré von | Vyberte plochy, ktoré smerujú dnu, a kliknite na {{ui:Obrátiť plochu}} v {{ui:Informácie o entite}} |
| Naruby | Celá uzavretá časť smeruje dovnútra | Vyberte jej plochy a obráťte ich |
| Prechádza samo sebou | Jedna časť sa prehýba cez seba | {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Pretnúť s modelom}}, potom zmažte, čo je vnútri. Pozri [Prienik plôch](topic:intersect) |

Toto sú upozornenia: model sa vytlačí, ale najprv sa na to pozrite.

- **Oddelené časti sa prekrývajú** alebo **sa dotýkajú plochami**: slicery ich zvyčajne spoja do jednej. Pre čistejší súbor ich spojte pomocou {{ui:Telesá}} › {{ui:Zjednotenie}}. Pozri [Nástroje pre telesá](topic:solids).
- **Nič neleží rovno na spodku**: otočte model tak, aby plocha spočívala na podložke, inak slicer pridá podpery alebo raft.
- **Sklon viac než 45° od zvislice**: tieto plochy potrebujú podporu. Dialóg uvádza, koľko plochy to je.
- **Menšie ako 1 mm na šírku**: pravdepodobne modelované v zlej jednotke. Skontrolujte jednotku v stavovom riadku.

Dutá časť (uzavretá škrupina vnútri inej) je v poriadku: jej plochy smerujú dovnútra dutiny a jej objem sa odpočíta.

## Oprava problémov

Pod **Kde sú problémy** dialóg pomenuje každú skupinu alebo komponent, ktorý má niečo zlé (voľné plochy mimo skupiny sa uvedú ako "Plochy mimo skupiny"), spolu s tým, čo je v nej zle. Komponent umiestnený viackrát je uvedený raz: jeho oprava opraví každú kópiu.

- {{ui:Zobrazenie}} otvorí túto skupinu a vyberie chybné hrany a plochy, takže sú zvýraznené.
- {{ui:Opraviť, čo sa dá}} opraví všetky naraz: uzavrie diery, ktorých hrany ležia rovno, odstráni plochy vnútri tvaru a zatúlané hrany a obráti plochy správnym smerom von. Je to jeden krok: {{key:Mod+Z}} ho vráti späť. Kontrola potom beží znova a ukáže, čo zostáva.

Čo sa nedá opraviť (diera, ktorej hrany neležia rovno, časť prechádzajúca samou sebou), zostáva v zozname s tým, čo treba urobiť ručne. {{ui:Oprava}} v časti **Nástroje na tlač** ide ďalej: uzavrie diery, ktoré nie sú rovné, odstráni zatúlané kusy a zdvojené plochy a vypíše každú opravu. Pozri [Podpery, hrúbka steny, vydlabanie a oprava](topic:print-tools#repair). Môžete tiež opraviť jednu skupinu naraz: vyberte ju, potom použite {{ui:Zobraziť problémy}} a {{ui:Opraviť}} v {{ui:Informácie o entite}}. Pozri [Nástroje pre telesá](topic:solids).

## Dutá časť

{{ui:Vydlabať}} v časti **Nástroje na tlač** vydlabá časť na zadanú hrúbku steny, s odtokovými dierami tam, kde kliknete. Pozri [Vydlabať](topic:print-tools#hollow).

Dutinu môžete nakresliť aj sami: uzavretú skupinu vnútri časti, ktorá sa jej nedotýka, so všetkými plochami obrátenými, aby smerovali do dutiny. Kontrola ju počíta ako dutinu a odpočíta jej objem; nie je uvedená ako niečo na opravu.

## Podložka tlačiarne

Vyberte veľkosť podložky vašej tlačiarne v {{ui:Nastavenia}} › {{ui:ModelCraft}} › {{ui:Podložka 3D tlačiarne}}. Kontrola potom upozorní, keď je model väčší ako podložka, otočený ktoroukoľvek stranou. Pozri [Nastavenia](topic:settings#3d-printer-bed).

## Nástroje na tlač

Pod zisteniami dialógu **Nástroje na tlač** otvoria {{ui:Náhľad podpier}} (kam idú podpery a približne koľko), {{ui:Hrúbka stien}} (steny príliš tenké na tlač), {{ui:Vydlabať}} a {{ui:Oprava}}. Pozri [Podpery, hrúbka steny, vydlabanie a oprava](topic:print-tools). {{ui:Rozdeliť na tlač}} rozreže model, ktorý je príliš veľký pre podložku, na kusy s konektormi a očíslovanými spojmi: pozri [Rozdelenie veľkého modelu na tlač](topic:print-split).

## Nekontrolované

Kontrola nerezuje: drobné detaily, ktoré vaša tryska nedokáže nakresliť, a skutočné podpery sú vecou vášho slicera. Pozri [Ešte nie je hotové](topic:not-built-yet#3d-printing).
