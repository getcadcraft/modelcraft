---
title: Skupine in komponente
summary: Preprečite, da se predmeti lepijo skupaj, uredite eno kopijo, da spremenite vse, in uporabljajte plošči Struktura in Komponente.
keywords: skupina, komponenta, ustvari skupino, ustvari komponento, razstavi, naredi edinstveno, struktura, primerki, kopije, blok, gnezdeno, uredi skupino, postavi
from: 7cb925f3
---

Razpršena geometrija se v ModelCraft lepi skupaj: črte, ki se dotikajo, se medsebojno razdelijo, ploskve, ki delijo rob, pa se premikajo skupaj. Prav to omogoča risanje na ploskve, a pomeni tudi, da se kvader, narisan ob drugem kvadru, z njim združi. **Skupine** in **komponente** to preprečijo.

- **Skupina** zavije nekaj geometrije, da deluje kot en predmet. Nič zunaj nje se nanjo ne more prilepiti.
- **Komponenta** je skupina, ki jo lahko postavite večkrat. Vsaka kopija deli isto vsebino: uredite eno in spremenile se bodo vse. Komponente uporabite za vse, kar se ponavlja: okna, stebre, mize, drevesa.

## Ustvarite skupino ali komponento

1. Izberite geometrijo. Trojni klik na ploskev izbere celoten povezan predmet; vlečenje okna izbere vse v pravokotniku.
2. Pritisnite {{key:Shift+G}} za skupino ali {{key:G}} za komponento. Lahko tudi kliknete {{ui:Group}} ali {{ui:Component}} v skupini {{ui:Organize}} v orodni vrstici ali {{ui:Make group (Shift+G)}} oz. {{ui:Make component (G)}} v {{ui:Entity info}}.

   Vrstica stanja pokaže „Združeno kot Group#1.“ ali „Ustvarjena komponenta Component#1.“, novi predmet je izbran in se prikaže v {{ui:Outliner}}.

3. Za poimenovanje vpišite ime v polje {{ui:Name}} v {{ui:Entity info}} in pritisnite {{key:Enter}} ali kliknite drugam.

Če izberete ploskev, se izberejo tudi njeni robovi. Če nič ni izbrano, vrstica stanja pokaže „Najprej izberite geometrijo (povlecite okno ali trikrat kliknite, da izberete vse povezano).“

Skupine lahko združujete tudi v skupine: izberite več skupin in pritisnite {{key:Shift+G}}. {{ui:Outliner}} prikaže gnezdenje.

:::note
Črke tipk ustrezajo privzetim nastavitvam SketchUp: {{key:G}} ustvari komponento, {{key:Shift+G}} skupino.
:::

## Urejanje znotraj skupine ali komponente

1. Dvakrat kliknite nanjo (v pogledu ali v {{ui:Outliner}}) ali jo izberite in kliknite {{ui:Edit}} v {{ui:Entity info}}.

   Ostali model se zbledi, osi se premaknejo na lastne osi skupine, {{ui:Outliner}} pa prikaže „Editing: Model › Group#1“. Vrstica stanja pokaže „Urejanje Group#1. Esc ali dvojni klik zunaj jo zapre.“

2. Rišite, potiskajte/vlecite, premikajte in brišite kot ponavadi. Vse, kar naredite, ostane znotraj skupine.
3. Zaprite jo: pritisnite {{key:Esc}} (dvakrat, če je kaj izbrano), dvakrat kliknite prazen prostor ali kliknite {{ui:Close group}} v {{ui:Outliner}}.

Medtem ko je komponenta odprta, se vsaka njena kopija spremeni, ko delate.

## Postavite več kopij komponente

- Kopirajte jo z {{ui:Move}} in {{key:Ctrl}} (glejte [Premik in kopiranje](topic:move-copy)). Vsaka kopija je še ena postavitev iste komponente.
- Ali kliknite {{ui:Place}} ob njej v plošči {{ui:Components}}, nato kliknite, kamor naj gre. Njena izhodiščna točka, najnižji vogal kvadra okoli tega, kar ste izbrali, ko ste jo ustvarili, pride tja, kamor kliknete. Orodje se nato vrne na {{ui:Select}}.

{{ui:Components}} prikaže, koliko kopij je postavljenih („4×“), {{ui:Outliner}} pa prikaže število za imenom.

## Preureditev v strukturi

Povlecite vrstico v {{ui:Outliner}}, da spremenite, kam spada. Nič se ne premakne v pogledu: skupina ohrani svoje mesto v modelu.

- **V skupino:** spustite jo na sredino vrstice skupine (vrstica dobi črtkan obris). Gre noter, na konec.
- **V drugačnem vrstnem redu:** spustite jo na zgornji ali spodnji rob vrstice (tam se pokaže črta). Gre tik pred ali za to vrstico, znotraj iste skupine kot ta vrstica, zato to tudi postavi predmet v skupino na izbrano mesto.
- **Ven na najvišjo raven:** spustite jo na glavo {{ui:Outliner}}. Gre na konec.

Vsak spust je en korak: {{key:Mod+Z}} ga vrne nazaj. {{key:Esc}} med vlečenjem nič ne spusti. Skupina ne more iti sama vase ali v skupino, ki jo vsebuje. Vlečenje je onemogočeno, dokler je v {{ui:Find by name}} besedilo.

:::touch
Za trenutek držite prst na vrstici, nato jo povlecite. Hitro podrsanje premakne seznam.
:::

## Naredite eno kopijo drugačno

Izberite kopijo in kliknite {{ui:Make unique}} v {{ui:Entity info}} (prikazano, kadar je komponenta postavljena več kot enkrat). Ta kopija dobi lastno definicijo, poimenovano kot original z novo številko. Urejajte jo, ne da bi se dotaknili drugih.

## Pretvorite skupino v komponento

Izberite skupino in kliknite {{ui:Make component}} v {{ui:Entity info}}. Dobi novo ime, na primer Component#2, tudi če ste skupino poimenovali; ime znova vpišite v {{ui:Name}}.

## Razstavite

Izberite skupino ali komponento in kliknite {{ui:Explode}} (v orodni vrstici ali v {{ui:Entity info}}). Njena vsebina postane prosta geometrija na istem mestu in se lepi na to, česar se dotika. Skupine znotraj nje ostanejo skupine.

## Telo in prostornina

Ko izberete skupino ali komponento, {{ui:Entity info}} pokaže **Telo: Da**, če se njene ploskve zaprejo brez vrzeli (vsak rob si delita natanko dve ploskvi) in če v njej ni gnezdenih skupin. Takrat pokaže tudi **prostornino**. Kvader, stena z izrezano okensko odprtino in potegnjen valj so telesa; kvader z izbrisanim vrhom ni.

## Ko gre zadnja kopija

Brisanje zadnje kopije komponente jo odstrani tudi iz plošče {{ui:Components}}. {{key:Mod+Z}} jo vrne.

## Stvari, ki jih je treba vedeti

- Kopije **skupine**, narejene s premikom, v tej različici delijo svojo vsebino, kot jo delijo kopije komponent: urejanje ene spremeni druge. Če želite eno narediti samostojno, kliknite {{ui:Make component}}, nato {{ui:Make unique}}. Glejte [Odpravljanje težav](topic:troubleshooting#editing-one-group-changed-another).
- Komponente ne režejo odprtin v stenah in se ne lepijo na ploskve, knjižnice pripravljenih komponent pa ni. Ustvarite svoje ali jih uvozite.
- Uvožene datoteke pridejo kot skupina. Datoteke Collada ohranijo svoje skupine in komponente znotraj nje.
