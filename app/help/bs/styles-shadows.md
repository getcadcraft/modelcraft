---
title: Stilovi i sunčeve sjene
summary: Prikaži model sjenčen, kao skrivene linije, kao žičani model ili prozirno, i prouči sjene koje baca na bilo koji datum, u bilo koje vrijeme i na bilo kojem mjestu.
keywords: prezentacijski pogled, čist pogled, sakrij vodilice, sakrij ose, stil, sjenčeno, skriveni rubovi, žičani model, rendgen, ivice, sjene, sunce, studija sunca, solarno, datum, vrijeme, geografska širina, geografska dužina, vremenska zona, sjever
from: 09c95329
---

Panel {{ui:Stil}} s desne strane mijenja način na koji se model crta. Ništa u njemu ne mijenja sam model, i nije dio radnji koje se poništavaju. Svaka [scena](topic:scenes) pamti svoj stil, a datoteka pamti stil koji si imao kada si je spasio.

## Površine

Odaberi jedan u listi {{ui:Površine}}:

| Stil | Izgleda kao |
|---|---|
| {{ui:Sjenčeno}} | Pune površine, blago osvijetljene. Površine viđene sa zadnje strane su plavkasto-sive. Prikazuju se uvezene boje. |
| {{ui:Skriveni rubovi}} | Površine u boji pozadine, ivice u tamnoj boji: čist linijski crtež bez skrivenih linija. Bijelo na {{ui:Papir}}, tamno na {{ui:Model}}. |
| {{ui:Žičani model}} | Samo ivice. Površine se ne crtaju, ali se i dalje računaju pri klikanju i hvatanju: ne možeš odabrati kroz njih. |
| {{ui:Rendgen}} | Prozirne površine, da se vidi šta je iza ili unutra. Kao i kod žičanog modela, klikovi i hvatanja i dalje staju na najbližoj površini. |

{{ui:Prikaži ivice}} uključuje ili isključuje ivice u svakom stilu osim u {{ui:Žičani model}}. Kad je isključeno, {{ui:Skriveni rubovi}} gotovo ništa ne prikazuje, jer se njihove površine poklapaju s pozadinom. Meke ivice, poput bočnih strana povučenog kruga, nikada se ne crtaju.

## Uključi sunčeve sjene

1. Označi {{ui:Sunčeve sjene}}. Postavke sunca ispod nje postaju aktivne, i model baca sjene na sebe i na tlo.
2. Postavi mjesto:
   - {{ui:Geografska širina}}: sjever je pozitivan, jug negativan (Njujork je oko 40.7, Sidnej oko -33.9).
   - {{ui:Geografska dužina}}: istok je pozitivan, zapad negativan (Njujork je oko -74.0).
   - {{ui:UTC razlika}}: razlika lokacije od UTC u satima, npr. `-5` za Njujork zimi. ModelCraft ne primjenjuje ljetnje računanje vremena; koristi `-4` za Njujork ljeti.
3. Postavi {{ui:Datum}} (mjesec i dan) i prevuci klizač {{ui:Vrijeme}}. Vrijeme se pomjera u koracima od 15 minuta i prikazuje se pored klizača, npr. „3:00 pm“.

Red ispod postavki kaže gdje je sunce, npr. „Sunce 52° iznad, 250° od sjevera. Sjever je zelena osa.“ Noću piše „Sunce je u ovom trenutku ispod horizonta.“

Novi model počinje sa suncem 21. juna u 3:00 pm, na geografskoj širini 40, geografskoj dužini -105 i UTC razlici -7.

## Okreni model prema sjeveru

Sjever u ModelCraftu je uvijek **zelena osa**. Za proučavanje stvarne lokacije okreni model tako da njegova sjeverna strana gleda duž zelene: odaberi sve ({{key:Mod+A}}), pritisni {{key:Q}}, klikni centar na tlu i okreni ga za ugao lokacije od sjevera (vidi [Rotiraj i skaliraj](topic:rotate-scale)).

## Studija sunca

1. Postavi mjesto i datum.
2. Dodaj scenu ({{ui:Dodaj scenu}} u {{ui:Scene}}).
3. Pomjeri klizač vremena, pa dodaj još jednu scenu. Ponovi za svaki sat koji želiš.
4. Klikni {{ui:Pusti}} da prođeš kroz njih. Vidi [Spasi poglede kao scene](topic:scenes).

## Šta treba znati

- Sjene mogu izgledati nazubljeno na vrlo velikom modelu, jer jedna mapa sjena pokriva cijeli model.
- Sjene se ne crtaju u {{ui:Žičani model}}.
- Položaj sunca slijedi NOAA solarni proračun i tačan je na dio stepena, što je dovoljno za studije volumena. Atmosferska refrakcija se zanemaruje, pa vrlo niski uglovi sunca blizu izlaska i zalaska mogu biti malo pogrešni.

## Prezentacijski pogled

{{ui:Pogledi}} › {{ui:Prezentacijski pogled}} (ili {{key:Shift+P}}) prikazuje samo model: nestaju ose, vodilice i vodeće tačke, obrisi ravni presjeka (sam presjek ostaje), oznake svjetala, okvir otvorene grupe, oznake hvatanja i savjeti, te isticanje odabira. Koristi ga da jasno pogledaš model ili prije snimka ekrana. Alati i dalje rade i hvataju; samo ne vidiš oznake. Pritisni {{key:Shift+P}} ponovo da ih vratiš. Kote ostaju, jer su dio crteža. Dok uređuješ unutar grupe, ostatak modela više ne blijedi: prikazuje se kakav jeste, uključujući teksture.
