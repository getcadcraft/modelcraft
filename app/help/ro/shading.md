---
title: Crearea materialelor cu noduri
summary: Construiți un material din texturi, imagini și calcule în spațiul de lucru Umbrire, vedeți-l în vizualizare pe măsură ce lucrați și vopsiți fețele cu el.
keywords: umbrire, coacere, coacere de texturi, ocluzie ambientală, ao, curbură, coacere de normale, detaliu înalt, detaliu scăzut, hartă de lumină, decal, decaluri, autocolant, logo, etichetă, pictare textură, pensulă, material, materiale, materialx, mtlx, openpbr, standard surface, bibliotecă de materiale, librarycraft, set de texturi, pbr, import texturi, zip, cc0, glisare, nod, noduri, editor de noduri, shader, textură, procedural, zgomot, tablă de șah, voronoi, celule, valuri, cărămizi, plăci, lemn, marmură, gradient, murdărie, uzură a muchiilor, rampă de culori, amestec, bump, hartă de normale, rugozitate, metalitate, opacitate, decupare, emisie, strălucire, deplasare, mapare pe cutie, triplanar, uv, imagine, textură de imagine, openpbr
from: d7368b21
---

Un material realizat în spațiul de lucru **Umbrire** aparține fișierului. Este un graf mic: **noduri** care produc texturi, imagini și numere, legate la **Ieșire material**, ale cărei intrări sunt aspectul suprafeței (culoarea de bază, rugozitatea, metalitatea, normala, opacitatea, emisia și restul modelului OpenPBR). Vopsiți fețele cu el ca pe orice material din bibliotecă, iar fiecare modificare apare imediat în vizualizare.

## Deschiderea

Alegeți {{ui:Umbrire}} din lista **Spațiu de lucru**. Vizualizarea 3D păstrează partea de sus a ecranului, iar **editorul de noduri** ocupă partea de jos. Panoul din dreapta listează materialele proprii ale fișierului.

- {{ui:Material nou}} creează unul gri, cu doar Ieșirea materialului.
- **Faceți o copie editabilă a unui material din bibliotecă** transformă cărămida, lemnul, placa și restul într-un graf pe care îl puteți modifica: textura lor trece printr-un nod Textură din bibliotecă, iar relieful lor printr-un nod Bump.
- {{ui:Pictare cu el}} vopsește fețele sau grupurile selectate ori alege materialul pentru instrumentul Vopsire. Materialele instrumentului de vopsire listează și materialele fișierului sub **În acest fișier**.
- {{ui:Duplicare}} și {{ui:Ștergere}} lucrează asupra materialului pe care îl editați. Ștergerea nu poate fi anulată: fețele vopsite cu el arată culoarea implicită până când le vopsiți din nou.

## Materiale din bibliotecă

**Biblioteca de materiale (Library)** din panou listează materialele bibliotecii, fiecare cu o previzualizare randată de trasorul de traiectorii al CadCraft. Sunt seturi de texturi publicate sub CC0, creditate celor care le-au realizat.

- Faceți clic pe unul ca să îl aduceți în fișier (cu imaginile lui) și, cu fețe sau grupuri selectate, să le vopsiți.
- Glisați unul pe o față sau pe un grup din vizualizare ca să vopsiți doar acolo.
- Devine unul dintre materialele fișierului: schimbați-i nodurile ca pe orice altul. Creditul lui apare în panou și rămâne în fișier.

## Importul unui set de texturi

{{ui:Imagini sau un zip…}} sau {{ui:Un dosar…}} sub **Importare set de texturi** face un material dintr-un set de hărți. Hărțile sunt recunoscute după cuvintele din numele fișierelor: color, albedo, diffuse sau basecolor; roughness (sau gloss, transformat în rugozitate); metalness sau metallic; normal (OpenGL sau DirectX, din `gl` / `dx` din nume); height sau displacement; ambient occlusion; opacity; emission. Hărțile împachetate (ARM, ORM) sunt lăsate deoparte. Dala pornește de la 1 × 1 m: setați-i dimensiunea reală pe Ieșirea materialului. Înălțimea merge la deplasare, cu scara la 0; măriți scara ca s-o folosiți pe plase.

## MaterialX

MaterialX este formatul deschis pe care alte programe 3D și de randare îl folosesc ca să transmită materialele.

- {{ui:Exportare ca MaterialX…}} salvează materialul pe care îl editați: valorile lui și fiecare textură ca imagine PNG lângă fișierul `.mtlx` (într-un zip). Alegeți shaderul în care este scris: **OpenPBR Surface** (MaterialX 1.39, același model pe care îl folosește ModelCraft) sau **Standard Surface** (MaterialX 1.38, pe care îl citesc mai multe programe astăzi). Texturile sunt plasate după coordonatele UV în metri; plasarea pe cutie și cea triplanară sunt scrise ca UV.
- {{ui:Importare MaterialX…}} (sau {{ui:Dintr-un dosar…}}) citește fișierele `.mtlx` cu shadere OpenPBR, Standard Surface, UsdPreviewSurface sau glTF PBR. Dați-i și imaginile sau un zip cu tot: o imagine este găsită după cale, după nume sau după numele ei cu alt tip de imagine (un fișier `.exr` poate fi însoțit de un `.jpg` cu același nume, alături). Texturile, hărțile de normale, aritmetica, amestecurile și deplasarea intră ca noduri; orice altceva își păstrează valoarea, iar linia de stare spune ce a fost lăsat deoparte.

## Decaluri

Un decal este o imagine așezată pe o suprafață (un logo, un semn, o etichetă, o pată), cu un material propriu.

- Setați **Lățimea unui decal nou**, apoi {{ui:Plasați un decal…}} (sau {{ui:Decal}} din bara de instrumente), alegeți o imagine PNG, JPEG sau WebP și faceți clic pe o față. Imaginea este proiectată pe suprafețele de acolo, păstrându-și proporțiile; părțile transparente ale unui PNG rămân transparente.
- Aparține grupului sau componentei pe care ați făcut clic și se mișcă odată cu ea. Acoperă fețele din interiorul casetei sale care sunt orientate în același fel și se oprește la marginile obiectului pe care stă.
- Fiecare decal are propriul material, numit **Decal: <imagine>**, în lista fișierului: editați-l ca pe oricare altul (rugozitate, relief, strălucire). {{ui:Material}} de lângă decal îl deschide.
- Lângă fiecare decal: lățimea lui (înălțimea urmează imaginea), {{ui:Rotire}} (un sfert de rotație) și {{ui:Ștergere}}. Decalurile sunt păstrate împreună cu materialele fișierului, în afara Anulării.
- Apar în vizualizarea cu umbrire, în randările rapide și în imaginile de calitate înaltă.

## Pictarea pe textură

{{ui:Pictare textură}} (sau {{ui:Vopsire}} sub **Pictare pe textură**) transformă indicatorul într-o pensulă rotundă. Trageți pe o față care poartă unul dintre materialele acestui fișier: pensula pictează imaginea din spatele culorii de bază.

- Pe o plasă pictează după UV-urile plasei (desfaceți-o mai întâi în spațiul de lucru UV); pe alte fețe pictează peste față, astfel încât pictura se repetă odată cu dala materialului.
- Un material a cărui culoare de bază este o culoare simplă primește, la prima pictare, o imagine nouă de 512 × 512 pixeli în acea culoare. Un material a cărui culoare de bază vine din alte noduri are nevoie de un nod Imagine legat la Culoare de bază.
- Setați culoarea pensulei, dimensiunea (în pixeli ai imaginii), intensitatea și duritatea în panou. {{ui:Anulare traseu}} sau Ctrl+Z (în timpul pictării) anulează un traseu, până la ultimele 20.
- Imaginea pictată este salvată în fișier. Materialele din bibliotecă nu pot fi pictate: faceți mai întâi o copie editabilă.

## Coacerea texturilor

**Coacere texturi** scrie în imagini ce oferă forma și scena unei suprafețe, de-a lungul UV-urilor unei plase.

- Selectați o plasă care are UV-uri (desfaceți-o în spațiul de lucru UV), bifați hărțile și apăsați {{ui:Coacere}}:
  - **Ocluzie ambientală**: cât de deschis este fiecare punct. Colțurile, cutele și locurile de sub alte lucruri se întunecă. Tot ce se vede în model o umbrește, până la distanța de ocluzie.
  - **Curbură**: luminos de-a lungul muchiilor exterioare, întunecat în colțurile interioare, gri mediu pe porțiunile plate sau ușor curbate, peste lățimea muchiei pe care ați setat-o.
  - **Normale din obiectul cu detaliu fin**: selectați și o copie detaliată. Detaliul ei de suprafață este scris ca hartă de normale pentru cea mai simplă (se coace pe obiectul cu mai puține triunghiuri). Distanța de căutare este cât de departe pot fi cele două suprafețe una de alta.
  - **Iluminare**: soarele locului și al datei modelului (Stil), cu umbrele lui, plus cerul, ca hartă de lumină.
- Imaginile se alătură fișierului și apar în nodurile Imagine. Dacă materialul pe care îl editați are un nod **Murdărie și uzură a muchiilor**, acesta citește imediat noile ocluzie și curbură.
- Mai multe raze pe texel fac ocluzia și iluminarea mai netede, dar durează mai mult. Coacerea rulează în fundal, pe nucleele procesorului; {{ui:Oprire coacere}} o oprește.

## Construirea unui graf

1. {{ui:Adăugare nod…}} (sau {{key:Shift+A}} în editorul de noduri) adaugă un nod în mijlocul editorului.
2. Glisați de la un punct de ieșire (în dreapta unui nod) la un punct de intrare (în stânga unui nod) ca să le legați. O a doua legătură într-o intrare o înlocuiește pe prima; glisați o intrare legată în afară ca s-o dezlegați.
3. Intrările nelegate arată valoarea lor: tastați un număr sau alegeți o culoare. Setările se află în partea de jos a fiecărui nod.

Glisați un nod de titlu ca să îl mutați, glisați spațiul gol ca să panoramați și folosiți roata ca să măriți. {{key:Delete}} șterge nodurile sau legătura selectată, {{key:Mod+Z}} anulează, {{key:Mod+D}} duplică, iar {{key:F}} arată toate nodurile. Fiecare modificare este un pas de anulare al editorului de noduri. Anularea modelului nu schimbă materialele.

| Noduri | Ce produc |
|---|---|
| Coordonate de textură | Unde se află un punct pe dală: îl repetă, îl deplasează, îl rotește cu un sfert. |
| Valoare, Culoare | Un număr, o culoare. |
| Imagine | O imagine a fișierului (una venită cu un model importat sau una adăugată cu {{ui:Adăugați o imagine…}}). Alegeți **Culori** pentru o fotografie și **Date** pentru o hartă de rugozitate sau de normale. |
| Textură din bibliotecă | Textura, rugozitatea și înălțimea unui material din bibliotecă. |
| Tablă de șah, Zgomot | Pătrate; zgomot fractal neted, cu detaliul, rugozitatea și sămânța lui. |
| Celule Voronoi, Valuri, Gradient | Celule (distanța până la cel mai apropiat punct, muchiile dintre celule, o culoare pentru fiecare celulă); benzi transversale, verticale sau diagonale, ca sinus, dinte de fierăstrău sau triunghi, îndoite de zgomot; gradiente liniare, pătratice, radiale și sferice. |
| Cărămizi, Plăci | Rânduri de cărămizi cu decalaj de rând sau o grilă de plăci: culori, mortar sau rost, un spațiu și o teșitură în metri, o înălțime pentru relief, un număr aleator pentru fiecare piesă. |
| Lemn, Marmură | Inele de-a lungul fibrei, cu fibre fine; vine îndoite de turbulență. |
| Murdărie și uzură a muchiilor | Uzează muchiile convexe și murdărește golurile, după imaginile de curbură și ocluzie ale unei plase ([Coacere texturi](topic:shading#bake-textures) le produce; sau setați cele două setări de imagine ale nodului, în aranjamentul UV al plasei: plasați materialul după coordonatele UV). Fără ele nu schimbă nimic. |
| Amestecare culori, Rampă de culori, Nuanță/saturație/valoare, Luminozitate și contrast, Inversare, Gamma, Separare și combinare RGB | Lucru cu culori. |
| Matematică, Interval de mapare | Aritmetică pe numere (adunare, înmulțire, putere, pas neted și altele). |
| Bump, Hartă de normale | O normală dintr-o înălțime (Bump) sau dintr-o imagine de hartă de normale (Hartă de normale: alegeți direcția canalului verde). |

## Ieșirea materialului

Setările ei spun cum stă textura pe suprafețe:

- **Lățimea dalei** și **Înălțimea dalei**: câți metri acoperă o dală a texturii. Tot ce produce un graf se repetă pe dală fără îmbinare.
- **Plasat după**: **Coordonate UV** urmează fețele (fețele împinse/trase: de-a lungul fiecărei fețe; plasele: UV-urile lor, o unitate UV = o dală), **Cutie** proiectează din cea mai apropiată dintre cele trei axe, iar **Triplanar** amestecă cele trei proiecții pe suprafețele înclinate (**Asprimea amestecului**: valoarea mai mare înseamnă un amestec mai tăios).
- **Intensitatea normalei** scalează intrarea normală. **Scara deplasării** stabilește cât de departe mută intrarea de deplasare vârfurile unei plase.
- {{ui:Mai multe intrări}} arată restul intrărilor OpenPBR: stratul de acoperire (coat), puful (fuzz), subsuprafața, pelicula subțire (thin film), transmisia și culorile lor.

## În imaginile de calitate înaltă

Trasorul de traiectorii citește culoarea de bază, rugozitatea, metalitatea, opacitatea, normala și emisia din graf, pe măsură ce se schimbă pe suprafață. Orice altă intrare pe care o legați (un strat de acoperire care variază, de exemplu) este folosită la media ei; panoul spune care. O decupare dintr-o textură de opacitate își arată forma, iar umbra ei este uniform transparentă. O textură strălucitoare luminează ce are în față, fără să fie eșantionată ca o lampă.

**Deplasarea** mută vârfurile doar ale plaselor, așa că adăugați un modificator de subdiviziune pentru detalii ([Modificatori](topic:modifiers)). Fețele împinse/trase își păstrează forma și primesc reliefurile din normală.

:::tip
Pe un calculator cu WebGPU, graful este calculat pe placa grafică; fără el, pe procesor. Rezultatul este același.
:::
