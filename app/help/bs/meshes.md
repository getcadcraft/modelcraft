---
title: Mreže
summary: Pretvori grupu ili komponentu u mrežu — vrstu objekta u kojoj modeluju alati za 3D sadržaj — i nazad u geometriju guraj-povuci.
keywords: mreža, mreže, poligon, poligoni, n-gon, četvorougao, četvorouglovi, vrhovi, polu-ivica, uv, uv-ovi, pretvori, pretvori u mrežu, pretvori u geometriju, dijeljenje površina, skulptura, modeliranje, 3d sadržaj
from: e32363e8
---

ModelCraft ima dvije vrste geometrije. **Geometrija guraj-povuci** je ono što crtaš: ravne površine koje se lijepe, sijeku jedna drugu i zarastaju. **Mreža** je vrsta objekta u kojoj modeluju alati za 3D sadržaj: površine sa bilo kojim brojem uglova, pri čemu svaki ugao može nositi svoje koordinate teksture (UV), normale i boje, a svaki vrh vrijednosti, kao što su težine. Mreža se postavlja kao grupa ili komponenta i stoji pored geometrije guraj-povuci u istom modelu.

## Pretvori grupu ili komponentu u mrežu

1. Izaberi grupu ili komponentu.
2. U {{ui:Podaci o entitetu}} klikni {{ui:Pretvori u mrežu}}.

Njene površine postaju površine mreže (površina sa rupama ulazi kao trouglovi), tvrde ivice ostaju oštre, meke ivice se glatko sjenče, a boja, materijali i uvezene teksture ostaju na svojim površinama. Grupe i komponente unutar nje se spajaju u jednu mrežu. Labave ivice se izostavljaju: mreža čuva površine. Svako postavljanje komponente prikazuje mrežu. Jedan korak poništavanja.

## Šta pokazuje Podaci o entitetu

Odaberi mrežu da vidiš njene površine, vrhove i ivice, da li je zatvoreno tijelo (i njegovu zapreminu), i njenu veličinu kako je postavljena. Mreža sa otvorenim ivicama kaže koliko ih ima.

## Pretvori mrežu nazad u geometriju guraj-povuci

Odaberi mrežu i klikni {{ui:Pretvori u geometriju}}. Ravne površine se vraćaju kakve su bile; površina čiji uglovi nisu u jednoj ravni vraća se kao trouglovi. Tvrde ivice su tvrde, ostale meke. {{ui:Rastavi}} stavlja površine mreže pravo u grupu oko nje.

## Stvari koje treba znati

- Dvaput klikni mrežu za [uređivanje njenih vrhova, ivica i površina](topic:mesh-edit) u radnom prostoru Mreža. Pretvori je u geometriju da je uređuješ guraj-povuci; pomjeraj, rotiraj, skaliraj, kopiraj, boji, sakrij i označi je kao svaku grupu.
- Izvozi, 3D štampa, renderi i VR vide mrežu kao njene površine.
- Datoteka koja sadrži mrežu se čuva kao novija verzija datoteke `.modelcraft`, pa je ModelCraft 0.6 i stariji ne mogu otvoriti; datoteke bez mreže se u njima otvaraju kao i prije. Pretvori mreže u geometriju prvo da podijeliš datoteku sa nekim ko ima stariju verziju.
- Poništavanje na mreži čuva samo ono što je svaki korak promijenio, pa se i jako velika mreža poništava brzo.

Pogledaj također [Grupe i komponente](topic:groups-components) i [Još nije napravljeno](topic:not-built-yet).
