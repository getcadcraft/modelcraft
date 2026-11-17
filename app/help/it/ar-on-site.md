---
title: Vedi il modello in cantiere con un telefono Android (AR)
summary: Alza un telefono Android con Chrome e vedi il modello a grandezza reale sopra la camera, allineato all'edificio tramite due punti in cui ci si ferma, con una lente a raggi X e un controllo rapido alla visita successiva. Serve per guardare, non per tracciare.
keywords: ar, realtà aumentata, telefono, android, chrome, webxr, in cantiere, cantiere, sito, camera, grandezza reale, raggi X, allineare, allinea, ricontrollo, arcore
from: 0f43b50b
---

{{ui:Vista sul cantiere (AR, telefono)}} nel menu {{ui:Viste}} mostra il modello alla sua grandezza reale sopra la camera del telefono. Funziona su un **telefono Android con Chrome**, su una pagina sicura (https), dove il telefono supporta la realtà aumentata. Su un iPhone o un iPad, un computer, o un'app Android che mostra solo una pagina web, la voce indica il motivo per cui non può avviarsi; usare lì la vista 3D, oppure aprire questa pagina in Chrome sul telefono.

**Un telefono serve per guardare.** Non misurare, tracciare o tagliare nulla da ciò che mostra lo schermo: il telefono deriva mentre si cammina, e l'errore di puntamento cresce con la distanza dai due punti su cui si è allineato (qualche centimetro vicino a loro, di più lontano). Nulla di qui ha la precisione di un rilievo.

## Allineare il modello

1. Aprire il modello sul telefono e scegliere {{ui:Vista sul cantiere (AR, telefono)}}. Consentire l'accesso alla camera.
2. Il pannello in basso indica il primo punto (un angolo a terra del modello). Posizionarsi lì in cantiere, puntare l'anello verde a terra e toccare {{ui:Posiziona punto}}.
3. Spostarsi al secondo punto, ad almeno mezzo metro di distanza (più sono distanti, migliore è l'allineamento), e ripetere.
4. Il modello compare a grandezza reale, ruotato e spostato per adattarsi ai due punti. Il pannello indica quanto bene concordano i due punti.

{{ui:Ricomincia}} cancella i punti. L'allineamento è conservato nel file del modello, quindi la volta successiva che si apre il modello in cantiere parte già allineato.

## Lente a raggi X

{{ui:Lente a raggi X}} mostra l'intero modello dentro un box davanti al telefono (circa un metro e mezzo di larghezza e tre metri di profondità) e solo un fantasma tenue altrove, così si può guardare ciò che c'è dietro un muro senza perdere il muro reale.

## La visita successiva

Fermarsi nel primo punto e toccare {{ui:Ricontrolla}}, poi {{ui:Posiziona punto}}. Se si è a meno di 5 centimetri di scarto, l'allineamento viene conservato. Fino a mezzo metro di scarto, il modello si sposta della differenza. Oltre, il pannello chiede di puntare di nuovo i due punti.

## Uscire

{{ui:Esci dall'AR}} termina la sessione. L'immagine della camera resta nel browser: nulla viene caricato.
