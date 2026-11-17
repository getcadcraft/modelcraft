---
title: Brisanje i čišćenje
summary: Briši ivice, grupe i vodilice gumicom ili tipkom Delete, spoji podijeljene plohe i popravi plohe koje gledaju na pogrešnu stranu.
keywords: briši, brisanje, gumica, obriši, ukloni, popravi, spoji plohe, očisti, lutajuće linije, obrni plohu, zadnja ploha, poništi
from: 80b92a81
---

## Brisanje gumicom

1. Pritisni {{key:E}} za {{ui:Gumica}}.
2. Klikni ivicu, grupu ili komponentu, ili vodilicu. Briše se.
3. Da obrišeš više, pritisni i prevuci preko njih. Sve preko čega prođeš se označava, a sve se briše kada otpustiš.

Gumica ne bira plohe: ploha nestaje kada obrišeš ivice koje su joj potrebne. Plohe su ono kroz što gumica traži ivice.

## Šta se dešava sa plohama

- **Ivica između dvije plohe u istoj ravni** (na primjer linija koju si nacrtao preko poda) nestaje, a dvije plohe se **spajaju** u jednu.
- **Ivica koju ploha treba da ostane zatvorena** (ivica kutije) povlači tu plohu sa sobom. Obriši jednu gornju ivicu kutije i nestaju gornja i jedna strana, ostavljajući otvorenu kutiju.
- **Labavi krajevi** (tačke koje više nijedna ivica ne koristi) se čiste.

Brisanjem posljednje kopije komponente uklanja se i komponenta iz panela {{ui:Komponente}}.

## Brisanje tipkom Delete

1. Odaberi ono što želiš ukloniti sa {{ui:Odaberi}}.
2. Pritisni {{key:Delete}} ili {{key:Backspace}}.

Ovo briše i plohe. Ploha obrisana na ovaj način ostavlja svoje ivice, pa možeš obrisati vrh kutije i zadržati njen obris, pa nacrtati nešto drugo tu.

## Očisti lutajuće linije na ravnoj plohi

Ako zid ili pod pokazuju linije koje ne želiš (ostaci od crtanja), obriši ih {{ui:Gumica}}. Linije koje leže u plohi nestaju i ploha se spaja; ploha ostaje.

## Ploha okrenuta na pogrešnu stranu

Ploha gledana sa zadnje strane je plavo-siva. Ako ploha na vanjskoj strani modela pokazuje plavo-sivo:

1. Odaberi plohu.
2. Klikni {{ui:Obrni plohu}} u {{ui:Podaci o entitetu}}.

Smjer plohe najviše je važan pri izvozu: renderi, igraći motori i 3D štampači mogu sakriti ili pogrešno pročitati plohe koje gledaju unutra.

## Poništi grešku

{{key:Mod+Z}} poništava jedan po jedan korak, {{key:Mod+Y}} (ili {{key:Mod+Shift+Z}}) ponavlja. Prevlačenje gumicom je jedan korak, koliko god stvari obuhvatio. Statusna traka kaže šta je poništeno: "Poništeno: brisanje."
