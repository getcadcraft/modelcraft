---
title: Zaslon ModelCraft
summary: Ogled orodne vrstice, podoken na obeh straneh, 3D-pogleda in vrstice stanja s imeni, kakršna so na zaslonu.
keywords: zaslon, postavitev, orodna vrstica, podokna, struktura, podatki o entiteti, slog, prizori, vrstica stanja, vrednostno polje, enote, vmesnik, ogled
from: 4a9a4516
---

Od zgoraj navzdol: vrstica aplikacije, orodna vrstica, trije stolpci (levi podokni, 3D-pogled, desni podokni) in vrstica stanja.

## Vrstica aplikacije

Tanka vrstica na samem vrhu pripada vsaki aplikaciji CadCraft. Ima ime in različico aplikacije, {{ui:O programu ModelCraft}}, gumb za način zaslona in preklopnik {{ui:Papir}} / {{ui:Model}}.

- {{ui:Papir}} je svetla tema, {{ui:Model}} pa temna. 3D-pogled spremeni barve, vaš model pa ne.
- Gumb za način zaslona (na začetku piše {{ui:Celozaslonski način}}) in {{key:Ctrl+Shift+F}} preklapljata med tremi načini: običajni, celozaslonski in celozaslonski z skritimi vrsticami. Ko so vrstice skrite, kažite na zgornji rob zaslona (ali se ga dotaknite), da se prikažejo. {{key:Esc}} zapusti celozaslonski način.

:::note
{{key:Ctrl+Shift+F}} uporablja tipko Control na vseh računalnikih, tudi na Macu. Na iPhonu, kjer brskalniki nimajo celozaslonskega načina, gumb samo skriva in prikazuje vrstice.
:::

## Orodna vrstica

Orodna vrstica je razdeljena na označene skupine. Ko se ustavite na gumbu, se prikažeta njegovo ime in tipka.

Na levi je seznam {{ui:Delovno okolje}}, ki preklaplja, za kaj sta namenjeni orodna vrstica in desni podokni: {{ui:Model}} (modeliranje s potiskanjem in vlečenjem, ogled spodaj), {{ui:Mreža}} ([urejanje mreže](topic:mesh-edit)), {{ui:Krivulja}} ([objekti krivulj](topic:curves)), {{ui:UV}} ([razporejanje UV](topic:uv)), {{ui:Kiparjenje}} ([kiparjenje](topic:sculpt)), {{ui:Senčenje}} ([materiali, narejeni z vozlišči](topic:shading)), {{ui:Animacija}} ([animiranje](topic:animate)) in {{ui:Upodobi}} ([upodabljanje v pogledu](topic:render#render-in-the-view)).

| Skupina | Gumbi |
|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Odpri}}, {{ui:Shrani}}, {{ui:Uvozi}}, {{ui:Izvozi}} (meni formatov) |
| Risanje | {{ui:Črta (L)}} ({{key:L}}), {{ui:Pravokotnik (R)}} ({{key:R}}), {{ui:Krožnica (C)}} ({{key:C}}), {{ui:Mnogokotnik (N)}} ({{key:N}}) |
| Spreminjanje | {{ui:Izberi}} ({{key:Space}}), {{ui:Potisni/povleci}} ({{key:P}}), {{ui:Premakni (M)}} ({{key:M}}), {{ui:Zasukaj (Q)}} ({{key:Q}}), {{ui:Merilo (S)}} ({{key:S}}), {{ui:Radirka (E)}} ({{key:E}}), {{ui:Merilni trak (T)}} ({{key:T}}) |
| Razvrščanje | {{ui:Komponenta (G)}} ({{key:G}}), {{ui:Skupina}} ({{key:Shift+G}}), {{ui:Razstavi}} |
| Uredi | {{ui:Razveljavi}} ({{key:Mod+Z}}), {{ui:Uveljavi}} ({{key:Mod+Y}}), {{ui:Kopiraj}} ({{key:Mod+C}}), {{ui:Prilepi}} ({{key:Mod+V}}), {{ui:Več}} (meni: izreži, kopiraj, prilepi, prilepi na isto mesto {{key:Mod+Shift+V}}, podvoji {{key:Mod+D}}, izbriši, izberi vse, prekliči izbor ter slog tipk) |
| Kamera | {{ui:Orbitiraj}} ({{key:O}}), {{ui:Pomik (H)}} ({{key:H}}), {{ui:Povečava (Z)}} ({{key:Z}}), {{ui:Obseg}} ({{key:Shift+Z}}), {{ui:Pogledi}} (meni) |

Prikazane tipke so tipke za potisni/povleci; če v [nastavitvah ModelCraft](topic:settings) izberete slog {{ui:Tipke: modelar}}, namigi prikažejo te tipke. Uporabljeno orodje je prikazano pritisnjeno. Na ožjem zaslonu se orodna vrstica pomika vstran.

Meni {{ui:Pogledi}} ima {{ui:Izometrija}}, {{ui:Zgoraj}}, {{ui:Spredaj}}, {{ui:Desno}}, {{ui:Zadaj}}, {{ui:Levo}} in {{ui:Spodaj}}, vsak prilagojen modelu, ter {{ui:Perspektiva}}, ki preklaplja med perspektivno in vzporedno projekcijo.

## 3D-pogled

Sredina zaslona. Rdeče, zelene in modre črte so osi: rdeča in zelena ležita na tleh, modra kaže navzgor, **sever je zelena os**. Tam, kjer se srečajo, je izhodišče.

- Ob začetku kartica z naslovom „Začnite modelirati“ navede prvih nekaj tipk. Izgine, ko izberete orodje za risanje ali kliknete v pogled.
- Med delom orodja pogled prikaže **oznake sklepanja**: majhne barvne oblike, kjer se kazalec prilepi (zelen krog na krajišču, cijan na razpolovišču, rdeč kvadrat na robu, moder romb na ploskvi). Glejte [Sklepanje in lovljenje](topic:inference).
- Izbrane stvari postanejo modre. Ploskev, gledana od zadaj, je modro siva.
- Ko odprete skupino za urejanje, vse zunaj nje zbledi, osi pa se premaknejo na lastne osi skupine.
- Kadar model ima prizore, se čez vrh pogleda pojavi vrsta zavihkov prizorov.
- Datoteko spustite kamorkoli na pogled, da jo odprete ali uvozite.

## Levi podokni

**{{ui:Struktura}}** našteje skupine in komponente v modelu, gnezdene tako, kot so gnezdene v modelu. Komponenta, uporabljena večkrat, pokaže, kolikokrat, na primer „Okno (4)“.

- Kliknite ime, da ga izberete. Dvakrat kliknite, da ga odprete za urejanje.
- **Najdi po imenu** (prikaže se, ko je skupin dve ali več) ohrani le vrstice, katerih ime ustreza, skupaj s skupinami, v katerih so. {{key:Esc}} ga počisti.
- **Oko** na koncu vrstice skrije ali pokaže to skupino ali komponento (kot to naredi {{ui:Uredi}} › {{ui:Več}} › {{ui:Skrij}}). Ikona oznake pomeni, da je skrita zaradi svoje [oznake](topic:tags).
- **Preimenovanje na mestu:** kliknite vrstico, nato pritisnite {{key:F2}}, vpišite in pritisnite {{key:Enter}} ({{key:Esc}} ohrani staro ime).
- **Povlecite vrstico** na sredino vrstice druge skupine, da jo premaknete vanjo; na zgornji ali spodnji rob vrstice, da jo postavite tik pred ali za to vrstico; ali na naslov {{ui:Struktura}}, da jo premaknete na najvišjo raven. Ostane tam, kjer je v modelu, in obdrži barvo, oznako in ime. Skupina ne more biti znotraj sebe. Vsaka premaknitev je en korak razveljavitve. Glejte [Preureditev v strukturi](topic:groups-components#rearrange-in-the-outliner).
- Med urejanjem znotraj skupine vrstica piše „Urejanje: Model › …“ in pojavi se gumb {{ui:Zapri skupino}}. Ta zapre vse odprte ravni hkrati.

**{{ui:Komponente}}** našteje vsako definicijo komponente s številom postavljenih izvodov („3×“) in gumbom {{ui:Postavi}}, ki doda še en izvod tam, kamor kliknete.

## Desni podokni

**{{ui:Podatki o entiteti}}** opisujejo izbrano. Naslov se spremeni, da pove, kaj je izbrano:

| Naslov | Prikaže | Gumbi |
|---|---|---|
| Model (nič ni izbrano) | Ploskve, robovi, skupine, komponente in koliko jih je postavljenih, vodila, skupna velikost | {{ui:Izbriši vsa vodila}} (ko so vodila) |
| Ploskev | Površina, število izvrtin | {{ui:Obrni ploskev}} |
| Rob | Dolžina | nič |
| Skupina ali komponenta | Ime (vpišite za preimenovanje), kolikokrat je postavljena, ali je zaprto telo, njena prostornina, njena velikost | {{ui:Uredi}}, {{ui:Razstavi}}, {{ui:Naredi edinstveno}} (komponenta, postavljena večkrat), {{ui:Ustvari komponento}} (skupina) |
| Točka vodila ali črta vodila | nič | {{ui:Izbriši}} |
| Več stvari | Koliko ploskev, robov, skupin in vodil ter skupna površina ploskev | {{ui:Ustvari komponento (G)}}, {{ui:Ustvari skupino (Shift+G)}} |

**{{ui:Slog}}** določa, kako je model narisan: {{ui:Ploskve}} ({{ui:Osenčeno}}, {{ui:Skrite črte}}, {{ui:Žični model}}, {{ui:Rentgen}}), {{ui:Pokaži robove}} in {{ui:Sončne sence}} z datumom, časom in krajem sonca. Glejte [Slogi in sončne sence](topic:styles-shadows).

**{{ui:Prizori}}** shranjujejo poglede: {{ui:Dodaj prizor}}, seznam prizorov ter {{ui:Prejšnji}}, {{ui:Predvajaj}} in {{ui:Naslednji}}. Glejte [Shranjevanje pogledov kot prizorov](topic:scenes).

## Vrstica stanja

Vzdolž dna, od leve proti desni:

1. **Namig**: kaj orodje želi nato ali na kaj se kazalec prilepi („Krajišče“, „Na rdeči osi“).
2. **Sporočila**: kaj se je pravkar zgodilo („Razveljavljeno: potisni/povleci.“, „Uvožena datoteka site.dxf: 1697 robov na tleh, v skupini.“) ali zakaj nekaj ni delovalo.
3. **Vrednostno polje**: njegova oznaka se spreminja z orodjem ({{ui:Dolžina}}, {{ui:Kote}}, {{ui:Polmer}}, {{ui:Stranice}}, {{ui:Razdalja}}, {{ui:Kot}}, {{ui:Merilo (S)}}, {{ui:Odmik (F)}}). Med delom prikazuje živo velikost in sprejme, kar vpišete. Glejte [Vnos natančnih mer v vrednostno polje](topic:value-box).
4. **Slog tipk**: {{ui:Tipke: potisni/povleci}} ali {{ui:Tipke: modelar}} hkrati preklopi bližnjice na tipkovnici in gumbe miške (enako kot v [nastavitvah ModelCraft](topic:settings)).
5. **{{ui:Lovljenje}} in {{ui:Trk}}**: lovljenje na točke, robove in osi ter telesa, ki se ustavijo, ko se dotikajo. Prečrtano = izklopljeno. Kliknite za preklop. Glejte [nastavitve ModelCraft](topic:settings).
6. **Izbirnik enot**: enote, v katerih so prikazane dolžine. Glejte [Začetek dela](topic:getting-started#check-the-units-first).

## Na ožjem zaslonu

Pod približno 760 slikovnimi pikami širine (telefon ali ozko okno) 3D-pogled zavzame cel zaslon. Orodna vrstica je ena vrsta, ki se pomika vstran, podokna pa se odprejo kot listi iz vrstice na dnu zaslona.
