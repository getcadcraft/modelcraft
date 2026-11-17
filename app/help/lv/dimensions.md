---
title: Izmērs un izmēra maiņa jau uzzīmētajam
summary: Novietojiet izmērus starp stūriem, uz lokiem un riņķiem vai starp divām malām; ierakstiet jaunu garumu, lai mainītu modeļa izmēru. Pārrakstiet malas garumu vai grupas platumu, dziļumu un augstumu objekta informācijā.
keywords: izmērs, izmēri, izmēra maiņa, mainīt izmēru, rediģēt izmēru, garums, platums, dziļums, augstums, stiept, vadošais izmērs, anotēt, mērīt, pēc fakta, rādiuss, diametrs, leņķis, leņķisks, loks, riņķis, R, Ø
from: a1f815ec
---

Izmēri ModelCraft nav fiksēti pēc tam, kad kaut kas ir uzzīmēts. Izmērs parāda garumu uz modeļa, un, ierakstot tam jaunu garumu, modelis tiek izmainīts atbilstoši. Jūs varat arī pārrakstīt malas garumu vai grupas platumu, dziļumu un augstumu {{ui:Objekta informācija}}.

## Izmēra novietošana

1. Nospiediet {{key:D}} vai noklikšķiniet {{ui:Izmērs}} rīkjoslā.
2. Noklikšķiniet stūri, no kura mērīt. Tas piesaistās stūriem, viduspunktiem un malām, kā zīmējot.
3. Noklikšķiniet otru stūri.

   Vai noklikšķiniet vienreiz uz **malas** (padomā rakstīts "Uz malas"), lai izmērītu visu malu ar vienu klikšķi.
4. Pārvietojiet kursoru tur, kur jābūt izmēra līnijai, un noklikšķiniet. Varat arī ierakstīt nobīdi, piemēram, `0.5m`, un nospiest {{key:Enter}}.

   Izmēra līnija horizontālai malai paliek horizontāla, ja vien neskatāties uz to no sāniem. Vertikālai malai tā paliek vertikālajā plaknē, kas vislabāk vērsta pret jums.

Statusa joslā rakstīts "Izmērs 4 m." Izmēri rāda savu garumu modeļa mērvienībā un atjauninās, kad maināt mērvienību izvēlnē.

## Rādiuss, diametrs un leņķis

Tas pats rīks {{ui:Izmērs}} izmēra noapaļotas lietas un leņķus:

- **Loks:** noklikšķiniet uz loka. Padomā rakstīts {{ui:Rādiuss}}. Pārvietojiet kursoru, kur jābūt tekstam, un noklikšķiniet: izmērs nolasās **R 1.5 m**.
- **Riņķis:** noklikšķiniet uz riņķa. Iegūsiet **diametru** (**Ø 3 m**) ar līniju pāri riņķim caur tā centru. Daudzstūri darbojas tāpat, ar saviem stūriem uz riņķa.
- **Leņķis starp divām malām:** noklikšķiniet vienu malu, tad otru malu, kas tai savienojas stūrī (kamēr esat virs tās, padomā rakstīts {{ui:Leņķis starp malām}}). Tad pārvietojieties leņķī, kuru vēlaties, un noklikšķiniet. Stūra iekšpusē iegūsiet leņķi starp malām; pārvietojoties uz vienu pusi, iegūsiet blakus esošo leņķi (piemēram, 150° 30° vietā). Tas, cik tālu no stūra noklikšķināt, nosaka, kur iet loks; vai ierakstiet šo attālumu.

Lai pārslēgtu rādiusu uz diametru vai atpakaļ, atlasiet izmēru un izvēlieties {{ui:Rādīt kā}} {{ui:Objekta informācija}}.

**Izmēra maiņa ar tiem:** ierakstiet jaunu rādiusu vai diametru tieši pēc izmēra novietošanas vai vēlāk, atlasot to un rakstot. Loks vai riņķis saglabā savu centru un maina izmēru; virsma, ko tas ierobežo (disks, slota gals), mainās līdzi. Divi gadījumi tikai mēra:

- **Leņķa izmērs** nekad nemaina modeli. Lai mainītu leņķi, pagrieziet malas ar {{ui:Pagriezt}}.
- **Riņķis cilindra galā** (riņķis, ko izvilkāt ar {{ui:Stumt/vilkt}}) nevar mainīt izmēru no sava izmēra, jo tā sānu virsmām būtu jāmainās arī. Tā vietā mērogojiet cilindru ap tā asi.

## Modeļa izmainīšana ar izmēru

Uzreiz pēc izmēra novietošanas ierakstiet jaunu garumu un nospiediet {{key:Enter}}: `6m`, `12'`, `3500` milimetru modelī. Modelis mainās līdz tam izmēram.

Vēlāk jebkurā laikā:

1. Ar {{ui:Atlasīt}} noklikšķiniet uz izmēra teksta vai līnijas. {{ui:Objekta informācija}} teiks **Izmērs** un parādīs tā {{ui:Garums}}.
2. Ierakstiet jauno garumu un nospiediet {{key:Enter}}. Varat rakstīt tieši vērtību lodziņā vai {{ui:Garums}} lodziņā {{ui:Objekta informācija}}.

### Kas pārvietojas

Otrais stūris, uz kuru noklikšķinājāt, pārvietojas, un tāpat viss aiz tā:

- **Abi stūri vienā gabalā** (kastes platums, sienas augstums): puse pie kustīgā stūra izslīd vai ieslīd, un pie tā pievienotās virsmas stiepjas. Kaste paliek slēgts korpuss, un viss, kas atrodas pilnībā šajā pusē, piemēram, loga komponente, pārvietojas kopā ar to.
- **Stūri divos atsevišķos gabalos** (sprauga starp divām kastēm): kustīgā stūra gabals pārvietojas kopā, un sprauga mainās.
- **Kustīgais stūris grupā vai komponentē, kurā nav otra stūra:** pārvietojas visa grupa.
- **Abi stūri vienā grupā vai komponentē:** tā tiek stiepta iekšpusē. Komponente mainās visur, kur tā ir ievietota, kā tas vienmēr notiek, to rediģējot.

Lai mainītu, kurš gals pārvietojas, atlasiet izmēru un izvēlieties {{ui:Pārvieto}} {{ui:Objekta informācija}}:

| Izvēle | Ko tas dara |
|---|---|
| {{ui:Otrs gals}} (noklusējums) | Gals, uz kuru noklikšķinājāt otrais, pārvietojas |
| {{ui:Pirmais gals}} | Gals, uz kuru noklikšķinājāt pirmais, pārvietojas |
| {{ui:Abi gali (centrēti)}} | Katrs gals pārvieto pusi izmaiņas, tāpēc vidus paliek vietā |

### Kad izmaiņa tiek noraidīta

ModelCraft nemaina neko un statusa joslā pasaka, kāpēc:

- "virsma izliektos ārpus savas plaknes": izmērs iet slīpi pāri formai. Izmēriet pa malu vai pa sarkano, zaļo vai zilo.
- "virsma sarukšu līdz nullei vai apgriezīsies uz iekšu": jaunais garums ir pārāk īss formai.
- "kustīgais gals nav uz modeļa stūra": šis gals ir novietots tukšā telpā vai malas vidū. Izvēlieties otru galu sadaļā {{ui:Pārvieto}} vai novietojiet izmēru uz diviem stūriem.
- "garumam jābūt lielākam par nulli".

Katra izmēra maiņa ir viens solis: {{key:Mod+Z}} to atsauc.

## Izmēra pārrakstīšana objekta informācijā

Izmērs nav vajadzīgs vienmēr:

- **Mala:** atlasiet to. Tās {{ui:Garums}} objekta informācijā ir lodziņš, kurā var rakstīt. Garuma ierakstīšana vērtību lodziņā arī strādā. Gals tālāk pa sarkano, tad zaļo, tad zilo pārvietojas, un tam pievienotais stiepjas. Piemēram, pārrakstot kastes priekšējās apakšējās malas garumu, kaste kļūst platāka pa labi.
- **Grupa vai komponente:** atlasiet to. {{ui:Platums (sarkanā)}}, {{ui:Dziļums (zaļā)}} un {{ui:Augstums (zilā)}} ir lodziņi. Tās tālākā puse (pa labi, aizmugure, augša) pārvietojas. Šie ir grupas paši asis, pirms jebkādas pagriešanas, ko esat tai piešķīris.

Nospiediet {{key:Enter}}, lai piemērotu, vai {{key:Esc}}, lai atgrieztu veco vērtību.

## Izmēri seko modelim

Izmērs ir piestiprināts pie diviem stūriem, uz kuriem tas tika novietots (leņķis: pie tā stūra un tālākajiem galiem abās malās; rādiuss vai diametrs: pie sava loka vai riņķa). Pārvietojiet, stumiet/velciet vai mainiet ģeometrijas izmēru, un izmērs seko un parāda jauno garumu. Tas paliek piestiprināts, kad ģeometriju pārvēršat grupā vai komponentē.

Ja gals tika novietots kaut kur, kas nav stūris (virsmā vai tukšā vietā), vai tā stūris tika dzēsts, šis gals paliek, kur bija. Izmērs joprojām mēra, bet var mainīt izmēru tikai no otra gala.

## Izmēru noņemšana

- Viens izmērs: atlasiet to un nospiediet {{key:Delete}}, vai noklikšķiniet uz tā ar {{ui:Dzēšgumija}}.
- Visi izmēri: kad nekas nav atlasīts, noklikšķiniet {{ui:Dzēst visus izmērus}} {{ui:Objekta informācija}}.

Izmēri tiek saglabāti `.modelcraft` failā. Tie netiek eksportēti citos formātos, kas pārnes tikai 3D modeli. Fails ar izmēriem joprojām atveras vecākā ModelCraft versijā, bet bez tiem.
