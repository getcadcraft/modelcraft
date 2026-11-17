---
title: Mreže
summary: Pretvori grupu ili komponentu u mrežu, vrstu objekta kojim alati za 3D sadržaj modeliraju, i nazad u geometriju guraj-povuci.
keywords: mreža, mreže, poligon, poligoni, n-gon, četvorougao, četvorouglovi, temena, poluivice, uv, uv-ovi, pretvori, pretvori u mrežu, pretvori u geometriju, podela površine, vajanje, modelovanje, 3d sadržaj
from: e32363e8
---

ModelCraft ima dve vrste geometrije. **Geometrija guraj-povuci** je ono što crtate: ravne površine koje se lepe, seku jedna drugu i zarastaju. **Mreža** je vrsta objekta kojim alati za 3D sadržaj modeliraju: površine sa bilo kojim brojem uglova, pri čemu svaki ugao može da nosi sopstvene koordinate teksture (UV), normale i boje, a svako teme vrednosti kao što su težine. Mreža se postavlja kao grupa ili komponenta i stoji pored geometrije guraj-povuci u istom modelu.

## Pretvorite grupu ili komponentu u mrežu

1. Izaberite grupu ili komponentu.
2. U {{ui:Podaci o entitetu}} kliknite {{ui:Pretvori u mrežu}}.

Njene površine postaju površine mreže (površina sa rupama ulazi kao trouglovi), oštre ivice ostaju oštre, meke ivice se senčaju glatko, a boja, materijali i uvezene teksture ostaju na svojim površinama. Grupe i komponente unutra se spajaju u jednu mrežu. Labave ivice se izostavljaju: mreža zadržava površine. Svako postavljanje komponente prikazuje mrežu. To je jedan korak opoziva.

## Šta pokazuje Podaci o entitetu

Izaberite mrežu da vidite njene površine, temena i ivice, da li je zatvoreno telo (i njegovu zapreminu), i njenu veličinu kad je postavljena. Mreža sa otvorenim ivicama kaže koliko ih ima.

## Pretvorite mrežu nazad u geometriju guraj-povuci

Izaberite mrežu i kliknite {{ui:Pretvori u geometriju}}. Ravne površine se vraćaju kakve su bile; površina čiji uglovi nisu u jednoj ravni vraća se kao trouglovi. Oštre ivice su tvrde, ostale meke. {{ui:Rastavi}} stavlja površine mreže pravo u grupu oko nje.

## Stvari koje treba znati

- Dvaput kliknite mrežu da [uredite njena temena, ivice i površine](topic:mesh-edit) u radnom prostoru Mreža. Pretvorite je u geometriju da je uređujete guraj-povuci; pomerajte, rotirajte, skalirajte, kopirajte, bojite, sakrivajte i označavajte je kao svaku grupu.
- Izvozi, 3D štampa, renderi i VR vide mrežu kao njene površine.
- Datoteka koja sadrži mrežu se čuva kao novija verzija datoteke `.modelcraft`, pa je ModelCraft 0.6 i stariji ne može otvoriti; datoteke bez mreže se u njima otvaraju kao ranije. Prvo pretvorite mreže u geometriju da biste delili datoteku sa nekim na starijoj verziji.
- Opoziv na mreži čuva samo ono što je svaki korak promenio, pa se čak i vrlo velika mreža brzo opoziva.

Videti još [Grupe i komponente](topic:groups-components) i [Još nije napravljeno](topic:not-built-yet).
