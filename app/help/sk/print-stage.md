---
title: Položte veci na tlačovú podložku a pošlite ich do tlačiarne
summary: Pridajte položky knižnice alebo svoj model na podložku tlačiarne, rozmiestnite ich, prezrite si rezané vrstvy a pošlite tlač cez USB alebo sieť, alebo uložte G-code bez toho, aby ste najprv exportovali STL.
keywords: fáza tlače, 3D tlač, tlačiareň, podložka, odoslať na 3D tlačiareň, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, knižnica, rozmiestniť, prispôsobiť všetko, náhľad vrstiev, výplň, podpery, vlákno, pla, petg, doplnok, doplnok 3D Print
from: abcf5d7e
---

{{ui:Fáza tlače}} rozloží veci na tlačovú podložku vašej tlačiarne, nareže ich na vrstvy a pošle do tlačiarne. Súbor najskôr neexportujete. Patrí do doplnku 3D Print, ktorý je predvolene zapnutý.

:::note
S týmto zatiaľ nebolo nič vytlačené na skutočnej tlačiarni. Slicer je nový: sledujte prvé vrstvy prvej tlače a pred odoslaním použite náhľad vrstiev.
:::

## Čo urobíte

Položte model na podložku, skontrolujte, že sa zmestí, prezrite si rezané vrstvy a pošlite ho do tlačiarne alebo uložte G-code.

## Kroky

1. Kliknite na {{ui:Fáza tlače}} na paneli nástrojov. Nad zobrazením sa otvorí karta a prerušovaný obrys ukazuje podložku.
2. Pod **Pridať z knižnice** napíšte názov do vyhľadávacieho poľa, stlačte {{ui:Hľadať}} a na výsledku stlačte {{ui:Pridať}}. Položka sa dostane na podložku v plnej veľkosti alebo zmenšená, aby sa zmestila. Všetko, čo ste už nakreslili alebo importovali a vidíte v zobrazení, je tiež na podložke.
3. Pod **Na podložke** skontrolujte veľkosť každej položky. Položku označenú **Mimo podložky** je potrebné presunúť. Presúvajte, otáčajte a zmeňte mierku vecí v zobrazení bežnými nástrojmi.
4. Stlačte {{ui:Rozmiestniť na podložke}} na rozloženie položiek, alebo {{ui:Prispôsobiť všetko podložke}} na zmenšenie položiek, kým sa zmestia.
5. Pod **Tlačiareň** vyberte veľkosť **Podložka** alebo jeden z profilov tlačiarne.
6. Pod **Nastavenia tlače** vyberte **Materiál**, **Kvalitu** a **Výplň %** a zaškrtnite **Pridať podpory pod previsy**, ak ich tvar vyžaduje.
7. Stlačte {{ui:Náhľad vrstiev}} a posúvajte posuvník **Vrstva**, aby ste si prezreli rezané vrstvy. Ak potom zmeníte fázu alebo nastavenia, stlačte {{ui:Náhľad vrstiev}} znova.
8. Pod **Pripojenie** vyberte {{ui:Kábel USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} alebo {{ui:PrusaLink}}. Pri USB stlačte {{ui:Pripojiť}}. Pri sieťovej tlačiarni zadajte jej **Adresu** (a **API kľúč**, ak sa pýta) a potom stlačte {{ui:Otestovať pripojenie}}.
9. Stlačte {{ui:Odoslať na 3D tlačiareň}}. Karta sa opýta, či je podložka voľná a správny materiál je vložený, a zobrazí čas, materiál a teploty. Na odoslanie potvrďte.

Dostanete správu, že tlačiareň sa spúšťa. {{ui:Zastaviť tlač}} vypne ohrievače, ventilátor a motory. Ak chcete len súbor, stlačte {{ui:Uložiť G-code namiesto toho}}.

## Poznámky

- USB vyžaduje Chrome alebo Edge v počítači a stránka musí zostať otvorená, kým tlač neskončí. Jej zatvorenie zastaví prenos.
- Sieťová tlačiareň musí tejto stránke povoliť prístup (v Moonrakeri ju pridajte do `cors_domains`; v OctoPrint zapnite CORS a skopírujte API kľúč). Váš prehliadač sa môže spýtať na prístup k zariadeniam vo vašej sieti.
- Nič sa nepripája ani neodosiela bez vášho kliknutia.
- Zoznam slicerov je pod **Slicer**. {{ui:CadCraft basic (zahrnutý, najrýchlejší)}} je vstavaný. Kiri:Moto, PrusaSlicer, OrcaSlicer a Bambu Lab P2S sú samostatné doplnky, ktoré zapnete z karty alebo v {{ui:Nastavenia}} › {{ui:Doplnky}}. PrusaSlicer a OrcaSlicer používajú vašu vlastnú kópiu a pracujú z CadCraft Studio v počítači.
- Kusy, ktoré nie sú uzavretými telesami, sa vynechajú a karta vám povie, aký podiel tvaru to je.
- Pre tlačiarne so živicou pozrite [Rezanie pre tlačiareň so živicou](topic:resin-printing). Ak chcete najskôr skontrolovať alebo opraviť model, pozrite [Podpery, hrúbka stien, vydlabanie a oprava](topic:print-tools).
