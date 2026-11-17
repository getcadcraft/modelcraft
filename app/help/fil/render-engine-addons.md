---
title: Magdagdag ng render engine gamit ang add-on
summary: Ano ang maidaragdag ng add-on sa listahan ng Engine ng Render dialog, ang permiso na kailangan nito para magpatakbo ng program, at ano ang sinusuri at itinatanong ng Studio.
keywords: add-on, addon, engine, render engine, developer, engine.run, permiso, program, script, signed, studio, api
from: cd7a39ba
---

Maaaring magdagdag ng engine ang add-on (Mga setting › Mga Add-on) sa listahan ng Engine ng {{ui:I-render ang larawan…}}. Ang buong teksto para sa mga may-akda ng add-on ay nasa seksyon 16 ng add-on specification; sa maikli:

- Nagrerehistro ang add-on ng engine na may id na nagsisimula sa sariling prefix, isang pangalan, opsyonal na mga setting, at **alinman sa** program na patatakbuhin **o** function sa JavaScript na gumuguhit ng larawan.
- Kailangan ng engine na nagpapatakbo ng program ang permiso na **`engine.run`**, na ipinapakita bago i-install at sa Settings. Tumatakbo lamang ito sa Studio; sa browser, lumalabas ito bilang file na ise-save.
- Pinapangalanan ng add-on ang program (simpleng file name lamang: hindi kailanman shell), isang script na **nasa loob ng naka-sign na add-on**, at mga argumentong binubuo ng placeholder at simpleng salita. Hahanapin ng Studio ang program o hihingan ka ng isang beses na ituro ito.
- Sa unang pagpapatakbo ng add-on ng isang program, **nagtatanong ang Studio sa sarili nitong dialog**: aling add-on, aling program, at na kayang gawin ng script ang anumang kaya ng program. Payagan lamang ito para sa add-on na pinagkakatiwalaan mo. Naaalala ang sagot mo para sa add-on at program na iyon.
- Ang package (ang eksena bilang USD at isang settings file, kasama ang glTF file kapag hinihingi ito ng add-on) at ang script ng add-on ay inilalagay sa bagong pansamantalang folder, doon tumatakbo ang program, at bumabalik ang larawan na may markang pangalan ng engine ng add-on.

:::note
Mga render engine mula sa add-on API 1.4 lang ang maidaragdag ng mga add-on. Nasa sarili nitong repository ang isang halimbawang ginawa para sa open-source na command-line renderer; hindi pa ito napapatakbo sa renderer na iyon.
:::
