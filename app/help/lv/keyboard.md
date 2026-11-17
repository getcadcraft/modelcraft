---
title: Taustiņi un peles darbības
summary: Katrs īsceļa taustiņš, peles darbība, skārienpaliktņa un skārienekrāna žests ModelCraft, sagrupēti pēc tā, ko tie dara.
keywords: taustiņi, īsceļi, karstie taustiņi, pele, skārienpaliktnis, skārienekrāns, žesti, atsauce, ctrl, komanda, bultu taustiņi
from: e2348957
---

Šie ir push-pull taustiņi, ar kuriem ModelCraft sākas. Citam stilam skatiet [Modelētāja taustiņi](topic:keyboard#modeler-keys) zemāk un [ModelCraft iestatījumi](topic:settings).

Īsceļi darbojas, kad fokuss ir 3D skatā vai rīkjoslas pogā. Ja tikko rakstījāt paneļa laukā vai mainījāt sarakstu sadaļā „{{ui:Style}}”, vispirms noklikšķiniet 3D skatā, citādi taustiņi nonāks tajā laukā. Skatiet [Taustiņi, peles un skārienpaliktņi](common:keys), lai uzzinātu, kā taustiņi tiek rakstīti katrā datorā.

## Rīki

| Taustiņš | Rīks |
|---|---|
| {{key:Space}} | {{ui:Select}} |
| {{key:L}} | {{ui:Line}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:C}} | {{ui:Circle}} |
| {{key:N}} | {{ui:Polygon}} |
| {{key:A}} | {{ui:Arc}} |
| {{key:F}} | {{ui:Offset}} |
| {{key:B}} | {{ui:Paint}} |
| {{key:P}} | {{ui:Push/pull}} |
| {{key:M}} | {{ui:Move}} |
| {{key:Q}} | {{ui:Rotate}} |
| {{key:S}} | {{ui:Scale}} |
| {{key:E}} | {{ui:Eraser}} |
| {{key:T}} | {{ui:Tape}} mērīšana |
| {{key:D}} | {{ui:Dimension}} |
| {{key:O}} | {{ui:Orbit}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:Z}} | {{ui:Zoom}} |

Burtu taustiņi darbojas tikai bez modifikatoriem: {{key:Shift}} kopā ar burtu nedara neko, izņemot divus zemāk minētos.

## Modelis un fails

| Taustiņš | Dara |
|---|---|
| {{key:G}} | Izveido komponentu no atlases |
| {{key:Shift+G}} | Izveido grupu no atlases |
| {{key:Shift+Z}} | Tālummaiņa līdz visam (viss modelis) |
| {{key:Mod+Z}} | {{ui:Undo}} |
| {{key:Mod+Y}} vai {{key:Mod+Shift+Z}} | {{ui:Redo}} |
| {{key:Mod+S}} | Saglabā (lejupielādē `.modelcraft` failu) |
| {{key:Mod+O}} | Atver modeli |
| {{key:Mod+A}} | Atlasa visu (atvērtajā grupā, ja kāda ir atvērta) |
| {{key:Mod+C}} | Kopē atlasi |
| {{key:Mod+X}} | Izgriež atlasi |
| {{key:Mod+V}} | Ielīmē: kopija seko rādītājam, noklikšķiniet, kur to novietot |
| {{key:Mod+Shift+V}} | Ielīmē vietā (no kurienes kopēts) |
| {{key:Mod+D}} | Dublē: kopija seko rādītājam, noklikšķiniet, lai to nolaistu |
| {{key:Delete}} vai {{key:Backspace}} | Dzēš atlasi |
| {{key:PageDown}} / {{key:PageUp}} | Nākamā / iepriekšējā aina |
| {{key:F1}} | Atver vai aizver šo palīdzību ({{ui:Help}} arī lietotnes joslā; {{key:Esc}} palīdzības iekšpusē to aizver) |
| {{key:Ctrl+Shift+F}} | Ekrāna režīms: pilnekrāns, tad paslēptas joslas, tad parasts (Mac datorā – Control) |

## Esc

{{key:Esc}} atceļ pa vienam līmenim katrā nospiešanā:

1. Atceļ to, ko rīks dara (zīmējamo līniju, bīdīšanu/vilkšanu, pārvietošanu). Viss atgriežas.
2. Pārslēdz uz „{{ui:Select}}”.
3. Notīra atlasi.
4. Aizver grupu, ko rediģējat.

Tas arī aptur ainu atskaņošanu. Vērtību lodziņā {{key:Esc}} notīra to, ko ierakstījāt, un atgriež skatu.

## Kamēr rīks darbojas

| Taustiņš | Dara |
|---|---|
| Cipars vai viens no `. , - ' " [ < * /` | Sāk rakstīt vērtību lodziņā |
| {{key:Enter}} | Piemēro to, ko ierakstījāt vērtību lodziņā |
| {{key:Right}} | Fiksē uz sarkano asi (nospiediet vēlreiz, lai atbloķētu) |
| {{key:Left}} | Fiksē uz zaļo asi |
| {{key:Up}} | Fiksē uz zilo asi |
| {{key:Down}} | Fiksē paralēli pēdējai malai, pāri kurai rādītājs gāja pirms pirmā klikšķa |
| Turiet {{key:Shift}} | Tur virzienu, uz kuru esat piesaistīts, kamēr turat |
| {{key:Ctrl}}, {{key:Mod}} vai {{key:Alt}} ({{ui:Move}}) | Pārslēdz starp pārvietošanu un kopēšanu |

Bultu taustiņu fiksācijas darbojas rīkos „{{ui:Line}}”, „{{ui:Rectangle}}”, „{{ui:Circle}}”, „{{ui:Polygon}}”, „{{ui:Move}}”, „{{ui:Scale}}” un „{{ui:Tape}}” (mērot no punkta) pēc pirmā klikšķa. „{{ui:Push/pull}}” vienmēr pārvietojas pa virsmas virzienu un fiksāciju nav. Rīkā „{{ui:Rotate}}” bultu taustiņi pēc pirmā klikšķa rāda ziņojumu „Fiksēts”, bet nemaina pagriezienu.

## Bultu taustiņi citos brīžos

Kad neviens rīks nav vidū kāda darba, bultu taustiņi pārvieto kameru:

| Taustiņš | Dara |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbīta |
| {{key:Shift}} ar bultu | Panoramēt |

## Pele

| Darbība | Dara |
|---|---|
| Klikšķis | Izmanto pašreizējo rīku |
| Nospiest, vilkt, atlaist | Tas pats, kas divi klikšķi (zīmēšanas rīkiem); kastes atlase (rīkam „{{ui:Select}}”); dzēš pa ceļam (rīkam „{{ui:Eraser}}”) |
| Dubultklikšķis | „{{ui:Select}}”: virsma ar tās malām, mala ar tās virsmām, atver grupu; tukša vieta aizver grupu. „{{ui:Push/pull}}”: atkārto pēdējo attālumu |
| Trīskāršs klikšķis | „{{ui:Select}}”: viss saistītais |
| {{key:Shift}} + klikšķis | „{{ui:Select}}”: pārslēdz iekļaušanu atlasē un izņemšanu no tās |
| {{key:Mod}} + klikšķis | „{{ui:Select}}”: pievieno atlasei |
| {{key:Shift}} + {{key:Mod}} + klikšķis | „{{ui:Select}}”: noņem no atlases |
| Vidējās pogas vilkšana | Orbīta ar jebkuru rīku |
| {{key:Shift}} + vidējās pogas vilkšana | Panoramēt ar jebkuru rīku |
| Labās pogas vilkšana | Panoramēt ar jebkuru rīku |
| Ritenītis | Tālummaiņa uz rādītāju |

Labā klikšķa izvēlnes nav.

## Skārienpaliktnis

Ko dara divu pirkstu ritināšana, atkarīgs no {{ui:Settings}} › {{ui:ModelCraft}} › Ritināšana:

| Žests | Skārienpaliktnis (vai aprēķināts) | Peles ritenītis |
|---|---|---|
| Divu pirkstu ritināšana | Orbīta | Tālummaiņa uz rādītāju |
| {{key:Shift}} + divu pirkstu ritināšana | Panoramēt | Tālummaiņa |
| Savilkšana vai izplešana | Tālummaiņa uz rādītāju | Tālummaiņa uz rādītāju |
| Divu pirkstu nospiešana un vilkšana (turot sekundāro klikšķi) | Panoramēt | Panoramēt |

Skatiet [Orbīta, panorāmēšana un tālummaiņa](topic:orbit-pan-zoom#on-a-trackpad) un [ModelCraft iestatījumi](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modelētāja taustiņi

Ja {{ui:Settings}} › {{ui:ModelCraft}} › Vadība ir iestatīta uz Modelētāja stilu:

| Taustiņš | Dara |
|---|---|
| {{key:W}} vai {{key:Space}} | {{ui:Select}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Line}} / {{ui:Rectangle}} / {{ui:Circle}} / {{ui:Polygon}} |
| {{key:E}} | {{ui:Push/pull}} (izvilkt) |
| {{key:T}} | {{ui:Tape}} mērīšana |
| {{key:D}} | {{ui:Dimension}} |
| {{key:G}} | Uzreiz pārvieto atlasi, sākot no rādītāja |
| {{key:R}} | Pagriež atlasi ap tās vidu (zilā ass) |
| {{key:S}} | Mērogo atlasi ap tās vidu |
| {{key:X}} / {{key:Y}} / {{key:Z}} pārvietojot vai griežot | Fiksē sarkano / zaļo / zilo asi (vēlreiz, lai atbloķētu) |
| Klikšķis vai {{key:Enter}} | Nolaiž to |
| {{key:Esc}} vai labais klikšķis | Atgriež to |
| {{key:Shift+D}} | Dublē un pārvieto kopiju |
| {{key:X}} vai {{key:Delete}} | Dzēš atlasi |
| {{key:A}} / {{key:Alt+A}} | Atlasa visu / neatlasa neko |
| {{key:Tab}} | Atver atlasīto grupu vai komponentu; vēlreiz aizver |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Izveido grupu / izveido komponentu |
| Cipartastatūra {{key:1}} / {{key:3}} / {{key:7}} | Priekšējais / labais / augšējais skats ({{key:Mod}} – aizmugurējais / kreisais / apakšējais) |
| Cipartastatūra {{key:5}} | Perspektīva ieslēgta vai izslēgta |
| Cipartastatūra {{key:.}} | Tālummaiņa uz atlasi |
| {{key:Home}} vai {{key:Shift+C}} | Tālummaiņa līdz visam |
| {{key:Shift+Tab}} | Piesaiste ieslēgta vai izslēgta |
| Vidējās pogas vilkšana / ar {{key:Shift}} / ar {{key:Mod}} | Orbīta / panorāmēšana / tālummaiņa |
| {{key:Alt}} + vilkšana / {{key:Alt+Shift}} + vilkšana | Orbīta / panorāmēšana (bez vidējās pogas) |

Kopēšana, ielīmēšana, atsaukšana, saglabāšana un atvēršana paliek ar augstāk minētajiem taustiņiem. Ierakstītās vērtības, vērtību lodziņš un „{{ui:Push/pull}}” darbojas vienādi abos stilos.

## Skārienekrāns

| Žests | Dara |
|---|---|
| Pieskariens | Klikšķis ar pašreizējo rīku |
| Dubultpieskariens | Dubultklikšķis |
| Nospiest, vilkt, atlaist | Tas pats, kas nospiest, vilkt, atlaist ar peli |
| Divi pirksti: savilkšana vai izplešana | Tālummaiņa |
| Divi pirksti: kustēties kopā | Panoramēt ({{ui:Settings}} › {{ui:ModelCraft}} › Skārienekrāns var padarīt par Orbītu) |
| Trīs pirksti: kustēties kopā | Orbīta (panoramēt, kad orbītu veic divi pirksti) |
| Turēt vienu pirkstu nekustīgi | Pabeidz rīku kā {{key:Enter}}; ja nekas nenotiek, pēc tam velciet, lai veiktu orbītu |
| Otrs pirksts vienas pirksta darbības laikā | Atceļ šo darbību |
| Rīks „{{ui:Orbit}}”, tad vilkt ar vienu pirkstu | Orbīta |

Lai ierakstītu vērtību skārienekrānā, pieskarieties vērtību lodziņam apakšā, rakstiet un nospiediet tastatūras taustiņu Enter (vai Go).

## Kur atrodas pārvietošana

Pārvietošanas rīks ir „{{ui:Move}}”, taustiņš {{key:M}}: izvēlieties, ko pārvietot, noklikšķiniet bāzes punktu, tad otru punktu vai ierakstiet attālumu. Skatiet [Pārvietošana, kopēšana un masīvu veidošana](topic:move-copy).
