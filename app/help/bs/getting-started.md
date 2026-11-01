---
title: Početak rada s ModelCraftom
summary: Čemu služi ModelCraft, kako se otvara i prva kutija, od pravougaonika do spašenog modela.
keywords: početak, prvi model, započni, vodič, uvod, kutija, masa, 3d, gurni povuci, brzi početak, vođeno, vodič, početnik, novo u 3D
from: d47ad719
---

ModelCraft je alat za 3D modeliranje u ranoj fazi projektovanja: studije mase, rasporede prostorija, brze oblike zgrada i sjene koje bacaju. Crtaju se ravni oblici, izvlače u tijela, a rad na njima nastavlja se crtanjem po njihovim plohama. Radi u web pregledniku, a modeli ostaju na računaru.

Ako si koristio SketchUp, većina znanja se prenosi: ista slova alata, gurni/povuci, polje za vrijednost za tačne veličine, grupe i komponente. [Dolazak iz drugih alata](topic:coming-from) navodi šta je drugačije.

## Otvori ModelCraft

1. Otvori ModelCraft u aktuelnoj verziji Chrome, Edge, Firefox ili Safari preglednika. Pogledaj [Preglednici i računari](common:browsers).
2. Sačekaj da se pojavi 3D pogled: svijetla (ili tamna) površina u sredini s karticom naslovljenom „Počni modeliranje“.

Ekran ima traku alata uz vrh, {{ui:Pregled}} i {{ui:Komponente}} lijevo, 3D pogled u sredini, {{ui:Podaci o entitetu}}, {{ui:Stil}} i {{ui:Scene}} desno, a statusnu traku pri dnu s poljem za vrijednost i jedinicama. [Ekran ModelCraft](topic:workspace) objašnjava svaki dio.

:::note
ModelCraft treba WebGL, funkciju za 3D crtanje u pregledniku. Ako sredina ekrana ostane prazna i alati ne rade, pogledaj [Rješavanje problema](topic:troubleshooting#the-3d-view-is-blank).
:::

## Prvo provjeri jedinice

Pogledaj donji desni ugao. Birač jedinica pokazuje u čemu se mjere dužine.

- Novi model počinje u **stopama i inčima** kad je preglednik podešen na Sjedinjene Države (također Liberija i Mjanmar), a u **milimetrima** svuda drugdje.
- Da promijeniš, odaberi drugu jedinicu u biraču: {{ui:ft i in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ili {{ui:mm}}. Sam model ne mijenja veličinu; mijenja se samo kako se prikazuju dužine i kako se čitaju goli brojevi.

Broj koji se ukuca bez jedinice koristi jedinicu modela. U modelu u stopama i inčima goli broj je **inč**, pa `120` znači 10 stopa.

## Neka ModelCraft vodi prvi model

Prvi put u 3D? Na kartici {{ui:Počni modeliranje}} klikni {{ui:Vođeni prvi model}} (nalazi se i u {{ui:Pogledi}}). Mala kartica vodi kroz četiri koraka, od ravnog pravougaonika do modela spremnog za 3D štampač:

1. Nacrtaj pravougaonik na tlu.
2. Izvuci ga u kutiju.
3. Pretvori kutiju u jedan objekat (grupu).
4. Provjeri za 3D štampanje, zatim preuzmi datoteku 3MF ili STL.

Kartica prati model, a ne dugmad: prelazi dalje kad je korak završen, bez obzira kako je urađen, a vraća se korak unazad kad poništiš. {{ui:Odaberi alat}} sam bira alat. Zatvori je u bilo kom trenutku s {{ui:×}}.

## Nacrtaj prvu kutiju

1. Pritisni {{key:R}} za alat {{ui:Pravougaonik}}, ili klikni {{ui:Pravougaonik}} u grupi {{ui:Crtanje}} na traci alata.
2. Klikni jednom na tlo blizu sredine pogleda. To je prvi ugao.
3. Pomjeri pokazivač. Pravougaonik ga prati, a polje za vrijednost pri dnu (označeno {{ui:Kote}}) pokazuje njegovu veličinu.
4. Ukucaj veličinu i pritisni {{key:Enter}}: na primjer `4m,3m`, ili `16',12'` u stopama i inčima. Ne treba prvo kliknuti u polje za vrijednost; kad ukucaš broj, on ide tamo.

   Dobija se ravan pravougaonik na tlu. To je **ploha**: površina s ivicama oko sebe.

5. Pritisni {{key:P}} za {{ui:Gurni/povuci}}.
6. Klikni pravougaonik, pomjeri pokazivač gore i klikni ponovo. Ili klikni pravougaonik, ukucaj visinu, kao `3m` ili `10'`, pa pritisni {{key:Enter}}.

   Pravougaonik postaje kutija s gornjom stranom, donjom stranom i četiri bočne strane.

7. Pritisni {{key:Space}} za povratak na {{ui:Odaberi}}, zatim klikni gornju stranu kutije. {{ui:Podaci o entitetu}} desno pokazuju njenu površinu.

:::tip
Može se i prevlačiti umjesto dvaput klikati: pritisni na prvi ugao, prevuci i pusti na drugom. Oba načina rade za svaki alat za crtanje.
:::

## Pogledaj oko sebe

- **Orbita:** prevuci srednjim dugmetom miša (točkić), ili pritisni {{key:O}} i prevuci lijevim dugmetom.
- **Pomjeranje pogleda:** prevuci desnim dugmetom, ili srednjim dok držiš {{key:Shift}}.
- **Zumiranje:** okreni točkić. Zumira prema onome što je ispod pokazivača.
- **Vidi sve:** pritisni {{key:Shift+Z}}, ili klikni {{ui:Obuhvat}}.

Na touchpadu ili ekranu osjetljivom na dodir geste su drugačije. Pogledaj [Orbita, pomjeranje i zumiranje](topic:orbit-pan-zoom).

## Poništavanje

Pritisni {{key:Mod+Z}} za poništavanje i {{key:Mod+Y}} za ponavljanje, ili koristi {{ui:Poništi}} i {{ui:Ponovi}} na traci alata. ModelCraft pamti posljednjih 200 koraka dok je model otvoren. Historija se ne čuva u datoteci.

## Spasi model

1. Klikni {{ui:Spasi}} u grupi {{ui:Datoteka}}, ili pritisni {{key:Mod+S}}.
2. Preglednik preuzima datoteku nazvanu po modelu, kao `Untitled.modelcraft`. Statusna traka kaže gdje je otišla: „Spašeno Untitled.modelcraft u preuzimanja.“

**Spašavanje je preuzimanje.** Svako spašavanje pravi novu kopiju u folderu za preuzimanja; ne prepisuje otvorenu datoteku. Da bi folder projekta ostao uredan, datoteku premjesti ili preimenuj tamo ručno. [Otvaranje, spašavanje, uvoz i izvoz](topic:files) objašnjava zašto i šta još može.

:::warning
ModelCraft ne spašava sam od sebe. Ako se zatvori kartica s nespašenim promjenama, preglednik prvo pita („Napusti stranicu?“). Odaberi da ostaneš, pa spasi.
:::

## Pomoć

Pritisni {{key:F1}} ili klikni {{ui:Pomoć}} na gornjoj traci aplikacije da otvoriš ovu pomoć pored modela. Radi bez veze. Pritisni {{key:F1}} ponovo, ili {{key:Esc}} unutar pomoći, da je zatvoriš. Pogledaj [Korištenje ove pomoći](common:help).

## Gdje dalje

- [Crtanje ploha linijama, pravougaonicima i krugovima](topic:draw-faces)
- [Gurni i povuci plohe u tijela](topic:push-pull)
- [Ukucavanje tačnih veličina u polje za vrijednost](topic:value-box)
- [Svaka tipka i radnja mišem](topic:keyboard)
