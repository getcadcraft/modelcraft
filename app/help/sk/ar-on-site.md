---
title: Pozrite si model na stavbe s Android telefónom (AR)
summary: Zdvihnite Android telefón s Chrome a uvidíte model v skutočnej veľkosti nad kamerou, zarovnaný na budove dvoma bodmi, na ktorých stojíte, s röntgenovou šošovkou a rýchlou kontrolou pri ďalšej návšteve. Slúži na pozeranie, nie na vytyčovanie.
keywords: ar, rozšírená realita, telefón, android, chrome, webxr, na stavbe, stavba, kamera, skutočná veľkosť, röntgen, zarovnanie, zarovnať, znova skontrolovať, arcore
from: 0f43b50b
---

{{ui:Zobrazenie na mieste (AR, telefón)}} v ponuke {{ui:Pohľady}} zobrazí model v jeho skutočnej veľkosti nad kamerou telefónu. Funguje na **Android telefóne s Chrome**, na zabezpečenej (https) stránke, kde telefón podporuje AR. Na iPhone alebo iPade, počítači alebo v Android aplikácii, ktorá zobrazuje iba webovú stránku, položka uvedie, prečo sa nedá spustiť; použite tam 3D pohľad alebo otvorte túto stránku v Chrome na telefóne.

**Telefón slúži na pozeranie.** Nemerajte, nevytyčujte a nič nerežte podľa toho, čo ukazuje obrazovka: telefón sa pri chôdzi posúva a chyba ukazovania rastie so vzdialenosťou od dvoch bodov, na ktoré ste zarovnali (pár centimetrov v ich blízkosti, viac ďalej). Nič tu nie je geodetickej presnosti.

## Zarovnanie modelu

1. Otvorte model v telefóne a vyberte {{ui:Zobrazenie na mieste (AR, telefón)}}. Povoľte kameru.
2. Panel dole pomenúva prvý bod (roh modelu pri zemi). Postavte sa tam na stavbe, namierte zelený krúžok na zem a klepnite na {{ui:Umiestniť bod}}.
3. Choďte k druhému bodu, aspoň pol metra vzdialenému (čím ďalej od seba, tým lepšie zarovnanie), a urobte to isté.
4. Model sa zobrazí v plnej veľkosti, otočený a posunutý tak, aby zapadol do oboch miest. Panel uvedie, ako dobre sa obidva body zhodujú.

{{ui:Začať znova}} vymaže body. Zarovnanie sa uchová v súbore modelu, takže pri ďalšom otvorení modelu na stavbe začne zarovnaný.

## Röntgenová šošovka

{{ui:Röntgenová šošovka}} zobrazí celý model vnútri kvádra pred telefónom (približne meter a pol široký a tri metre hlboký) a inde len slabý obrys, takže môžete pozrieť, čo je za stenou, bez toho, aby ste stratili skutočnú stenu.

## Ďalšia návšteva

Postavte sa k prvému bodu a klepnite na {{ui:Znova skontrolovať}}, potom na {{ui:Umiestniť bod}}. Ak je odchýlka menej ako 5 centimetrov, zarovnanie sa zachová. Ak je odchýlka do pol metra, model sa posunie o rozdiel. Pri väčšej odchýlke vás panel požiada, aby ste znova ukázali na obidve miesta.

## Ukončenie

{{ui:Ukončiť AR}} ukončí reláciu. Obraz kamery zostane v prehliadači: nič sa nenahráva.
