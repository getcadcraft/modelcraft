---
title: Komponentë që shtriren
summary: Bëj një kopje të një komponenti më të gjerë, më të thellë ose më të lartë, ndërsa pjesët e tij mbajnë madhësitë e tyre: një tavolinë më e gjatë me të njëjtat këmbë, një raft librash më i lartë me rafte të shpërndara, një parmak me shtylla që përsëriten.
keywords: komponent dinamik, shtrirje, ndrysho madhësinë e komponentit, parametrik, madhësi të emërtuara, përsëritje, grup, këmbë, rafte, parmak, rregulla, variabla
from: b4c40f43
---

Shkallëzimi i një komponenti e bën më të madh gjithçka brenda tij, përfshi këmbët dhe shinat. **Shtrije këtë kopje** ndryshon gjerësinë, thellësinë ose lartësinë e një komponenti, ndërsa çdo pjesë ndjek një rregull: sipërfaqja e tavolinës rritet, këmbët mbajnë trashësinë e tyre dhe qëndrojnë në skaje.

Funksionon te komponentët e përbërë nga pjesë, domethënë grupe ose komponentë brenda komponentit, siç janë të gjitha gjërat e [bibliotekës fillestare](topic:starter).

## Shtrij një kopje

1. Përzgjidh komponentin.
2. Te {{ui:Informacioni i entitetit}}, kliko {{ui:Shtrije këtë kopje…}}.
3. Shkruaj {{ui:Gjerësia (e kuqe)}}, {{ui:Thellësia (e gjelbër)}} dhe {{ui:Lartësia (blu)}} të reja, dhe kliko {{ui:Shtrirje}}.

Vetëm kjo kopje ndryshon: bëhet një komponent i vetin, që mban mend origjinalin nga erdhi. Shtrije sërish kur të duash, dhe ajo llogaritet nga e para, nga origjinali, kështu që asgjë nuk devijon. Kopjet e tjera të origjinalit mbeten ashtu si ishin.

## Rregullat

Hap komponentin (kliko dy herë mbi të) dhe përzgjidh një nga pjesët e tij. {{ui:Informacioni i entitetit}} shfaq {{ui:Kur komponenti shtrihet}}, me një rregull përgjatë të kuqes, të gjelbrës dhe blusë:

| Rregulli | Çfarë bën pjesa | Për shembull |
|---|---|---|
| {{ui:Shtrirje}} | Rritet me komponentin; distancat e saj në të dy anët mbeten | Sipërfaqja e tavolinës |
| {{ui:Qëndro në fillim}} / {{ui:Qëndro në fund}} | Mban madhësinë dhe distancën e saj nga ajo anë | Këmbët |
| {{ui:Zhvendos në proporcion}} | Mban madhësinë; mesi i saj lëviz në proporcion | Raftet, një dorezë dere |
| {{ui:Shkallëzo në proporcion}} | Vendi dhe madhësia e saj janë të dyja në proporcion | Shkallët e një shkalle |
| {{ui:Përsërit}} | Kopje të saj, çdo {{ui:Çdo}} herë, nga ku fillon deri në anën tjetër | Shtyllat e një parmaku |

{{ui:Automatike}} (fillimisht) e llogarit vetë dhe tregon cilin: {{ui:Shtrirje}} kur pjesa shtrihet në gjithë komponentin, {{ui:Zhvendos në proporcion}} kur ndodhet diku në mes, përndryshe mbetet në anën ku është më afër.

## Gjëra që duhet ditur

- Format e vetë pjesëve ndahen mes kopjeve, kështu që një kopje e shtrirë është e lehtë. Redaktimi i një pjese e ndryshon atë në çdo kopje.
- Një kopje e shtrirë nuk ndjek ndryshimet e mëvonshme në rregullat ose në vendosjen e origjinalit: shtrije sërish për t'i marrë ato.
- Format e lira në komponent (jo në një pjesë) mbajnë madhësinë e tyre; bëji pjesë që t'i bësh ta ndjekin.
- Rregullat dhe nga cili origjinal u shtri çdo kopje ruhen në skedarin ModelCraft.
