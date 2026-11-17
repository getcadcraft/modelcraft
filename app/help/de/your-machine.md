---
title: Womit Ihr Rechner rendert
summary: Einstellungen › Rendern zeigt die Grafik, Prozessorkerne und den Arbeitsspeicher, die dieser Browser der App zur Verfügung stellt, sowie die Stufe, ab der das Rendern beginnt.
keywords: Ihr Rechner, Grafikkarte, GPU, WebGPU, WebGL, Prozessor, CPU, Kerne, Threads, Arbeitsspeicher, RAM, gemeinsamer Speicher, Isolation, Stufe, Level, Geschwindigkeit, langsam, Rendergeschwindigkeit, Laptop
from: 8a0c21c9
---

Öffnen Sie {{ui:Einstellungen}} ({{key:Mod+,}}), bleiben Sie auf der eigenen Registerkarte dieser App und scrollen Sie zu {{ui:Rendern}}. {{ui:Ihr Rechner}} listet auf, was dieser Browser der App für das Rendern erlaubt. Nichts davon verlässt Ihren Computer.

| Zeile | Bedeutung |
|---|---|
| {{ui:Grafik}} | Die Grafikkarte, die der Browser meldet. „WebGPU“ bedeutet, dass sie die gesamte Renderarbeit erledigen kann; „WebGL 2 only“ bedeutet, dass die Live-Ansicht und {{ui:Bild rendern…}} sie nutzen (hohe Qualität mit dem WebGL-Path-Tracer), während das Rendern in der Ansicht und die Renderwarteschlange, die WebGPU benötigen, nicht angeboten werden; ein Software-Ersatz bedeutet, dass alles über den Prozessor läuft |
| {{ui:Prozessor}} | Wie viele Prozessorkerne der Browser meldet |
| {{ui:Arbeitsspeicher}} | Ungefähr wie viel Arbeitsspeicher der Computer hat, sofern der Browser das angibt. Manche Browser tun das nicht |
| {{ui:Gemeinsamer Speicher}} | Ob die Seite Speicher zwischen ihren Workern teilen darf. Ein: Jeder Kern kann an einer Kopie einer Szene arbeiten. Aus: Jeder braucht eine eigene Kopie, sodass eine große Szene auf weniger Kernen gleichzeitig Platz findet |
| {{ui:Schneller Prozessorcode}} | Ob der Browser den schnelleren WebAssembly-Code ausführt. Ohne ihn wird ein langsamerer Ersatz verwendet |
| {{ui:Stufe}} | {{ui:Grafikkarte, hoch}}, {{ui:Grafikkarte, einfach}} oder {{ui:Nur Prozessor}}, mit dem Grund darunter |

## Die Stufe

Die Stufe legt fest, wo die [Live-Ansicht](topic:live-view) beginnt ({{ui:Für diesen Computer}}), wie viele verstreute Objekte sie zeichnet und wie viele Flächen eine [Unterteilungsfläche](topic:modifiers#subdivision-surface) in der Ansicht zeigen darf, damit ein Laptop mit integriertem Grafikchip oder ganz ohne Grafikkarte reaktionsschnell bleibt. Ein integrierter Grafikchip, ein Smartphone-Grafikchip oder 4 GB Arbeitsspeicher oder weniger erhalten nie {{ui:Grafikkarte, hoch}}.

:::note
Browser unterscheiden sich. Derselbe Computer kann in einem Browser WebGPU und in einem anderen „WebGL 2 only“ anzeigen. Unter Linux haben die meisten Browser noch kein WebGPU.
:::
