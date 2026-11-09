---
title: Noutăți în 0.8 și 0.8.1
summary: Alegerea unui motor de randare, cu fișiere pentru alte programe, suprafețe libere NURBS cu continuitate măsurată, o scenă descrisă asistentului, un material făcut dintr-o singură fotografie, o fotografie de schiță pusă pe teren, camere mobilate, tăieri înclinate pentru imprimare 3D și verificarea imprimării în panoul Probleme.
keywords: ce este nou, what's new, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, motor de randare, motor, deschidere în, usd, gltf, unreal, motor din supliment, nurbs, suprafețe, loft, baleiere, continuitate, g0, g1, g2, zebra, step, iges, descrieți scena, scenă, vreme, ora zilei, anotimp, asistent, material dintr-o fotografie, fotografie, fotografie de schiță, mobilare, mobilare o cameră, înclinare, tăiere înclinată, divizare, verificare imprimare, probleme, grilă de proprietăți, lămpi, limbi, dispozitive de intrare, rânduri de bară de instrumente, dwg, live
from: e4989b17
---

Acestea sunt modificările din ModelCraft 0.8 (2026-11-01) și 0.8.1 (2026-11-02), comparativ cu 0.7. Caseta de dialog {{ui:Randare imagine…}} poate trimite acum scena către alt program, panoul {{ui:Suprafețe}} creează suprafețe netede libere, iar un asistent conectat poate configura o scenă întreagă dintr-o singură propoziție.

## Nou

### Randare

- **Un motor la alegere.** Caseta de dialog {{ui:Randare imagine…}} are o listă **Motor** deasupra **Mod**. Cele două motoare proprii, Fast și Path tracer, sunt implicite și funcționează peste tot. Celelalte intrări salvează scena ca pachet (modelul ca fișier USD, plus un fișier de setări cu valorile exacte ale materialelor, lămpile aprinse, soarele, cerul, expunerea și camera), pentru a fi duse în alt program. O imagine desenată de alt program indică ce program și ce versiune a creat-o. Vezi [Alegeți ce program desenează imaginea](topic:render-engines).
- **Deschidere în alt program.** Lista Motor poate salva scena ca fișier USD, fișier glTF (`.glb`) sau dosar de proiect Unreal (`.zip`), în browser și în CadCraft Studio. În Studio poate porni și usdview sau programul implicit al calculatorului pentru fișier. Vezi [Deschideți scena în alt program](topic:render-open-in).
- **Trimitere către un motor de jocuri din Studio.** Studio scrie scena într-un proiect Unreal Engine și o păstrează sincronizată la fiecare trimitere, doar într-un sens. Modificările proprii se află într-un strat pe care CadCraft nu îl scrie niciodată. Vezi [Trimiteți scena către un motor de jocuri](topic:render-unreal).
- **Motoare din suplimente.** Un supliment poate adăuga un motor în listă. Unul scris în JavaScript desenează în browser și în Studio; unul care rulează un program cere confirmare în Studio. Vezi [Desenați imaginea cu alt program](topic:render-other-program) și [Adăugați un motor de randare cu un supliment](topic:render-engine-addons).
- **Descrieți scena.** Spuneți asistentului conectat „amurg, ploaie ușoară, copaci de toamnă, oameni pe esplanadă” și ModelCraft configurează totul dintr-un pas: soarele se mută la data și ora potrivite, astfel încât umbrele să urmeze, cerul se schimbă, apar suprafețe ude, iar copacii și oamenii sunt plasați ca obiecte reale, pe etichete pe care le puteți ascunde, muta sau șterge. Ora zilei, data, anotimpul și vremea (senin, înnorat, ceață, ploaie ușoară, ploaie, furtună) funcționează și singure, iar o cerere ulterioară modifică aceeași scenă. Ceața apare în imaginea de calitate înaltă de pe placa grafică; celelalte motoare arată cerul, lumina și suprafețele ude. Ploaia nu este desenată ca dungi care cad.

### Materiale

- **Un material dintr-o fotografie.** Dați ModelCraft o fotografie a unei suprafețe (perete, podea, piatră) și aceasta creează un material repetabil: lumina din fotografie este uniformizată, marginile sunt făcute să se îmbine, iar hărțile de culoare, de rugozitate și de normale sunt calculate din imagine. Este doar prelucrare de imagine pe propria fotografie, fără model antrenat. Rugozitatea este o estimare. O fotografie plană, pătrată și făcută din față dă cel mai bun element repetabil; un motiv puternic, cum sunt cărămizile, poate lăsa o umbră moale acolo unde se face îmbinarea.

### Suprafețe

- **Suprafețe libere.** Panoul {{ui:Suprafețe}} creează curbe NURBS și suprafețe netăiate: curbe prin puncte, loft, suprafețe reglate, extrudare, revoluție, baleieri de-a lungul uneia sau a două șine, suprafețe dintr-o rețea de curbe, petice din patru muchii, potrivire și îmbinare. Fiecare muchie comună este măsurată ca G0, G1 sau G2 (gol, unghi, salt de curbură) pe suprafețele exacte, iar o muchie mai slabă decât ați cerut apare în panoul Probleme, cu o remediere **Potrivire**. Dungile zebră și culorile de curbură sunt desenate din suprafețele exacte. Fișierele STEP și IGES se exportă și se importă. Vezi [Suprafețe libere (NURBS)](topic:nurbs-surfaces).

### Teren și camere

- **O fotografie de schiță pe teren.** {{ui:Fișier}} › {{ui:Importați o fotografie de schiță…}} transformă o fotografie făcută cu telefonul a unei schițe de mână în muchii pe teren, la scara indicată: un grup, cu o etichetă pentru fiecare culoare de creion. Hârtia este găsită și îndreptată pe calculator, iar nimic nu este trimis nicăieri. Vezi [Modelare pe un plan de amplasament](topic:site-plan).
- **Mobilarea unei camere.** Selectați o podea și folosiți {{ui:Organizare}} › {{ui:Mobilare o cameră…}}. Mobilierul de dormitor, sufragerie, sală de mese, bucătărie, baie sau birou este plasat după reguli, lângă pereți și fără a bloca uși sau ferestre, într-un singur grup pe care îl puteți scoate dintr-un pas. Este o dispunere implicită pe care o revizuiți, nu un proiect. Vezi [Bibliotecă de pornire](topic:starter).

### Imprimare 3D

- **Tăieri înclinate.** Divizarea pentru imprimare poate înclina tăieturile până la 60 de grade, ceea ce oferă pieselor mai multă suprafață de lipire. Conectorii sunt perpendiculari pe tăietură. Vezi [Divizarea unui model pentru imprimare](topic:print-split).
- **Verificarea imprimării în Probleme.** Constatările verificării de imprimare 3D apar în panoul Probleme, cu marcaje pe model, iar {{ui:Reparare}} le rezolvă de acolo. Vezi [Suporturi, grosimea peretelui, golire și reparare](topic:print-tools).

### În fiecare aplicație

- **Limbi.** Ajutorul și aplicațiile sunt disponibile în 54 de limbi. Zece sunt noi: lituaniana, letona, bosniaca, marathi, telugu, albaneza, afrikaans, filipineza, swahili și uzbeka. Limbile diferite de engleză sunt ciorne automate până când le citește un vorbitor nativ, iar subiectele de ajutor pot fi încă în engleză.
- **Dispozitive de intrare.** Un touchpad, un creion, un mouse 3D, un controler de jocuri și comenzile MIDI pot controla aplicațiile, pentru toate sau pentru una singură.
- **Rânduri de bară de instrumente.** {{ui:Setări}} › {{ui:General}} › Rânduri de bară de instrumente stabilește Încadrare (ca înainte), 2 rânduri sau 1 rând. O bară care nu încape derulează lateral, în loc să ia spațiu din desen. Încadrarea rămâne implicită.
- **Grila de proprietăți.** Câmpurile pentru lămpi din ModelCraft folosesc grila comună: categorii pliabile, coloane de etichetă și valoare și densitate Compactă. Calculul scris, de exemplu `2*450`, funcționează în continuare.
- **Probleme.** Panoul Probleme (butonul de avertisment din bara aplicației) este comun tuturor aplicațiilor. În ModelCraft conține verificarea de imprimare și avertismentele de continuitate ale suprafețelor.
- **Live.** O sesiune Live TeamWork arată cine unde se află. Vezi [Modelați împreună cu Live TeamWork](topic:work-live).
- **Suplimente.** Suplimentele pot adăuga motoare de randare, ca mai sus.
- **Conectarea la un asistent AI.** Contractul de unelte și verificările celor opt aplicații trec, cu 454 de instrumente în total. Conectarea dintr-un clic în Studio, un conector găzduit pentru asistenții din browser, cheia proprie în Studio și un pachet publicat nu sunt promise încă. Aplicațiile nu conțin AI propriu. Vezi [Utilizarea ModelCraft cu asistenți AI](topic:use-with-ai-assistants).

## Corectat în 0.8.1

- **Secțiunea de clase DWG.** Secțiunea de clase a unui fișier DWG era citită ca tip greșit, ceea ce putea strica fișierul la import. Acum este citită corect, în ModelCraft și în celelalte aplicații care citesc DWG.
- **Tablete pe verticală.** Înălțimea rămasă a grilei merge la pânză, iar aspectul foii începe de la 760 de pixeli în lățime sau mai puțin. Foaia de stiluri a ModelCraft are și ea schimbarea.
- **Limba în Studio.** CadCraft Studio și edițiile împachetate pot schimba limba în timpul rulării; înainte erau doar în engleză. Nu a fost testat încă pe toate platformele: spuneți-ne dacă limba nu se schimbă.

## Încă nerealizate în această versiune

- **Fără semnătură de cod.** Windows poate afișa SmartScreen: alegeți {{ui:Informații suplimentare}}, apoi {{ui:Rulați oricum}}. Pe Mac, faceți clic dreapta și alegeți {{ui:Deschidere}}. Versiunile pentru magazin sunt suspendate, iar versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- Un alt program care desenează imaginea fără un supliment de motor de randare, camerele panoramice sau stereo și o imagine de cer printr-un alt program nu există încă, la fel ca pluginul care deschide scena Unreal. Fișierele sunt scrise; pluginul nu este lansat și nu a fost rulat în Unreal.
- Suprafețe libere: G3 și clasa A nu sunt măsurate și nu sunt revendicate; tăierea și solidele vin mai târziu.
- Imaginile din alte programe nu sunt identice pixel cu pixel cu ale noastre: doar camera, soarele, lămpile și expunerea se potrivesc.
- Corecția din 0.8.1 pentru schimbarea limbii în Studio nu a fost testată pe toate platformele.

Restul este în [Încă nerealizate](topic:not-built-yet). Pentru versiunea anterioară, vezi [Noutăți în 0.7](topic:whats-new-0-7).
