---
title: Stiepjami komponenti
summary: Izveidojiet vienas komponenta kopijas platāku, dziļāku vai augstāku, kamēr tā daļas saglabā savus izmērus: garāku galdu ar tām pašām kājām, augstāku grāmatu plauktu ar izvērstiem plauktiem, margas, kuru stabiņi atkārtojas.
keywords: dinamisks komponents, stiepšana, komponenta izmēra maiņa, parametrisks, nosauktie izmēri, atkārtot, masīvs, kājas, plaukti, margas, noteikumi, mainīgie
from: b4c40f43
---

Komponenta mērogošana padara visu tajā lielāku, arī kājas un sliedes. **Stiept šo kopiju** maina komponenta platumu, dziļumu vai augstumu, un katra daļa seko noteikumam: galda virsma izaug, tās kājas saglabā savu biezumu un paliek galos.

Tas darbojas ar komponentiem, kas sastāv no daļām, tas ir, grupām vai komponentiem komponenta iekšienē, kā visi [sākuma bibliotēkas](topic:starter) priekšmeti.

## Stiept kopiju

1. Atlasiet komponentu.
2. Sadaļā {{ui:Objekta informācija}} noklikšķiniet uz {{ui:Stiept šo kopiju…}}.
3. Ierakstiet jauno {{ui:Platums (sarkanā)}}, {{ui:Dziļums (zaļā)}} un {{ui:Augstums (zilā)}} un noklikšķiniet uz {{ui:Stiepums}}.

Mainās tikai šī kopija: tā kļūst par savu komponentu, kas atceras oriģinālu, no kura tā radusies. Stiepiet to atkal jebkurā laikā, un tā tiek aprēķināta no jauna no oriģināla, tātad nekas nenovirzās. Citas oriģināla kopijas paliek nemainītas.

## Noteikumi

Atveriet komponentu (veiciet dubultklikšķi uz tā) un atlasiet vienu no tā daļām. {{ui:Objekta informācija}} rāda {{ui:Kad komponents tiek stiepts}}, ar noteikumu pa sarkano, zaļo un zilo:

| Noteikums | Ko dara daļa | Piemērs |
|---|---|---|
| {{ui:Stiepums}} | Aug kopā ar komponentu; tās attālumi līdz abām pusēm paliek | Galda virsma |
| {{ui:Palikt sākumā}} / {{ui:Palikt beigās}} | Saglabā savu izmēru un attālumu līdz tai pusei | Kājas |
| {{ui:Pārvietot proporcionāli}} | Saglabā izmēru; tās vidus pārvietojas proporcionāli | Plaukti, durvju rokturis |
| {{ui:Mērogot proporcionāli}} | Gan tās vieta, gan izmērs mainās proporcionāli | Kāpņu pakāpieni |
| {{ui:Atkārtot}} | Tās kopijas ik pa laikam ({{ui:Katrs}}), no sākuma līdz tālākajai pusei | Margu stabiņi |

{{ui:Automātiski}} (sākotnējais stāvoklis) aprēķina un parāda, kurš noteikums ir spēkā: {{ui:Stiepums}}, ja daļa aptver komponentu, {{ui:Pārvietot proporcionāli}}, ja tā atrodas aptuveni vidū, citādi tā paliek pusē, kurai ir tuvāk.

## Svarīgi zināt

- Daļu paša formas ir kopīgas, tāpēc stiepta kopija ir viegla. Daļas rediģēšana maina to katrā kopijā.
- Stiepta kopija nesekot vēlākām izmaiņām oriģināla noteikumos vai izkārtojumā: stiepiet to atkal, lai tās ieviestu.
- Komponentā brīvi zīmētas virsmas (nevis daļā) saglabā savu izmēru; padariet tās par daļu, lai tās sekotu.
- Noteikumi un tas, no kā katra kopija stiepta, tiek saglabāti ModelCraft failā.
