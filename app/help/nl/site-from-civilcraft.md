---
title: Een terrein uit CivilCraft overnemen
summary: Open het adres-naar-terrein-bestand dat CivilCraft maakt en voeg de gebouwen en het perceel eromheen toe als massa's en een terreinlijn, alleen de gebouwen die u aanvinkt.
keywords: terrein, civilcraft, adres, perceel, buurgebouwen, massa's, context, ccsite, open data, openstreetmap
from: f28e4a3b
---

CivilCraft kan een adres opzoeken en opslaan wat de open-databronnen eromheen weten: buurgebouwen, het perceel, en de omtrekken van overstroming, bestemming en bodem. ModelCraft neemt dat bestand als suggesties. Er wordt niets toegevoegd tot u dat zegt.

## Het bestand binnenhalen

1. Stuur in CivilCraft het terrein naar ModelCraft, of sla het bestand op (het eindigt op `.ccsite.json`).
2. Open of zet in ModelCraft het bestand neer. Er opent een lijst met een vinkvakje voor elk gebouw en voor het perceel.
3. Typ een hoogte voor de gebouwen waarvoor de bron er geen gaf. Naast elk staat een regel die zegt waar de hoogte vandaan komt: het aantal lagen, elk 3 m, of de hoogte die u typte.
4. Druk op {{ui:Voeg de aangevinkte toe}}.

De aangevinkte gebouwen worden geëxtrudeerde massa's in één component, en het perceel wordt een lijn rond het terrein. Alles is één stap ongedaan maken. Het adrespunt ligt in de oorsprong, in meters oostelijk en noordelijk daarvan.

Overstromings-, bestemmings- en bodemomtrekken worden alleen ter informatie vermeld; ze worden niet getekend.

De gegevens komen uit open bronnen en de bronvermelding staat onderaan de lijst. Hoogten die niet zijn opgegeven, zijn aannames; controleer ze voordat u erop vertrouwt.
