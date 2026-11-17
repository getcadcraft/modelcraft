---
title: Shranite poglede kot prizore
summary: Shranite kamero in slog kot prizor, posodobite in preimenujte ga ter se premikajte med prizori ali jih predvajajte za predstavitev zasnove.
keywords: prizor, pogled, shranjen pogled, kamera, predstavitev, animacija, predvajaj, page up, page down, zavihki, sprehod
from: 38680d6e
---

**Prizor** si zapomni položaj kamere, slog in to, kar je skrito: od kod gledate, perspektivno ali vzporedno projekcijo, slog ploskev, robove, nastavitve sonca, skrite skupine, izklopljene oznake in rez prereza. Prizori se shranijo v datoteko `.modelcraft`.

## Dodajte prizor

1. Nastavite pogled: zavrtite, povečajte, izberite slog, nastavite sonce.
2. V podoknu {{ui:Prizori}} na desni kliknite {{ui:Dodaj prizor}}.

   Prizor se pojavi na seznamu, poimenovan „Prizor 1“, „Prizor 2“ in tako naprej, in kot zavihek na vrhu 3D pogleda. Vrstica stanja pravi: „Prizor 1 shranjen: ta kamera, slog in skriti elementi.“

## Pojdite na prizor

- Kliknite njegov zavihek nad 3D pogledom ali njegovo ime na seznamu {{ui:Prizori}}.
- Ali pritisnite {{key:PageDown}} za naslednji prizor in {{key:PageUp}} za prejšnjega. {{ui:Naslednji}} in {{ui:Prejšnji}} pod seznamom naredita isto.

Kamera do prizora zdrsne v nekaj več kot pol sekunde. Če je vaš računalnik nastavljen na zmanjšano gibanje, pa tja skoči.

## Spremenite, preimenujte ali izbrišite prizor

Vsak prizor na seznamu ima za imenom tri majhne gumbe:

- **Posodobi** (krožni puščici): v ta prizor shrani trenutno kamero, slog in skrito. „Prizor 2 posodobljen.“
- **Preimenuj** (svinčnik): odpre pogovorno okno „Preimenuj prizor“. Vpišite novo ime in kliknite {{ui:Shrani}}.
- **Izbriši** (koš za smeti): odstrani prizor. „Prizor 2 izbrisan. Ctrl+Z ga obnovi.“

Dodajanje, posodabljanje, preimenovanje in brisanje prizorov so koraki razveljavitve, tako kot spremembe modela.

## Zaklenite kamero prizora

Ko isti pogled večkrat upodobite, ko se zasnova spreminja, zaklenite kamero tega prizora, da se pogled nikoli ne premakne po naključju.

1. Na seznamu {{ui:Prizori}} kliknite gumb **zaklepanje** (odprt lokot) za imenom prizora. Ta se zapre, zavihek prizora nad 3D pogledom pa pokaže majhen lokot. Vrstica stanja pravi: „Prizor 2: kamera zaklenjena.“
2. Pojdite na prizor, kadar želite upodobiti: kamera se vrne točno na shranjeni pogled, zato se slike, narejene iz njega, ujemajo s prejšnjimi.

Medtem ko je kamera zaklenjena, **Posodobi** še vedno shrani slog in skrito v prizor, kamera pa ostane, kjer je bila, tudi če ste se zavrteli stran. Ponovno kliknite lokot, da ga odklenete; nato Posodobi znova shrani trenutni pogled. Zaklepanje in odklepanje sta koraka razveljavitve, zaklepanje pa se shrani v datoteko `.modelcraft`.

## Predstavitev

1. Dodajte dva ali več prizorov.
2. Kliknite {{ui:Predvajaj}} pod seznamom. ModelCraft se vsakih nekaj sekund premakne na naslednji prizor in se po zadnjem vrne na prvega.
3. Kliknite {{ui:Ustavi}} (isti gumb) ali pritisnite {{key:Esc}}, da ustavite.

Za študijo sonca dodajte en prizor na uro, pri čemer spremenite samo {{ui:Čas}}, nato jih predvajajte. Glejte [Slogi in sončne sence](topic:styles-shadows#a-sun-study).

Za predstavitev brez vrstic pritisnite {{key:Ctrl+Shift+F}} dvakrat: najprej celozaslonski način, nato celozaslonski način s skritimi vrsticami. Zavihki prizorov ostanejo nad pogledom.

## Kaj prizor prikaže

Prizor si zapomni, kaj je bilo skrito, ko ste ga shranili: skupine in komponente, ki ste jih [skrili](topic:hide-isolate), [oznake](topic:tags), ki ste jih izklopili, in katere [ravnine prereza](topic:sections) režejo. Ko greste na prizor, se ti elementi znova skrijejo ali prikažejo. Tako lahko en prizor prikaže celotno hišo, naslednji hišo z izklopljeno oznako strehe, naslednji pa prerez skozi njo.

Skrite proste ploskve in robovi niso del prizorov. Odhod na prizor ne ustvari koraka razveljavitve. Prizori, shranjeni s prejšnjo izdajo ModelCrafta, pustijo skrito, kakor je; kliknite Posodobi, da to shranite vanje.

## Izvozi animacijo

{{ui:Izvozi animacijo}} pod seznamom predvaja prizore od prvega do zadnjega, pri čemer kamero gladko premika med njimi, in shrani film kot video **WebM** (dve sekundi premika in kratek premor na prizor). Zajame pogled, kot ga vidite, v njegovi velikosti na zaslonu, v [predstavitvenem pogledu](topic:styles-shadows#presentation-view) (brez osi, vodil in izbora). Pritisnite {{key:Esc}} ali ponovno kliknite gumb, da ustavite brez shranjevanja. WebM se predvaja v brskalnikih in VLC, video urejevalniki pa ga pretvorijo.

Za upodobljen sprehod (nebo, sonce, sence, materiali) pri izbrani velikosti uporabite {{ui:Upodobi video…}}: brez ključev animacije vzame prizore po vrsti kot pot kamere. Glejte [Animirajte kamero in predmete](topic:animation).

## Kaj morate vedeti

- Spreminjanje sloga ali premikanje kamere po odhodu na prizor ne spremeni prizora, dokler ne kliknete Posodobi.
- Prizori se ne izvozijo v Collada, OBJ, glTF, STL ali IFC.
