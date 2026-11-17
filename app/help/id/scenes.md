---
title: Simpan tampilan sebagai scene
summary: Simpan kamera dan gaya sebagai scene, perbarui dan ganti namanya, lalu lewati atau putar scene untuk mempresentasikan desain.
keywords: scene, tampilan, tampilan tersimpan, kamera, presentasi, animasi, putar, slideshow, page up, page down, tab, walkthrough
from: 38680d6e
---

Sebuah **scene** mengingat posisi kamera, gaya, dan apa yang disembunyikan: dari mana Anda melihat, perspektif atau paralel, gaya muka, tepi, pengaturan matahari, grup yang disembunyikan, tag yang dimatikan, dan potongan. Scene disimpan di file `.modelcraft`.

## Tambah scene

1. Atur tampilan: orbit, zoom, pilih gaya, atur matahari.
2. Di panel {{ui:Scene}} di sebelah kanan, klik {{ui:Tambah scene}}.

   Scene muncul dalam daftar, dinamai "Scene 1", "Scene 2", dan seterusnya, dan sebagai tab di atas tampilan 3D. Bilah status menyatakan "Scene 1 disimpan: kamera, gaya, dan yang disembunyikan ini."

## Buka scene

- Klik tabnya di atas tampilan 3D, atau namanya di daftar {{ui:Scene}}.
- Atau tekan {{key:PageDown}} untuk scene berikutnya dan {{key:PageUp}} untuk scene sebelumnya. {{ui:Berikutnya}} dan {{ui:Sebelumnya}} di bawah daftar melakukan hal yang sama.

Kamera meluncur ke scene dalam sedikit lebih dari setengah detik. Jika komputer Anda diatur untuk mengurangi gerakan, kamera langsung melompat ke sana.

## Ubah, ganti nama, atau hapus scene

Setiap scene dalam daftar memiliki tiga tombol kecil setelah namanya:

- **Perbarui** (panah melingkar): menyimpan kamera, gaya, dan yang disembunyikan saat ini ke scene itu. "Scene 2 diperbarui."
- **Ganti nama** (pensil): membuka dialog "Ganti nama scene". Ketik nama baru dan klik {{ui:Simpan}}.
- **Hapus** (tempat sampah): menghapus scene. "Scene 2 dihapus. Ctrl+Z mengembalikannya."

Menambah, memperbarui, mengganti nama, dan menghapus scene adalah langkah urung, seperti perubahan pada model.

## Kunci kamera scene

Saat Anda merender tampilan yang sama berulang kali selagi desain berubah, kunci kamera scene itu agar tampilan tidak bergeser secara tidak sengaja.

1. Di daftar {{ui:Scene}}, klik tombol **kunci** (gembok terbuka) setelah nama scene. Gembok tertutup, dan tab scene di atas tampilan 3D menampilkan gembok kecil. Bilah status menyatakan "Scene 2: kamera terkunci."
2. Buka scene kapan pun Anda ingin merender: kamera kembali ke tampilan yang tersimpan persis, sehingga gambar yang dibuat darinya sejajar dengan gambar sebelumnya.

Selagi kamera terkunci, **Perbarui** tetap menyimpan gaya dan yang disembunyikan ke scene, tetapi kamera tetap di posisinya, meskipun Anda sudah mengorbit menjauh. Klik gembok lagi untuk membukanya; Perbarui kemudian menyimpan tampilan saat ini lagi. Mengunci dan membuka kunci adalah langkah urung, dan kuncinya disimpan di file `.modelcraft`.

## Presentasi

1. Tambahkan dua scene atau lebih.
2. Klik {{ui:Putar}} di bawah daftar. ModelCraft berpindah ke scene berikutnya setiap beberapa detik dan kembali ke yang pertama setelah yang terakhir.
3. Klik {{ui:Berhenti}} (tombol yang sama) atau tekan {{key:Esc}} untuk berhenti.

Untuk studi matahari, tambahkan satu scene per jam dengan hanya {{ui:Waktu}} yang diubah, lalu putar. Lihat [Gaya dan bayangan matahari](topic:styles-shadows#a-sun-study).

Untuk mempresentasikan tanpa bilah, tekan {{key:Ctrl+Shift+F}} dua kali: layar penuh, lalu layar penuh dengan bilah tersembunyi. Tab scene tetap di atas tampilan.

## Apa yang ditampilkan scene

Scene mengingat apa yang disembunyikan saat Anda menyimpannya: grup dan komponen yang [Anda sembunyikan](topic:hide-isolate), [tag](topic:tags) yang Anda matikan, dan [bidang potong](topic:sections) mana yang memotong. Saat berpindah ke scene, semuanya disembunyikan dan ditampilkan lagi. Jadi satu scene bisa menampilkan seluruh rumah, scene berikutnya rumah dengan tag atap dimatikan, dan scene berikutnya potongan yang melintasinya.

Muka dan tepi lepas yang tersembunyi bukan bagian dari scene. Berpindah ke scene tidak membuat langkah urung. Scene yang disimpan oleh build ModelCraft sebelumnya membiarkan yang disembunyikan seperti apa adanya; klik Perbarui untuk menyimpannya ke dalamnya.

## Ekspor animasi

{{ui:Ekspor animasi}}, di bawah daftar, memutar scene dari yang pertama ke yang terakhir, menggerakkan kamera dengan halus di antaranya, dan menyimpan film sebagai video **WebM** (dua detik gerakan dan jeda singkat per scene). Ia merekam tampilan seperti yang Anda lihat, pada ukurannya di layar, dalam [tampilan presentasi](topic:styles-shadows#presentation-view) (tanpa sumbu, panduan, atau pilihan). Tekan {{key:Esc}} atau klik tombol lagi untuk berhenti tanpa menyimpan. WebM dapat diputar di peramban dan VLC, dan editor video dapat mengonversinya.

Untuk walkthrough yang dirender (langit, matahari, bayangan, material) pada ukuran yang Anda pilih, gunakan {{ui:Render video…}} sebagai gantinya: tanpa kunci animasi, ia mengambil scene secara berurutan sebagai jalur kamera. Lihat [Animasikan kamera dan objek](topic:animation).

## Hal yang perlu diketahui

- Mengubah gaya atau memindahkan kamera setelah berpindah ke scene tidak mengubah scene sampai Anda klik Perbarui.
- Scene tidak diekspor ke Collada, OBJ, glTF, STL, atau IFC.
