---
title: Otáčanie, posun a zväčšenie
summary: Pohybujte sa okolo modelu myšou, touchpadom, dotykovou obrazovkou alebo klávesnicou a prejdite na štandardné pohľady.
keywords: otáčanie, posun, zväčšenie, dlhé stlačenie, tri prsty, dva prsty, klepnutie, navigácia, kamera, pohľad, otočiť pohľad, touchpad, dotyk, štipnutie, stredné tlačidlo, zväčšiť na rozsah, perspektíva, rovnobežný, pohľad zhora, izo
from: 10d4d33a
---

Kameru môžete kedykoľvek presunúť, aj uprostred kreslenia čiary alebo tlačenia plochy: nástroj počká tam, kde bol.

## S trojtlačidlovou myšou

| Na | Urobte toto |
|---|---|
| Otáčanie | Ťahajte stredným tlačidlom (stlačte koliesko) |
| Posun | Ťahajte pravým tlačidlom alebo podržte {{key:Shift}} a ťahajte stredným tlačidlom. Stlačenie alebo pustenie {{key:Shift}} počas ťahania prepína medzi otáčaním a posunom |
| Zväčšenie | Otáčajte koliesko. Zväčšuje smerom k ploche pod kurzorom alebo k bodu pod ním v hĺbke stredu zobrazenia |
| Zobraziť celý model | {{key:Shift+Z}} alebo {{ui:Rozsah}} |

Otáčanie otáča pohľad okolo časti modelu pod kurzorom, takže tento bod zostane na mieste, kým sa všetko okolo neho otáča. Nad prázdnym priestorom sa otáča okolo stredu zobrazenia. Posun zachová bod, ktorý ste uchopili, pod kurzorom.

Ak chcete vždy otáčať okolo stredu zobrazenia alebo spomaliť či zrýchliť otáčanie a posun, otvorte {{ui:Nastavenia}} ({{key:Mod+,}}), kartu {{ui:ModelCraft}}, **Otáčanie a posun**. Rýchlosti platia pre myš, touchpad, dotyk a šípky.

Pravé kliknutie bez ťahania nerobí nič; ModelCraft nemá kontextové menu pravým tlačidlom.

## Bez stredného tlačidla

Použite nástroje kamery na paneli nástrojov alebo klávesnicu:

1. Stlačte {{key:O}} (alebo kliknite na {{ui:Otáčanie}}) a ťahajte ľavým tlačidlom na otáčanie. Podržte {{key:Shift}} počas ťahania na posun.
2. Stlačte {{key:H}} (alebo kliknite na {{ui:Posun}}) a ťahajte na posun.
3. Stlačte {{key:Z}} (alebo kliknite na {{ui:Zväčšenie}}) a ťahajte nahor na priblíženie, nadol na oddialenie.
4. Stlačte {{key:Space}}, aby ste sa vrátili k {{ui:Vybrať}}, alebo stlačte kláves nástroja, ktorý chcete ďalej.

Nástroje kamery nahradia nástroj, ktorý ste používali. Ak sa chcete rozhliadnuť uprostred operácie bez jej straty, použite klávesnicu:

- Šípky otáčajú.
- {{key:Shift}} so šípkami posúva.

Keď je kreslený nástroj uprostred operácie (po prvom kliknutí), šípky uzamknú smery namiesto otáčania. Pozri [Prichytávanie a inferencia](topic:inference#lock-a-direction).

## Na touchpade

Najjednoduchšie: otvorte {{ui:Nastavenia}} ({{key:Mod+,}}), kartu {{ui:ModelCraft}}, a nastavte Rolovanie na **Touchpad** (alebo nechajte na „Zistiť automaticky“). Potom dvoma prstami potiahnite na otáčanie, podržte {{key:Shift}} a potiahnite na posun a štipnite na zväčšenie — žiadne tlačidlá kamery. Pozri [Nastavenia ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Keď je Rolovanie nastavené na **Koliesko myši**:

:::mac
- **Zväčšenie:** rolujte dvoma prstami alebo štipnite. Obe zväčšujú smerom ku kurzoru.
- **Posun:** stlačte dvoma prstami (sekundárne kliknutie) a nechajte prsty pritlačené pri ťahaní. Zapnite „Sekundárne kliknutie“ v **Systémové nastavenia**, potom **Touchpad**, ak dvojprstové kliknutie nefunguje.
- **Otáčanie:** stlačte {{key:O}} a ťahajte jedným prstom, alebo použite šípky.
- Podržanie {{key:Ctrl}} pri kliknutí nemusí v ModelCraft počítať ako pravé kliknutie, v závislosti od prehliadača: môže fungovať ako kliknutie s podrženým {{key:Ctrl}}. Na posun použite dvojprstové stlačenie.
:::

:::windows linux
- **Zväčšenie:** rolujte dvoma prstami. Štipnutie tiež zväčšuje tam, kde ovládač touchpadu posiela štipnutie ako rolovanie s {{key:Ctrl}}.
- **Posun:** ťahajte pravým tlačidlom (na mnohých touchpadoch stlačte pravý dolný roh a ťahajte) alebo stlačte {{key:H}} a ťahajte.
- **Otáčanie:** stlačte {{key:O}} a ťahajte, alebo použite šípky.
:::

Keď je koliesko myši, dvojprstové rolovanie zväčšuje; neposúva. Je to opak mnohých webových stránok a takto sa koliesko myši správa vo väčšine 3D modelovacích programov.

:::tip
{{key:Space}} vyberá nástroj {{ui:Vybrať}} v ModelCraft. Podržanie {{key:Space}} a ťahanie neposúva, na rozdiel od niektorých iných aplikácií.
:::

## Na dotykovej obrazovke

:::touch
- **Jeden prst** používa aktuálny nástroj: **klepnutím** kliknite, **stlačte a ťahajte** na kreslenie alebo presun.
- Kým je prst nástroja kreslenia dole, **lupa** nad ním ukazuje, čo je pod prstom, aby ste videli koncový bod, stred alebo hranu, ku ktorej sa prichytáva, skôr než zdvihnete prst.
- **Podržte nehybne** pol sekundy, aby ste dokončili, čo nástroj robí, ako to robí {{key:Enter}}: krivku alebo reťaz čiar. Keď sa nič nedeje, podržanie nehybne a potom ťahanie tým istým prstom **otáča**, kým prst nezdvihnete.
- **Dva prsty** potiahnuté spolu **posúvajú**; **štipnutie** zväčšuje. Obe fungujú v jednom geste.
- **Tri prsty** potiahnuté spolu **otáčajú**.
- Ak ich chcete prehodiť (dva prsty otáčajú, tri posúvajú), otvorte {{ui:Nastavenia}}, kartu {{ui:ModelCraft}}, Dotyková obrazovka.
- Položenie druhého prsta **zruší**, čo začal prvý prst (napoly nakreslený obdĺžnik, tlač/ťah v procese). Zdvihnite prsty a začnite znova.
- Malý pás v spodnej časti zobrazenia má **Hotovo** ({{key:Enter}}), **Zrušiť** ({{key:Esc}}) a **Späť**, keď nie je klávesnica.
- Prichytávanie a výber dosahujú o niečo ďalej než s myšou a tlačidlá sú väčšie, aby sa do nich dalo trafiť prstom.
:::

:::mouse
Na dotykovej obrazovke jeden prst používa aktuálny nástroj (klepnutím kliknite, podržaním nehybne dokončite alebo podržaním nehybne a ťahaním otáčate), dva prsty posúvajú a štipnutie zväčšuje, tri prsty otáčajú a malý pás ponúka Hotovo, Zrušiť a Späť.
:::

## Štandardné pohľady

1. Kliknite na {{ui:Pohľady}} na pravom konci panela nástrojov.
2. Vyberte {{ui:Izo}}, {{ui:Zhora}}, {{ui:Spredu}}, {{ui:Sprava}}, {{ui:Zozadu}}, {{ui:Zľava}} alebo {{ui:Zdola}}.

Zobrazenie sa otočí do tohto smeru a prispôsobí celému modelu. {{ui:Spredu}} sa pozerá na sever, pozdĺž zelenej osi; {{ui:Zhora}} sa pozerá priamo nadol so severom hore.

Kocka pohľadu v pravom hornom rohu zobrazenia robí to isté jedným kliknutím, navyše hrany a rohy, kruh kompasu na otočenie modelu a tlačidlo domov. Pozri [Kocka pohľadu](topic:view-cube).

## Perspektívne a rovnobežné premietanie

Vyberte {{ui:Pohľady}}, potom {{ui:Perspektíva}}. Značka označuje, že perspektíva je zapnutá. Keď je vypnutá, zobrazenie je rovnobežné (ortogonálne) premietanie: čiary, ktoré sú v modeli rovnobežné, zostanú rovnobežné aj na obrazovke, čo chcete pri pohľadoch z {{ui:Spredu}} alebo {{ui:Sprava}}. Stavový riadok hovorí "Perspektíva." alebo "Rovnobežné premietanie."

Každá scéna si pamätá, či bola v perspektíve. Pozri [Uložiť pohľady ako scény](topic:scenes).
