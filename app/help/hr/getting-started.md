---
title: Početak rada s ModelCraftom
summary: Čemu ModelCraft služi, kako ga otvoriti i vaša prva kutija od pravokutnika do spremljenog modela.
keywords: početak, prvi model, početi, vodič, uvod, kutija, masing, 3d, potisni povuci, brzi početak, vođeno, vodič korak po korak, početnik, novi u 3D-u
from: d47ad719
---

ModelCraft je 3D modelar za rani dizajn: studije masa, rasporede prostorija, brze oblike zgrada i sjene koje bacaju. Crtate ravne oblike, izvlačite ih u tijela i nastavljate raditi na njima crtanjem po njihovim plohama. Radi u vašem pregledniku, a vaši modeli ostaju na vašem računalu.

Ako ste koristili SketchUp, većina onoga što znate prenosi se: ista slova alata, potisni/povuci, okvir za vrijednosti za točne veličine, grupe i komponente. [Dolazite iz drugih modelara](topic:coming-from) navodi što je drukčije.

## Otvorite ModelCraft

1. Otvorite ModelCraft u aktualnoj verziji Chromea, Edgea, Firefoxa ili Safarija. Pogledajte [Preglednici i računala](common:browsers).
2. Pričekajte da se pojavi 3D prikaz: svijetlo (ili tamno) područje u sredini s karticom naslovljenom „Započnite modeliranje“.

Zaslon ima alatnu traku uz vrh, {{ui:Struktura}} i {{ui:Komponente}} lijevo, 3D prikaz u sredini, {{ui:Informacije o entitetu}}, {{ui:Stil}} i {{ui:Scene}} desno te statusnu traku uz dno s okvirom za vrijednosti i jedinicama. [Zaslon ModelCrafta](topic:workspace) objašnjava svaki dio.

:::note
ModelCraft treba WebGL, značajku vašeg preglednika za 3D crtanje. Ako sredina zaslona ostane prazna, a alati ništa ne rade, pogledajte [Rješavanje problema](topic:troubleshooting#the-3d-view-is-blank).
:::

## Prvo provjerite jedinice

Pogledajte donji desni kut. Birač jedinica pokazuje u čemu se mjere duljine.

- Novi model počinje u **stopama i inčima** kad je vaš preglednik postavljen na Sjedinjene Države (također Liberiju i Mjanmar), a svugdje drugdje u **milimetrima**.
- Za promjenu odaberite drugu jedinicu u biraču: {{ui:ft i in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ili {{ui:mm}}. Sam model ne mijenja veličinu; mijenja se samo način prikaza duljina i čitanja golih brojeva.

Broj koji upišete bez jedinice koristi jedinicu modela. U modelu u stopama i inčima gol broj su **inči**, pa `120` znači 10 stopa.

## Neka vas ModelCraft vodi kroz prvi model

Novi ste u 3D-u? Na kartici {{ui:Započnite modeliranje}} kliknite {{ui:Vođeni prvi model}} (nalazi se i u {{ui:Pogledi}}). Mala kartica vodi vas kroz četiri koraka, od ravnog pravokutnika do modela spremnog za 3D pisač:

1. Nacrtajte pravokutnik na tlu.
2. Izvucite ga u kutiju.
3. Od kutije napravite jedan objekt (grupu).
4. Provjerite ga za 3D ispis, zatim preuzmite 3MF ili STL datoteku.

Kartica prati model, a ne gumbe: prelazi dalje kad je korak gotov, kako god ste ga napravili, i vraća se korak natrag kad poništite. {{ui:Odaberi alat}} bira alat umjesto vas. Zatvorite je u bilo kojem trenutku s {{ui:×}}.

## Nacrtajte svoju prvu kutiju

1. Pritisnite {{key:R}} za alat {{ui:Pravokutnik}} ili kliknite {{ui:Pravokutnik}} u grupi {{ui:Crtanje}} na alatnoj traci.
2. Jednom kliknite na tlo blizu sredine prikaza. To je prvi kut.
3. Pomaknite pokazivač. Pravokutnik ga prati, a okvir za vrijednosti pri dnu (označen {{ui:Dimenzije}}) prikazuje njegovu veličinu.
4. Upišite veličinu i pritisnite {{key:Enter}}: na primjer `4m,3m` ili `16',12'` u stopama i inčima. Ne morate prvo kliknuti u okvir za vrijednosti; upisivanje broja šalje ga ondje.

   Dobivate ravan pravokutnik na tlu. To je **ploha**: površina s bridovima oko nje.

5. Pritisnite {{key:P}} za {{ui:Potisni/povuci}}.
6. Kliknite pravokutnik, pomaknite pokazivač prema gore i ponovno kliknite. Ili kliknite pravokutnik i upišite visinu, na primjer `3m` ili `10'`, pa pritisnite {{key:Enter}}.

   Pravokutnik postaje kutija s gornjom stranom, donjom stranom i četiri stranice.

7. Pritisnite {{key:Space}} za povratak na {{ui:Odaberi}}, zatim kliknite gornju stranu kutije. {{ui:Informacije o entitetu}} desno prikazuju njezinu površinu.

:::tip
Umjesto dva klika možete i povlačiti: pritisnite na prvom kutu, povucite i pustite na drugom. Oba načina rade za svaki alat za crtanje.
:::

## Razgledajte

- **Orbitiranje:** povucite srednjom tipkom miša (kotačićem) ili pritisnite {{key:O}} i povucite lijevom tipkom.
- **Pomicanje (Pan):** povucite desnom tipkom ili srednjom tipkom dok držite {{key:Shift}}.
- **Zumiranje:** okrenite kotačić. Zumira prema onome što je ispod pokazivača.
- **Vidjeti sve:** pritisnite {{key:Shift+Z}} ili kliknite {{ui:Opseg}}.

Na touchpadu ili zaslonu osjetljivom na dodir geste su drukčije. Pogledajte [Orbitiranje, pomicanje i zumiranje](topic:orbit-pan-zoom).

## Poništavanje

Pritisnite {{key:Mod+Z}} za poništavanje i {{key:Mod+Y}} za ponavljanje ili koristite {{ui:Poništi}} i {{ui:Ponovi}} na alatnoj traci. ModelCraft pamti zadnjih 200 koraka dok je model otvoren. Povijest se ne sprema u datoteku.

## Spremite model

1. Kliknite {{ui:Spremi}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+S}}.
2. Preglednik preuzima datoteku imenovanu prema vašem modelu, na primjer `Untitled.modelcraft`. Statusna traka kaže kamo je otišla: „Spremljeno u preuzimanja: Untitled.modelcraft.“

**Spremanje je preuzimanje.** Svako spremanje izrađuje novu kopiju u vašoj mapi preuzimanja; ne prepisuje datoteku koju ste otvorili. Za urednu mapu projekta sami premjestite ili preimenujte datoteku ondje. [Otvaranje, spremanje, uvoz i izvoz](topic:files) objašnjava zašto i što još možete.

:::warning
ModelCraft ne sprema sam. Ako zatvorite karticu s nespremljenim promjenama, preglednik prvo pita („Napustiti web-mjesto?“). Odaberite ostanak, zatim spremite.
:::

## Potražite pomoć

Pritisnite {{key:F1}} ili kliknite {{ui:Pomoć}} u traci aplikacije da otvorite ovu pomoć uz model. Radi bez veze. Ponovno pritisnite {{key:F1}} ili {{key:Esc}} unutar pomoći za zatvaranje. Pogledajte [Korištenje ove pomoći](common:help).

## Kamo dalje

- [Crtajte plohe linijama, pravokutnicima i kružnicama](topic:draw-faces)
- [Potiskujte i povlačite plohe u tijela](topic:push-pull)
- [Upisujte točne veličine u okvir za vrijednosti](topic:value-box)
- [Sve tipke i radnje mišem](topic:keyboard)
