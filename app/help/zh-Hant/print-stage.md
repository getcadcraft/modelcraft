---
title: 將物件放上列印床並傳送至印表機
summary: 將程式庫項目或你自己的模型加入印表機列印床，排列它們，檢視切片後的分層，並透過 USB 或網路傳送列印工作，或僅儲存 G-code，無需先匯出 STL。
keywords: 列印平台, 3D 列印, 印表機, 列印床, 傳送至 3D 印表機, 切片軟體, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, 程式庫, 排列, 全部符合, 分層預覽, 填充, 支撐, 絲材, pla, petg, 外掛, 3D 列印外掛
from: abcf5d7e
---

{{ui:Print stage}} 會把物件排列在印表機的列印床上、切片，並將其傳送至印表機。你不需要先匯出檔案。此功能屬於 3D 列印外掛，預設為開啟。

:::note
這項功能尚未在實體印表機上實際列印過。切片軟體是新的：第一次列印時請觀察前幾層，並在傳送前使用分層預覽。
:::

## 你將做的事

將模型放上列印床，確認尺寸符合，檢視切片後的分層，然後傳送至印表機或儲存 G-code。

## 步驟

1. 點選工具列中的 {{ui:Print stage}}。卡片會在視圖上方開啟，並以虛線外框顯示你的列印床。
2. 在 **從程式庫新增** 下，於搜尋框輸入名稱，按下 {{ui:Search}}，再於結果上按 {{ui:Add}}。項目會以原尺寸放上列印床，或縮小以符合尺寸。你已繪製或匯入、且在視圖中可見的內容也會一併放在列印床上。
3. 在 **列印床上** 下，檢查每個項目的尺寸。標示為 **不在列印床上** 的項目需要移動。請使用一般工具在視圖中移動、旋轉與縮放。
4. 按下 {{ui:Arrange on the bed}} 將項目分散排列，或按下 {{ui:Fit all on the bed}} 將它們縮小至符合列印床。
5. 在 **印表機** 下，選擇 **列印床** 尺寸或其中一個印表機設定檔。
6. 在 **列印設定** 下，選擇 **材料**、**品質** 與 **填充 %**；若形狀需要，勾選 **懸空處新增支撐**。
7. 按下 {{ui:Preview layers}}，移動 **層** 滑桿以檢視切片後的各層。若之後變更了場景或設定，請再次按下 {{ui:Preview layers}}。
8. 在 **連線** 下，選擇 {{ui:USB cable}}、{{ui:Klipper (Moonraker)}}、{{ui:OctoPrint}} 或 {{ui:PrusaLink}}。使用 USB 時按下 {{ui:Connect}}。若是網路印表機，請輸入其 **位址**（若要求，也輸入 **API 金鑰**），然後按下 {{ui:Test the connection}}。
9. 按下 {{ui:Send to 3D printer}}。卡片會詢問列印床是否已清空、正確的材料是否已裝入，並顯示時間、材料與溫度。確認後即傳送。

你會收到印表機正在啟動的訊息。{{ui:Stop the print}} 會關閉加熱器、風扇與馬達。若你只想要檔案，請按下 {{ui:Save the G-code instead}}。

## 注意事項

- USB 需要電腦上的 Chrome 或 Edge，且在列印結束前必須保持頁面開啟。關閉頁面會停止傳輸。
- 網路印表機必須允許此網站存取（在 Moonraker 中將其加入 `cors_domains`；在 OctoPrint 中開啟 CORS 並複製 API 金鑰）。瀏覽器可能會詢問是否允許存取你網路上的裝置。
- 未經你點擊，不會進行任何連線或傳送。
- 切片軟體清單位於 **切片軟體** 下。{{ui:CadCraft basic (included, fastest)}} 為內建。Kiri:Moto、PrusaSlicer、OrcaSlicer 與 Bambu Lab P2S 各自為獨立外掛，可從卡片或在 {{ui:Settings}} › {{ui:Add-ons}} 中開啟。PrusaSlicer 與 OrcaSlicer 會使用你自己的副本，並在電腦上的 CadCraft Studio 中運作。
- 不是封閉實體的片段會被排除，卡片會告訴你這部分佔整體形狀的比例。
- 若使用樹脂印表機，請參閱 [為樹脂印表機切片](topic:resin-printing)。若要先檢查或修復模型，請參閱 [支撐、壁厚、挖空與修復](topic:print-tools)。
