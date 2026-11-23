---
title: Noutăți în 0.9 (anterior)
summary: Etapa de imprimare cu slicerul propriu și trimitere prin USB, Klipper, OctoPrint și PrusaLink, felierea pentru rășină și suplimentele pentru fișiere, fluxul de materiale, suplimentele pentru gemenul digital și pentru hala de producție, racordări NURBS, îngroșare și potrivire la scanare, AR pe teren și zece metode de arc.
keywords: noutăți 0.9, versiune anterioară, noutăți, note de lansare, jurnal de modificări, 0.9, etapa de imprimare, imprimare 3d, trimitere la imprimanta 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, rășină, imprimare cu rășină, goo, sl1, ctb, anycubic, test de expunere, flux de materiale, geamăn digital, hală de producție, plc, transportor, nurbs, racordare, îngroșare, potrivire la scanare, ar, pe teren, metode de arc, unități, noutăți, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, motor de randare, motor, deschidere în, usd, gltf, unreal, motor al suplimentelor, suprafețe, loft, baleiere, continuitate, g0, g1, g2, zebra, step, iges, descrierea scenei, scenă, vreme, pora zilei, anotimp, asistent, material dintr-o fotografie, fotografie, fotografie de schiță, mobilare, mobilare o cameră, înclinare, tăiere înclinată, separare, verificare pentru imprimare, probleme, grilă de proprietăți, lămpi, limbi, dispozitive de intrare, rânduri de bară de instrumente, dwg, live
from: 2717d1b1
---

Aceasta este lista modificărilor din ModelCraft 0.9, comparativ cu 0.8.1. ModelCraft ajunge acum la imprimantă și la hala de producție: puteți așeza lucruri pe platforma de imprimare și le puteți trimite fără export, puteți feliea pentru filament sau rășină și puteți aranja o linie de manipulare a materialelor. Aceasta este CadCraft Studio 0.9 și cele opt aplicații ale sale; majoritatea funcțiilor noi de mai jos sunt suplimente.

## Noutăți

### Imprimare 3D

- **Etapa de imprimare.** Faceți clic pe {{ui:Etapa de imprimare}} din bara de instrumente. Adăugați elemente din Bibliotecă pe platforma imprimantei, aranjați-le, parcurgeți straturile feliate și apăsați {{ui:Trimitere la imprimanta 3D}}, fără a exporta un STL. Ține de suplimentul Imprimare 3D, care este activat implicit și poate fi eliminat ca orice supliment. Vedeți [Plasarea obiectelor pe platforma de imprimare și trimiterea lor la o imprimantă](topic:print-stage).
- **Slicerul nostru pentru filament.** {{ui:CadCraft basic (inclus, cel mai rapid)}} este slicerul din lista **Slicer** a cardului: pereți, pielițe, umplutură, suporturi și un chenar, pe un proces de fundal, astfel încât pagina rămâne utilizabilă. {{ui:Previzualizare straturi}} cu cursorul **Strat** arată straturile înainte de trimitere. Profilurile de imprimantă, precum stilurile Ender-3 și Prusa MK4, au propriul G-code de pornire.
- **Trimitere.** Prin USB (Chrome sau Edge pe calculator, cu pagina deschisă), sau către Klipper (Moonraker), OctoPrint ori PrusaLink din rețeaua dvs. Nimic nu se conectează și nimic nu se trimite fără un clic, iar trimiterea cere confirmare înainte.
- **Alte slicere.** Kiri:Moto, PrusaSlicer și OrcaSlicer sunt suplimente proprii, dezactivate implicit; adăugați-le din card sau din {{ui:Setări}} › {{ui:Suplimente}}. PrusaSlicer și OrcaSlicer folosesc copia dvs. instalată din CadCraft Studio. Suplimentul pentru imprimantele Bambu Lab feliază cu OrcaSlicer și cu presetările sale P2S și are nevoie de Studio pe calculator.
- **Imprimare cu rășină.** Suplimentele pentru rășină (dezactivate implicit) fac imagini de strat pentru ecranul imprimantei, cu golire și orificii de aerisire, plută și suporturi, previzualizare a straturilor, plus timp, rășină și cost. Suplimentele de format de fișier scriu Elegoo GOO, SL1, Chitubox (CBDDLP și CTB 2 până la 5) și Anycubic (PWMX și PWS). Un test de expunere pentru rășină face o scară de cinci expuneri. Vedeți [Feliere pentru o imprimantă cu rășină](topic:resin-printing).
- **Neschimbat.** {{ui:Exportare}} › {{ui:Verificare pentru imprimare 3D (STL sau 3MF)…}}, instrumentele de imprimare și {{ui:Separare pentru imprimare}} funcționează ca în 0.8. Vedeți [Pregătirea unui model pentru imprimare 3D](topic:print-3d).

### Flux de materiale, Geamăn digital și Hala de producție

Acestea trei sunt suplimente, dezactivate până când le activați în {{ui:Setări}} › {{ui:Suplimente}}, iar fiecare are propriul ajutor după activare.

- **Flux de materiale.** Un panou numit Flux de materiale așază transportoare, stații, tampoane și trasee AGV în vederea 3D, rulează o simulare cu sămânță, o redă și arată capacitatea, timpii de livrare și cozile, cu rezultatele salvate ca CSV. Comenzile pot veni dintr-un fișier CSV. Celulele robotizate pot fi verificate și exportate. Legătura PLC are un mod software și un mod real peste Modbus TCP, care funcționează doar în CadCraft Studio.
- **Geamăn digital.** Citește aranjamentul Fluxului de materiale și rulează un PLC software pe el, cu defecte pe care le puteți forța, teste de stoc, o comparație a aranjamentelor și o listă de materiale.
- **Hala de producție.** Transformă stațiile în mașini și celule, le citește live sau dintr-un simulator și ține o coadă de lucrări și un OEE simplu. Doar citește: această versiune nu poate scrie pe o mașină sau pe un PLC.

### Suprafețe, modele și desen

- **Racordări, îngroșare și operații booleene pe NURBS.** Panoul {{ui:Suprafețe}} are {{ui:Racordare între fețe}}, {{ui:Racordare mai multor muchii}}, {{ui:Îngroșare în solid}} și Reuniune, Scădere și Intersecție, fiecare cu abaterea măsurată. Vedeți [Suprafețe libere (NURBS)](topic:nurbs-surfaces).
- **Potrivirea suprafețelor la o scanare.** Selectați o plasă scanată și folosiți {{ui:Potrivire suprafețe la scanare}} din grupul **Scanare**, apoi {{ui:Cusătura suprafețelor într-un solid}}. Este o primă potrivire, nu un pachet complet de reconstrucție inversă.
- **O legătură live dintr-un modelor .3dm.** Într-un singur sens, din Rhino 8 sau Grasshopper, și are nevoie de CadCraft Studio pe același calculator. Vedeți [Menținerea unui model .3dm live](topic:live-3dm-link).
- **Vedeți modelul pe teren.** {{ui:Vizualizare pe teren (AR, telefon)}} din meniul {{ui:Vederi}} funcționează pe un telefon Android cu Chrome. Vedeți [Vizualizarea modelului pe teren cu un telefon Android (AR)](topic:ar-on-site).
- **Metode de arc.** Lista {{ui:Metode de arc}} oferă zece moduri de a desena un arc, inclusiv {{ui:3 puncte}} și {{ui:Început, Centru, Sfârșit}}.
- **Mai multe unități.** Greutățile (kg, lb, t, ton) și temperaturile (grade C, F, K și R) sunt înțelese acolo unde introduceți valori cu unități.

## În fiecare aplicație

- **Indicații la cursor.** Textul afișat la cursor pe butoane și etichetele tăiate este o indicație Bootstrap.
- **Sfat de pornire care poate fi închis.** Cardul de sfat din zona goală a desenului are un mic x de închidere. Rămâne închis, iar paleta de comenzi îl poate afișa din nou.
- **Benzi de file cu derulare.** Banda de file a unui panou care nu încape se derulează, în loc să fie tăiată.
- **Titluri de file.** Când un document este deschis, fila browserului începe cu numele documentului, apoi ModelCraft și CadCraft. Un punct apare primul cât timp documentul este nesalvat.
- **Aranjament.** {{ui:Setări}} › {{ui:General}} › Aranjament ține aranjamentele într-o listă derulantă, cu o opțiune de a folosi un aranjament doar pentru această aplicație și un buton de resetare a aranjamentului.
- **Limbi.** Lista de limbi din Setări urmează fișierele de limbă incluse în versiune. Limbile, altele decât engleza, sunt ciorne automate.
- **Live și Bibliotecă.** Live TeamWork arată cursoarele și numele în timp real, iar colecțiile din Bibliotecă dau fiecărei aplicații o colecție implicită.

## Corectări

- {{ui:Redare}} devine {{ui:Pauză}} cât timp rulează o animație, iar {{key:Space}} pornește și oprește redarea cât timp cronologia este deschisă.
- Randarea statică revine la WebGL atunci când placa grafică nu poate porni traseatorul de cale. Vizualizarea randării live poate afișa în continuare eroarea; aceasta nu a fost verificată pe un calculator Windows cu acel driver.
- Modul real al Fluxului de materiale se conectează din nou după ce o legătură s-a încheiat pe răspunsuri de excepție PLC.

## Limite reale

- Nimic nu a fost imprimat pe o imprimantă reală: nici cu filament, nici cu rășină, nici prin Bambu Connect. Fișierele pentru rășină au fost citite doar de cititoarele proprii ale CadCraft.
- Geamănul digital și Hala de producție au fost testate doar pe simulatoare și pe răspunsuri cunoscute, fără un PLC, o linie sau un protocol real. Sunt instrumente de verificare, nu o validare de siguranță. Fizica acoperă doar cutii, până la opt sarcini.
- Legătura cu Rhino și Grasshopper nu a rulat niciodată în programele reale.
- Limbile neengleze sunt ciorne automate.

## Anterior: 0.8 și 0.8.1

Aceasta este lista modificărilor din ModelCraft 0.8 (2026-11-01) și 0.8.1 (2026-11-02), comparativ cu 0.7. Dialogul {{ui:Randare imagine…}} poate trimite acum scena către un alt program, panoul Suprafețe face suprafețe libere netede, iar un asistent conectat poate seta o scenă întreagă dintr-o singură propoziție.

### Noutăți

**Randare**

- **O alegere de motor.** {{ui:Randare imagine…}} are o listă **Motor** deasupra Modului. Cele două motoare ale noastre, Rapid și Traseatorul de cale, sunt implicite și funcționează peste tot. Celelalte opțiuni salvează scena ca pachet (modelul ca fișier USD, plus un fișier de setări cu valorile exacte ale materialelor, lămpile aprinse, soarele, cerul, expunerea și camera) pentru a fi dus în alt program. O imagine desenată de alt program arată ce program și ce versiune au creat-o. Vedeți [Alegerea programului care desenează imaginea](topic:render-engines).
- **Deschidere în alt program.** Lista Motor poate salva scena ca fișier USD, ca fișier glTF (`.glb`) sau ca dosar de proiect Unreal (`.zip`), în browser și în CadCraft Studio. În Studio poate porni și usdview sau programul propriu al calculatorului pentru fișier. Vedeți [Deschiderea scenei în alt program](topic:render-open-in).
- **Trimitere către un motor de jocuri din Studio.** Studio scrie scena într-un proiect Unreal Engine și o ține sincronizată la fiecare trimitere, doar într-un sens. Modificările dvs. trăiesc într-un strat pe care CadCraft nu îl scrie niciodată. Vedeți [Trimiterea scenei către un motor de jocuri](topic:render-unreal).
- **Motoare din suplimente.** Un supliment poate adăuga un motor în listă. Unul scris în JavaScript desenează în browser și în Studio; unul care rulează un program cere acordul dvs. în Studio. Vedeți [Desenarea imaginii cu un alt program](topic:render-other-program) și [Adăugarea unui motor de randare cu un supliment](topic:render-engine-addons).
- **Descrierea scenei.** Spuneți asistentului conectat „amurg, ploaie ușoară, copaci de toamnă, oameni pe piață” și ModelCraft pregătește scena dintr-un pas: soarele se mută la data și ora potrivite, astfel încât umbrele urmează, cerul se schimbă, apar suprafețe ude, iar copacii și oamenii sunt plasați ca obiecte reale, pe etichete pe care le puteți ascunde, muta sau șterge. Ora zilei, data sau anotimpul și vremea (senin, noros, ceață, ploaie ușoară, ploaie, furtună) funcționează și singure, iar o cerere ulterioară schimbă aceeași scenă. Ceața apare în imaginea de calitate înaltă de pe placa grafică; celelalte motoare arată cerul, lumina și suprafețele ude. Ploaia nu este desenată ca dungi care cad.

**Materiale**

- **Un material dintr-o singură fotografie.** Dați ModelCraft o fotografie a unei suprafețe (un perete, o podea, piatră) și ea face un material de placare: iluminarea de pe fotografie este netezită, marginile sunt făcute să se îmbine, iar o hartă de culoare, o hartă de rugozitate și o hartă de normale sunt calculate din imagine. Este procesare simplă de imagine pe fotografia dvs., fără un model antrenat. Rugozitatea este o estimare. O fotografie plană, pătrată și frontală dă cea mai bună placare; un model puternic, precum cărămizile, poate lăsa o umbră moale acolo unde îmbinarea este estompată.

**Suprafețe**

- **Suprafețe libere.** Panoul {{ui:Suprafețe}} face curbe NURBS și suprafețe netăiate: curbe prin puncte, loft, reglate, extrudare, revoluție, baleieri de-a lungul uneia sau a două șine, suprafețe dintr-o rețea de curbe, petice din patru muchii, potrivire și îmbinare. Fiecare muchie comună este măsurată ca G0, G1 sau G2 (gol, unghi, salt de curbură) pe suprafețele exacte, iar o muchie mai slabă decât ați cerut apare în panoul Probleme cu o reparație **Potrivire**. Dungile zebra și culorile de curbură sunt desenate din suprafețele exacte. Fișierele STEP și IGES se exportă și se importă. Vedeți [Suprafețe libere (NURBS)](topic:nurbs-surfaces).

**Amplasament și camere**

- **O fotografie de schiță pe teren.** {{ui:Fișier}} › {{ui:Importați o fotografie de schiță…}} transformă o fotografie a unei schițe de mână, făcută cu telefonul, în muchii pe teren, la scara pe care o indicați: un grup, cu o etichetă pentru fiecare culoare de creion. Foaia este găsită și îndreptată pe calculatorul dvs., iar nimic nu se trimite nicăieri. Vedeți [Modelare pe un plan de amplasament](topic:site-plan).
- **Mobilarea unei camere.** Selectați o podea și folosiți {{ui:Organizare}} › {{ui:Mobilare o cameră…}}. Mobilierul de dormitor, de living, de sufragerie, de bucătărie, de baie sau de birou este plasat după reguli, lângă pereți și fără a bloca ușile și ferestrele, într-un grup pe care îl puteți îndepărta dintr-un pas. Este un aranjament implicit pe care îl revizuiți, nu un proiect. Vedeți [Bibliotecă de pornire](topic:starter).

**Imprimare 3D**

- **Tăieri înclinate.** {{ui:Separare pentru imprimare}} poate înclina tăieturile cu până la 60 de grade, ceea ce oferă piesele mai multă suprafață de lipire. Conectorii stau perpendicular pe tăietură. Vedeți [Separarea unui model pentru imprimare](topic:print-split).
- **Verificarea pentru imprimare în Probleme.** Constatările verificării pentru imprimare 3D apar în panoul Probleme, cu marcaje pe model, iar Reparare le rezolvă de acolo. Vedeți [Suporturi, grosimea peretelui, golire și reparare](topic:print-tools).

**În fiecare aplicație**

- **Limbi.** Ajutorul și aplicațiile vin în 54 de limbi. Zece sunt noi: lituaniana, letona, bosniaca, marathi, telugu, albaneza, afrikaans, filipineza, swahili și uzbeka. Limbile, altele decât engleza, sunt ciorne automate până când un vorbitor nativ le-a citit, iar subiectele de ajutor pot fi încă în engleză.
- **Dispozitive de intrare.** Un trackpad, un creion, un mouse 3D, un controler de jocuri și comenzile MIDI pot acționa aplicațiile, pentru toate sau pentru una singură.
- **Rânduri de bară de instrumente.** {{ui:Setări}} › {{ui:General}} › Rânduri de bară de instrumente setează Încadrare (ca înainte), 2 rânduri sau 1 rând. O bară care nu încape se derulează lateral, în loc să ia spațiu din desen. Încadrarea rămâne implicită.
- **Grila de proprietăți.** Câmpurile de lămpi ale ModelCraft folosesc grila comună: categorii care se pot restrânge, coloane de etichetă și valoare și densitatea Compactă. Calculele scrise, precum `2*450`, continuă să funcționeze.
- **Probleme.** Panoul Probleme (butonul de avertisment din bara aplicației) este comun tuturor aplicațiilor. În ModelCraft conține verificarea pentru imprimare și avertismentele de continuitate ale suprafețelor.
- **Live.** O sesiune Live TeamWork arată cine este unde. Vedeți [Modelarea împreună cu Live TeamWork](topic:work-live).
- **Suplimente.** Suplimentele pot adăuga motoare de randare, ca mai sus.
- **Conectați-vă IA.** Contractul de instrumente și verificările celor opt aplicații trec, cu 454 de instrumente în total. Conectarea dintr-un clic în Studio, un conector găzduit pentru asistenții din browser, cheia proprie în Studio și un pachet publicat nu sunt încă promise. Aplicațiile nu conțin nicio IA proprie. Vedeți [Folosirea ModelCraft cu asistenți IA](topic:use-with-ai-assistants).

### Corectări în 0.8.1

- **Secțiunea de clase DWG.** Secțiunea de clase a unui fișier DWG era citită ca tip greșit, ceea ce putea strica fișierul la import. Acum este citită corect, în ModelCraft și în celelalte aplicații care citesc DWG.
- **Tablete în portret.** Spațiul liber de pe grilă merge la pânză, iar aranjamentul foii începe la 760 de pixeli lățime sau mai puțin. Fișa de stiluri a ModelCraft are și ea modificarea.
- **Limba în Studio.** CadCraft Studio și edițiile împachetate pot schimba limba în timpul rulării; înainte erau doar în engleză. Nu a fost încă testat pe toate platformele: spuneți-ne dacă limba nu se schimbă.

### Încă nerealizate în această versiune

- **Fără semnătură de cod.** Windows poate afișa SmartScreen: alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulați oricum}}. Pe un Mac, faceți clic dreapta și alegeți {{ui:Deschidere}}. Versiunile pentru magazin sunt suspendate, iar versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- Un alt program care desenează imaginea fără un supliment de motor de randare, camerele panoramice sau stereo și o imagine de cer printr-un alt program, precum și modulul care deschide scena Unreal, nu există încă. Fișierele sunt scrise; modulul nu este lansat și nu a fost rulat în Unreal.
- Suprafețe libere: G3 și clasa A nu sunt măsurate și nu sunt garantate, iar tăierea și solidele vin mai târziu.
- Imaginile din alte programe nu sunt identice pixel cu pixel cu ale noastre: doar camera, soarele, lămpile și expunerea coincid.
- Remedierea din 0.8.1 pentru schimbarea limbii în Studio nu este testată pe toate platformele.

Tot restul se află în [Încă nerealizat](topic:not-built-yet). Pentru versiunea anterioară, vedeți [Noutăți în 0.7](topic:whats-new-0-7).
