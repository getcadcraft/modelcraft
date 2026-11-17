---
title: Apa yang digunakan komputer Anda untuk render
summary: Pengaturan › Render menampilkan grafis, inti prosesor, dan memori yang boleh digunakan aplikasi melalui peramban ini, serta tingkat yang menentukan titik awal render.
keywords: komputer Anda, kartu grafis, gpu, webgpu, webgl, prosesor, cpu, inti, thread, memori, ram, memori bersama, isolasi, tingkat, level, kecepatan, lambat, kecepatan render, laptop
from: 8a0c21c9
---

Buka {{ui:Pengaturan}} ({{key:Mod+,}}), tetap di tab milik aplikasi ini, lalu gulir ke {{ui:Render}}. {{ui:Komputer Anda}} mencantumkan apa yang boleh digunakan peramban ini untuk render. Tidak ada yang di dalamnya meninggalkan komputer Anda.

| Baris | Artinya |
|---|---|
| {{ui:Grafis}} | Kartu grafis yang dilaporkan peramban. "WebGPU" berarti dapat melakukan seluruh pekerjaan render; "WebGL 2 only" berarti tampilan langsung dan {{ui:Render gambar…}} menggunakannya (kualitas tinggi dengan path tracer WebGL), sedangkan render di tampilan dan antrean render, yang memerlukan WebGPU, tidak tersedia; penggantian perangkat lunak berarti semuanya dijalankan oleh prosesor |
| {{ui:Prosesor}} | Jumlah inti prosesor yang dilaporkan peramban |
| {{ui:Memori}} | Perkiraan jumlah memori komputer, jika dilaporkan peramban. Beberapa peramban tidak melaporkannya |
| {{ui:Memori bersama}} | Apakah halaman boleh berbagi memori antar worker-nya. Jika aktif, setiap inti dapat bekerja pada satu salinan scene; jika mati, setiap inti memerlukan salinannya sendiri, sehingga scene besar muat di lebih sedikit inti sekaligus |
| {{ui:Kode prosesor cepat}} | Apakah peramban menjalankan kode WebAssembly yang lebih cepat. Tanpa itu, digunakan cadangan yang lebih lambat |
| {{ui:Tingkat}} | {{ui:Kartu grafis, tinggi}}, {{ui:Kartu grafis, dasar}} atau {{ui:Hanya prosesor}}, dengan alasannya di bawahnya |

## Tingkat

Tingkat menentukan tempat [tampilan langsung](topic:live-view) dimulai ({{ui:Untuk komputer ini}}), berapa banyak item tersebar yang digambar, dan berapa banyak muka yang boleh ditampilkan [permukaan subdivisi](topic:modifiers#subdivision-surface) di tampilan, sehingga laptop dengan chip grafis bawaan atau tanpa kartu grafis tetap responsif. Chip grafis bawaan atau ponsel, atau memori 4 GB atau kurang, tidak pernah mendapat {{ui:Kartu grafis, tinggi}}.

:::note
Peramban berbeda-beda. Komputer yang sama dapat menampilkan WebGPU di satu peramban dan "WebGL 2 only" di peramban lain. Di Linux, sebagian besar peramban belum memiliki WebGPU.
:::
