---
title: Invia la scena a un motore di gioco
summary: Studio può scrivere la scena in un progetto Unreal Engine e aggiornarla a ogni invio; le modifiche personali restano in un layer che CadCraft non scrive mai. Il plugin che la apre non è ancora stato rilasciato.
keywords: unreal, unreal engine, motore di gioco, collegamento, invio, usd stage, progetto, live, cine camera, coda di render film
from: 9a765cc2
---

In CadCraft Studio l'elenco Motore può contenere un **collegamento** a un progetto Unreal Engine. In un solo verso: da CadCraft a Unreal.

## Invia la scena

1. Scegliere la voce Unreal nell'elenco Motore. La prima volta, Studio chiede di indicare la cartella del progetto (quella con il file `.uproject`); la memorizza.
2. Fare clic su {{ui:Invia}}. Studio scrive `CadCraft/<nome file>/` nel progetto: la scena come file USD, il file delle impostazioni, i profili luce e due piccoli file di layer.
3. Modificare il modello, salvare e inviare di nuovo. Vengono sostituiti solo la scena e il file delle impostazioni.

## Le modifiche personali sono al sicuro

Lo stage che Unreal apre è un piccolo layer radice creato una sola volta, con due layer sotto di esso: quello **personale** in cima (`<nome>.user.usda`, vuoto all'inizio, mai riscritto da CadCraft) e la scena di CadCraft sotto. Le modifiche salvate nel proprio layer restano quando la scena viene inviata di nuovo. Luci e altri attori che si posizionano nel livello di Unreal sono fuori dallo stage e non vengono toccati.

## Senza Studio

Nel browser, o su un computer dove Studio non trova Unreal, scegliere **Cartella di progetto Unreal (.zip)** nell'elenco Motore e fare clic su {{ui:Render}}. Salva la stessa cartella come zip: decomprimerla nella cartella `CadCraft` del progetto. Lasciare attivo **Includi i file dello stage** la prima volta; disattivarlo per i salvataggi successivi, così lo zip contiene solo la scena e il file delle impostazioni e il layer personale non viene mai sostituito.

:::note
Il plugin Unreal che apre lo stage, applica sole, lampade, camera ed esposizione, segue ogni invio e renderizza una camera **non è ancora stato rilasciato** e non è stato ancora eseguito in Unreal. Finché non lo sarà, Invia inserisce i file nel progetto e gli strumenti USD di Unreal possono aprirli. Il primo sistema è Windows; seguirà macOS.
:::
