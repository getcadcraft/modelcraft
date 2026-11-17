---
title: Kontrola modelu vo VR okuliaroch
summary: Prejdite model v plnej veľkosti vo VR okuliaroch: skákajte, otáčajte sa, merajte, rozrežte ho, umiestňujte problémy s obrázkom, zobrazte ho ako model na stole a stretnite ostatných zo živej relácie.
keywords: vr, virtuálna realita, okuliare, webxr, xr, pohlcujúce, quest, oculus, vive, index, pico, prechádzka, prechod, teleportácia, kontrola návrhu, kontrola, meranie, rez, rozrezanie, problém, problémy, bcf, stolový model, mierkový model, prítomnosť, avatary, naživo, spolu
from: fa2f591a
---

{{ui:Kontrola vo VR}} vás postaví dovnútra modelu pomocou VR okuliarov, v plnej veľkosti. Stojíte tam, kde je kamera pohľadu, na podlahe pod ňou, a smerujete rovnakým smerom. Nič sa nenahráva: okuliare zobrazujú to, čo prehliadač kreslí na tomto počítači (alebo v prehliadači samotných okuliarov).

## Čo potrebujete

- Okuliare, ktoré prehliadač dokáže ovládať (WebXR): vlastný prehliadač samostatných okuliarov, alebo Chrome či Edge na PC s pripojenými okuliarmi.
- ModelCraft otvorený na zabezpečenej stránke (https), ako je na tejto stránke.

Keď nie sú okuliare, {{ui:Kontrola vo VR}} je sivé a povie prečo.

## Začiatok

1. Nastavte pohľad, kde chcete začať: v miestnosti alebo vonku s pohľadom na budovu.
2. Kliknite na {{ui:Pohľady}} v skupine {{ui:Kamera}}, potom na {{ui:Kontrola vo VR}}.
3. Nasaďte okuliare.

Ponuka je na chrbte vašej ľavej ruky. Ukážte na ňu pravým ovládačom a stlačte spúšť, aby ste vybrali tlačidlo. (Iba s jednou rukou sa ponuka vznáša pred miestom, kde ste začali.)

## Ako to vyzerá

Okuliare zobrazujú model vo vzhľade [živého pohľadu](topic:live-view): vzhľad a materiály, ktoré ste dali plochám, oblohu a slnko z miesta a dátumu vášho modelu s jeho tieňom, lampy, rozptýlené rastliny a kamene a svetlo odrazené od stien a podláh (počíta sa na tomto počítači, keď sa rozhliadate, a sleduje vás pri pohybe). Jas a farebná transformácia pohľadu (ACES alebo AgX) sú tie z [Vykreslenia obrázka](topic:render). Koľko sa kreslí, závisí od toho, čo má prehliadač okuliarov, rovnako ako na počítači; ambientná okluzia, odrazy a žiara ostávajú na počítači.

## Pohyb

- **Skok:** v {{ui:Presunúť}} ukážte na podlahu a stlačte spúšť; pristanete tam. Alebo potlačte páčku dopredu na zamierenie a pustite, aby ste skočili. Môžete pristáť len na podlahách a na zemi (plochy smerujúce nahor), nikdy na stene.
- **Otočenie:** potlačte páčku doľava alebo doprava: otočíte sa o 30° zakaždým.
- **Chôdza:** vo vašej hracej zóne jednoducho choďte.

## Meranie

Vyberte {{ui:Meranie}} a stlačte spúšť na dvoch bodoch. Vzdialenosť sa zobrazí medzi nimi, v jednotkách modelu. Bod blízko rohu sa pripne k rohu.

## Rozrezanie

Vyberte {{ui:Rez}} a stlačte spúšť na ploche:

- na stene (alebo čomkoľvek, čo nie je podlaha): všetko medzi vami a tou plochou sa odreže, takže vidíte dovnútra. Najlepšie to funguje zvonka alebo cez miestnosť;
- na podlahe, zhora: pôdorysný rez 1,2 m nad touto podlahou, takže steny ukážu svoju spodnú časť.

{{ui:Vymazať}} odstráni rez a merania. Ak rezná rovina prereže model v pohľade, keď začnete, okuliare začnú s ňou.

## Umiestnenie problému

Vyberte {{ui:Problém}} a stlačte spúšť tam, kde je problém. Číslovaný špendlík ho označí a ModelCraft si problém uchová spolu s obrázkom toho, čo ste videli, a kde ste stáli. Keď opustíte VR, problémy sú v zozname {{ui:Problémy}} vpravo:

- tlačidlo oka ukáže problém z miesta, kde bol umiestnený;
- {{ui:Uložiť ako BCF}} stiahne všetky ako súbor BCF, ktorý otvoria programy na kontrolu BIM (vrátane kamery a obrázka);
- uložia sa aj do súboru `.modelcraft`.

Pridať komentár k problému môžete až potom, čo opustíte VR, v programe BCF: písanie v okuliaroch zatiaľ nie je hotové.

## Pozrieť ako model na stole

{{ui:Stolový model}} zmenší model tak, aby sa zmestil na stôl pred vami; obíďte ho alebo ho otočte páčkou. {{ui:V plnej veľkosti}} vás vráti tam, kde ste boli.

## S ostatnými, naživo

V [živej relácii](topic:work-live) každý vo VR vidí ostatných ako hlavu a dve ruky vo vlastnej farbe, s ich menom, a bodku, kam každý ukazuje. Úpravy, ktoré ktokoľvek urobí, sa k vašim okuliarom dostanú do chvíle. Ľudia pri stole sa v okuliaroch zatiaľ nezobrazujú.

## Odchod

Vyberte {{ui:Opustiť VR}} (alebo si okuliare zložte a reláciu ukončte tam). Pohľad na obrazovke sa presunie tam, kde bola vaša hlava.

:::note
Testované len s emulátorom okuliarov, zatiaľ nie so skutočnými. Veľký model môže spôsobiť trhanie v okuliaroch: najprv skryte to, čo nepotrebujete ([skrytie a izolácia](topic:hide-isolate)).
:::
