---
title: Mreže
summary: Pretvorite grupu ili komponentu u mrežu, vrstu objekta s kojim alati za 3D sadržaj modeliraju, i natrag u geometriju guranja i povlačenja.
keywords: mreža, mreže, poligon, poligoni, n-kut, četverokut, četverokuti, vrhovi, polu-brid, uv, uv-ovi, pretvori, pretvori u mrežu, pretvori u geometriju, podjela površine, modeliranje, 3D sadržaj
from: e32363e8
---

Program ModelCraft ima dvije vrste geometrije. **Geometrija guranja i povlačenja** je ono što crtate: ravne plohe koje se spajaju, sijeku i zarastaju. **Mreža** je vrsta objekta s kojim alati za 3D sadržaj modeliraju: plohe s proizvoljnim brojem kutova, pri čemu svaki kut može nositi vlastite teksturne koordinate (UV-ove), normale i boje, a svaki vrh vrijednosti kao što su težine. Mreža se postavlja kao grupa ili komponenta i stoji uz geometriju guranja i povlačenja u istom modelu.

## Pretvorite grupu ili komponentu u mrežu

1. Odaberite grupu ili komponentu.
2. U {{ui:Informacije o entitetu}} kliknite {{ui:Pretvori u mrežu}}.

Njezine plohe postaju plohe mreže (ploha s rupama dolazi kao trokuti), tvrdi bridovi ostaju oštri, meki bridovi se glatko sjenčaju, a boja, materijali i uvezene teksture ostaju na svojim plohama. Grupe i komponente unutar nje spajaju se u jednu mrežu. Rubni bridovi se izostavljaju: mreža čuva plohe. Svaki smještaj komponente prikazuje mrežu. Jedan korak poništavanja.

## Što prikazuje Informacije o entitetu

Odaberite mrežu da vidite njezine plohe, vrhove i bridove, je li zatvoreno tijelo (i njegov obujam) i njezinu veličinu kako je postavljena. Mreža s otvorenim bridovima kaže koliko ih ima.

## Pretvorite mrežu natrag u geometriju guranja i povlačenja

Odaberite mrežu i kliknite {{ui:Pretvori u geometriju}}. Ravne plohe vraćaju se kakve su bile; ploha čiji kutovi nisu u jednoj ravnini vraća se kao trokuti. Tvrdi bridovi su tvrdi, ostali meki. {{ui:Rastavi}} stavlja plohe mreže izravno u grupu oko nje.

## Stvari koje treba znati

- Dvostruki klik na mrežu [uređuje njezine vrhove, bridove i plohe](topic:mesh-edit) u radnom prostoru Mreža. Pretvorite je u geometriju da je uređujete guranjem i povlačenjem; pomičite, zakrećite, skalirajte, kopirajte, bojite, sakrivajte i označavajte je kao svaku grupu.
- Izvozi, 3D ispis, renderi i VR vide mrežu kao njezine plohe.
- Datoteka koja sadrži mrežu sprema se kao novija verzija datoteke `.modelcraft`, pa je ModelCraft 0.6 i stariji ne može otvoriti; datoteke bez mreže se u njima otvaraju kao i prije. Prvo pretvorite mreže u geometriju da datoteku podijelite s nekim tko ima stariju verziju.
- Poništavanje na mreži čuva samo ono što je svaki korak promijenio, pa se i vrlo velika mreža brzo poništava.

Vidi također [Grupe i komponente](topic:groups-components) i [Još nije izrađeno](topic:not-built-yet).
