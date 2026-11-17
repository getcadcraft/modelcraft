---
title: Brisanje i čišćenje
summary: Briši ivice, grupe i vodilice gumicom ili tasterom Delete, spoji podeljene površine i ispravi površine okrenute na pogrešnu stranu.
keywords: brisanje, gumica, izbriši, ukloni, spoji, spajanje površina, očisti, zalutale linije, obrni površinu, zadnja površina, opozovi
from: 80b92a81
---

## Brisanje gumicom

1. Pritisni {{key:E}} za {{ui:Gumica}}.
2. Klikni ivicu, grupu ili komponentu, ili vodilicu. Biće obrisana.
3. Da obrišeš više, pritisni i prevuci preko njih. Sve što pređeš se osvetljava, i sve nestaje kad otpustiš.

Gumica ne bira površine: površina nestaje kad obrišeš ivice koje su joj potrebne. Površine su ono kroz šta gumica traži ivice.

## Šta se dešava sa površinama

- **Ivica između dve površine u istoj ravni** (na primer linija koju si nacrtao preko poda) nestaje, a dve površine se **spajaju** u jednu.
- **Ivica koja je površini potrebna da ostane zatvorena** (ivica kutije) vodi tu površinu sa sobom. Obriši jednu gornju ivicu kutije i nestaju gornja površina i jedna bočna, ostavljajući otvorenu kutiju.
- **Slobodni krajevi** (tačke koje nijedna ivica više ne koristi) se čiste.

Brisanje poslednjeg primerka komponente uklanja i komponentu iz panela {{ui:Komponente}}.

## Brisanje tasterom Delete

1. Izaberi ono što želiš da ukloniš alatkom {{ui:Izaberi}}.
2. Pritisni {{key:Delete}} ili {{key:Backspace}}.

Ovo uklanja i površine. Površina obrisana na ovaj način ostavlja svoje ivice, pa možeš obrisati gornju stranu kutije i zadržati njen obris, pa tu nacrtati nešto drugo.

## Čišćenje zalutalih linija na ravnoj površini

Ako zid ili pod pokazuje linije koje ne želiš (ostatke od crtanja), obriši ih {{ui:Gumica}}. Linije koje leže u površini se stapaju; površina ostaje.

## Površina okrenuta na pogrešnu stranu

Površina posmatrana sa zadnje strane je plavo-siva. Ako površina prikazuje plavo-sivu na spoljašnoj strani modela:

1. Izaberi površinu.
2. Klikni {{ui:Obrni površinu}} u {{ui:Podaci o entitetu}}.

Smer površine je najvažniji pri izvozu: renderi, pogoni za igre i 3D štampači mogu sakriti ili pogrešno pročitati površine koje gledaju unutra.

## Opozivanje greške

{{key:Mod+Z}} opoziva jedan korak po korak, {{key:Mod+Y}} (ili {{key:Mod+Shift+Z}}) ponavlja. Prevlačenje gumicom je jedan korak, koliko god stvari obuhvati. Statusna traka kaže šta je opozvano: „Opozvano: brisanje.”
