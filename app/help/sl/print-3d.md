---
title: Pripravite model za 3D-tiskanje
summary: Preverite, ali je model zaprt in obrnjen v pravo smer, si oglejte njegovo velikost, podstavo in previse, popravite, kar ni prav, ter ga prenesite kot STL ali 3MF za vaš slicer.
keywords: 3d tisk, 3d tiskanje, tiskalnik, tiskanje, slicer, stl, 3mf, vodotesno, zaprto, mnogoterost, telo, luknje, obrnjeno navznoter, previs, podpore, podstavek, podlaga, milimetri, izvoz, popravi, popravilo, izdolbi, velikost podlage, začetnik, debelina sten, orodja za tisk
from: 948e19af
---

Slicer 3D-tiskalnika potrebuje zaprto obliko: brez lukenj, vsaka ploskev kaže navzven, nič ne prehaja skozi samo sebe. {{ui:Izvozi}} › {{ui:Preveri za 3D-tiskanje (STL ali 3MF)…}} preveri prav to, preden prenesete datoteko.

## Preverite in prenesite

1. Izberite, kar želite natisniti: eno ali več skupin ali komponent ali nekaj ploskev. Če nič ni izbrano, se natisne vse prikazano.
2. Kliknite {{ui:Izvozi}} v skupini {{ui:Datoteka}}, nato {{ui:Preveri za 3D-tiskanje (STL ali 3MF)…}}.

   Pogovorno okno se začne z eno vrstico: „Pripravljeno za tiskanje“, koliko stvari je treba popraviti pred tiskanjem ali koliko si jih je treba prej ogledati. Vsaka težava ima tri dele: kaj je narobe, zakaj je pomembno in kaj storiti. Nato sledijo velikost v milimetrih, prostornina, število trikotnikov in vaša tiskalna podlaga.

3. Če pogovorno okno navaja stvari za popravilo, kliknite {{ui:Popravi, kar je mogoče popraviti}} (spodaj). Preverjanje se samodejno ponovi.
4. Kliknite {{ui:Prenesi 3MF}} ali {{ui:Prenesi STL}}.

Natisne se, kar vidite: skrite ploskve, skrite skupine in komponente ter vse na skritih oznakah so izpuščeni. Dimenzije so vedno v milimetrih, enoti, ki jo slicerji pričakujejo, ne glede na to, katera enota je prikazana v modelu.

:::tip
Raje uporabite 3MF, če ga vaš slicer bere: ohrani barve in enote. STL nima ne ene ne druge, slicerji pa predpostavljajo milimetre.
:::

## Kaj preverjanje išče

Te stvari preprečijo tiskanje ali ga pokvarijo, pogovorno okno pa pokaže „Ni pripravljeno za tiskanje“:

| Težava | Kaj pomeni | Kaj storiti |
|---|---|---|
| Ploskev samo na eni strani | Luknja: rob ima ploskev na eni strani in nič na drugi | Narišite manjkajočo ploskev (črta čez vrzel jo pogosto zapre) ali uporabite {{ui:Popravi}} (spodaj) |
| Deli treh ali več ploskev | Ploskve se srečajo v rebru ali steni znotraj telesa | Izbrišite notranjo ploskev |
| Ploskve obrnjene v nasprotni smeri | Nekatere ploskve kažejo noter, druge ven | Izberite ploskve, ki kažejo noter, in kliknite {{ui:Obrni ploskev}} v {{ui:Podatki o entiteti}} |
| Obrnjeno navznoter | Ves zaprt del kaže navznoter | Izberite njegove ploskve in jih obrnite |
| Prehaja skozi samega sebe | Del se zvije skozi sebe | {{ui:Uredi}} › {{ui:Več}} › {{ui:Presek z modelom}}, nato izbrišite, kar je znotraj. Glejte [Presek ploskev](topic:intersect) |

To so opozorila: model se natisne, vendar si ga oglejte.

- **Ločeni deli se prekrivajo** ali se **stikajo ploskev na ploskev**: slicerji jih običajno združijo v enega. Za čistejšo datoteko jih združite z {{ui:Telesa}} › {{ui:Unija}}. Glejte [Orodja za telesa](topic:solids).
- **Na dnu nič ne leži ravno**: obrnite model, da ploskev počiva na podlagi, sicer bo slicer dodal podpore ali raft.
- **Naklon ven več kot 45° od navpičnega**: te ploskve potrebujejo podporo. Pogovorno okno pove, kolikšen del površine.
- **Pod 1 mm v širino**: verjetno narisano v napačni enoti. Preverite enoto v vrstici stanja.

Votel del (zaprta lupina znotraj druge) je v redu: njegove ploskve kažejo v votlino, njegova prostornina pa se odšteje.

## Popravite težave

Pod **Kje so težave** pogovorno okno imenuje vsako skupino ali komponento, ki ima kaj narobe (ohlapne ploskve, ki niso v skupini, so navedene kot „Ploskve niso v skupini“), skupaj z opisom napake. Komponenta, postavljena večkrat, je navedena enkrat: popravilo nje popravi vsako kopijo.

- {{ui:Pokaži}} odpre to skupino in izbere robove in ploskve, ki so narobe, da so označeni.
- {{ui:Popravi, kar je mogoče popraviti}} popravi vse naenkrat: zapre luknje, katerih robovi ležijo ravno, odstrani ploskve znotraj oblike in ohlapne robove ter obrne ploskve v pravo smer. To je en korak: {{key:Mod+Z}} ga razveljavi. Preverjanje se nato ponovi in pokaže, kar ostane.

Česar ne more popraviti (luknja, katere robovi ne ležijo ravno, del, ki prehaja skozi samega sebe), ostane na seznamu z navodili za ročno delo. {{ui:Popravilo}} pod **Orodja za tisk** gre dlje: zapre luknje, ki niso ravne, odstrani ohlapne dele in podvojene ploskve ter našteje vsak popravek. Glejte [Podpore, debelina sten, izdolbanje in popravilo](topic:print-tools#repair). Lahko popravite tudi eno skupino naenkrat: izberite jo, nato uporabite {{ui:Pokaži težave}} in {{ui:Popravi}} v {{ui:Podatki o entiteti}}. Glejte [Orodja za telesa](topic:solids).

## Votel del

{{ui:Izdolbi}} pod **Orodja za tisk** izdolbe del na debelino stene, ki jo vnesete, z odtočnimi luknjami tam, kamor kliknete. Glejte [Izdolbi](topic:print-tools#hollow).

Votlino lahko narišete tudi sami: zaprto skupino znotraj dela, ki se ga ne dotika, z vsemi ploskvami, obrnjenimi navznoter v votlino. Preverjanje jo šteje za votlino in odšteje njeno prostornino; ni navedena kot stvar za popravilo.

## Podlaga vašega tiskalnika

Izberite velikost podlage tiskalnika v {{ui:Nastavitve}} › {{ui:ModelCraft}} › {{ui:Podlaga 3D-tiskalnika}}. Preverjanje nato opozori, ko je model večji od podlage, obrnjen na katerikoli način. Glejte [Nastavitve](topic:settings#3d-printer-bed).

## Orodja za tisk

Pod ugotovitvami pogovornega okna **Orodja za tisk** odprejo {{ui:Predogled podpor}} (kje so podpore in približno koliko), {{ui:Debelina sten}} (stene, ki so pretanke za tisk), {{ui:Izdolbi}} in {{ui:Popravilo}}. Glejte [Podpore, debelina sten, izdolbanje in popravilo](topic:print-tools). {{ui:Razdeli za tisk}} razreže model, ki je prevelik za podlago, na kose s spojkami in oštevilčenimi spoji: glejte [Razdelitev velikega modela za tisk](topic:print-split).

## Ni preverjeno

Preverjanje ne reže: podrobnosti, ki jih vaša šoba ne more narisati, in prave podpore so stvar vašega slicerja. Glejte [Še ni izdelano](topic:not-built-yet#3d-printing).
