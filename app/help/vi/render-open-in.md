---
title: Mở cảnh trong chương trình khác
summary: Lưu cảnh dưới dạng tệp USD hoặc glTF cho bất kỳ chương trình nào đọc chúng, hoặc mở nó từ Studio trong một chương trình trên máy tính này.
keywords: mở trong, usd, gltf, glb, xuất, chương trình kết xuất, archviz, studio, usdview, gửi, bàn giao, gói, thư mục unreal
from: 812329d5
---

Chọn một mục **Mở trong** trong danh sách Engine của {{ui:Kết xuất ảnh…}} để đưa cảnh sang chương trình khác. Không có gì quay lại mô hình.

## Một tệp cho mọi chương trình

- **Tệp USD** lưu cảnh dưới dạng `.usdc` (hoặc `.usdz` khi mô hình có ảnh đính kèm): [cùng tệp như Lưu thành USD](topic:usd), với vật liệu, đèn và camera. Nó giữ lại việc dùng lại thể hiện (instancing) và các giá trị vật liệu chính xác. Hầu hết trình kết xuất, công cụ game và trình xem đều đọc USD.
- **Tệp glTF (.glb)** lưu tệp glTF 2.0 nhẹ hơn với vật liệu, kết cấu và đèn; xem [Xuất mô hình cho chương trình khác](topic:export-model) để biết các định dạng ModelCraft ghi ra.

- **Thư mục dự án Unreal (.zip)** lưu thư mục mà [Gửi cảnh tới công cụ game](topic:render-unreal) ghi ra, dành cho một dự án trên bất kỳ máy tính nào.

Cả ba đều hoạt động trong trình duyệt và trong Studio.

## Trong Studio: mở trong một chương trình

Studio liệt kê các chương trình nó tìm thấy trên máy tính này có thể mở cảnh: usdview nếu nó nằm trên đường dẫn tìm kiếm của bạn, và chương trình riêng của máy tính cho loại tệp. Chọn một, chọn USD hoặc glTF ở nơi nó đọc cả hai, rồi nhấp {{ui:Kết xuất}}. Studio ghi gói vào một thư mục mới trong Tài liệu (Documents) (`CadCraft hand-off`; không có gì bị ghi đè, mỗi lần gửi có thư mục riêng) và khởi động chương trình trên đó, rồi cho biết các tệp nằm ở đâu.

| Chương trình | Đọc tốt nhất |
|---|---|
| usdview | USD |
| Chương trình riêng của máy tính | Bất cứ thứ gì máy tính có cho loại tệp đó |

Studio chỉ khởi động các chương trình từ danh sách cố định này; nó không chạy bất cứ thứ gì trang yêu cầu theo tên, và không bao giờ khởi động một chương trình theo giấy phép GNU GPL (xem [Vẽ ảnh bằng chương trình khác](topic:render-other-program#programs-cadcraft-never-runs)). Bất kỳ chương trình nào đọc USD hoặc glTF đều mở được tệp từ **Một tệp cho mọi chương trình** ở trên.

:::note
Twinmotion, Enscape và các chương trình trực quan hóa khác không có trong danh sách: CadCraft chưa được kiểm tra với chúng và không đưa ra tuyên bố nào về chúng. Một tệp glTF hoặc USD từ đây là con đường đưa vào.
:::
