---
title: 在其他程式中開啟場景
summary: 將場景儲存為可供任何程式讀取的 USD 或 glTF 檔案，或從 Studio 在此電腦上的程式中開啟場景。
keywords: 在…中開啟, usd, gltf, glb, 匯出, 算圖程式, 建築視覺化, studio, usdview, 傳送, 交接, 封裝, unreal 資料夾
from: 812329d5
---

在 {{ui:Render a picture…}} 的引擎清單中選擇一個 **在…中開啟…** 項目，即可將場景帶到其他程式。不會有任何內容回傳到模型。

## 適用於任何程式的檔案

- **USD 檔** 會將場景儲存為 `.usdc`（若模型包含圖片則為 `.usdz`）：與[另存為 USD](topic:usd) 相同的檔案，包含材質、燈光與攝影機。它會保留實例化與精確的材質數值。大多數算圖器、遊戲引擎與檢視器都能讀取 USD。
- **glTF 檔（.glb）** 會儲存較輕量的 glTF 2.0 檔，包含材質、貼圖與燈光；請參閱[為其他程式匯出模型](topic:export-model)，了解 ModelCraft 所寫入的格式。
- **Unreal 專案資料夾（.zip）** 會儲存[將場景傳送至遊戲引擎](topic:render-unreal)所寫入的資料夾，適用於任何電腦上的專案。

以上三者均可在瀏覽器與 Studio 中使用。

## 在 Studio 中：在程式中開啟

Studio 會列出此電腦上可開啟場景的程式：若 usdview 在你的搜尋路徑中則列出它，以及此檔案類型的電腦預設程式。選擇一個程式，若它同時支援 USD 與 glTF，請選擇其一，然後點擊 {{ui:Render}}。Studio 會將封裝寫入「文件」下的新資料夾（`CadCraft hand-off`；不會覆寫任何內容，每次傳送都會有自己的資料夾），並以該資料夾啟動程式，然後告訴你檔案的位置。

| 程式 | 最適合讀取 |
|---|---|
| usdview | USD |
| 電腦的預設程式 | 電腦為該檔案類型提供的任何程式 |

Studio 只會啟動此固定清單中的程式；它不會執行網頁要求的任何程式，且絕不會啟動採用 GNU GPL 授權的程式（請參閱[以其他程式繪製圖片](topic:render-other-program#programs-cadcraft-never-runs)）。任何能讀取 USD 或 glTF 的程式，都可以開啟上方 **適用於任何程式的檔案** 中的檔案。

:::note
Twinmotion、Enscape 及其他視覺化程式不在清單中：CadCraft 尚未與它們測試，對它們也不作任何保證。此處的 glTF 或 USD 檔案是進入的途徑。
:::
