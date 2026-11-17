---
title: Brisanje i čišćenje
summary: Brišite bridove, grupe i vodilice gumicom ili tipkom Delete, spajajte podijeljene plohe i ispravljajte plohe okrenute na krivu stranu.
keywords: briši, gumica, delete, ukloni, spoji, spajanje ploha, čišćenje, zalutale linije, okreni plohu, stražnja ploha, poništi
from: 80b92a81
---

## Brisanje gumicom

1. Pritisnite {{key:E}} za {{ui:Gumica}}.
2. Kliknite brid, grupu, komponentu ili vodilicu. Bit će obrisana.
3. Za brisanje više objekata pritisnite i prevucite preko njih. Sve preko čega prelazite se označi, a sve nestaje kad otpustite.

Gumica ne bira plohe: ploha nestaje kad obrišete bridove koji su joj potrebni. Plohe su ono kroz što gumica gleda da pronađe bridove.

## Što se događa s plohama

- **Brid između dviju ploha u istoj ravnini** (na primjer linija koju ste nacrtali preko poda) nestaje, a dvije plohe **se spajaju** u jednu.
- **Brid koji ploha treba da ostane zatvorena** (brid kutije) povlači sa sobom tu plohu. Obrišete li jedan gornji brid kutije, nestaju gornja ploha i jedna bočna, a ostaje otvorena kutija.
- **Slobodni krajevi** (točke koje više ne koristi nijedan brid) čiste se.

Brisanje zadnje kopije komponente uklanja i komponentu s ploče {{ui:Komponente}}.

## Brisanje tipkom Delete

1. Odaberite što želite ukloniti alatom {{ui:Odaberi}}.
2. Pritisnite {{key:Delete}} ili {{key:Backspace}}.

Ovo uklanja i plohe. Ploha obrisana na ovaj način ostavlja svoje bridove, pa možete obrisati vrh kutije i zadržati njezin obris, a zatim tamo nacrtati nešto drugo.

## Čišćenje zalutalih linija na ravnoj plohi

Ako zid ili pod pokazuju linije koje ne želite (ostaci crtanja), obrišite ih {{ui:Gumica}}. Linije koje leže u plohi spajaju se i nestaju; ploha ostaje.

## Ploha okrenuta na krivu stranu

Ploha gledana sa stražnje strane je plavo-siva. Ako na vanjskoj strani modela ploha izgleda plavo-sivo:

1. Odaberite plohu.
2. Kliknite {{ui:Okreni plohu}} u {{ui:Informacije o entitetu}}.

Smjer ploha najvažniji je pri izvozu: renderi, pogoni za igre i 3D pisači mogu sakriti ili krivo pročitati plohe koje gledaju prema unutra.

## Poništavanje pogreške

{{key:Mod+Z}} poništava jedan korak po korak, a {{key:Mod+Y}} (ili {{key:Mod+Shift+Z}}) ponavlja. Povlačenje gumicom je jedan korak, bez obzira na broj objekata. Statusna traka navodi što je poništeno: „Poništeno: brisanje.“
