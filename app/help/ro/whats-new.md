---
title: Noutăți în versiunea 0.9
summary: Etapa de imprimare cu slicerul propriu și trimiterea prin USB, Klipper, OctoPrint și PrusaLink, slicing pentru rășină și suplimente de fișiere, flux de materiale, gemen digital și suplimente pentru hala de producție, racordări NURBS, îngroșare și potrivire la scanare, AR pe șantier și zece metode de arc.
keywords: noutăți, ce e nou, note de lansare, jurnal de modificări, 0.9, etapa de imprimare, imprimare 3D, trimitere la imprimantă 3D, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, rășină, imprimare cu rășină, goo, sl1, ctb, anycubic, test de expunere, flux de materiale, gemen digital, hală de producție, plc, transportor, nurbs, racordare, îngroșare, potrivire la scanare, ar, pe șantier, metode de arc, unități, versiune, funcții noi, motor de randare, motor, deschidere în, usd, gltf, unreal, suplimente, suprafețe, lofting, baleiere, continuitate, g0, g1, g2, zebra, step, iges, spune scena, scenă, vreme, moment al zilei, anotimp, asistent, material dintr-o fotografie, fotografie, fotografie de schiță, mobilare, mobilare o cameră, tăietură înclinată, separare, verificare imprimare, probleme, grilă de proprietăți, lămpi, limbi, dispozitive de intrare, rânduri de bară de instrumente, dwg, live
from: 169048a2
---

Aceasta este lista modificărilor din ModelCraft 0.9, comparativ cu 0.8.1. ModelCraft ajunge acum până la imprimantă și la hala de producție: puteți pune lucruri pe patul de imprimare și le trimiteți fără export, faceți slicing pentru filament sau rășină și aranjați o linie de manipulare a materialelor. Aceasta este CadCraft Studio 0.9 și cele opt aplicații ale sale; majoritatea funcțiilor noi de mai jos sunt suplimente.

## Noutăți

### Imprimare 3D

- **Etapa de imprimare.** Faceți clic pe {{ui:Etapa de imprimare}} din bara de instrumente. Adăugați elemente din bibliotecă pe patul imprimantei, aranjați-le, priviți straturile tăiate și apăsați {{ui:Trimitere la imprimanta 3D}}, fără niciun STL de exportat. Ține de suplimentul 3D Print, care este activat implicit și poate fi scos ca orice supliment. Vezi [Puneți lucrurile pe patul de imprimare și trimiteți-le la o imprimantă](topic:print-stage).
- **Slicerul propriu pentru filament.** {{ui:CadCraft basic (inclus, cel mai rapid)}} este slicerul din lista **Slicer** a cardului: pereți, pieli, umplutură, suporturi și un chenar, pe un worker, ca pagina să rămână utilizabilă. {{ui:Previzualizare straturi}} cu glisorul **Strat** arată straturile înainte să trimiteți. Profilele de imprimantă, precum stilurile Ender-3 și Prusa MK4, au propriul G-code de pornire.
- **Trimiterea.** Prin USB (Chrome sau Edge pe un calculator, cu pagina ținută deschisă) sau către Klipper (Moonraker), OctoPrint ori PrusaLink în rețeaua locală. Nimic nu se conectează și nu trimite fără un clic, iar trimiterea cere confirmare.
- **Alte slicere.** Kiri:Moto, PrusaSlicer și OrcaSlicer sunt suplimente proprii, dezactivate implicit; adăugați-le din card sau din {{ui:Setări}} › {{ui:Suplimente}}. PrusaSlicer și OrcaSlicer folosesc copia instalată din CadCraft Studio. Suplimentul pentru imprimantele Bambu Lab face slicing cu OrcaSlicer și cu presetările sale P2S și are nevoie de Studio pe un calculator.
- **Imprimare cu rășină.** Suplimentele pentru rășină (dezactivate implicit) fac imagini de strat pentru ecranul imprimantei, cu goluri și orificii de aerisire, o plută și suporturi, o previzualizare a straturilor și timpul, rășina și costul. Suplimentele de format de fișier scriu Elegoo GOO, SL1, Chitubox (CBDDLP și CTB 2 până la 5) și Anycubic (PWMX și PWS). Un test de expunere pentru rășină face o scară cu cinci expuneri. Vezi [Slicing pentru o imprimantă cu rășină](topic:resin-printing).
- **Nemodificate.** {{ui:Exportare}} › {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}, uneltele de imprimare și Împărțirea pentru imprimare funcționează ca în 0.8. Vezi [Pregătirea unui model pentru imprimare 3D](topic:print-3d).

### Flux de materiale, gemen digital și hală de producție

Acestea trei sunt suplimente, oprite până le activați în {{ui:Setări}} › {{ui:Suplimente}}, iar fiecare are propriul ajutor când este activat.

- **Flux de materiale.** Un panou numit Flux de materiale așază transportoare, stații, tampoane și trasee AGV în vederea 3D, rulează o simulare cu valoare inițială fixă, o redă și arată debitul, timpii de livrare și cozile, cu rezultatele salvate ca CSV. Comenzile pot veni dintr-un fișier CSV. Celulele robot pot fi verificate și exportate. Legătura PLC are un mod software și un mod real peste Modbus TCP, care funcționează doar în CadCraft Studio.
- **Gemen digital.** Citește aspectul fluxului de materiale și rulează pe el un PLC software, cu defecte pe care le puteți forța, teste de stoc, o comparație de aspecte și o listă de materiale.
- **Hala de producție.** Transformă stațiile în mașini și celule, le citește live sau dintr-un simulator și ține o coadă de lucrări și un OEE simplu. Doar citește: această versiune nu poate scrie pe o mașină sau pe un PLC.

### Suprafețe, modele și desen

- **Racordări, îngroșare și booleene pe NURBS.** Panoul {{ui:Suprafețe}} are {{ui:Racordare între fețe}}, {{ui:Racordare mai multor muchii}}, {{ui:Îngroșare în solid}} și Reuniune, Scădere și Intersecție, fiecare cu abaterea măsurată. Vezi [Suprafețe libere (NURBS)](topic:nurbs-surfaces).
- **Potrivirea suprafețelor la o scanare.** Selectați o plasă scanată și folosiți {{ui:Potrivire suprafețe la scanare}} din grupul **Scanare**, apoi {{ui:Cusătura suprafețelor într-un solid}}. Este o potrivire inițială, nu un pachet complet de reconstrucție inversă.
- **O legătură live dintr-un modelator .3dm.** Într-un singur sens, din Rhino 8 sau Grasshopper, și are nevoie de CadCraft Studio pe același calculator. Vezi [Păstrarea unui model .3dm actualizat](topic:live-3dm-link).
- **Vedeți modelul pe șantier.** {{ui:Vizualizare pe teren (AR, telefon)}} din meniul {{ui:Vederi}} funcționează pe un telefon Android cu Chrome. Vezi [Vedeți modelul pe șantier cu un telefon Android (AR)](topic:ar-on-site).
- **Metode de arc.** Lista {{ui:Metode de arc}} oferă zece moduri de a desena un arc, inclusiv {{ui:3 puncte}} și {{ui:Început, Centru, Sfârșit}}.
- **Mai multe unități.** Greutățile (kg, lb, t, ton) și temperaturile (grade C, F, K și R) sunt înțelese acolo unde scrieți valori cu unități.

## În fiecare aplicație

- **Sfaturi.** Textul care apare la plasarea cursorului peste butoane și etichetele tăiate este un sfat Bootstrap.
- **Sfat de pornire care se poate închide.** Cardul-sfat din zona goală de desen are un mic x de închidere. Rămâne închis, iar paleta de comenzi îl poate arăta din nou.
- **Benzi de file care derulează.** Banda de file a unui panou care nu încape derulează în loc să fie tăiată.
- **Titluri de file.** Cu un document deschis, fila browserului începe cu numele documentului, apoi ModelCraft și CadCraft. Un punct apare primul cât timp documentul nu este salvat.
- **Aspect.** {{ui:Setări}} › {{ui:General}} › Aspect ține aspectele într-o listă derulantă, cu o opțiune de a folosi un aspect doar pentru această aplicație și un buton ca să resetați aspectul.
- **Limbi.** Lista de limbi din Setări urmează fișierele de limbă pe care le conține versiunea. Alte limbi decât engleza sunt ciorne automate.
- **Live și Bibliotecă.** Live TeamWork arată cursoarele și numele celor prezenți, iar colecțiile din Bibliotecă dau fiecărei aplicații o colecție implicită.

## Corectate

- {{ui:Redare}} se transformă în {{ui:Pauză}} cât timp rulează o animație, iar {{key:Space}} redă și oprește cât timp cronologia este deschisă.
- Randarea imaginii trece pe WebGL când placa grafică nu poate porni trasatorul de cale. Vederea de randare live poate arăta încă eroarea; nu a fost verificat pe un calculator Windows cu acel driver.
- Modul real al legăturii Flux de materiale se reconectează acum după ce o legătură s-a oprit din cauza răspunsurilor de excepție PLC.

## Limite onești

- Nimic nu a fost imprimat pe o imprimantă reală: nici filament, nici rășină, nici prin Bambu Connect. Fișierele de rășină au fost citite înapoi doar de cititoarele proprii ale CadCraft.
- Gemenul digital și hala de producție au fost testate doar pe simulatoare și răspunsuri cunoscute, fără un PLC, o linie sau un protocol reale. Sunt instrumente de verificare, nu o validare de siguranță. Fizica acoperă doar cutii, până la opt sarcini.
- Legătura Rhino și Grasshopper nu a rulat niciodată în programele reale.
- Limbile diferite de engleză sunt ciorne automate.

## Anterioare: 0.8 și 0.8.1

Aceasta este lista modificărilor din ModelCraft 0.8 (2026-11-01) și 0.8.1 (2026-11-02), comparativ cu 0.7. Dialogul {{ui:Randare imagine…}} poate trimite acum scena către alt program, panoul Suprafețe face suprafețe netede libere, iar un asistent conectat poate seta o scenă întreagă dintr-o singură propoziție.

### Noi

**Randare**

- **O alegere de motor.** {{ui:Randare imagine…}} are o listă **Motor** deasupra Modului. Motoarele noastre proprii, Rapid și Trasatorul de cale, sunt implicite și funcționează peste tot. Celelalte intrări salvează scena ca pachet (modelul ca fișier USD, plus un fișier de setări cu valorile exacte ale materialelor, lămpile aprinse, soarele, cerul, expunerea și camera), ca să fie dus în alt program. O imagine desenată de alt program spune ce program și ce versiune a făcut-o. Vezi [Alegeți programul care desenează imaginea](topic:render-engines).
- **Deschidere în alt program.** Lista Motor poate salva scena ca fișier USD, fișier glTF (`.glb`) sau dosar de proiect Unreal (`.zip`), în browser și în CadCraft Studio. În Studio poate porni și usdview sau programul calculatorului pentru fișier. Vezi [Deschiderea scenei în alt program](topic:render-open-in).
- **Trimiterea către un motor de joc din Studio.** Studio scrie scena într-un proiect Unreal Engine și o ține la zi la fiecare trimitere, doar într-un sens. Modificările proprii trăiesc într-un strat pe care CadCraft nu îl scrie niciodată. Vezi [Trimiterea scenei către un motor de joc](topic:render-unreal).
- **Motoare din suplimente.** Un supliment poate adăuga un motor în listă. Unul scris în JavaScript desenează în browser și în Studio; unul care rulează un program cere acordul utilizatorului în Studio. Vezi [Desenarea imaginii cu alt program](topic:render-other-program) și [Adăugarea unui motor de randare cu un supliment](topic:render-engine-addons).
- **Spuneți scena.** Spuneți asistentului conectat „amurg, ploaie ușoară, copaci de toamnă, oameni pe esplanadă” și ModelCraft o pregătește dintr-un pas: soarele se mută la data și ora potrivite ca umbrele să urmeze, cerul se schimbă, apar suprafețe ude, iar copacii și oamenii sunt plasați ca obiecte reale, pe etichete pe care le puteți ascunde, muta sau șterge. Momentul zilei, data sau anotimpul și vremea (senin, înnorat, ceață, ploaie ușoară, ploaie, furtună) funcționează și singure, iar o cerere ulterioară schimbă aceeași scenă. Ceața apare în imaginea de calitate înaltă pe placa grafică; celelalte motoare arată cerul, lumina și suprafețele ude. Ploaia nu este desenată ca dungi care cad.

**Materiale**

- **Un material dintr-o fotografie.** Dați ModelCraft o fotografie a unei suprafețe (un perete, o podea, piatră) și face un material care se repetă: iluminarea de pe fotografie este uniformizată, marginile sunt făcute să se unească, iar o hartă de culoare, una de rugozitate și una de normale sunt calculate din imagine. Este prelucrare simplă de imagine pe propria fotografie, fără model antrenat. Rugozitatea este o estimare. O fotografie plată, pătrată, frontală dă cea mai bună dală; un model puternic, precum cărămizile, poate lăsa o umbră moale acolo unde îmbinarea este amestecată.

**Suprafețe**

- **Suprafețe libere.** Panoul {{ui:Suprafețe}} face curbe NURBS și suprafețe netăiate: curbe prin puncte, lofting, reglate, extrudare, revoluție, baleieri pe una sau două șine, suprafețe dintr-o rețea de curbe, petice din patru muchii, potrivire și amestec. Fiecare muchie comună este măsurată ca G0, G1 sau G2 (gol, unghi, salt de curbură) pe suprafețele exacte, iar o muchie mai slabă decât ați cerut apare în panoul Probleme, cu o corecție **Potrivire**. Dungile zebră și culorile de curbură sunt desenate din suprafețele exacte. Fișierele STEP și IGES ies și intră. Vezi [Suprafețe libere (NURBS)](topic:nurbs-surfaces).

**Șantier și camere**

- **O fotografie de schiță pe teren.** {{ui:Fișier}} › {{ui:Importați o fotografie de schiță…}} transformă o fotografie de pe telefon a unei schițe de mână în muchii pe teren, la scara indicată: un grup, cu o etichetă pentru fiecare culoare de pix. Foaia este găsită și îndreptată pe calculator, iar nimic nu este trimis nicăieri. Vezi [Model pe un plan de amplasament](topic:site-plan).
- **Mobilarea unei camere.** Selectați o podea și folosiți {{ui:Organizare}} › {{ui:Mobilare o cameră…}}. Mobila pentru dormitor, living, sală de mese, bucătărie, baie sau birou este plasată după reguli, lângă pereți și fără să blocheze uși și ferestre, într-un grup pe care îl puteți lua dintr-un pas. Este un aspect implicit de verificat, nu un design. Vezi [Bibliotecă de pornire](topic:starter).

**Imprimare 3D**

- **Tăieturi înclinate.** Împărțirea pentru imprimare poate înclina tăieturile cu până la 60 de grade, ceea ce dă piesele mai multă suprafață de lipire. Conectorii stau perpendicular pe tăietură. Vezi [Împărțirea unui model pentru imprimare](topic:print-split).
- **Verificarea imprimării în Probleme.** Constatările verificării pentru imprimare 3D apar în panoul Probleme, cu marcaje pe model, iar {{ui:Reparare}} le corectează de acolo. Vezi [Suporturi, grosimea peretelui, golirea și repararea](topic:print-tools).

**În fiecare aplicație**

- **Limbi.** Ajutorul și aplicațiile vin în 54 de limbi. Zece sunt noi: lituaniana, letona, bosniaca, marathi, telugu, albaneza, afrikaans, filipineza, swahili și uzbeca. Limbile diferite de engleză sunt ciorne automate până le citește un vorbitor nativ, iar subiectele de ajutor pot fi încă în engleză.
- **Dispozitive de intrare.** Un touchpad, un creion, un mouse 3D, un controler de joc și comenzile MIDI pot conduce aplicațiile, pentru toate sau pentru una singură.
- **Rânduri de bară de instrumente.** {{ui:Setări}} › {{ui:General}} › Rânduri de bară de instrumente stabilește Încadrare (ca înainte), 2 rânduri sau 1 rând. O bară care nu încape derulează lateral, în loc să ia spațiu din desen. Încadrarea rămâne implicită.
- **Grila de proprietăți.** Câmpurile de lămpi din ModelCraft folosesc grila comună: categorii pliabile, coloane de etichetă și valoare, și densitate Compactă. Aritmetica scrisă, precum `2*450`, merge în continuare.
- **Probleme.** Panoul Probleme (butonul de avertizare din bara aplicației) este comun tuturor aplicațiilor. În ModelCraft conține verificarea pentru imprimare și avertismentele de continuitate a suprafețelor.
- **Live.** O sesiune Live TeamWork arată cine este unde. Vezi [Modelarea împreună cu Live TeamWork](topic:work-live).
- **Suplimente.** Suplimentele pot adăuga motoare de randare, ca mai sus.
- **Conectarea propriului AI.** Contractul uneltelor și verificările celor opt aplicații trec, cu 454 de unelte în total. Conectarea dintr-un singur clic în Studio, un conector găzduit pentru asistenții din browser, cheia proprie în Studio și un pachet publicat nu sunt promise încă. Aplicațiile nu conțin AI propriu. Vezi [Utilizarea ModelCraft cu un asistent AI](topic:use-with-ai-assistants).

### Corectate în 0.8.1

- **Secțiunea de clase DWG.** Secțiunea de clase a unui fișier DWG era citită ca tip greșit, ceea ce putea strica fișierul la import. Acum este citită corect, în ModelCraft și în celelalte aplicații care citesc DWG.
- **Tablete în portret.** Înălțimea rămasă a grilei merge la pânză, iar aspectul foii începe la 760 de pixeli lățime sau mai puțin. Foaia de stiluri ModelCraft are și ea modificarea.
- **Limba în Studio.** CadCraft Studio și edițiile împachetate pot schimba limba cât rulează; înainte erau doar în engleză. Nu a fost testat încă pe toate platformele: spuneți-ne dacă limba nu se schimbă.

### Neincluse în această versiune

- **Nesemnată cu cod.** Windows poate afișa SmartScreen: alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulare oricum}}. Pe Mac, faceți clic dreapta și alegeți {{ui:Deschidere}}. Versiunile pentru magazine sunt suspendate, iar versiunea pentru iPad și iPhone nu a fost refăcută pentru 0.8.1.
- Un alt program care desenează imaginea fără un supliment de motor de randare, panorame sau camere stereo și o imagine de cer printr-un alt program nu există încă, iar modulul care deschide scena Unreal nu există încă. Fișierele sunt scrise; modulul nu este lansat și nu a fost rulat în Unreal.
- Suprafețe libere: G3 și clasa A nu sunt măsurate sau garantate, iar tăierea și solidele vin mai târziu.
- Imaginile din alte programe nu sunt pixel cu pixel ca ale noastre: doar camera, soarele, lămpile și expunerea se potrivesc.
- Corecția din 0.8.1 pentru schimbarea limbii în Studio nu a fost testată pe toate platformele.

Restul se află în [Încă nerealizat](topic:not-built-yet). Pentru versiunea anterioară, vezi [Noutăți în versiunea 0.7](topic:whats-new-0-7).
