---
title: Stilovi i senke od sunca
summary: Prikaži model senčen, kao skrivene linije, kao žičani model ili providan, i proučavaj senke koje baca na bilo kom datumu, u bilo koje vreme i na bilo kom mestu.
keywords: prikaz za prezentaciju, čist prikaz, sakrij vodilice, sakrij ose, stil, senčeno, skrivene linije, žičani model, rendgen, ivice, senke, sunce, studija sunca, solarno, datum, vreme, geografska širina, geografska dužina, vremenska zona, sever
from: 09c95329
---

Panel {{ui:Stil}} desno menja način na koji se model crta. Ništa u njemu ne menja sam model i ne ulazi u opozivanje. Svaka [scena](topic:scenes) pamti svoj stil, a datoteka pamti stil koji si imao kad si je sačuvao.

## Površi

Izaberi jedan u listi {{ui:Površi}}:

| Stil | Izgleda kao |
|---|---|
| {{ui:Senčeno}} | Pune površi, meko osvetljene. Površi gledane s leđa su plavkastosive. Uvezene boje se vide. |
| {{ui:Skrivene linije}} | Površi u boji pozadine, sa ivicama u tinti: čist linijski crtež bez skrivenih linija. Belo na {{ui:Papir}}, tamno na {{ui:Model}}. |
| {{ui:Žičani model}} | Samo ivice. Površi se ne crtaju, ali se računaju kad klikneš i hvataš: ne možeš da izabereš ništa kroz njih. |
| {{ui:Rendgen}} | Providne površi, da vidiš šta je iza ili unutra. Kao kod žičanog modela, klikovi i hvatanja i dalje staju na najbližoj površi. |

{{ui:Prikaži ivice}} uključuje ili isključuje ivice u svakom stilu osim {{ui:Žičani model}}. Kad su isključene, {{ui:Skrivene linije}} gotovo ništa ne prikazuju, jer se površi poklapaju sa pozadinom. Meke ivice, poput bočnih strana izvučenog kruga, nikad se ne crtaju.

## Uključi senke od sunca

1. Označi {{ui:Senke od sunca}}. Podešavanja sunca ispod nje postaju aktivna, a model baca senke na sebe i na tlo.
2. Podesi mesto:
   - {{ui:Geografska širina}}: sever je pozitivan, jug negativan (Njujork je oko 40.7, Sidnej oko -33.9).
   - {{ui:Geografska dužina}}: istok je pozitivan, zapad negativan (Njujork je oko -74.0).
   - {{ui:UTC razlika}}: razlika lokacije od UTC u satima, na primer `-5` za Njujork zimi. ModelCraft ne primenjuje letnje računanje vremena; za Njujork leti koristi `-4`.
3. Podesi {{ui:Datum}} (mesec i dan) i prevuci klizač {{ui:Vreme}}. Vreme se pomera u koracima od 15 minuta i prikazuje se pored klizača, na primer „3:00 pm“.

Red ispod podešavanja kaže gde je sunce, na primer „Sunce 52° iznad horizonta, 250° od severa. Sever je zelena osa.“ Noću piše „Sunce je u ovom trenutku ispod horizonta.“

Novi model počinje sa suncem 21. juna u 3:00 pm, na geografskoj širini 40, geografskoj dužini -105 i UTC razlici -7.

## Okreni model prema severu

Sever u ModelCraft-u je uvek **zelena osa**. Da proučiš pravo mesto, okreni model tako da njegova severna strana gleda duž zelene: izaberi sve ({{key:Mod+A}}), pritisni {{key:Q}}, klikni centar na tlu, pa ga okreni za ugao mesta u odnosu na sever (vidi [Rotiraj i skaliraj](topic:rotate-scale)).

## Studija sunca

1. Podesi mesto i datum.
2. Dodaj scenu ({{ui:Dodaj scenu}} u {{ui:Scene}}).
3. Pomeri klizač vremena, pa dodaj još jednu scenu. Ponovi za svaki sat koji želiš.
4. Klikni {{ui:Pusti}} da prođeš kroz njih. Vidi [Sačuvaj poglede kao scene](topic:scenes).

## Na šta treba paziti

- Senke mogu izgledati nazubljeno na vrlo velikom modelu, jer jedna mapa senki pokriva ceo model.
- Senke se ne crtaju u {{ui:Žičani model}}.
- Položaj sunca prati NOAA solarni proračun i tačan je do delića stepena, što je dovoljno za studije mase. Atmosferska refrakcija se zanemaruje, pa vrlo niski uglovi sunca pri izlasku i zalasku mogu malo odstupati.

## Prikaz za prezentaciju

{{ui:Pogledi}} › {{ui:Prikaz za prezentaciju}} (ili {{key:Shift+P}}) prikazuje samo model: nestaju ose, vodilice i tačke vodilica, obrisi ravni preseka (sam presek ostaje), oznake svetiljki, okvir otvorene grupe, oznake i savet za hvatanje, kao i isticanje izbora. Koristi ga da jasno pogledaš model ili pre snimka ekrana. Alati i dalje rade i dalje hvataju; samo ne vidiš oznake. Pritisni {{key:Shift+P}} ponovo da ih vratiš. Kote ostaju, jer su deo crteža. Dok uređuješ unutar grupe, ostatak modela se više ne zamagljuje: prikazuje se kakav jeste, uključujući teksture.
