---
title: Depanare
summary: Simptome, cauze și soluții, de la o vedere 3D goală până la importuri de dimensiune greșită, cu mesajele pe care le afișează ModelCraft.
keywords: problemă, dificultate, eroare, nu funcționează, gol, webgl, grafică, lent, mesaj, import eșuat, dimensiune greșită, nu se poate selecta, touch, tastele nu funcționează, lucru pierdut
from: 6e7394be
---

## Vederea 3D este goală

**Simptom:** mijlocul ecranului rămâne gol sau arată doar culoarea de fundal, iar apăsarea uneltelor nu face nimic.

**Cauză:** ModelCraft desenează cu WebGL 2, grafica 3D a browserului. Lipsește când browserul este vechi, când accelerarea hardware este oprită sau când driverul grafic este blocat.

**Soluție:**

:::chromium
1. Deschideți setările browserului și căutați „graphics acceleration”.
2. Activați „Use graphics acceleration when available” și reporniți browserul.
3. Dacă este deja activată, scrieți `chrome://gpu` în bara de adrese (`edge://gpu` în Edge) și căutați „WebGL2” în listă. Dacă scrie că este dezactivat, actualizați driverul grafic.
:::

:::firefox
1. Deschideți **Settings**, apoi **General**, și derulați până la „Performance”.
2. Debifați „Use recommended performance settings”, apoi bifați „Use hardware acceleration when available”. Reporniți Firefox.
3. Dacă tot nu merge, scrieți `about:support` în bara de adrese și uitați-vă în secțiunea „Graphics” pentru WebGL 2.
:::

:::safari
Actualizați macOS și Safari. Versiunile recente ale Safari au mereu WebGL 2 activat. Dacă ați schimbat funcțiile experimentale din **Safari**, apoi **Settings**, apoi **Advanced** (sau **Feature Flags**), resetați-le.
:::

Pe un calculator de la serviciu, desktop la distanță sau mașină virtuală, grafica 3D poate fi blocată prin politici. Încercați alt calculator. Vezi [Browsere și calculatoare](common:browsers).

## Tastele nu fac nimic sau scriu într-o casetă

**Cauză:** focusul tastaturii este într-un câmp al panoului: lista {{ui:Fețe}} din {{ui:Stil}}, o setare a soarelui, câmpul {{ui:Nume}} din {{ui:Informații entitate}} sau selectorul de unități. Literele și tastele săgeți merg atunci în acel câmp.

**Soluție:** faceți clic în vederea 3D, apoi apăsați din nou tasta. Tastele nu funcționează nici cât timp este deschisă o casetă de dialog.

## Scrierea unui număr nu face nimic

- **Nu există încă o direcție.** O lungime scrisă merge în direcția în care arată cursorul de la primul clic. Mutați ușor cursorul în direcția dorită, apoi scrieți.
- **Momentul greșit.** Majoritatea uneltelor acceptă o valoare scrisă doar după primul clic: faceți clic întâi pe primul colț, pe față sau pe punctul de la care se mută. {{ui:Cerc}} și {{ui:Poligon}} acceptă un număr de laturi înainte de primul clic.
- **„Scrieți o lungime, de exemplu 3m, 10'6" sau 4m,3m.”** ModelCraft nu a putut-o citi. Verificați dacă există o virgulă zecimală (`2,5`): folosiți punct.

## O formă începe în alt loc pe ecranul tactil

**Simptom:** cu degetul, primul dreptunghi este bun, dar următorul dreptunghi, cerc sau linie începe acolo unde s-a terminat atingerea anterioară, nu acolo unde ați atins.

**Cauză:** o eroare în această versiune: pe ecranul tactil, unealta reține ultimul punct de agățare din gestul anterior.

**Soluție:** atingeți din nou butonul uneltei din bara de instrumente înainte de fiecare formă nouă. Asta pornește unealta de la zero, iar primul punct cade unde atingeți.

## Editarea unui grup a schimbat altul

**Simptom:** ați copiat un grup cu {{ui:Mutare}} și {{key:Ctrl}}, ați deschis o copie și ați editat-o, iar cealaltă copie s-a schimbat și ea. {{ui:Structură arborescentă}} arată ambele cu același nume.

**Cauză:** în această versiune, copierea unui grup face o a doua plasare a aceluiași grup, ca la o componentă. Butonul {{ui:Creare unică}} este oferit doar pentru componente.

**Soluție:** selectați copia pe care vreți să o schimbați, faceți clic pe {{ui:Creare componentă}} din {{ui:Informații entitate}}, apoi pe {{ui:Creare unică}}. Acea copie are acum propriul conținut. Sau {{ui:Descompunere}} copia.

## Împinge/Trage nu face ce mă așteptam

- **„Împinge/Trage lucrează pe o față. Faceți clic pe o față.”** Ați făcut clic pe o muchie sau pe spațiu gol. Treceți cursorul până se evidențiază fața, apoi faceți clic.
- **Fața este în interiorul unui grup.** Faceți dublu clic pe grup ca să-l deschideți întâi.
- **O fereastră nu a tăiat peretele.** Dreptunghiul trebuie desenat pe fața peretelui, nu în fața lui, iar peretele trebuie să aibă o față din spate. Vezi [Tăierea unei deschideri într-un perete](topic:openings#if-it-did-not-cut-through).
- **Două cutii se suprapun fără să se unească.** Solidele împinse unul în altul nu se taie și nu se unesc în această versiune.

## O linie sau o formă nu a creat o față

O față se umple doar când muchiile închid o buclă plană. Verificați dacă ultimul punct s-a agățat de primul („Capăt”) și dacă toate muchiile se află într-un singur plan. O buclă ușor ieșită din plan rămâne ca linii. Desenați din nou una dintre muchiile ei, agățându-vă de colțuri.

## Nu pot selecta sau șterge o față

- Cu {{ui:Selectare}}, un clic lângă o muchie ia muchia. Faceți clic mai aproape de mijlocul feței.
- {{ui:Ștergere}} nu alege fețe. Selectați fața și apăsați {{key:Delete}}, sau ștergeți una dintre muchiile ei.
- Dacă aparține unui grup sau unei componente, clicul selectează tot obiectul. Faceți dublu clic pentru a-l deschide.

## „Selectați ceva pentru a muta mai întâi sau faceți clic pe el.”

{{ui:Mutare}}, {{ui:Rotire}} și {{ui:Scalare}} au nevoie de ceva asupra căruia să lucreze: selectați-l mai întâi sau porniți unealta făcând clic pe obiectul însuși (nu pe spațiu gol sau pe un ghid).

## „Selectați întâi o geometrie (trageți o fereastră sau faceți triplu clic pentru a selecta tot ce este conectat).”

{{key:G}} și {{key:Shift+G}} au nevoie de o selecție. Ghidurile nu pot fi grupate.

## Tastele săgeți orbitează în loc să blocheze

Blocările funcționează doar după primul clic al unei unelte de desenare sau de editare. {{ui:Împinge/Trage}} nu are blocări, iar în {{ui:Rotire}} ele nu schimbă rotirea. În rest, tastele săgeți orbitează vederea.

## Esc în ecran complet

În ecran complet, browserul poate folosi primul {{key:Esc}} pentru a ieși din ecranul complet. Apăsați din nou {{key:Esc}} pentru a anula unealta.

## Fără buton din mijloc

Apăsați {{key:O}} pentru {{ui:Orbitare}} și trageți, sau folosiți tastele săgeți. Vezi [Orbitare, pan și zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Importuri

| Mesaj | Ce trebuie făcut |
|---|---|
| „ModelCraft importă SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG și DXF. … nu este niciunul dintre acestea.” | Exportați modelul din celălalt program într-unul din aceste formate |
| „Acest fișier are peste 300 MB.” | Simplificați sau împărțiți modelul în celălalt program |
| „…prea mare pentru a fi modelat aici (peste 2 milioane de vârfuri).” | La fel |
| „Acest fișier .gltf are nevoie de "…"…” | Lăsați `.gltf` împreună cu fișierele `.bin` și cu texturile, sau deschideți versiunea `.glb` |
| „Acest fișier glTF are nevoie de extensia …, pe care ModelCraft nu o citește încă.” | Exportați din nou din celălalt program, fără această extensie (texturile KTX2, de exemplu) |
| Un OBJ se importă fără culorile sau texturile lui | Lăsați `.obj` împreună cu fișierul `.mtl` și cu imaginile |
| „Acest fișier Alembic folosește vechiul format HDF5…” | Salvați-l din nou din celălalt program ca fișier Ogawa Alembic |
| Un FBX se importă fără texturi | Lăsați `.fbx` împreună cu imaginile texturilor sau încorporați media la export |
| „Acest fișier FBX este versiunea …, pe care ModelCraft nu o citește” | Exportați din nou ca FBX 2011 sau mai nou |
| Un STL sau PLY se importă de 1,000 de ori mai mare sau mai mic | STL se citește în milimetri și PLY în metri: scalați-l (vezi [Rotire și scalare](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| „Acesta nu este un fișier Collada (.dae)…” sau „…nu este XML bine format…” | Fișierul este deteriorat sau nu este Collada. Exportați-l din nou |
| „Acest fișier Collada nu are geometrie pe care ModelCraft s-o poată importa.” | Conține doar camere, lumini sau referințe la alte fișiere |
| „Acesta este un DXF binar. Salvați-l ca DXF ASCII și încercați din nou.” | Salvați-l din nou din programul CAD ca ASCII |
| „Acesta nu este un desen DWG…” | Fișierul nu este DWG sau este deteriorat |
| „Acest desen nu a putut fi citit (…). Poate fi deteriorat sau salvat într-o versiune DWG pe care cititorul nu o tratează…” | Parantezele dau motivul. Salvați-l din programul CAD ca DXF sau ca DWG din AutoCAD 2000 până la 2018 |
| „Acest desen ajunge la mai mult de 10,000 km de originea lui…” | Mutați desenul aproape de 0,0 în programul CAD |

### Importul are dimensiune greșită sau stă culcat

- **OBJ:** OBJ nu are unitate; ModelCraft citește metri. Un model în milimetri se importă de 1000 de ori mai mare: [scalați-l](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) cu `0.001`; un model în inch cu `0.0254`.
- **OBJ culcat:** ModelCraft așteaptă fișiere OBJ cu Y în sus. Un fișier scris cu Z în sus se importă culcat. Rotiți-l cu 90° în jurul axei roșii: faceți clic pe centrul {{ui:Rotire}} pe o față orientată după roșu, sau deschideți fișierul în programul lui și exportați cu Y în sus.
- **DWG sau DXF:** ați ales unitatea greșită în caseta „Unități de desen”. Anulați și importați din nou.

## Deschiderea fișierelor

| Mesaj | Ce trebuie făcut |
|---|---|
| „Acesta nu este un model ModelCraft (nu este JSON).” | Folosiți {{ui:Import}} pentru alte formate |
| „Acesta nu este un fișier ModelCraft pe care îl putem deschide: …” | Fișierul este deteriorat sau a fost modificat manual |
| „Acest model a fost salvat de o versiune ModelCraft mai nouă…” | Deschideți-l în versiunea mai nouă |
| „Acest fișier are peste 200 MB.” | Modelul este prea mare pentru a fi deschis aici |

## Am pierdut lucru

ModelCraft nu salvează singur într-un fișier. Când închideți sau reîncărcați o filă cu modificări nesalvate, browserul întreabă întâi („Părăsiți site-ul?” sau „Reîncărcați site-ul?”); alegeți să rămâneți și să salvați. Nou și Deschidere întreabă și ele („Modificări nesalvate”). Dacă browserul sau calculatorul s-a blocat, deschideți din nou ModelCraft în același browser: el vă oferă lucrul nesalvat înapoi („Recuperați lucrarea?”; vezi [Recuperarea lucrării](common:recover)). Salvați des cu {{key:Mod+S}}.

## Dosarul de descărcări se umple cu copii

Fiecare salvare este o nouă descărcare, numită `Untitled (1).modelcraft`, `Untitled (2).modelcraft` și așa mai departe. Ștergeți-le pe cele vechi sau setați browserul să întrebe unde să salveze fiecare fișier și să suprascrie singur fișierul vechi. Vezi [Deschidere, salvare, import și export](topic:files#save-a-model).

## Devine lent

- Fiecare pas de anulare păstrează o copie a modelului (o [plasă](topic:meshes) păstrează doar ce s-a schimbat), deci la un import foarte mare de geometrie împinsă/trasă fiecare modificare durează mai mult. Descompuneți sau ștergeți ce nu aveți nevoie, salvați și redeschideți: redeschiderea șterge și istoricul de anulare.
- Umbrele de la soare costă cel mai mult. Debifați {{ui:Umbre de la soare}} cât timp modelați.

## Fără umbre

{{ui:Umbre de la soare}} este dezactivat, soarele este sub orizont la ora aleasă („Soarele este sub orizont în acest moment.”) sau stilul este {{ui:Cadru de sârmă}}, care nu desenează umbre.

## „Acest browser nu a permis ecranul complet.”

Unele browsere și unele vederi încorporate refuză ecranul complet. Folosiți în schimb ecranul complet al browserului ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft nu se deschide fără conexiune

ModelCraft se deschide offline doar dacă a fost salvat pentru utilizare offline în acel browser: butonul din bara aplicației trebuie să arate {{ui:Pregătit pentru offline}}. Deschideți-l când sunteți online și faceți clic pe {{ui:Salvare pentru offline}}. Dacă butonul arată {{ui:Nu s-a putut salva}}, faceți clic din nou pe o conexiune mai bună; {{ui:Modul offline nu este disponibil}} înseamnă că această fereastră (o fereastră privată sau un calculator administrat) nu poate păstra o copie. Vezi [Lucrul offline](common:offline).
