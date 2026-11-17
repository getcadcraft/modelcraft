---
title: Mērogot pēc koeficientiem un saraušanās pielaide
summary: Mērogojiet atlasi pēc koeficienta katrai asij ap izvēlētu punktu vai palieliniet modeli par procentiem, par kādu liešanas detaļa sarausies.
keywords: mērogot, nevienmērīgs, koeficients, procenti, izstiepšana, saraušanās, sarukums, liešana, modelis, lietuve, pielaide, mainīt izmēru
from: 37e1bbff
---

Mērogošanas rīks ({{key:S}}) mēro vienmērīgi vai velk rokturi, lai izstieptu vienu vai divus virzienus. **{{ui:Mērogot pēc koeficientiem…}}** (izvēlnē Rīki vai grupā Modificēt) ir ierakstītā forma: skaitlis katrai no trim asīm.

1. Atlasiet malas, virsmas, grupas vai komponentus.
2. Atveriet {{ui:Mērogot pēc koeficientiem…}}. Ierakstiet koeficientu sarkanajai, zaļajai un zilajai asij. Koeficients var būt `1.015`, `101.5%` vai `+1.5%` (un `-2%`, lai samazinātu). {{ui:Vienāds visās trijās asīs}} pirmo nokopē uz pārējām divām.
3. Izvēlieties, kas **paliek vietā**: atlases vidus, tās zemākais stūris, tās apakšas vidus vai sākumpunkts.
4. Rindā zem laukiem redzams izmērs tagad un pēc tam. {{ui:Mērogot}} to veic vienā atsaukšanas soļā.

Asis ir atvērtās grupas asis (modeļa asis augstākajā līmenī). Pagriezta grupa vai komponents iznāk nošķiebts, ja to koeficienti atšķiras; tā vietā mērogojiet grupu, kurā tas atrodas. Komponenta saturs netiek aizskarts, tāpēc tā citas kopijas paliek kā ir.

## Saraušanās pielaide

Liets detaļa sarūk, kad atdziest, tāpēc tās modelis tiek veidots lielāks. Zem **Saraušanās pielaide** ierakstiet procentus katrai asij (jūsu lietuve vai modeļu veidotājs tos dod jūsu metālam; zemāk 1.5 % ir tikai piemērs) un nospiediet {{ui:Izmantot kā koeficientus}}.

- **Pats procents** padara koeficientu par 1 plus procents: 1.5 % dod 1.015, to, ko atzīmē saraušanās lineāls.
- **Tieši pietiekami** padara koeficientu par 1 dalītu ar vienu mīnus procents: 1.5 % dod 1.0152, tātad liešana iznāk detaļas izmērā pēc tik daudz sarukuma.

Jūsu pēdējie procenti tiek atcerēti šajā pārlūkprogrammā.

:::note
Procentu nosakāt jūs: ModelCraft neko nezina par jūsu metālu, veidni vai procesu.
:::
