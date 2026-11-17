---
title: Animirajte kamero in predmete ter upodobite video
summary: Nastavite ključe za kamero ter za skupine in komponente na časovnici, jih predvajajte v pogledu in animacijo upodobite v video WebM z nebom, soncem in materiali upodabljalnika.
keywords: animacija, animirati, časovnica, ključna sličica, ključi, pot kamere, prelet, sprehod, sprehod skozi, video, film, webm, upodobi video, sličice, hitrost sličic, fps, predvajalna glava, samodejni ključ, glajenje, gladko, zadrži, prizori, zaporedje PNG, gibanje
from: d3a58249
---

**Časovnica** premika kamero in poljubno skupino ali komponento skozi čas. Nastavite **ključe** (kje je nekaj ob določenem trenutku); ModelCraft jo gladko premika od ključa do ključa. Predvajajte jo v pogledu, nato jo upodobite v video z istim nebom, soncem, materiali in svetili kot [upodobljena slika](topic:render).

## Odprite časovnico

Kliknite {{ui:Pogledi}} v skupini {{ui:Kamera}}, nato {{ui:Časovnica animacije}}. Časovnica se odpre pod pogledom: kontrole na vrhu, nato vrstica **Kamera** in vrstica za vsako skupino ali komponento, ki se premika. Rombki so ključi; rdeča črta je **predvajalna glava**, trenutek, prikazan v pogledu.

:::touch
Tudi na telefonu se časovnica odpre pod pogledom. Njene kontrole so v eni vrstici: potegnite jo vstran, da dosežete ostalo; gumb, ki zapre časovnico, ostane na njenem koncu.
:::

Povlecite drsnik (ali kliknite v vrstico), da premaknete predvajalno glavo. {{ui:Predvajaj}} predvaja od predvajalne glave in se med predvajanjem spremeni v {{ui:Premor}}; ponovno kliknite, da ustavite na mestu. {{key:Space}} naredi isto, medtem ko je časovnica odprta (ko je zaprta, je Space še vedno Izberi). {{ui:Prejšnji ključ}} in {{ui:Naslednji ključ}} skačeta med ključi. Slog po meri lahko da predvajanju in premoru drugo tipko: {{ui:Nastavitve}}, nato meniji, tipke in miška, ukaz *Predvajaj ali ustavi animacijo*.

## Premikanje kamere

1. Premaknite predvajalno glavo tja, kjer se posnetek začne (0 s), nastavite pogled in kliknite {{ui:Ključ kamere}}.
2. Premaknite predvajalno glavo kasneje (npr. 4 s), zavrtite, pomaknite ali sprehodite pogled do naslednjega položaja in znova kliknite {{ui:Ključ kamere}}.
3. Dodajte poljubno število ključev, nato kliknite {{ui:Predvajaj}}.

Kamera gladko preide skozi vsak ključ in se začne ter konča v mirovanju.

:::tip
Že imate [prizore](topic:scenes)? {{ui:Iz prizorov}} iz njih naredi pot kamere: v vsakem prizoru ostane, nato se premakne k naslednjemu. Če časovnica nima nobenih ključev, {{ui:Upodobi video…}} to naredi sam, zato sta za video sprehoda dovolj dva prizora ali več.
:::

## Premikanje skupine ali komponente

1. Izberite skupino ali komponento (premikajo se le cele skupine in komponente; najprej [naredite skupino](topic:groups-components)).
2. Pri 0 s kliknite {{ui:Ključ izbora}}.
3. Premaknite predvajalno glavo kasneje, [premaknite, zasukajte ali spremenite merilo](topic:move-copy) skupino tja, kamor naj gre, in znova kliknite {{ui:Ključ izbora}}.

Med svojima ključema drsi, zavija in raste. Zasuki gredo po krajši poti.

**Samodejni ključ** prihrani klik iz koraka 3: medtem ko je {{ui:Samodejni ključ}} vklopljen, izbrana skupina ali komponenta, ki jo premaknete, zasukate ali spremenite merilo, sama dobi ključ na predvajalni glavi (in prvič tudi ključ pri 0 s, kjer je bila).

:::note
Premikanje animirane skupine brez ključa traja le, dokler se predvajalna glava ne premakne: ob naslednjem predvajanju ali drsenju gre nazaj tja, kamor jo postavijo njeni ključi. Vrstica stanja to pove. Pritisnite {{ui:Ključ izbora}}, da jo ohranite.
:::

## Spreminjanje ključev

- **Izberite ključ** s klikom na njegov romb: predvajalna glava gre k njemu.
- **Premaknite ključ** tako, da povlečete njegov romb vzdolž vrstice, ali z {{key:Left}} in {{key:Right}} (ena sličica; s {{key:Shift}} deset).
- **Izbrišite** z {{ui:Izbriši ključ}} (izbrani ključ ali vsi ključi na predvajalni glavi) ali s {{key:Delete}} na izbranem rombu.
- **Kako se premakne naprej**, za izbrani ključ: {{ui:Zgladi}} (krivulja skozi ključe okoli njega), {{ui:Enakomerno}} (ravna črta z enako hitrostjo), {{ui:Počasen začetek in konec}} (se ustavi pri tem ključu) ali {{ui:Zadrži}} (ostane, dokler ni naslednjega ključa).
- **Dolžina (s)** nastavi, kako dolga je animacija; ključ, nastavljen za koncem, jo podaljša. Za krajšanje najprej premaknite ali izbrišite ključe onkraj novega konca.
- **×** v vrstici skupine neha animirati to skupino.

Časovnica ima svoj {{ui:Razveljavi}} in {{ui:Uveljavi}}: razveljavitev modela ({{key:Mod+Z}}) spremeni model, ne ključev. Animacija se shrani v datoteko `.modelcraft`. Zaprtje časovnice vrne premikajoče se skupine na njihov prvi položaj.

## Upodobitev videa

1. Na časovnici kliknite {{ui:Upodobi video}} (ali {{ui:Izvozi}} › {{ui:Upodobi video…}}).
2. Izberite {{ui:Velikost}}, {{ui:Hitrost sličic}}, {{ui:Kakovost vsake sličice}} in {{ui:Datoteka}}.
3. Kliknite {{ui:Upodobi video}}. Vsaka sličica se prikaže, ko nastane, z ocenjenim preostalim časom.
4. Ko je končano, kliknite {{ui:Shrani video}}.

{{ui:Ustavi}} (ali {{key:Esc}}) konča zgodaj; {{ui:Shrani video}} nato ohrani že narejene sličice kot krajši video.

Nebo, sonce, materiali, svetila in svetlost so tisti, nastavljeni v {{ui:Upodobi sliko…}}: nastavite jih tam najprej, tako da preverite posamezno sliko. Vsaka sličica se upodobi na tem računalniku; nič se ne naloži.

| Nastavitev | Kaj naredi |
|---|---|
| {{ui:Velikost}} | 480p, 720p HD, 1080p Full HD ali oblika pogleda (do 1920 slikovnih pik široko) |
| {{ui:Hitrost sličic}} | 24, 25, 30 ali 60 sličic na sekundo. Dvakrat več sličic traja dvakrat dlje |
| {{ui:Kakovost vsake sličice}} | {{ui:Hitro}} (4 prehodi), {{ui:Osnutek}} (16) ali {{ui:Dobro}} (64): več prehodov da gladkejše sence in robove |
| {{ui:Datoteka}} | {{ui:Video WebM}}, {{ui:Video MP4 (H.264)}} tam, kjer ga brskalnik lahko zapiše, ali {{ui:Slike PNG, ena na sličico (ZIP)}} za urejevalnike videa (in za brskalnike brez kodirnika videa) |

:::tip
10-sekundni video pri 30 sličicah na sekundo ima 301 sličico. Najprej preizkusite {{ui:Hitro}} pri 480p, da preverite gibanje, nato upodobite {{ui:Osnutek}} ali {{ui:Dobro}} pri večji velikosti.
:::

WebM se predvaja v brskalnikih in VLC, urejevalniki videa pa ga pretvorijo. {{ui:Video MP4 (H.264)}} je na voljo tam, kjer ga brskalnik lahko zapiše. {{ui:Upodobi video}} uporablja hitri upodabljalnik; za sledenje poti pri vsaki sličici v istem pogovornem oknu izberite {{ui:Dodaj to animacijo v vrsto}}: sličice se upodobijo v [vrsti upodabljanja](topic:render#the-render-queue), za katero je potreben WebGPU.

:::firefox safari
Upodabljanje videa potrebuje brskalnik, ki video kodira sam (WebCodecs): novejši Chrome, Edge, Firefox in Safari 17 to zmorejo. Brez tega izberite {{ui:Slike PNG, ena na sličico (ZIP)}}.
:::

## Kaj je treba vedeti

- Premikajo se le cele skupine in komponente. Ploskve, robovi, čas sonca in slog se se zaenkrat ne spreminjajo skozi čas.
- {{ui:Izvozi animacijo}} pod [Prizori](topic:scenes) še vedno zapiše pogled, kakršen je na zaslonu, v realnem času; {{ui:Upodobi video}} pa upodobi vsako sličico z nebom, senco in materiali.
