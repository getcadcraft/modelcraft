---
title: Dengan apa mesin anda merender
summary: Tetapan › Render menunjukkan grafik, teras pemproses dan memori yang dibenarkan pelayar ini untuk digunakan oleh app, serta tahap yang menentukan di mana render bermula.
keywords: mesin anda, kad grafik, gpu, webgpu, webgl, pemproses, cpu, teras, benang, memori, ram, memori kongsi, pengasingan, tahap, kelajuan, perlahan, kelajuan render, komputer riba
from: 8a0c21c9
---

Buka {{ui:Tetapan}} ({{key:Mod+,}}), kekal pada tab app ini sendiri dan skrol ke {{ui:Render}}. {{ui:Mesin anda}} menyenaraikan apa yang dibenarkan oleh pelayar ini untuk digunakan bagi render. Tiada apa-apa di dalamnya meninggalkan komputer anda.

| Baris | Maksudnya |
|---|---|
| {{ui:Grafik}} | Kad grafik yang dilaporkan pelayar. "WebGPU" bermaksud ia boleh melakukan semua kerja render; "WebGL 2 only" bermaksud paparan langsung dan {{ui:Render imej…}} menggunakannya (kualiti tinggi dengan penjejak laluan WebGL), manakala render dalam paparan dan barisan render, yang memerlukan WebGPU, tidak ditawarkan; pengganti perisian bermaksud semuanya dijalankan pada pemproses |
| {{ui:Pemproses}} | Berapa banyak teras pemproses yang dilaporkan pelayar |
| {{ui:Memori}} | Anggaran jumlah memori komputer, apabila pelayar melaporkannya. Sesetengah pelayar tidak melaporkannya |
| {{ui:Memori kongsi}} | Sama ada halaman dibenarkan berkongsi memori antara pekerjanya. Jika hidup, setiap teras boleh bekerja pada satu salinan scene; jika mati, setiap teras memerlukan salinan sendiri, jadi scene besar muat pada lebih sedikit teras serentak |
| {{ui:Kod pemproses pantas}} | Sama ada pelayar menjalankan kod WebAssembly yang lebih pantas. Tanpanya, cara ganti yang lebih perlahan digunakan |
| {{ui:Tahap}} | {{ui:Kad grafik, tinggi}}, {{ui:Kad grafik, asas}} atau {{ui:Pemproses sahaja}}, dengan sebab di bawahnya |

## Tahap

Tahap menentukan di mana [paparan langsung](topic:live-view) bermula ({{ui:Untuk komputer ini}}), berapa banyak objek bertabur yang dilukisnya, dan berapa banyak muka [permukaan subdivisi](topic:modifiers#subdivision-surface) yang boleh dipaparkan dalam paparan, supaya komputer riba dengan cip grafik terbina dalam atau tanpa kad grafik langsung kekal responsif. Cip grafik terbina dalam atau telefon, atau memori 4 GB atau kurang, tidak sekali-kali mendapat {{ui:Kad grafik, tinggi}}.

:::note
Pelayar berbeza-beza. Komputer yang sama boleh menunjukkan WebGPU dalam satu pelayar dan "WebGL 2 only" dalam pelayar lain. Pada Linux, kebanyakan pelayar belum mempunyai WebGPU.
:::
