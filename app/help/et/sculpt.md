---
title: Skulpteeri võrku
summary: Kuju võrk nagu savi pintslitega — joonista, savi, silu, haara, puhu üles, vagu, nüpista, lameda — kaitse osi maskiga, peegelda üle X ja lisa detaili seal, kus skulpteerid.
keywords: skulptuur, skulpteerimine, pintsel, pintslid, savi, joonistamine, silu, haara, puhu üles, vagu, nüpista, lameda, mask, sümmeetria, peegeldus, detail, dünaamiline topoloogia, pliiats, survetundlikkus, graafikatahvel
from: 5477801a
---

Skulptuuri tööruum kujundab võrku pintslitega nagu savi: lohista pinna üle ja see tõuseb, vajub, siluneb või järgib kursorit ümmarguse pintsli all, kõige tugevam keskel ja hääbub servas.

## Algus

Vali võrk ja vali tööruumide loendist {{ui:Skulptuur}}. Grupp või komponent muutub esmalt võrguks, nagu võrgu tööruumis. Pintslid töötavad võrgu tippudel, nii et rohkem tippudega võrk annab peenemaid kujusid: jaota see esmalt (võrgu tööruumi {{ui:Jaga}} või Subdivision surface modifikaator, mille rakendad), või lülita sisse {{ui:Detail}}.

## Pintslid

| Pintsel | Klahv | Mida see teeb |
| --- | --- | --- |
| {{ui:Joonistamine}} | {{key:D}} | Tõstab pinda pintsli all |
| {{ui:Savi}} | {{key:C}} | Ehitab lamedaid kihte, täites esmalt süvendid |
| {{ui:Silu}} | {{key:S}} | Ühtlustab mügarad; hoia {{key:Shift}} all, et silutada mis tahes pintsliga |
| {{ui:Haara}} | {{key:G}} | Tõmbab pinda kursoriga kaasa |
| {{ui:Puhu üles}} | {{key:I}} | Paisutab pinda välja mööda selle enda suunda |
| {{ui:Vagu}} | {{key:Shift+C}} | Lõikab terava soone |
| {{ui:Nüpista}} | {{key:P}} | Tõmbab pinda pintsli keskme poole |
| {{ui:Lameda}} | {{key:T}} | Surub pinda oma keskmise tasapinna poole |
| {{ui:Mask}} | {{key:M}} | Värvib maski, mis kaitseb pinda teistest pintslitest |

Hoia {{key:Ctrl}} all, kui skulpteerid, et töötada vastupidi (langetada tõusu asemel, hari soone asemel, eemaldada mask), või lülita sisse {{ui:Eemalda}}.

## Suurus ja tugevus

Pintsli suurus on pikslites ekraanil, nii et see tundub ühesugune, kaugel või lähedal ka suumides: {{key:[}} ja {{key:]}} teevad selle väiksemaks ja suuremaks, {{key:Shift+[}} ja {{key:Shift+]}} muudavad selle tugevust. Paneel näitab mõlemat.

Graafikatahvli pliiatsiga teeb vajutus tugevamalt suuremaks ja tugevamaks pintsliks; paneel lülitab kumbagi välja.

## Peegeldus, mask ja detail

- {{ui:Peegelda X}} ({{key:X}}) skulpteerib korraga mõlemad pooled üle punase, näo- ja kujude jaoks.
- Mask on skulpteerides tumedam. {{ui:Eemalda mask}} ({{key:Alt+M}}) eemaldab selle, {{ui:Pööra mask ümber}} ({{key:Ctrl+I}}) maskib, mis oli vaba, ja vabastab, mis oli maskitud. Mask salvestatakse võrguga koos.
- {{ui:Detail}} lisab kolmnurki kohtadesse, kus skulpteerid: pintsli all jagatakse servad, mis on pikemad kui paneelis seatud suurus (pikslites ekraanil). See vajab kolmnurkadest koosnevat võrku ja küsib, kas teha see esmalt.

Iga tõmme on üks tagasivõtmise samm.

:::note
Detail ainult lisab kolmnurki; ta ei eemalda neid, mis muutusid pisikeseks. Remesh (võrgu tööruum) ühtlustab kogu võrgu jälle.
:::

Vt ka [Võrgu muutmine](topic:mesh-edit), [Võrgud](topic:meshes) ja [Võrgu modifikaatorid](topic:modifiers).
