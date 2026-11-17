---
title: Animujte kameru a objekty a vykreslite video
summary: Nastavte kľúče pre kameru a pre skupiny a komponenty na časovej osi, prehrajte ich v pohľade a vykreslite animáciu do videa WebM s oblohou, slnkom a materiálmi vykresľovača.
keywords: animácia, animovať, časová os, kľúčový snímok, kľúče, kľúčový kadr, dráha kamery, prelet, prechádzka, prejsť, video, film, webm, vykreslenie videa, snímky, snímková frekvencia, fps, hlava prehrávania, automatický kľúč, plynulosť, hladko, podržať, scény, sekvencia PNG, pohyb
from: d3a58249
---

**Časová os** posúva kameru a ľubovoľnú skupinu alebo komponent v čase. Nastavujete **kľúče** (kde sa niečo nachádza v danom okamihu); ModelCraft ich plynulo presúva od kľúča ku kľúču. Prehrajte ju v pohľade a potom ju vykreslite do videa s rovnakou oblohou, slnkom, materiálmi a svetlami ako [vykreslený obrázok](topic:render).

## Otvorenie časovej osi

V skupine {{ui:Kamera}} kliknite na {{ui:Pohľady}}, potom na {{ui:Časová os animácie}}. Časová os sa otvorí pod pohľadom: ovládacie prvky pozdĺž hornej časti, potom riadok **Kamera** a riadok pre každú pohybujúcu sa skupinu alebo komponent. Kosoštvorce sú kľúče; červená čiara je **hlava prehrávania**, okamih zobrazený v pohľade.

:::touch
Na telefóne sa časová os tiež otvorí pod pohľadom. Jej ovládacie prvky sú v jednom riadku: potiahnutím do strany sa dostanete k ostatným; tlačidlo na zatvorenie časovej osi ostáva na jej konci.
:::

Potiahnite posúvač (alebo kliknite v riadku) a presuniete hlavu prehrávania. {{ui:Prehrať}} prehráva od hlavy prehrávania a počas prehrávania sa mení na {{ui:Pozastaviť}}; kliknite naň znova a zastavíte tam, kde je. {{key:Space}} robí to isté, kým je časová os otvorená (keď je zatvorená, Space je stále {{ui:Vybrať}}). {{ui:Predchádzajúci kľúč}} a {{ui:Nasledujúci kľúč}} skáču medzi kľúčmi. Vlastný štýl môže priradiť prehrávaniu a pozastaveniu inú klávesu: {{ui:Nastavenia}}, potom ponuky, klávesy a myš, príkaz *Prehrať alebo pozastaviť animáciu*.

## Presun kamery

1. Presuňte hlavu prehrávania na miesto, kde záber začína (0 s), nastavte pohľad a kliknite na {{ui:Kľúč kamery}}.
2. Presuňte hlavu prehrávania neskôr (napríklad na 4 s), obiehajte, posúvajte alebo prechádzajte pohľad na ďalšiu pozíciu a znova kliknite na {{ui:Kľúč kamery}}.
3. Pridajte ľubovoľný počet kľúčov a potom kliknite na {{ui:Prehrať}}.

Kamera plynulo prechádza každým kľúčom a začína a končí v kľude.

:::tip
Už máte [scény](topic:scenes)? {{ui:Zo scén}} z nich vytvorí dráhu kamery: pri každej scéne zastane a potom sa presunie na ďalšiu. Ak časová os nemá vôbec žiadne kľúče, {{ui:Vykresliť video…}} to urobí sám, takže na video s prechádzkou stačia dve scény alebo viac.
:::

## Presun skupiny alebo komponentu

1. Vyberte skupinu alebo komponent (pohybujú sa iba celé skupiny a komponenty; najprv [vytvorte skupinu](topic:groups-components)).
2. Pri 0 s kliknite na {{ui:Kľúč výberu}}.
3. Presuňte hlavu prehrávania neskôr, [presuňte, otočte alebo zmeňte mierku](topic:move-copy) skupinu tam, kde má byť, a znova kliknite na {{ui:Kľúč výberu}}.

Medzi kľúčmi sa posúva, otáča a zväčšuje. Otočenia idú najkratšou cestou.

**{{ui:Automatický kľúč}}** ušetrí kliknutie z kroku 3: keď je zapnutý, vybraná skupina alebo komponent, ktorý presuniete, otočíte alebo zmeníte mierku, dostane kľúč na hlave prehrávania sám od seba (a pri prvom použití aj kľúč na 0 s tam, kde bol).

:::note
Presun animovanej skupiny bez kľúča vydrží iba dovtedy, kým sa hlava prehrávania nepresunie: pri ďalšom prehrávaní alebo posúvaní sa vráti tam, kam ju postavili jej kľúče. Stavový riadok to oznámi. Stlačte {{ui:Kľúč výberu}}, aby ste ho zachovali.
:::

## Úprava kľúčov

- **Vyberte kľúč** kliknutím na jeho kosoštvorec: hlava prehrávania sa na neho presunie.
- **Presuňte kľúč** potiahnutím jeho kosoštvorca po riadku alebo klávesami {{key:Left}} a {{key:Right}} (jeden snímok; so {{key:Shift}} desať).
- **Zmažte** pomocou {{ui:Zmazať kľúč}} (vybraný kľúč alebo každý kľúč na hlave prehrávania) alebo klávesou {{key:Delete}} na vybranom kosoštvorci.
- **Ako sa posúva ďalej** pre vybraný kľúč: {{ui:Vyhladiť}} (krivka cez okolité kľúče), {{ui:Rovnomerne}} (priamka jednou rýchlosťou), {{ui:Pomalý nábeh a dobeh}} (v tomto kľúči zastane) alebo {{ui:Podržať}} (zostane na mieste až do ďalšieho kľúča).
- **Dĺžka (s)** nastavuje, ako dlho animácia trvá; kľúč nastavený za koncom ju predĺži. Ak ju chcete skrátiť, najprv presuňte alebo zmažte kľúče za novým koncom.
- **×** na riadku skupiny zastaví jej animáciu.

Časová os má vlastné {{ui:Späť}} a {{ui:Znova}}: späť modelu ({{key:Mod+Z}}) mení model, nie kľúče. Animácia sa uloží do súboru `.modelcraft`. Zatvorením časovej osi sa pohybujúce skupiny vrátia do svojej prvej pózy.

## Vykreslenie videa

1. Na časovej osi kliknite na {{ui:Vykresliť video}} (alebo {{ui:Exportovať}} › {{ui:Vykresliť video…}}).
2. Vyberte {{ui:Veľkosť}}, {{ui:Snímková frekvencia}}, {{ui:Kvalita každej snímky}} a {{ui:Súbor}}.
3. Kliknite na {{ui:Vykresliť video}}. Každý snímok sa zobrazuje, keď vzniká, spolu so zostávajúcim časom.
4. Keď je hotovo, kliknite na {{ui:Uložiť video}}.

{{ui:Zastaviť}} (alebo {{key:Esc}}) ukončí skoro; {{ui:Uložiť video}} potom ponechá už vytvorené snímky ako kratšie video.

Obloha, slnko, materiály, svetlá a jas sú tie, ktoré nastavíte v {{ui:Vykresliť obrázok…}}: nastavte ich najprv tam a skontrolujte nehybný obrázok. Každý snímok sa vykresľuje na tomto počítači; nič sa nenahráva.

| Nastavenie | Čo robí |
|---|---|
| {{ui:Veľkosť}} | 480p, 720p HD, 1080p Full HD alebo vlastný tvar pohľadu (najviac 1920 pixelov na šírku) |
| {{ui:Snímková frekvencia}} | 24, 25, 30 alebo 60 snímkov za sekundu. Dvojnásobný počet snímkov trvá dvakrát tak dlho |
| {{ui:Kvalita každej snímky}} | {{ui:Rýchle}} (4 prechody), {{ui:Koncept}} (16) alebo {{ui:Dobré}} (64): viac prechodov dá plynulejšie tiene a hrany |
| {{ui:Súbor}} | {{ui:Video WebM}}, {{ui:Video MP4 (H.264)}} tam, kde ho prehliadač dokáže zapísať, alebo {{ui:Obrázky PNG, jeden na snímku (ZIP)}} pre editory videa (a pre prehliadače bez kodéra videa) |

:::tip
10-sekundové video pri 30 snímkoch za sekundu má 301 snímkov. Najprv skúste {{ui:Rýchle}} pri 480p, aby ste skontrolovali pohyb, potom vykreslite {{ui:Koncept}} alebo {{ui:Dobré}} vo väčšej veľkosti.
:::

WebM sa prehráva v prehliadačoch a vo VLC, editory videa ho prevedú. {{ui:Video MP4 (H.264)}} sa ponúka tam, kde ho prehliadač dokáže zapísať. {{ui:Vykresliť video}} používa rýchly vykresľovač; ak chcete sledovanie dráh pre každý snímok, v tom istom dialógu vyberte {{ui:Pridať túto animáciu do radu}}: snímky sa vykreslia v [rade vykresľovania](topic:render#the-render-queue), ktorý vyžaduje WebGPU.

:::firefox safari
Na vykreslenie videa treba prehliadač, ktorý video kóduje sám (WebCodecs): novšie Chrome, Edge, Firefox a Safari 17 áno. Bez neho zvoľte {{ui:Obrázky PNG, jeden na snímku (ZIP)}}.
:::

## Čo treba vedieť

- Pohybujú sa iba celé skupiny a komponenty. Plochy, hrany, čas slnka a štýl sa v čase zatiaľ nemenia.
- {{ui:Exportovať animáciu}} v časti [Scény](topic:scenes) stále zaznamenáva pohľad tak, ako je na obrazovke, v reálnom čase; {{ui:Vykresliť video}} vykresľuje každý snímok s oblohou, tieňmi a materiálmi.
