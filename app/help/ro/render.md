---
title: Randarea unei imagini a modelului
summary: Imagine care arată ca lumina zilei: cer, soare după locul și data modelului, umbre moi, aspecte de sticlă și metal, apoi salvată ca PNG.
keywords: randare, presetare, presetări, presetare de scenă, interior, exterior, vizualizare secțiune, noapte, un clic, randare, trasare de cale, trasare de raze, iluminare globală, reflexii, refracție, calitate înaltă, fotografie, fotorealist, realist, imagine, png, fix, cer, soare, lumină de zi, umbre, umbre moi, ocluzie ambientală, sticlă, metal, lucios, materiale, expunere, luminozitate, cer înnorat, amurg, studio, prezentare, ceață, abur, ceață, fum, nor, volum, raze de lumină, caustice, eșantionare adaptivă, zgomot
from: 517ba4d3
---

{{ui:Render a picture…}} realizează o imagine a vizualizării care arată ca lumina zilei, nu ca un desen: un cer, soarele așezat după locul și data modelului, umbre moi, lumină din tot cerul care întunecă colțurile și golurile, iar culorile pot arăta ca sticlă, metal sau vopsea lucioasă. Modelul nu se modifică.

## Randarea vizualizării

1. Pregătiți vizualizarea așa cum doriți imaginea: orbitați, măriți, alegeți o [scenă](topic:scenes), ascundeți ce nu trebuie să apară. Imaginea folosește camera proprie a vizualizării.
2. Faceți clic pe {{ui:Export}} din grupul {{ui:File}}, apoi pe {{ui:Render a picture…}}.
3. Alegeți o {{ui:Scene}} dacă cea apăsată nu este cea dorită (vezi [Presetări de scenă](topic:render#scene-presets-a-good-picture-in-one-click)), alegeți {{ui:Size}}, apoi faceți clic pe {{ui:Render}}.

   Imaginea se completează pe măsură ce se randează și devine mai netedă la fiecare trecere. {{ui:Stop}} (sau {{key:Esc}}) o oprește devreme și păstrează imaginea obținută până atunci.

4. Faceți clic pe {{ui:Save}} pentru a o descărca (un PNG, dacă {{ui:Save as}} nu spune altceva).

:::tip
Începeți cu {{ui:Draft}} la {{ui:The view's size}} pentru a verifica camera și aspectul, apoi randați {{ui:Good}} sau {{ui:Best}} la o dimensiune mai mare pentru imaginea finală.
:::

## Presetări de scenă: o imagine bună dintr-un clic

În partea de sus a casetei sunt patru butoane {{ui:Scene}}. Fiecare setează dintr-un clic cerul, luminozitatea, solul, liniile de margine, calitatea și soarele, astfel că nu trebuie învățat nimic înainte de prima imagine. Faceți clic pe unul, apoi pe {{ui:Render}}.

| Scenă | Ce setează | Pentru ce se folosește |
|---|---|---|
| {{ui:Exterior}} | Cer senin, soarele propriu al modelului, sol pornit | Clădirea din exterior |
| {{ui:Interior}} | Cer înnorat (lumină uniformă, fără pete tari de soare), cu un stop mai luminos | O vizualizare din interiorul unei încăperi |
| {{ui:Section view}} | Studio alb, fără sol, linii de margine în randarea rapidă | Un model tăiat printr-o secțiune |
| {{ui:Night}} | Soarele sub orizont (miezul nopții la mijlocul iernii, pentru emisfera locului), cu un stop mai luminos | Lămpi care luminează modelul. Fără lămpi, imaginea este întunecată |

- {{ui:Pick for this view}} alege singur: {{ui:Section view}} când o tăietură de secțiune este activă, {{ui:Interior}} când camera este în interiorul modelului, altfel {{ui:Exterior}}. Prima dată când deschideți caseta, pornește singură în acest fel.
- Fiecare setare de mai jos poate fi schimbată. Odată ce modificați una dintre cele pe care le setează scena, niciun buton nu mai este apăsat, iar rândul de sub butoane spune că setările sunt proprii. Apăsați din nou scena pentru a le readuce la valorile ei.
- O scenă nu atinge motorul, modul, dimensiunea, materialele, camera sau lămpile.

:::note
Scenele dau aceleași valori în ModelCraft și BimCraft. Cum arată imaginea finală depinde de model și de placa grafică.
:::

## Setări

| Setare | Ce face |
|---|---|
| {{ui:Size}} | Dimensiunea vizualizării, de două ori dimensiunea vizualizării, Full HD, 4K sau pătrat. Dimensiunile fixe păstrează camera vizualizării și arată mai mult sau mai puțin pe laturi |
| {{ui:Mode}} | {{ui:Fast}}, sau {{ui:High quality (path traced)}} (mai jos) cu {{ui:Time limit}} |
| {{ui:Quality}} | Câte treceri (sau, în calitate înaltă, câte eșantioane) se mediază: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Mai multe treceri dau umbre și margini mai netede, dar durează mai mult |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}} (lumină moale, umbre slabe), {{ui:Dusk}} (lumină joasă, caldă) sau {{ui:White studio}} (fundal alb simplu) |
| {{ui:Sun}} | Soarele vine din data, ora și locul din {{ui:Style}} › Soare. Bifați {{ui:Use another date and time for this picture}} pentru a încerca alt moment fără a schimba stilul modelului |
| {{ui:Brightness}} | Mai luminos sau mai întunecat, în trepte (stopuri) |
| {{ui:Ground under the model}} | Un sol care primește umbrele și se topește spre orizont. Dezactivați-l pentru un model care plutește |
| {{ui:Draw edges}} | Desenează subțire muchiile modelului peste imagine, pentru un aspect desenat |

Când soarele se află sub orizont la ora aleasă, este noapte: cerul se întunecă, iar [lămpile](topic:lights) modelului îl luminează. Caseta o spune.

Setările se salvează în fișierul `.modelcraft`, astfel că următoarea imagine a aceluiași model pornește de unde ați rămas.

## Culori care arată ca sticlă sau metal

Sub {{ui:Materials}}, fiecare culoare de pe ecran are un aspect: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} sau {{ui:Frosted glass}}. {{ui:Unpainted faces}} sunt fețele fără culoare proprie.

Pentru a face ferestrele din sticlă, [vopsiți](topic:paint) geamurile într-o singură culoare, apoi setați culoarea la {{ui:Glass}}. Sticla lasă să se vadă cerul și ce se află în spate, colorat de culoarea sa, și reflectă cerul.

:::note
În modul {{ui:Fast}}, sticla și metalul reflectă cerul, nu restul modelului, iar lumina nu se refractă prin sticlă. Modul {{ui:High quality (path traced)}} de mai jos face ambele.
:::

## Calitate înaltă

Alegeți {{ui:Mode}} › {{ui:High quality (path traced)}} pentru o imagine care urmărește lumina așa cum o vede o cameră:

- lumina se reflectă între suprafețe, așa că o încăpere luminată printr-o fereastră sau de o lampă este luminată pe toate părțile, iar culorile se revarsă pe vecine;
- sticla este sticlă reală: lumina se refractă prin ea, iar ea reflectă modelul;
- metalul și suprafețele lustruite reflectă restul modelului;
- panourile de lumină luminează ca panouri, cu umbre moi.

Este mult mai lent decât {{ui:Fast}}: fiecare trecere urmărește din nou lumina pentru fiecare pixel. Imaginea începe granulată și se curăță pe măsură ce eșantioanele se adună, așa că începeți mic ({{ui:The view's size}}, {{ui:Draft}}) și alegeți un {{ui:Time limit}}: când se termină, imaginea obținută până atunci se păstrează. {{ui:Stop}} o păstrează și el. Prima trecere așteaptă cât timp browserul pregătește trasorul de cale.

Unde browserul are WebGPU, trasorul de cale este al CadCraft și rulează pe placa grafică; rândul de sub imagine spune {{ui:Path traced on the graphics card (WebGPU)}}. După {{ui:Stop}} sau limita de timp, {{ui:Resume}} continuă cu aceeași imagine până ajunge la toate eșantioanele; schimbarea unei setări sau apăsarea din nou a lui {{ui:Render}} pornește de la zero. Fără WebGPU, imaginea este urmărită cu WebGL (rândul spune asta), iar {{ui:Resume}} nu este oferit.

:::linux
Firefox și majoritatea configurațiilor Chrome pe Linux nu au încă WebGPU, așa că în ele calitatea înaltă folosește WebGL.
:::

În acest mod muchiile nu sunt desenate, texturile din bibliotecă arată culoarea și rugozitatea, dar nu și reliefurile (un [material făcut cu noduri](topic:shading#in-high-quality-pictures) arată normala și reliefurile sale), iar o tăietură de secțiune se face pe model înainte de începerea imaginii.

{{ui:Denoise (clears the grain left after the samples)}} este activat implicit: când imaginea este gata sau oprită, granulația rămasă se curăță cu o rețea neuronală făcută pentru asta (rețeaua publicată de Intel Open Image Denoise, rulată pe propriul calculator: pe placa grafică, altfel pe procesor). O imagine cu puține eșantioane iese curată; {{ui:Show}} › {{ui:The picture before denoising}} o arată așa cum a fost randată.

## Randarea în vizualizare

Spațiul de lucru {{ui:Render}} rulează trasorul de cale direct în vizualizare: orbitați, editați modelul sau schimbați o lumină și pornește din nou imediat. {{ui:Region}}: trageți un dreptunghi și doar el se randează; {{ui:Whole view}} revine. {{ui:Focus}}: faceți clic pe ce trebuie să fie clar, iar adâncimea câmpului focalizează acolo. {{ui:Detail}} stabilește câți pixeli ai vizualizării se randează (mai puțini înseamnă mai rapid). {{ui:Pause}} oprește și continuă. Are nevoie de WebGPU: fără el, spațiul de lucru o spune, iar {{ui:Export}} › {{ui:Render a picture…}} funcționează în continuare.

## Cerurile și profilele de lumină pe placa grafică

Cu WebGPU, calitatea înaltă are încă două ceruri:

- {{ui:Physical sky}} calculează lumina zilei din înălțimea soarelui: albastru adânc deasupra, o bandă palidă la orizont și un soare care devine mai cald și mai slab când coboară. {{ui:Haze}} merge de la o zi foarte limpede (2) la una cețoasă (10).
- {{ui:Sky picture (HDRI)}} luminează modelul cu o panoramă a unui loc real. {{ui:Choose a picture…}} alege un fișier `.hdr` sau `.exr` equirectangular; {{ui:Rotate}} îl rotește în jurul modelului, iar {{ui:Picture brightness}} îl face mai luminos sau mai întunecat. Imaginea are propriul soare, deci soarele modelului nu se adaugă. Rămâne doar cât timp pagina este deschisă: după redeschidere, alegeți-o din nou.

Fiecare lampă din lista {{ui:Lamps}} poate primi un profil de lumină al producătorului: {{ui:IES profile…}} citește un fișier IES (LM-63), iar lampa își împrăștie lumina așa cum o face acel corp (un spot îngust, un spălător de perete). Fiecare lampă cu acel nume îl folosește, iar lampa își păstrează propria luminozitate. Faceți clic pe numele profilului pentru a-l opri.

Ferestrele din sticlă limpede ajută lumina cerului să ajungă într-o încăpere, deci imaginile de interior sub cer se curăță mai repede.

Modul {{ui:Fast}} și trasorul de cale WebGL arată {{ui:Physical sky}} și {{ui:Sky picture (HDRI)}} ca un cer senin și ignoră profilele de lumină.

## Camera

{{ui:Camera}} așază imaginea ca pe o fotografie:

- {{ui:Exposure}}: păstrați {{ui:Brightness slider}} sau alegeți {{ui:Camera settings}} și setați {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} și {{ui:ISO}} ca la un aparat foto; EV de lângă ele este valoarea de expunere obișnuită. f/16 la 1/100 s și ISO 100 corespund unei zile însorite; o scenă mai întunecată cere o diafragmă mai deschisă, un obturator mai lent sau un ISO mai mare. Funcționează în toate modurile.
- {{ui:Depth of field}} estompează ce este mai aproape sau mai departe decât {{ui:Focus distance (m)}}, cum ar face un obiectiv cu acel f-stop (lăsați gol pentru a focaliza pe ce se află în mijlocul vizualizării); {{ui:Aperture shape}} dă reflexiilor din afara focalizării o formă rotundă sau cu lamele.
- {{ui:Two-point perspective (vertical lines stay vertical)}} nivelează camera și deplasează imaginea, cum face un obiectiv arhitectural tilt-shift, astfel că pereții nu se înclină când priviți în sus sau în jos spre o clădire.
- {{ui:White balance}} stabilește ce culoare de lumină apare ca alb: mai jos (de exemplu 3000 K) pentru lumina caldă a lămpilor, mai sus pentru umbră și zilele înnorate.
- {{ui:Projection}}: {{ui:360° panorama}} face o imagine 2:1 cu tot ce este în jurul camerei, pentru vizualizatoarele de panorame; {{ui:360° stereo panorama}} așază una pentru ochiul stâng și una pentru cel drept, pentru căști; {{ui:Cube map (6 faces)}} face șase vederi pătrate într-o grilă 3 × 2. Lățimea vine din {{ui:Size}}.

Proiecția, adâncimea câmpului, perspectiva cu două puncte și balansul de alb au nevoie de trasorul de cale de pe placa grafică (WebGPU), deci apar doar în {{ui:High quality}}.

## Finisarea imaginii

{{ui:Picture}} gradează imaginea de calitate înaltă ca o fotografie, iar fiecare comandă schimbă imaginea finală imediat, fără a randa din nou:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (imaginea ca înainte), {{ui:AgX}} (mai moale, păstrează culoarea în lumină foarte puternică), {{ui:Filmic}} (o curbă de film blândă) sau {{ui:Standard}} (simplu, lumina foarte puternică se taie în alb).
- {{ui:Contrast}} și {{ui:Highlight compression}} (readuce detalii din zonele foarte luminoase).
- {{ui:Bloom}} (o strălucire moale în jurul luminilor puternice), {{ui:Glare}} cu {{ui:Glare streaks}} (raze în stea din cele mai luminoase puncte) și {{ui:Vignette}} (colțuri mai întunecate).
- {{ui:Colour table (.cube)…}} aplică o gradare de culoare dintr-un fișier `.cube`, cu {{ui:Colour table strength}}; ca o imagine de cer, rămâne doar cât timp pagina este deschisă.

## Salvarea imaginii

{{ui:Save as}} lângă {{ui:Save}} alege fișierul: {{ui:PNG}}, {{ui:JPEG}} sau {{ui:WebP}} pentru partajare (JPEG și WebP doar acolo unde browserul le poate scrie), iar după o randare de calitate înaltă pe placa grafică și:

- {{ui:PNG, 16 bits}}: imaginea gradată, cu trepte mai fine între nuanțe, pentru tipărire sau prelucrare ulterioară.
- {{ui:EXR, every layer (32-bit float)}}: imaginea așa cum a fost randată (lumină liniară, fără gradare), cu fiecare element de randare și grup de lumini ca strat separat, pentru programele de compunere.
- {{ui:Render file (.ccrender, to grade again later)}}: tot ce are nevoie caseta pentru a amesteca și grada din nou imaginea. {{ui:Open a render file…}} o readuce, cu amestecul și gradarea sa, fără randare.

## Amestecarea luminilor după randare

Activați {{ui:Light mixing (change each light's colour and brightness after the render)}} înainte de a apăsa {{ui:Render}}. Când imaginea este gata (sau oprită), {{ui:Mix the picture}} listează luminile ei pe grupuri: cerul, soarele și lămpile după nume (fiecare lampă cu același nume formează un grup). Dezactivați un grup, dați-i o culoare sau faceți-l mai luminos ori mai întunecat, iar imaginea se schimbă imediat, fără randare nouă. {{ui:Save mix}} păstrează amestecul sub un nume pe care îl alegeți mai târziu; {{ui:As rendered}} revine la imaginea așa cum a fost făcută. {{ui:Save}} salvează imaginea amestecată.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} păstrează și părțile imaginii. {{ui:Show}} comută vizualizarea pe una dintre ele: culorile suprafețelor (albedo), normalele, adâncimea, lumina difuză, speculară și transmisă (fiecare directă și indirectă), ce strălucește și cerul, și o culoare per obiect sau per material pentru măști.

Ambele păstrează straturi suplimentare pe placa grafică. La dimensiuni mari, placa grafică poate să nu aibă loc; caseta o spune, iar o dimensiune mai mică funcționează.

## Coada de randare

După o configurare de calitate înaltă, {{ui:Add this picture to the queue}} din {{ui:Render queue}} păstrează imaginea așa cum este setată acum; {{ui:Add this animation to the queue}} din caseta video face același lucru pentru o animație întreagă, randată cadru cu cadru prin trasare de cale. {{ui:Start the queue}} le randează una după alta pe acest calculator, iar {{ui:Save}} de lângă fiecare terminată o descarcă. Închiderea paginii păstrează coada: deschideți același model și continuă de unde s-a oprit. Coada are nevoie de WebGPU.

## Ceață, fum, zgomot și caustice

Acestea se află în {{ui:Fog, smoke and noise}} și funcționează în {{ui:High quality}} pe placa grafică; celelalte motoare le lasă deoparte.

- {{ui:Fog and haze}} umple aerul până la o înălțime cu o ceață pe care o luminează soarele, cerul și lămpile. {{ui:How far you can see, in meters}} stabilește cât de densă este (aproximativ 100 m este o ceață ușoară, 20 m o ceață groasă), {{ui:Fog height above the ground, in meters}} este locul unde se termină, iar {{ui:Light shafts}} arată cât strălucește ceața spre lumină. Lumina soarelui iese din ceață la partea de sus, astfel că, unde soarele trece printr-o fereastră sau între clădiri, îl vedeți ca raze de lumină.
- {{ui:Smoke or cloud}} adaugă un volum de fum sau nor, luminat ca ceața. {{ui:Kind}} este {{ui:Cloud}}, {{ui:Smoke column}} sau {{ui:From a volume file (.ccvol)}}, formatul de grilă propriu al CadCraft. {{ui:Detail}} și {{ui:Variation}} schimbă un nor sau o coloană creată, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} și {{ui:Rotate}} îl plasează (pornește în mijlocul modelului), {{ui:Thickness}} îl face mai dens, {{ui:Forward glow}} îl face mai luminos spre lumină, iar {{ui:Color}} îi dă o nuanță. Un fișier de volum rămâne doar cât timp pagina este deschisă, ca o imagine de cer.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} nu mai dă eșantioane pixelilor care s-au stabilizat, astfel că restul imaginii se termină mai repede. {{ui:Noise to accept}} arată cât de multă granulație rămâne când un pixel se oprește. Rândul de sub imagine spune câte eșantioane a primit un pixel în medie.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} urmărește lumina de la lămpi și de la soare, astfel că pata luminoasă de sub o bilă de sticlă sau lumina unei oglinzi pe perete iese curată, în loc de granulată. Este oprită cât timp sunt active ceața, fumul, {{ui:Mix the lights after the render}} sau {{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}}, și este făcută pentru imagini, nu pentru panorame de 360°, animații sau spațiul de lucru Render.

## Cât durează

Imaginea se face pe propriul calculator, de placa grafică; nimic nu se încarcă. Cât durează depinde de placă. Timpul crește odată cu trecerile și pixelii: {{ui:Best}} are de 16 ori mai multe treceri decât {{ui:Draft}}, iar o imagine 4K are aproximativ de patru ori mai mulți pixeli decât Full HD. Un calculator fără placă grafică randează în continuare, dar mai lent.

:::note
Dacă caseta spune că browserul nu poate randa imagini, browserul nu are WebGL 2. Actualizați-l sau activați accelerarea hardware în setările sale.
:::
