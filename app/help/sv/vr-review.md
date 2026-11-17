---
title: Granska modellen i ett VR-headset
summary: Gå runt i modellen i full storlek i ett VR-headset: hoppa, vrid dig, mät, skär upp den, placera ärenden med en bild, se den som en bordsmodell och träffa de andra i en livesession.
keywords: vr, virtuell verklighet, headset, webxr, xr, uppslukande, quest, oculus, vive, index, pico, gå igenom, genomgång, teleportera, designgranskning, granskning, mät, sektion, skär, ärende, ärenden, bcf, bordsskiva, skalmodell, närvaro, avatarer, live, tillsammans
from: fa2f591a
---

{{ui:Review in VR}} sätter dig inne i modellen med ett VR-headset, i full storlek. Du står där vyns kamera är, på golvet under den, och tittar åt samma håll. Ingenting laddas upp: headsetet visar det webbläsaren ritar på den här datorn (eller i headsetets egen webbläsare).

## Vad du behöver

- Ett headset som webbläsaren kan styra (WebXR): ett fristående headsets egna webbläsare, eller Chrome eller Edge på en PC med ett headset anslutet.
- ModelCraft öppet på en säker sida (https), som den är på den här webbplatsen.

När det inte finns något headset är {{ui:Review in VR}} nedtonad och säger varför.

## Starta

1. Ställ in vyn där du vill börja: i ett rum, eller utanför och titta på byggnaden.
2. Klicka på {{ui:Views}} i gruppen {{ui:Camera}}, och sedan {{ui:Review in VR}}.
3. Ta på dig headsetet.

Menyn sitter på baksidan av din vänstra hand. Peka på den med den högra kontrollern och tryck på avtryckaren för att välja en knapp. (Med bara en hand flyter menyn framför där du startade.)

## Så ser det ut

Headsetet visar modellen i [livevyns](topic:live-view) utseende: de utseenden och material du gav ytorna, himlen och solen från modellens plats och datum med dess skugga, lampor, utspridda växter och stenar, och ljus som studsar från väggar och golv (beräknat på den här datorn medan du tittar runt, och följer dig när du rör dig). Ljusstyrka och vytransformationen (ACES eller AgX) är de som [Rendera en bild](topic:render) använder. Hur mycket som ritas beror på vad headsetets webbläsare klarar, som på skrivbordet; omgivningsskuggning (ambient occlusion), reflektioner och bloom finns kvar på skrivbordet.

## Gå runt

- **Hoppa:** i {{ui:Move}} pekar du på ett golv och trycker på avtryckaren; du landar där. Eller tryck spaken framåt för att sikta, och släpp för att hoppa. Du kan bara landa på golv och mark (ytor som vetter uppåt), aldrig på en vägg.
- **Vrid dig:** tryck spaken åt vänster eller höger: du vrider dig 30° varje gång.
- **Gå:** i ditt spelområde går du helt enkelt.

## Mät

Välj {{ui:Measure}} och tryck på avtryckaren på två punkter. Avståndet visas mellan dem, i modellens enheter. En punkt nära ett hörn fäster vid hörnet.

## Skär upp den

Välj {{ui:Section}} och tryck på avtryckaren på en yta:

- på en vägg (eller något som inte är ett golv): allt mellan dig och ytan skärs bort, så att du kan se in. Detta fungerar bäst utifrån, eller tvärs över ett rum;
- på ett golv, uppifrån: ett planskär 1.2 m över det golvet, så att väggarna visar sin nedre del.

{{ui:Clear}} tar bort snittet och mätningarna. Om ett sektionsplan skär modellen i vyn när du börjar, startar headsetet med det.

## Placera ett ärende

Välj {{ui:Issue}} och tryck på avtryckaren där problemet är. En numrerad nål markerar det, och ModelCraft behåller ärendet med en bild av vad du såg och var du stod. När du lämnar VR finns ärendena i listan {{ui:Issues}} till höger:

- ögonknappen visar ärendet från där det placerades;
- {{ui:Save as BCF}} laddar ner alla som en BCF-fil, som BIM-granskningsprogram öppnar (kamera och bild med);
- de sparas även i `.modelcraft`-filen.

Lägg till en kommentar till ett ärende efter att du lämnat VR, i ett BCF-program: att skriva i headsetet finns inte ännu.

## Se den som en bordsmodell

{{ui:Table top}} krymper modellen så att den får plats på ett bord framför dig; gå runt den, eller vrid den med spaken. {{ui:Full size}} sätter tillbaka dig där du var.

## Med andra, live

I en [livesession](topic:work-live) ser alla i VR de andra som ett huvud och två händer i sin egen färg, med namn, och en prick där var och en pekar. Ändringar som någon gör når ditt headset inom kort. Personer vid skrivbordet visas i headsetet ännu inte.

## Lämna

Välj {{ui:Leave VR}} (eller ta av headsetet och avsluta där). Vyn på skärmen flyttas dit ditt huvud var.

:::note
Testad bara med en headsetemulator, ännu inte med ett riktigt headset. En stor modell kan göra att headsetet hackar: dölj det du inte behöver först ([dölj och isolera](topic:hide-isolate)).
:::
