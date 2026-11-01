---
title: Početak rada sa ModelCraft
summary: Čemu služi ModelCraft, kako ga otvoriti i tvoja prva kutija, od pravougaonika do sačuvanog modela.
keywords: počni, prvi model, početak, vodič, uvod, kutija, masa, 3d, guranje i vučenje, brzi početak, vođeni, vodi, početnik, nov u 3D
from: d47ad719
---

ModelCraft je 3D modelar za rani dizajn: studije mase, rasporede prostorija, brze forme zgrada i senke koje bacaju. Crtaš ravne oblike, podižeš ih u tela i nastavljaš da radiš crtajući po njihovim površima. Radi u tvom web pregledaču, a tvoji modeli ostaju na tvom računaru.

Ako si koristio SketchUp, većina znanja se prenosi: ista slova alata, guranje/vučenje, polje za vrednost za tačne veličine, grupe i komponente. [Dolazak iz drugih modelara](topic:coming-from) navodi šta je drugačije.

## Otvaranje ModelCraft-a

1. Otvori ModelCraft u aktuelnoj verziji pregledača Chrome, Edge, Firefox ili Safari. Pogledaj [Pregledači i računari](common:browsers).
2. Sačekaj da se pojavi 3D pogled: svetla (ili tamna) površina u sredini sa karticom pod nazivom „Počni modeliranje“.

Ekran ima traku alata pri vrhu, {{ui:Pregled}} i {{ui:Komponente}} sa leve strane, 3D pogled u sredini, {{ui:Podaci o entitetu}}, {{ui:Stil}} i {{ui:Scene}} sa desne strane, i statusnu traku pri dnu sa poljem za vrednost i jedinicama. [Ekran ModelCraft-a](topic:workspace) objašnjava svaki deo.

:::note
ModelCraft treba WebGL, funkciju 3D crtanja u tvom pregledaču. Ako sredina ekrana ostane prazna i alati ne rade, pogledaj [Rešavanje problema](topic:troubleshooting#the-3d-view-is-blank).
:::

## Prvo proveri jedinice

Pogledaj donji desni ugao. Birač jedinica pokazuje u kojim se jedinicama mere dužine.

- Novi model počinje u **stopama i inčima** kad je tvoj pregledač podešen na Sjedinjene Države (još i Liberija i Mjanmar), a u **milimetrima** svuda drugde.
- Da promeniš, izaberi drugu jedinicu u biraču: {{ui:ft i in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ili {{ui:mm}}. Sam model ne menja veličinu; menja se samo prikaz dužina i tumačenje golih brojeva.

Broj koji ukucaš bez jedinice koristi jedinicu modela. U modelu u stopama i inčima goli broj je **inči**, pa `120` znači 10 stopa.

## Neka ModelCraft vodi tvoj prvi model

Nov u 3D? Na kartici {{ui:Počni modeliranje}} klikni {{ui:Vođeni prvi model}} (nalazi se i u {{ui:Pogledi}}). Mala kartica te vodi kroz četiri koraka, od ravnog pravougaonika do modela spremnog za 3D štampač:

1. Nacrtaj pravougaonik na podlozi.
2. Podigni ga u kutiju.
3. Napravi od kutije jedan objekat (grupu).
4. Proveri za 3D štampanje, pa preuzmi datoteku 3MF ili STL.

Kartica prati model, a ne dugmad: prelazi na sledeći korak kad je korak završen, bez obzira kako si to uradio, i vraća se korak nazad kad opozoveš. {{ui:Izaberi alat}} bira alat umesto tebe. Zatvori je kad god hoćeš sa {{ui:×}}.

## Nacrtaj prvu kutiju

1. Pritisni {{key:R}} za alat {{ui:Pravougaonik}}, ili klikni {{ui:Pravougaonik}} u grupi {{ui:Crtanje}} trake alata.
2. Klikni jednom na podlogu blizu sredine prikaza. To je prvi ugao.
3. Pomeri pokazivač dalje. Pravougaonik ga prati, a polje za vrednost na dnu (označeno {{ui:Kote}}) pokazuje njegovu veličinu.
4. Ukucaj veličinu i pritisni {{key:Enter}}: na primer `4m,3m`, ili `16',12'` u stopama i inčima. Ne moraš prvo da klikneš u polje za vrednost; kucanje broja šalje ga tamo.

   Dobijaš ravan pravougaonik na podlozi. To je **površ**: ravan sa ivicama oko sebe.

5. Pritisni {{key:P}} za {{ui:Guraj/vuci}}.
6. Klikni pravougaonik, pomeri pokazivač nagore i klikni ponovo. Ili klikni pravougaonik i ukucaj visinu, na primer `3m` ili `10'`, pa pritisni {{key:Enter}}.

   Pravougaonik postaje kutija sa vrhom, dnom i četiri strane.

7. Pritisni {{key:Space}} da se vratiš na {{ui:Izaberi}}, pa klikni vrh kutije. {{ui:Podaci o entitetu}} sa desne strane pokazuju njenu površinu.

:::tip
Umesto dva klika možeš i da prevlačiš: pritisni na prvom uglu, prevuci i otpusti na drugom. Oba načina rade za svaki alat za crtanje.
:::

## Osvrni se

- **Orbitiranje:** prevuci srednjim dugmetom miša (točkićem), ili pritisni {{key:O}} i prevuci levim dugmetom.
- **Pomeranje pogleda:** prevuci desnim dugmetom, ili srednjim dok držiš {{key:Shift}}.
- **Zumiranje:** okreni točkić. Zumira prema onome što je ispod pokazivača.
- **Vidi sve:** pritisni {{key:Shift+Z}}, ili klikni {{ui:Sve}}.

Na tačpedu ili ekranu osetljivom na dodir gestovi su drugačiji. Pogledaj [Orbitiranje, pomeranje i zumiranje](topic:orbit-pan-zoom).

## Opozivanje

Pritisni {{key:Mod+Z}} za opozivanje i {{key:Mod+Y}} za ponavljanje, ili koristi {{ui:Opozovi}} i {{ui:Ponovi}} na traci alata. ModelCraft pamti poslednjih 200 koraka dok je model otvoren. Istorija se ne čuva u datoteci.

## Sačuvaj model

1. Klikni {{ui:Sačuvaj}} u grupi {{ui:Datoteka}}, ili pritisni {{key:Mod+S}}.
2. Pregledač preuzima datoteku nazvanu po tvom modelu, kao `Untitled.modelcraft`. Statusna traka kaže gde je otišla: „Sačuvano Untitled.modelcraft u preuzimanja.“

**Čuvanje je preuzimanje.** Svako čuvanje pravi novu kopiju u fascikli za preuzimanja; ne prepisuje datoteku koju si otvorio. Da zadržiš urednu fasciklu projekta, sam pomeri ili preimenuj datoteku tamo. [Otvaranje, čuvanje, uvoz i izvoz](topic:files) objašnjava zašto i šta još možeš da uradiš.

:::warning
ModelCraft ne čuva sam od sebe. Ako zatvoriš karticu sa nesačuvanim izmenama, pregledač prvo pita („Napustiti sajt?“). Izaberi da ostaneš, pa sačuvaj.
:::

## Pomoć

Pritisni {{key:F1}} ili klikni {{ui:Pomoć}} u traci aplikacije da otvoriš ovu pomoć pored modela. Radi bez veze. Pritisni {{key:F1}} ponovo, ili {{key:Esc}} unutar pomoći, da je zatvoriš. Pogledaj [Korišćenje ove pomoći](common:help).

## Gde dalje

- [Crtanje površi linijama, pravougaonicima i krugovima](topic:draw-faces)
- [Guranje i vučenje površi u tela](topic:push-pull)
- [Unos tačnih veličina u polje za vrednost](topic:value-box)
- [Svaka radnja tasterom i mišem](topic:keyboard)
