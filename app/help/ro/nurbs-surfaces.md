---
title: Suprafețe libere (NURBS)
summary: Curbe și suprafețe netede pentru carcase de produse, caroserii și carene de bărci — loft, baleiere, rețele de curbe, petece pe patru muchii, tranziții, tăieri — cu continuitate G0, G1 și G2 măsurată pe suprafețele exacte, solide cu reuniune, scădere și intersecție, vederi zebră și de curbură, fețe ajustate la o scanare cu eroarea măsurată și fișiere STEP sau IGES.
keywords: nurbs, scanare, inginerie inversă, ajustare, plasă în suprafață, nor de puncte, stl, tăiere, decupare, gaură, solid, solide, boolean, reuniune, scădere, intersecție, diferență, coasere, închis, formă liberă, free-form, suprafață, suprafețe, b-spline, bspline, curbă, spline, loft, baleiere, șină, rețea, coons, petec, tranziție, potrivire, continuitate, g0, g1, g2, tangentă, curbură, zebră, puncte de control, noduri, grad, step, iges, clasa A
from: 09887405
---

Panoul **Suprafețe** creează curbe și suprafețe netede din categoria folosită pentru carcase de produse, caroserii și carene de bărci: NURBS, aceeași matematică pe care o folosesc și alte programe de modelare a suprafețelor. Totul se măsoară pe suprafețele exacte, niciodată pe triunghiurile pe care le vedeți. Dimensiunile din panou sunt în **milimetri**, oricare ar fi unitatea afișată de model.

Deschideți-l din panoul din dreapta: {{ui:Suprafețe}} › {{ui:Deschideți panoul Suprafețe}}. Un model care are deja suprafețe îl deschide singur.

## Cum funcționează o comandă

1. Apăsați o comandă (de exemplu **Loft**). Panoul spune ce mai are nevoie: puncte, curbe, o muchie de suprafață sau un capăt de curbă.
2. Alegeți-le: faceți clic pe ele în vederea 3D sau apăsați **Alegere** (ori butoanele pentru muchie și capăt) de lângă fiecare în listă. Pentru o muchie, faceți clic aproape de acea muchie a suprafeței.
3. Verificați opțiunile (grad, toleranță, continuitate, …) și apăsați **Creare**.

Curbele din puncte iau punctele scrise câte unul pe linie (`x, y, z` în mm), sau **Alegerea punctelor în vedere**: fiecare clic folosește aceeași agățare ca uneltele de desen; apăsați <kbd>Enter</kbd> sau faceți dublu clic ca să terminați, <kbd>Esc</kbd> ca să opriți.

## Curbe

- **Curbă prin puncte** trece prin fiecare punct. **Curbă prin puncte de control** urmează în schimb o rețea de puncte.
- **Inserare nod**, **Creștere grad** și **Scădere grad** schimbă descrierea unei curbe fără s-o mute (scăderea este refuzată când curba s-ar muta mai mult decât toleranța). **Reconstruire curbă** îi dă un nou număr de puncte de control și spune cât s-a mutat.
- **Potrivire curbă** face un capăt de curbă să se atingă de altul cu G0 (atingere), G1 (aceeași direcție) sau G2 (și aceeași curbură). **Tranziție curbă** adaugă o curbă nouă între două capete.
- **Unire curbe** și **Divizare curbă**.

## Suprafețe

- **Loft** prin două sau mai multe curbe, **Suprafață reglată** între două, **Extrudare curbă**, **Revoluție curbă**.
- **Baleiere pe o șină** poartă un profil de-a lungul unui traseu fără să-l răsucească; **Baleiere pe două șine** păstrează capetele profilului pe ambele șine. Baleierile sunt ajustate: linia de stare spune cât de aproape a rămas de baleierea reală.
- **Suprafață din rețea de curbe** trece printr-o grilă de curbe (primele alegeri sunt profilele, restul ghidajele). **Petec din patru muchii** umple patru curbe care se întâlnesc în colțuri.
- **Potrivire suprafață** face o muchie de suprafață să se întâlnească cu una vecină cu G0, G1 sau G2; **Tranziție suprafață** adaugă o suprafață între două muchii.
- **Decalare suprafață**, **Extindere suprafață** (suprafața continuă în direcția în care mergea), **Reconstruire suprafață**, precum și noduri și grad pentru suprafețe.

## Verificarea calității

Tabelul **Muchii comune** listează fiecare muchie pe care o au două suprafețe, cu golul (mm), unghiul dintre ele (°) și saltul de curbură (1/mm), și dacă asta o face G0, G1 sau G2. O muchie mai slabă decât ați cerut apare și în **Probleme** (butonul ⚠ din bara aplicației), cu o reparare **Potrivire**.

**Afișare ca** › **Dungi zebră** și **Curbură (gaussiană)** vin din suprafața exactă: dungile care trec neîntrerupt peste o muchie înseamnă G1; dungile care își păstrează și lățimea înseamnă G2. Curbura este albastră acolo unde suprafața este o șa, roșie acolo unde este o cupolă și albă acolo unde este plană. **Puncte de control** desenează rețelele de control.

G0–G2 se măsoară în 33 de puncte pe muchie. **G3 și calitatea „clasa A” nu se măsoară** și nu se pretinde.

## Tăierea unei suprafețe

Grupul **Tăiere** taie o suprafață fără să-i schimbe forma: suprafața păstrează toate punctele de control, iar doar partea din interiorul conturului se afișează, se numără și se scrie. **Tăiere într-un dreptunghi** și **Tăiere cu un cerc** lucrează pe o parte (de la 0 la 1) a suprafeței în fiecare direcție, deci nu cer alegere în vedere; **Tăiere printr-o curbă** ia o curbă închisă aflată pe suprafață (este proiectată în suprafață și refuzată cu explicație când este deschisă sau la mai mult de toleranță). Bifați **Tăiați o gaură** ca să îndepărtați interiorul conturului; lăsați-o nebifată ca să păstrați doar interiorul. O suprafață poate avea un contur păstrat și oricâte găuri; un contur care intersectează altul este refuzat. **Eliminare tăiere** arată din nou toată suprafața. Muchiile tăiate urmează exact conturul; {{ui:Anulare}} din panou înlătură o tăiere ca orice alt pas.

STEP păstrează tăierea ca limite ale feței, iar IGES ca suprafață tăiată (entitatea 144); ambele o citesc înapoi.

## Solide și operații booleene

Grupul **Solide** transformă suprafețele în corpuri închise și le combină. Un solid aici este o mulțime de suprafețe ale panoului care împreună închid un volum; fețele lui rămân suprafețe NURBS exacte, cu tăieturile lor.

- **Solid cutie**, **Solid cilindru** și **Solid sferă** fac unul din dimensiuni scrise (în mm): o cutie cu șase fețe plane, un cilindru cu o latură rotundă și două capete plane tăiate după cerc, o sferă dintr-o singură suprafață de revoluție.
- **Solid din suprafețe** grupează suprafețe create de utilizator. Alegeți-le, sau nu alegeți nimic ca să folosiți toate suprafețele afișate care nu sunt încă într-un solid. Sunt cusute împreună în toleranță: dacă nu se închid, nimic nu se schimbă, iar panoul spune câte muchii rămân deschise și cât de aproape trebuie să se întâlnească.
- **Reuniune**, **Scădere** (al doilea solid se scoate din primul) și **Intersectare** (doar ce au în comun amândouă) iau două solide: faceți clic pe câte o față din fiecare în vedere sau apăsați **Alegere** din lista **Solide**. Bifați **Păstrați cele două solide** ca să le lăsați alături de rezultat.

O operație booleană păstrează fiecare față pe suprafața ei exactă și o taie cu contururi noi de-a lungul intersecției. Linia rezultatului dă cifrele măsurate: cât au trebuit să se mute punctele motorului de solide ca să stea pe suprafețele exacte (niciodată peste toleranță), cât de aproape sunt punctele de intersecție de ambele suprafețe (de obicei câteva milionimi de milimetru), volumul și dacă fețele noi se închid din nou când sunt cusute din nou din suprafețele lor exacte. Volumele se măsoară pe triunghiuri în toleranță (0.05 mm dacă nu setați alta), deci volumul unei sfere sau al unui cilindru iese ușor sub cel exact: o toleranță mai mică se apropie mai mult. O operație booleană care nu poate fi făcută curat (solidele nu au nimic în comun, un contur s-ar intersecta singur) este refuzată cu explicație și nu schimbă nimic. O operație booleană este un pas al {{ui:Anulare}} din panou.

În lista **Solide**, **Dezgrupare** păstrează fețele ca suprafețe simple; coșul de gunoi elimină solidul și fețele lui.

**{{ui:Adăugare în model}}** (din lista **Solide**) pune o copie a solidului în model ca un singur grup închis, cu fețele ei ca triunghiuri în 0.05 mm, într-un pas al {{ui:Anulare}} din model. Apoi lucrează cu {{ui:Reuniune}}, {{ui:Scădere}} și {{ui:Intersectare}} ale modelului, cu împingere/tragere și cu verificarea pentru imprimare 3D; solidul exact rămâne în panou.

## Racordări și îngroșări

**Racordare între fețe** rotunjește muchia unde se întâlnesc două fețe ale unui solid: alegeți cele două fețe (în vedere sau cu **Alegere** din listă), scrieți **raza** și, pentru o rază care se schimbă de-a lungul muchiei, **raza la capăt** (0 păstrează o singură rază). O bilă de acea rază este rostogolită de-a lungul muchiei, atingând ambele fețe; racordarea este arcul circular exact pe care îl lasă în fiecare punct, unit într-o singură suprafață, iar cele două fețe sunt tăiate acolo unde bila le atinge. O muchie exterioară pierde material, un colț interior câștigă. Linia rezultatului dă ce s-a măsurat: cât de departe este suprafața de racordare de bila care se rostogolește între punctele din care a fost construită (se adaugă puncte până când este în limita unui sfert din toleranță), cel mai mare unghi dintre racordare și fiecare față de-a lungul liniilor de contact și aceleași cifre ca la o reuniune. O rază care nu încape (bila ar ieși dintr-o față sau o față s-ar curba mai strâns decât raza) este refuzată, numind fața, și nu se schimbă nimic.

**Racordare mai multor muchii** rotunjește multe muchii dintr-un pas: alegeți cele două fețe ale primei muchii, apoi pe cele două ale următoarei și așa mai departe (o față poate fi în mai multe perechi, de exemplu fața de sus a unei cutii în patru dintre ele); toate muchiile primesc raza scrisă. Fiecare rotunjire se calculează pe solidul așa cum era, apoi sunt tăiate una după alta, deci ordinea nu contează. Acolo unde două muchii rotunjite se întâlnesc într-un colț ale cărui alte muchii rămân ascuțite, cele două racordări se întâlnesc de-a lungul curbei lor de intersecție (o cută). Acolo unde trei muchii exterioare rotunjite din trei fețe plane, perpendiculare între ele, se întâlnesc cu o rază, colțul este un **petec de sferă** tangent la toate cele trei racordări (debifați **Colțuri** ca să obțineți colțul cu cută); o muchie trebuie să aibă cel puțin dublul razei ca lungime, acolo unde ambele capete sunt astfel de colțuri. Linia rezultatului spune câte muchii au fost rotunjite și cum au ieșit colțurile. Muchiile interioare pot fi rotunjite și ele împreună, dar un rezultat care nu se mai închide este doar raportat (linia o spune), deci verificați-l.

**Îngroșare într-un solid** dă unei suprafețe o grosime: alegeți-o, scrieți **grosimea** și bifați **Cealaltă parte** ca s-o creșteți în sens opus. Fața decalată este ajustată pe suprafață și măsurată față de ea (linia rezultatului dă cea mai mare diferență față de grosime); pereții urmează fiecare muchie și fiecare contur de tăiere. Dacă suprafața se curbează mai strâns decât grosimea de partea aceea, sau altă parte a ei se află mai aproape decât grosimea, este refuzată, numind suprafața și locul, și nu se schimbă nimic.

## Anulare, fișierul, STEP și IGES

Panoul are propriile **Anulare** și **Refacere** (un pas pe comandă). Suprafețele se salvează în fișierul `.modelcraft` împreună cu modelul; nu fac parte din anularea proprie a modelului, la fel ca materialele fișierului.

**STEP…** (AP242) și **IGES…** salvează curbele și suprafețele exact cum sunt (curbe și suprafețe B-spline, nimic transformat în triunghiuri). Fiecare suprafață este propria ei față, cu tăietura ei; un solid este scris ca o singură coajă închisă, fiecare muchie fiind comună celor două fețe ale ei, cum se așteaptă alte programe CAD (linia de stare spune câte solide au ieșit astfel). În IGES același solid este un singur B-rep solid de tip manifold (entitatea 186 peste coaja închisă 514, fețele 510, buclele 508, o listă de muchii 504 și o listă de vârfuri 502); un solid ale cărui fețe nu se potrivesc muchie cu muchie este scris ca fețe separate, iar linia o spune. **Import…** citește înapoi un astfel de solid ca solid, din STEP și din IGES. Citește curbe și suprafețe scrise așa și seturi de petece `.ccnurbs`; solidele STEP ale altor programe se deschid cu {{ui:Fișier}} › Import, ca plase.

## Suprafețe dintr-o scanare (inginerie inversă)

Selectați plasa scanată din model (dacă nu este selectat nimic, se iau toate cele afișate), deschideți **Suprafețe** și, în grupul **Scanare**, alegeți **Ajustare suprafețe la scanare**. Unealta caută **plane**, **cilindri**, **sfere** și **conuri** (suprafețele exacte din care este făcută o piesă prelucrată; fiecare rând arată raza sau semiunghiul găsit), găsește **racordări** (muchii și colțuri rotunjite: un cilindru sau o sferă mică, tangentă, care intră în două sau mai multe alte fețe, arătată cu raza ei și fețele pe care le unește), **racordări de margine** (un tor: muchia rotunjită unde o față plană întâlnește un cilindru sau un con, arătată cu raza ei și raza inelului) și **racordări variabile** (o muchie rotunjită a cărei rază se schimbă de-a lungul ei, arătată cu raza la fiecare capăt), ajustează **un singur petec liber** pe o bucată netedă, ușor curbată, și taie fiecare față după conturul părții de scanare din care provine, astfel încât găurile și colțurile rămân. Opțiuni: **toleranța** (cât de departe, în mm, poate fi un punct de scanare de un plan sau cilindru și să mai aparțină lui; ținta pentru un petec liber), **cea mai mică bucată** (o parte din aria suprafeței) și **cele mai multe fețe**. Aceeași scanare și aceleași opțiuni dau întotdeauna aceleași fețe.

Rezultatul este un tabel, câte un rând pentru fiecare față: tipul ei, din câte triunghiuri a provenit și eroarea **măsurată de la scanare la față** (rms, cea mai mare și proporția de puncte în toleranță). Punctele măsurate sunt vârfurile scanării și mijlocul fiecărui triunghi. Eroarea nu se măsoară și invers (de la față la scanare), deci o față care se întinde dincolo de scanare nu s-ar vedea. Nota de sub tabel spune și cât din arie era prea mică pentru a fi ajustată. În vedere, punctele de scanare sunt colorate după **harta de abatere**: albastru pe față, verde la jumătatea drumului spre toleranță, roșu la toleranță sau peste (debifați **Afișați harta de abatere** ca s-o ascundeți). Bucățile care se întorc pe ele însele (un tub închis ajustat cu petece libere, de exemplu) sunt listate ca neajustate, niciodată forțate într-o singură suprafață.

**Coaserea suprafețelor într-un solid** coase într-un singur solid închis fiecare suprafață afișată care nu este într-un solid. Fețele scanate se întâlnesc doar în limitele erorii scanării, deci încearcă cea mai mică distanță de îmbinare care închide (niciodată mai mare decât **distanța de coasere** pe care ați setat-o) și refuză cu explicație când fețele nu se închid. Nu acoperă niciodată un gol. O cutie cu muchii rotunjite se coase când racordările ei au fost găsite ca fețe proprii; distanța de îmbinare care a închis apare în rezultat. Solidul lucrează apoi cu Reuniune, Scădere, Intersectare și **Adăugare în model**.

Ce nu face: o **racordare de margine** (un tor) este căutată doar în jurul axei unui cilindru sau con deja găsit, iar o **racordare variabilă** doar de-a lungul unei muchii destul de drepte (secțiunile ei sunt tăiate perpendicular pe o direcție); în rest ies ca petece libere când sunt suficient de netede și sunt lăsate afară altfel. Sferele, conurile și racordările se găsesc prin eșantionare aleatorie, deci una foarte mică (câteva triunghiuri) poate fi ratată; harta de abatere arată distanța de la scanare la fețe, nu invers; scanările foarte mari (peste 300.000 de triunghiuri) sunt refuzate aici. Fețele unui cilindru cu rotație completă sunt tăiate în jurul găurilor, cu cusătura pusă acolo unde nu este nicio gaură. Verificați fiecare față față de scanare înainte să vă bazați pe ea.

## Încă nerealizat

Rotunjirea muchiilor care se întâlnesc într-un colț de fețe curbe sau cu raze diferite (o îmbinare de vârf), o racordare între fețe care nu se întâlnesc, o racordare interioară care se termină pe o față înclinată sau curbă, și operațiile booleene și racordările calculate pe suprafețe fără triunghiuri (aici motorul de solide lucrează pe triunghiuri în toleranță, iar fiecare punct este apoi readus pe suprafețele exacte).
