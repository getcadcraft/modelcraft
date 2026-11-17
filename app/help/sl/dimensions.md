---
title: Kotirajte in spremenite velikost narisanega
summary: Postavite kote med vogali, na loke in kroge ali med dvema robovoma; vpišite novo dolžino, da spremenite velikost modela. Ponovno vpišite dolžino roba ali širino, globino in višino skupine v podatkih o entiteti.
keywords: kota, kote, spremeni velikost, uredi velikost, dolžina, širina, globina, višina, raztegni, gonilna kota, označi, izmeri, naknadno, polmer, premer, kot, kotni, lok, krog, R, Ø
from: a1f815ec
---

Velikosti v ModelCraftu niso fiksne, ko je nekaj narisano. Kota prikaže dolžino na modelu, vpis nove dolžine vanjo pa spremeni velikost modela, da se ujema. Ponovno lahko vpišete dolžino roba ali širino, globino in višino skupine v {{ui:Podatki o entiteti}}.

## Postavite koto

1. Pritisnite {{key:D}} ali kliknite {{ui:Kota (D)}} na orodni vrstici.
2. Kliknite vogal, od koder merite. Zaskoči se na vogale, sredine in robove, kot pri risanju.
3. Kliknite drugi vogal.

   Ali kliknite enkrat na **rob** (namig pravi „Na robu“), da kotirate ves rob na en klik.
4. Premaknite kazalec tja, kamor naj gre kotna črta, in kliknite. Lahko vpišete tudi odmik, npr. `0.5m`, in pritisnete {{key:Enter}}.

   Kotna črta ostane vodoravna pri vodoravnem robu, razen če gledate z strani. Pri navpičnem robu ostane v navpični ravnini, ki vas najbolje gleda.

Vrstica stanja pove „Kota 4 m.“ Kote prikazujejo dolžino v enoti modela in se posodobijo, ko spremenite enoto v izbirniku.

## Polmer, premer in kot

Isto orodje {{ui:Kota (D)}} kotira zaokrožene stvari in kote:

- **Lok:** kliknite lok. Namig pravi {{ui:Polmer}}. Premaknite kazalec tja, kamor naj gre besedilo, in kliknite: kota se glasi **R 1.5 m**.
- **Krog:** kliknite krog. Dobite **premer** (**Ø 3 m**) s črto čez krog skozi njegovo središče. Mnogokotniki delujejo enako, z vogali na krogu.
- **Kot med dvema robovoma:** kliknite en rob, nato kliknite drugi rob, ki se v vogalu stika z njim (medtem ko ste nad njim, namig pravi {{ui:Kot med robovoma}}). Nato se premaknite v želeni kot in kliknite. Znotraj vogala dobite kot med robovoma; premaknite se na eno stran in dobite kot ob njem (npr. 150° namesto 30°). Kako daleč od vogala kliknete, določi, kam gre lok; ali vpišite to razdaljo.

Če želite polmer spremeniti v premer ali nazaj, izberite koto in izberite {{ui:Prikaži kot}} v {{ui:Podatki o entiteti}}.

**Spreminjanje velikosti z njimi:** vpišite nov polmer ali premer takoj po postavitvi ali ga pozneje izberite in vpišite. Lok ali krog ohrani svoje središče in spremeni velikost; ploskev, ki jo omejuje (disk, konec utora), se spremeni z njim. Dve stvari sta samo meritvi:

- **Kotna kota** nikoli ne spremeni modela. Za spremembo kota zasukajte robove z {{ui:Zasukaj (Q)}}.
- **Krog na koncu valja** (krog, ki ste ga povlekli z {{ui:Potisni/povleci}}) ni mogoče spremeniti iz njegove kote, ker bi se morale spremeniti tudi njegove stranice. Namesto tega spremenite merilo valja okoli njegove osi.

## Spremenite velikost modela s koto

Takoj po postavitvi kote vpišite novo dolžino in pritisnite {{key:Enter}}: `6m`, `12'`, `3500` v modelu v milimetrih. Model se spremeni na to velikost.

Pozneje, kadarkoli:

1. Z {{ui:Izberi}} kliknite na besedilo ali črto kote. {{ui:Podatki o entiteti}} pravijo **Kota** in pokažejo njeno {{ui:Dolžino}}.
2. Vpišite novo dolžino in pritisnite {{key:Enter}}. Lahko vpišete naravnost v polje za vrednost ali v polje {{ui:Dolžina}} v {{ui:Podatki o entiteti}}.

### Kaj se premakne

Drugi vogal, ki ste ga kliknili, se premakne, in premakne se vse za njim:

- **Oba vogala na enem kosu** (širina škatle, višina stene): stran pri premikajočem se vogalu se izvleče ali uvleče, ploskve, pritrjene nanjo, se raztegnejo. Škatla ostane zaprto telo, vse, kar leži popolnoma na tej strani, na primer komponenta okna, se premakne z njo.
- **Vogala na dveh ločenih kosih** (vrzel med dvema škatlama): kos premikajočega se vogala se premakne celoten, vrzel pa se spremeni.
- **Premikajoči se vogal znotraj skupine ali komponente**, v kateri ni drugi vogal: premakne se cela skupina.
- **Oba vogala znotraj iste skupine ali komponente**: raztegne se znotraj nje. Komponenta se spremeni povsod, kjer je postavljena, kot kadar koli urejate komponento.

Da spremenite, kateri konec se premakne, izberite koto in izberite v {{ui:Premika}} v {{ui:Podatki o entiteti}}:

| Izbira | Kaj se zgodi |
|---|---|
| {{ui:Drugi konec}} (privzeto) | Konec, ki ste ga kliknili drugi, se premakne |
| {{ui:Prvi konec}} | Konec, ki ste ga kliknili prvi, se premakne |
| {{ui:Oba konca (središče)}} | Vsak konec se premakne za polovico spremembe, zato sredina ostane na mestu |

### Ko je sprememba velikosti zavrnjena

ModelCraft ne spremeni ničesar in v vrstici stanja pove zakaj:

- „ploskev bi se upognila iz svoje ravnine“: kota teče poševno čez obliko. Kotirajte vzdolž roba ali vzdolž rdeče, zelene ali modre.
- „ploskev bi se zmanjšala na nič ali se obrnila narobe“: nova dolžina je za obliko prekratka.
- „konec, ki se premakne, ni na vogalu modela“: ta konec je bil postavljen v prazen prostor ali na sredino roba. Izberite drugi konec v {{ui:Premika}} ali postavite koto na dva vogala.
- „dolžina mora biti večja od nič“.

Vsaka sprememba velikosti je en korak: {{key:Mod+Z}} jo razveljavi.

## Ponovno vpišite velikost v podatkih o entiteti

Kote ne potrebujete vedno:

- **Rob:** izberite ga. Njegova {{ui:Dolžina}} v {{ui:Podatki o entiteti}} je polje, v katerega lahko vpišete. Vpis dolžine v polje za vrednost deluje tudi. Premakne se konec, ki je dlje vzdolž rdeče, nato zelene, nato modre, in kar je z njim povezano, se raztegne. Na primer, ponovni vpis spodnjega sprednjega roba škatle jo naredi širšo proti desni.
- **Skupina ali komponenta:** izberite jo. {{ui:Širina (rdeča)}}, {{ui:Globina (zelena)}} in {{ui:Višina (modra)}} so polja. Njena oddaljena stran (desno, zadaj, zgoraj) se premakne. To so lastne osi skupine, pred kakršnimkoli zasukom, ki ste ga dali.

Pritisnite {{key:Enter}}, da uveljavite, ali {{key:Esc}}, da vrnete staro vrednost.

## Kote sledijo modelu

Kota je pritrjena na dva vogala, na katerih je bila postavljena (kot: na njegov vogal in na skrajna konca obeh robov; polmer ali premer: na njegov lok ali krog). Premaknete, potisnete/povlečete ali spremenite velikost geometrije, in kota sledi ter pokaže novo dolžino. Ostane pritrjena, ko geometrijo spremenite v skupino ali komponento.

Če je bil konec postavljen nekje, kar ni vogal (na ploskvi ali v praznem prostoru), ali je njegov vogal izbrisan, ta konec ostane, kjer je bil. Kota še vedno meri, vendar lahko spremeni velikost le iz svojega drugega konca.

## Odstranjevanje kot

- Ena kota: izberite jo in pritisnite {{key:Delete}}, ali kliknite nanjo z {{ui:Radirka (E)}}.
- Vse kote: ko nič ni izbrano, kliknite {{ui:Izbriši vse kote}} v {{ui:Podatki o entiteti}}.

Kote se shranijo v datoteko `.modelcraft`. Ne izvažajo se v druge formate, ki prenašajo le 3D model. Datoteka s kotami se v starejšem ModelCraftu še vedno odpre, vendar brez njih.
