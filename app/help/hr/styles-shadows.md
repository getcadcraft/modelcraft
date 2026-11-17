---
title: Stilovi i sjene od sunca
summary: Prikažite model sjenčano, kao skrivene linije, kao žičani model ili prozirno te proučite sjene koje baca u bilo kojem datumu, vremenu i mjestu.
keywords: prikaz za prezentaciju, čist prikaz, sakrij pomoćne linije, sakrij osi, stil, sjenčano, skrivena linija, žičani model, rendgen, bridovi, sjene, sunce, studija sunca, solarno, datum, vrijeme, geografska širina, geografska dužina, vremenska zona, sjever
from: 09c95329
---

Ploča {{ui:Stil}} s desne strane mijenja način na koji se model crta. Ništa u njoj ne mijenja sam model i nije dio poništavanja. Svaka [scena](topic:scenes) pamti vlastiti stil, a datoteka pamti stil koji ste imali kad ste je spremili.

## Plohe

Odaberite jedan u popisu {{ui:Plohe}}:

| Stil | Izgleda kao |
|---|---|
| {{ui:Sjenčano}} | Pune plohe, blago osvijetljene. Plohe gledane sa stražnje strane su plavkasto sive. Uvezene boje se prikazuju. |
| {{ui:Skrivene linije}} | Plohe u boji pozadine s bridovima u tinti: čist crtež linijama s uklonjenim skrivenim linijama. Bijelo na {{ui:Papir}}, tamno na {{ui:Model}}. |
| {{ui:Žičani model}} | Samo bridovi. Plohe se ne crtaju, ali se i dalje računaju kad kliknete i hvatate: ne možete odabrati kroz njih. |
| {{ui:Rendgen}} | Prozirne plohe, da se vidi što je iza ili unutra. Kao u žičanom modelu, klikovi i hvatanja i dalje se zaustavljaju na najbližoj plohi. |

{{ui:Prikaži bridove}} uključuje ili isključuje bridove u svakom stilu osim u {{ui:Žičani model}}. Kad je isključeno, {{ui:Skrivene linije}} gotovo ništa ne prikazuju, jer se plohe podudaraju s pozadinom. Meki bridovi, poput bridova izvučenog kruga, nikad se ne crtaju.

## Uključivanje sjena od sunca

1. Označite {{ui:Sjene od sunca}}. Postavke sunca ispod nje postaju aktivne, a model baca sjene na sebe i na tlo.
2. Postavite mjesto:
   - {{ui:Geografska širina}}: sjever je pozitivan, jug negativan (New York je oko 40.7, Sydney oko -33.9).
   - {{ui:Geografska dužina}}: istok je pozitivan, zapad negativan (New York je oko -74.0).
   - {{ui:Pomak od UTC-a}}: pomak lokacije od UTC-a u satima, primjerice `-5` za New York zimi. ModelCraft ne primjenjuje ljetno računanje vremena; za New York ljeti upotrijebite `-4`.
3. Postavite {{ui:Datum}} (mjesec i dan) i povucite klizač {{ui:Vrijeme}}. Vrijeme se mijenja u koracima od 15 minuta i prikazuje se pored klizača, primjerice „3:00 pm“.

Redak ispod postavki kaže gdje je sunce, primjerice „Sunce 52° iznad, 250° od sjevera. Sjever je zelena os.“ Noću piše „Sunce je u to vrijeme ispod obzorja.“

Novi model počinje sa suncem 21. lipnja u 3:00 pm, na geografskoj širini 40, geografskoj dužini -105, s pomakom od UTC-a -7.

## Usmjerite model prema sjeveru

Sjever u ModelCraftu uvijek je **zelena os**. Da proučite stvarnu lokaciju, okrenite model tako da njegova sjeverna strana gleda duž zelene osi: odaberite sve ({{key:Mod+A}}), pritisnite {{key:Q}}, kliknite središte na tlu i zakrenite ga za kut lokacije od sjevera (vidi [Zakretanje i skaliranje](topic:rotate-scale)).

## Studija sunca

1. Postavite mjesto i datum.
2. Dodajte scenu ({{ui:Dodaj scenu}} u {{ui:Scene}}).
3. Pomaknite klizač vremena, pa dodajte još jednu scenu. Ponovite za svaki sat koji želite.
4. Kliknite {{ui:Reproduciraj}} da prolazite kroz njih. Vidi [Spremanje pogleda kao scena](topic:scenes).

## Što treba znati

- Sjene mogu izgledati nazubljeno na vrlo velikom modelu, jer jedna mapa sjena pokriva cijeli model.
- Sjene se ne crtaju u {{ui:Žičani model}}.
- Položaj sunca slijedi NOAA-in solarni izračun i točan je do djelića stupnja, što je dovoljno za studije volumena. Atmosferska refrakcija se zanemaruje, pa mogu biti blago netočni vrlo niski kutovi sunca pri izlasku i zalasku.

## Prikaz za prezentaciju

{{ui:Pogledi}} › {{ui:Prikaz za prezentaciju}} (ili {{key:Shift+P}}) prikazuje samo model: osi, pomoćne linije i pomoćne točke, obrise ravnina presjeka (sam presjek ostaje), oznake svjetiljki, okvir otvorene grupe, oznake i savjete za hvatanje te istaknuto odabiranje nestaju. Upotrijebite to za jasan pregled modela ili prije snimke zaslona. Alati i dalje rade i dalje hvataju; samo ne vidite oznake. Ponovno pritisnite {{key:Shift+P}} da se vrate. Kote ostaju, jer su dio crteža. Dok uređujete unutar grupe, ostatak modela više ne blijedi: prikazuje se kakav jest, uključujući teksture.
