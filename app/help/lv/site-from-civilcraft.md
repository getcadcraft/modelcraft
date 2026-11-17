---
title: Teritorijas importēšana no CivilCraft
summary: Atveriet adreses un teritorijas failu, ko veido CivilCraft, un pievienojiet apkārtējās ēkas un zemesgabalu kā masas un teritorijas līniju — tikai tās, ko atzīmējat.
keywords: teritorija, civilcraft, adrese, zemesgabals, kaimiņu ēkas, masas, konteksts, ccsite, atvērtie dati, openstreetmap
from: f28e4a3b
---

CivilCraft var meklēt adresi un saglabāt to, ko atvērto datu avoti zina par apkārtni: kaimiņu ēkas, zemesgabalu, kā arī applūdes, zonējuma un augsnes kontūras. ModelCraft šo failu izmanto kā ieteikumus. Nekas netiek pievienots, kamēr to neapstiprināt.

## Faila ievietošana

1. CivilCraft nosūtiet teritoriju uz ModelCraft vai saglabājiet failu (tā nosaukums beidzas ar `.ccsite.json`).
2. ModelCraft atveriet vai nometiet failu. Atveras saraksts ar atzīmes lodziņu katrai ēkai un zemesgabalam.
3. Ievadiet augstumu ēkām, kurām avots augstumu nav devis. Blakus katrai rindai ir norāde, no kurienes nācis tās augstums: stāvu skaits, katrs pa 3 m, vai augstums, ko ievadījāt.
4. Nospiediet {{ui:Pievienot atzīmētos}}.

Atzīmētās ēkas kļūst par izvilktām masām vienā komponentā, un zemesgabals kļūst par līniju ap teritoriju. Viss ir viens atsaukšanas solis. Adreses punkts atrodas sākumpunktā, metros uz austrumiem un ziemeļiem no tā.

Applūdes, zonējuma un augsnes kontūras ir uzskaitītas tikai informācijai; tās netiek zīmētas.

Dati nāk no atvērtiem avotiem, un to autorība ir norādīta saraksta apakšdaļā. Augstumi, kas nav norādīti, ir pieņēmumi, tāpēc pirms paļaušanās uz tiem pārbaudiet tos.
