---
title: Animați orice proprietate, modelați-o cu curbe și amestecați clipuri
summary: Spațiul de lucru Animație fixează în chei poziția, rotirea și dimensiunea unui obiect, luminozitatea, împrăștierea și culoarea unei lămpi, obiectivul și cheile de formă ale unei plase; armăturile îndoaie o plasă cu oase și ponderi pictate; cinematica inversă și constrângerile fac oasele și obiectele să ajungă, să privească, să copieze, să rămână în limite, să atârne sau să urmeze alte obiecte; corpurile rigide cad, se stivuiesc și se ciocnesc și sunt calculate în chei; driverele setează o valoare din altele; vizualizarea Curbe a cronologiei modelează fiecare schimbare cu mânere Bézier și cicluri, iar vizualizarea Clipuri salvează animațiile ca acțiuni pe care le plasați din nou și le amestecați.
keywords: fizică, corp rigid, corpuri rigide, simulare, simulează, cădere, cade, gravitație, ciocnire, se ciocnește, stivuire, elasticitate, frecare, calculare, calculat, IK, cinematică inversă, constrângere, constrângeri, privire spre, urmărire, copiere transformări, copiere locație, copiere rotație, limitare rotație, limite, copil al, părinte, urmărire traseu, traseu, pol, FABRIK, lanț, armătură, armături, schelet, rigging, os, oase, piele, pielare, ponderi, pictare ponderi, grupuri de vârfuri, ponderi automate, bone heat, poziție, poziționare, dual quaternion, interpolare liniară, chei de formă, cheie de formă, morfare, ținte de morfare, forme de amestec, facial, expresie, driver, drivere, expresii, spațiul de lucru Animație, animație, animare, cheie, chei, proprietate, proprietăți, transformare, locație, rotație, scalare, lampă, lumină, luminozitate, culoare, obiectiv, câmp vizual, fov, editor de grafic, curbe, curbă, bezier, mânere, tangentă, interpolare, ciclu, cicluri, repetare, buclă, ping pong, decalaj, foaie de chei, selectare chei, selectare prin casetă, copiere chei, lipire chei, întindere chei, scalare chei, clipuri, acțiuni, nla, amestec, amestecare, influență, stash
from: 16d8e12f
---

[Cronologia](topic:animation) mută camera și grupurile și componentele întregi. Spațiul de lucru **Animație** fixează mai mult decât atât, iar cronologia primește două vizualizări în plus ca să modelați și să refolosiți ce ați fixat în chei.

## Deschidere

Alegeți {{ui:Animație}} din lista spațiilor de lucru din bara de instrumente. Cronologia se deschide sub vedere, bara de instrumente arată grupurile Animație ({{ui:Chei}}, {{ui:Redare}}, {{ui:Cronologie}}), iar panoul din dreapta listează ce puteți fixa în cheie la capul de redare.

## Fixarea unei proprietăți în cheie

Panoul listează, la capul de redare:

- **Obiectul ales**: {{ui:Plasare}}, {{ui:Rotire (°)}} și {{ui:Dimensiune}}, câte trei numere fiecare. Scrieți un număr și apăsați {{key:Enter}}: se fixează în cheie la capul de redare, iar obiectul se mută acolo. Rombul de lângă un rând fixează valoarea așa cum este acum; un romb plin înseamnă că există deja o cheie la capul de redare.
- **Lămpile**: {{ui:Luminozitate (lm)}}, {{ui:Împrăștiere (°)}} (pentru lămpile spot) și {{ui:Culoare}} pentru fiecare lampă.
- **Camera**: {{ui:Unghi de obiectiv (°)}}, pentru un zoom în timp ce camera se mișcă.

{{ui:Cheie de transformare}} (sau {{key:I}}) fixează deodată poziția, rotirea și dimensiunea fiecărui grup sau componentă alese; {{ui:Cheie cameră}} (sau {{key:K}}) fixează camera. Cu {{ui:Cheie automată}} pornit, un grup a cărui poziție, rotire și dimensiune sunt fixate astfel primește o cheie nouă de fiecare dată când îl mutați.

Rotirile sunt trei unghiuri, în jurul axei X, apoi Y, apoi Z. O rotire fixată peste 180° continuă în același sens (190° rămâne 190°, nu −170°), astfel că o roată se poate învârti de mai multe ori.

:::tip
Un grup fixat cu {{ui:Cheie pentru selecție}} în cronologie are chei de poziționare întregi. Butonul de curbă de pe rândul lui le transformă în curbe de poziție, rotire și dimensiune (aceeași poziționare la fiecare cheie), ca să le modelați în {{ui:Curbe}}.
:::

## Chei de formă (morfe)

O **cheie de formă** este o altă formă a aceleiași [plase](topic:meshes): un zâmbet pe o față, bombarea unei uși, o frunză îndoită. Cursorul ei face trecerea de la plasa așa cum este (0) la acea formă (1); mai multe chei se adună.

1. Alegeți o plasă în spațiul de lucru Animație: panoul arată {{ui:Chei de formă}}.
2. Faceți clic pe {{ui:Adăugare cheie de formă}}. ModelCraft trece în [spațiul de lucru Plasă](topic:mesh-edit) cu noua cheie în editare: mutați puncte, extrudați, modelați — transformați plasa în forma dorită.
3. Reveniți la {{ui:Animație}} și faceți clic pe {{ui:Gata}}. Plasa revine cum era, iar cheia păstrează modificarea.

Apoi trageți cursorul cheii (sau scrieți o valoare) ca s-o amestecați. Rombul fixează valoarea la capul de redare, astfel că o cheie poate crește și se poate stinge în timp; odată ce are o pistă, o valoare nouă se fixează la capul de redare. Creionul editează din nou forma cheii (plasa o arată complet până la {{ui:Gata}}; {{ui:Anulare}} lasă cheia așa cum era), ochiul oprește cheia, coșul o elimină.

Un vârf adăugat în timpul editării unei chei aparține plasei în sine: rămâne unde l-ați pus, în fiecare formă.

:::note
Cheile de formă modifică plasa înaintea [modificatorilor](topic:modifiers) ei: un modificator Subdivision netezește forma amestecată. Imaginile și videoclipurile randate arată cheile la fiecare cadru.
:::

## Armături: oase care îndoaie o plasă

O **armătură** este un set de oase în interiorul unei [plase](topic:meshes). Poziționați oasele și plasa urmează, fiecare punct atât cât spun **ponderile** lui.

1. Alegeți plasa în spațiul de lucru Animație și faceți clic pe {{ui:Adăugare armătură}} în panou (sau pe {{ui:Adăugare os}} din grupul {{ui:Schelet}}): primul os urcă pe mijlocul plasei, pornind de la baza ei.
2. Cu un os ales, {{ui:Adăugare os copil}} adaugă următorul de la vârful lui. Setați în panou {{ui:Cap}}, {{ui:Vârf}}, {{ui:Rotire în jurul axei (°)}} și osul de care este atârnat (câmpul {{ui:Atârnă de}}); un os care atârnă de altul se mișcă odată cu el. Debifați {{ui:Mișcă plasa}} pentru un os care doar ghidează alte oase.
3. Faceți clic pe {{ui:Ponderi automate}}: fiecare os preia punctele cele mai apropiate de el, iar prinderea se întinde treptat pe plasă, astfel că punctele dintre două oase le împart. {{ui:Doar cele mai apropiate oase}} este o împărțire mai rapidă și mai tare.

**Poziționați** oasele cu {{ui:Poziționare}} ({{key:P}}): faceți clic pe un os ca să îl alegeți, trageți ca să îl rotiți în jurul axei vederii, sau trageți cu {{key:Shift}} ca să îl mutați. Sau scrieți {{ui:Plasare}}, {{ui:Rotire (°)}} și {{ui:Dimensiune}} sub {{ui:Poziționare}}; rotirile sunt în axele proprii ale osului, plecând de la poziția de repaus. Romburile și {{ui:Cheiază toată poziția}} fixează poziția la capul de redare; odată ce un os are chei, poziționarea lui o fixează acolo. {{ui:Resetare acest os}} și {{ui:Resetare poziție}} readuc oasele în repaus.

**Pictați ponderile** ({{key:W}}) pentru osul ales: plasa se arată în repaus, fiecare față colorată după cât o ține osul — roșu tot, albastru nimic. Pictați ca să adăugați prindere ({{key:Mod}} o scoate, {{key:Shift}} netezește); {{ui:Dimensiune (px)}} și {{ui:Intensitate}} setează pensula. Cu {{ui:Păstrează suma greutăților fiecărui punct egală cu 1}} activat, dacă dați unui os mai mult, același lucru se ia de la celelalte. Fiecare traseu de pensulă este un pas de anulare al modelului.

{{ui:Piele}} alege cum se mișcă un punct între oase: {{ui:Liniar (rapid)}} amestecă mișcările oaselor și strânge puțin o articulație îndoită; {{ui:Cuaternion dual (păstrează volumul la articulații)}} rotește punctul în jurul articulației, astfel că un cot sau un genunchi își păstrează grosimea ({{ui:Dimensiune}} a unui os nu întinde atunci pielea).

:::note
Mai întâi vin cheile de formă, apoi armătura, apoi [modificatorii](topic:modifiers). Vederea, imaginile și videoclipurile arată toate plasa poziționată; ponderile unei plase se salvează cu ea, iar oasele și poziția lor, cu animația.
:::

## IK și constrângeri

O **constrângere** mută un os sau un obiect după cheile sale, după o regulă. Alegeți obiectul (sau, într-o armătură, osul) și adăugați una sub {{ui:Constrângeri ale …}}; mai multe rulează în ordinea listată (săgețile o schimbă), iar fiecare are {{ui:Intensitate}} (de la 0 la 1, fixată cu rombul ei ca orice proprietate) și un comutator pornit/oprit.

| Constrângere | Pentru | Ce face |
|---|---|---|
| {{ui:Ajungere (IK)}} | Oase | Osul și oasele de care atârnă ({{ui:Oase din lanț}}) se îndoaie astfel încât vârful lui să ajungă la țintă. Cu două oase și un {{ui:Pol (îndoitura se îndreaptă spre el)}}, cotul sau genunchiul se orientează spre pol; lanțurile mai lungi se îndoaie treptat. Dacă ținta este prea departe, lanțul se îndreaptă direct spre ea. |
| {{ui:Privire spre}} | Ambele | Se rotește astfel încât {{ui:Axa care indică}} să fie orientată spre țintă, menținând {{ui:Axa menținută sus}} cât mai aproape de sus. |
| {{ui:Copiere transformări}} | Ambele | Preia poziția, rotirea sau dimensiunea țintei — cele bifate. |
| {{ui:Limite}} | Ambele | Menține poziția, rotirea (în grade) sau dimensiunea proprie între un {{ui:min}} și un {{ui:max}} pe fiecare axă; lăsați o pereche goală ca axa respectivă să fie liberă. |
| {{ui:Copil al}} | Ambele | Se mișcă odată cu ținta, ca și cum ar atârna de ea, din poziția în care erau amândouă când ați ales ținta. |
| {{ui:Urmărire traseu}} | Obiecte | Stă pe un [obiect curbă](topic:curves) la {{ui:De-a lungul curbei}} (0 începutul lui, 1 sfârșitul; fixați-l ca să se deplaseze) și, cu {{ui:Rotire de-a lungul curbei}}, se orientează după el. |

O țintă este alt obiect din grupul deschis, un os din aceeași armătură sau {{ui:Un punct}} pe care îl scrieți (punctul unui obiect este în coordonatele modelului, al unui os în cele ale plasei sale). Pentru un picior IK, puneți ținta acolo unde trebuie să fie piciorul și fixați ținta în cheie, sau fixați {{ui:Intensitate}} ca piciorul să treacă între cheile lui și IK.

:::tip
Un obiect care privește unul care urmează un traseu îl vede pe traseu: ModelCraft calculează mai întâi țintele, oricare ar fi ordinea obiectelor.
:::

## Fizică: cădere, stivuire și ciocniri

Lăsați obiectele să cadă și să se lovească între ele, apoi păstrați rezultatul ca chei.

1. Alegeți un grup, o componentă sau o plasă și setați {{ui:Corp rigid}} sub {{ui:Fizică}}: {{ui:Cade și se ciocnește}} (se mișcă) sau {{ui:Rămâne pe loc, stă în cale}} (o masă, un perete, o rampă). Unui obiect care cade dați {{ui:Formă}} — {{ui:Cutie (limitele sale)}} sau {{ui:Bilă (rotundă, în limitele sale)}} — {{ui:Masă (kg)}}, {{ui:Frecare}} și {{ui:Elasticitate}} (0 lovește sec, 1 sare înapoi până la aceeași înălțime).
2. Sub {{ui:Tot modelul}}, setați {{ui:De la (s)}} și {{ui:Până la (s)}}, {{ui:Gravitație (m/s², în jos)}} și dacă există {{ui:Un sol pe care să aterizeze}} (și înălțimea lui).
3. Faceți clic pe {{ui:Calculare fizică}} (în panou sau în grupul {{ui:Fizică}}). Fiecare obiect care cade primește o cheie de poziție, rotire și dimensiune la fiecare cadru între cele două momente; redați-l ca orice animație.

Calcularea din nou înlocuiește acele chei; {{ui:Eliminare chei calculate}} le scoate. Obiectele pornesc în repaus, acolo unde cheile, curbele și constrângerile lor le pun la {{ui:De la (s)}} (o mișcare fixată înainte de acel moment nu continuă în cădere). Mai mulți {{ui:Pași pe cadru}} țin stivele înalte mai stabile; bara de stare spune când ceva se mișcă încă la final.

:::note
Formele sunt cutii și bile în jurul limitelor fiecărui obiect; o cutie atinge cu colțurile, cu mijlocul muchiilor și cu mijlocul fețelor, astfel că cutiile se stivuiesc și se răstoarnă cum vă așteptați. Textilele, fluidele, articulațiile dintre obiecte și formele exacte sunt încă nerealizate.
:::

## Drivere

Un **driver** setează o cheie de formă din alte lucruri, în loc să o faceți manual: deschideți driverul unei chei (butonul calculatorului), scrieți o **expresie** și dați fiecărui nume din ea ce citește ({{ui:Citește}}): timpul în secunde, cadrul, poziția, rotirea sau dimensiunea unei poziționări pe X, Y sau Z, luminozitatea unei lămpi sau o altă cheie de formă. De exemplu, cu `v` citind rotirea unei uși în jurul lui Z, `clamp(v / 90, 0, 1)` deschide o formă pe măsură ce ușa se deschide.

Expresiile folosesc numere, numele, `+ - * / % ^` și paranteze, și funcțiile `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg`, cu `pi` și `e`. O greșeală este semnalată și nu schimbă nimic. Cursorul unei chei controlate arată valoarea driverului; driverul are prioritate față de pista cheii până îl eliminați.

## Alegerea și modificarea cheilor (vizualizarea Chei)

{{ui:Chei}} arată un rând pentru fiecare pistă: camera, fiecare grup care se mișcă și fiecare proprietate („Lampă 2 · Luminozitate (lm)”; cheile de proprietate sunt rotunde).

- Faceți clic pe o cheie ca s-o alegeți; clic cu {{key:Shift}} sau cu {{key:Mod}} adaugă sau scoate chei din selecție. Tragere cu {{key:Shift}} peste rânduri desenează o casetă care adaugă fiecare cheie din ea.
- Trageți o cheie aleasă ca să le mutați pe toate; {{key:Left}} / {{key:Right}} le mută cu un cadru ({{key:Shift}}: zece).
- {{key:Mod+C}} copiază cheile alese, {{key:Mod+V}} le lipește de la capul de redare pe aceleași piste (și alt tab ModelCraft le poate lipi).
- {{ui:Întindere}} răspândește cheile alese de la capul de redare cu numărul de lângă el (2 = de două ori mai departe; 0.5 le strânge).
- Lista de interpolare stabilește cum trece fiecare cheie aleasă la următoarea.

## Modelarea curbelor (vizualizarea Curbe)

{{ui:Curbe}} este un grafic al fiecărui număr în timp: timpul pe orizontală, valoarea în sus. Bifați curbele pe care le arătați în lista din stânga (X, Y și Z sunt roșu, verde și albastru).

- Faceți clic pe o cheie (un pătrat) ca s-o alegeți, clic cu {{key:Shift}} pentru mai multe, sau trageți o casetă. Trageți o cheie aleasă ca să îi schimbați timpul și valoarea; cu mai multe alese, tragerea le mută în timp.
- O cheie aleasă arată cele două **mânere**. Trageți unul ca să modelați curba pe acea parte. {{ui:Mânere}} spune cum se comportă: {{ui:Automat}} (o curbă netedă prin cheile din jur), {{ui:Îndreptat spre cheia următoare}}, {{ui:Aliniat}} (cele două rămân pe o linie dreaptă, astfel că nu există colț) sau {{ui:Liber}}.
- {{ui:Din cheile alese}} stabilește cum trece fiecare cheie aleasă la următoarea: {{ui:Curbă (mânere)}}, {{ui:Netezire}}, {{ui:Constant}}, {{ui:Încetinire la început și sfârșit}} sau {{ui:Menținere}}.
- {{ui:Înainte}} și {{ui:După}} stabilesc ce face o curbă în afara cheilor sale: {{ui:Menținere}} (rămâne la prima sau ultima valoare), {{ui:Repetare}}, {{ui:Înainte și înapoi}} sau {{ui:Repetare și continuare}} (fiecare repetare începe unde s-a terminat ultima: o roată se rostogolește mai departe, un mers continuă).
- Rotița face zoom ({{key:Mod}}: doar valorile; {{key:Shift}}: doar timpul); trageți cu butonul din mijloc sau cu {{key:Alt}} ca să glisați; {{ui:Afișare tot}} sau {{key:Home}} încadrează toate curbele afișate. Faceți clic pe spațiul gol ca să mutați acolo capul de redare. {{key:Delete}} șterge cheile alese.

Mânerele nu sunt lăsate să se încrucișeze în timp, astfel că o curbă nu merge niciodată înapoi.

## Refolosirea animațiilor (vizualizarea Clipuri)

Un **clip** redă o animație salvată (o **acțiune**) în cronologie. Clipurile se amestecă în ordine, rândurile de jos peste cele de sus; pistele proprii ale cronologiei merg peste fiecare clip.

1. Fixați în chei grupurile și lămpile ca de obicei, apoi faceți clic pe {{ui:Creare clip}} în {{ui:Clipuri}} și dați acțiunii un nume. Pistele devin acțiunea, iar un clip o redă acolo unde erau (camera rămâne pe cronologie).
2. Ca s-o folosiți din nou, alegeți acțiunea și faceți clic pe {{ui:Adăugare clip}}: un clip nou începe la capul de redare.
3. Trageți un clip de-a lungul rândului ca să îl mutați; faceți clic pe el ca să setați {{ui:Început (s)}}, {{ui:Viteză}} (2 = de două ori mai repede), {{ui:Repetări}}, {{ui:Intensitate}} (de la 0 la 1), {{ui:Amestec}} ({{ui:Înlocuire}}, sau {{ui:Adăugare peste}} clipurile dinaintea lui), {{ui:În afara clipului}} (nimic, menținerea capătului lui sau menținerea ambelor capete) și {{ui:Silențiere}}. Săgețile schimbă ordinea; coșul îl elimină (o acțiune pe care niciun clip nu o mai folosește dispare odată cu el).

Un clip sub {{ui:Intensitate}} completă se amestecă cu ce se află sub el: clipul dinaintea lui, sau lampa ori poziționarea așa cum sunt fără animație.

## Ce se redă unde

| Ce | În vedere | Într-un videoclip randat |
|---|---|---|
| Chei de cameră, unghiul obiectivului cu cheile camerei | Da | Da |
| Poziție, rotire și dimensiune (chei, curbe, clipuri) | Da | Da |
| Luminozitatea, împrăștierea și culoarea lămpilor | Da | Nu încă: videoclipul folosește lămpile așa cum sunt la pornire (vezi [ce nu este încă realizat](topic:not-built-yet)) |
| Unghiul obiectivului fără chei de cameră | Da | Nu încă: fixați în cheie și camera |
| Chei de formă și drivere | Da | Da |
| Armături (plase poziționate) | Da | Da |
| IK și constrângeri | Da | Da |
| Fizică calculată (chei) | Da | Da |

Totul se salvează în fișierul `.modelcraft` împreună cu restul animației, iar {{ui:Anulare}} și {{ui:Refacere}} din cronologie anulează oricare dintre acestea.
