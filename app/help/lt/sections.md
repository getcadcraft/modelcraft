---
title: Pjūvio plokštumos: perpjauti modelį
summary: Padėkite pjūvio plokštumą, kad pamatytumėte modelio vidų, perstumkite ją per modelį, apverskite ar išjunkite pjūvį.
keywords: pjūvis, pjūvio plokštuma, pjūvio linija, kirtimas, iškirpimas, apkarpymas, vidus, aukšto planas, pjovimas, skerspjūvis
from: 28c3a645
---

Pjūvio plokštuma perpjauna modelį, todėl galite matyti jo vidų ir dirbti jame: namo aukšto planą, spintos vidų. Modelis nekeičiamas; pjūvis yra tik vaizdas.

## Pjūvio plokštumos padėjimas

1. Spustelėkite {{ui:Pjūvis}} grupėje {{ui:Kamera}}.
2. Spustelėkite paviršių. Plokštuma padedama ant to paviršiaus, su keturiomis rodyklėmis, nukreiptomis į jus.

   Spustelėkite ne ant paviršiaus, kad plokštuma būtų statmena kryptimi, kuria dažniausiai žiūrite. Pirma paspauskite rodyklės klavišą, kad ji stovėtų statmenai raudonai ({{key:Right}}), žaliai ({{key:Left}}) ar mėlynai ({{key:Up}}).

Pusė, į kurią rodo rodyklės, yra **nupjaunama**. Plokštuma, padėta ant paviršiaus, dar nieko nepjauna: perstumkite ją į modelį.

## Perstumkite, apverskite, išjunkite

Spustelėkite plokštumos kontūrą, kad ją pažymėtumėte. {{ui:Objekto informacija}}:

- {{ui:Pagal jos rodykles}} nurodo, kur ji stovi. Įveskite naują atstumą ir paspauskite {{key:Enter}}, kad perstumtumėte ją per modelį; įvedus `-1m` plokštumai, kurią padėjote ant priekinio paviršiaus, ji perstumiama 1 m į modelį.
- {{ui:Apversti}} apverčia rodykles, todėl nupjaunama kita pusė.
- {{ui:Aktyvi (pjauna modelį)}}: vienu metu pjauna viena plokštuma. Pažymėkite kitos plokštumos langelį arba padėkite naują, ir pjaus ji.
- Pervardinkite ją {{ui:Pavadinimas}} lauke; naikinkite ją klavišu {{key:Delete}} arba {{ui:Trintukas}}.

Ten, kur plokštuma eina per uždarą kūną, pjūvis užpildomas tamsia spalva. Geometrija, kuri nėra uždara (vienas paviršius, atviras dėžė), yra perpjaunama, bet neužpildoma.

## Rodyti ir slėpti

Skiltyje {{ui:Vaizdai}}:

- {{ui:Rodyti pjūvio plokštumas}} paslepia plokštumų kontūrus ir rodykles (pjūvis lieka).
- {{ui:Rodyti pjūvius}} išjungia pjūvį ir rodo visą modelį, neištrindama plokštumų.

[Pristatymo vaizdas](topic:styles-shadows#presentation-view) paslepia ir kontūrus.

## Ką reikia žinoti

- Nupjautos dalies negalima spustelėti ar prie jos prisegti, todėl galite braižyti ant to, ką rodo pjūvis.
- Pjūvio plokštumos, kuri yra aktyvi, ir abu jungikliai įrašomi ModelCraft faile. Kiekvienas pakeitimas – vienas anuliavimo žingsnis.
- Eksportuose visada yra visas modelis: pjūvis yra vaizdas, o ne redagavimas.
