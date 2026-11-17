---
title: Công cụ khối đặc: hợp, trừ, giao
summary: Nối các nhóm và cấu kiện kín thành một, cắt một cái khỏi cái khác, hoặc chỉ giữ phần mà chúng cùng chung.
keywords: khối đặc, bộ kiểm tra khối đặc, không phải khối đặc, sửa khối đặc, lỗ, cạnh lạc, lộn ngược, hợp, nối, kết hợp, trộn, trừ, hiệu, cắt, lỗ hổng, giao, boolean, vỏ ngoài
from: f35df1cc
---

Các công cụ khối đặc kết hợp **khối đặc**: các nhóm và cấu kiện mà các mặt của chúng khép kín một thể tích, với mọi cạnh nối đúng hai mặt. {{ui:Thông tin đối tượng}} ghi {{ui:Khối đặc}}: {{ui:Có}} cho một khối đặc, và hiển thị thể tích của nó.

Chúng nằm trong menu {{ui:Khối đặc}} thuộc nhóm {{ui:Sắp xếp}}.

## Khi một thứ không phải khối đặc

Chọn nhóm hoặc cấu kiện. Khi nó không phải khối đặc, {{ui:Thông tin đối tượng}} cho biết lý do, ví dụ "Không phải khối đặc: 4 cạnh viền một lỗ hổng · 1 cạnh lạc":

| Vấn đề | Ý nghĩa |
|---|---|
| Cạnh viền một lỗ hổng | Thiếu một mặt |
| Cạnh được ba mặt trở lên chung | Một mặt chia đôi bên trong, hoặc hai hình chạm nhau dọc một cạnh |
| Mặt nằm bên trong hình | Một bức tường còn sót lại bên trong thể tích |
| Cạnh lạc | Các đường không bao một mặt nào |
| Mặt bị lộn ngược | Mặt trước của chúng quay vào trong, ngược với các mặt bên cạnh |

{{ui:Hiện lỗi}} mở nó với các cạnh và mặt đó được chọn, để bạn thấy chúng. {{ui:Sửa}} vá các trường hợp đơn giản trong một bước hoàn tác: nó xóa các cạnh lạc và các mặt nằm bên trong hình, lật các mặt cho đúng chiều ra ngoài, và đóng các lỗ hổng có mép nằm phẳng. Những gì nó không thể vá an toàn (một lỗ không phẳng, một cạnh được nhiều mặt chung) được để lại cho bạn, và nó cho biết những gì còn lại.

## Hợp

1. Chọn hai hoặc nhiều khối đặc (nhấp một cái, {{key:Ctrl}}+nhấp các cái còn lại).
2. {{ui:Khối đặc}} › {{ui:Hợp}}.

Chúng trở thành một khối đặc, trong một nhóm. Chỗ chúng chồng lên nhau, các mặt bên trong biến mất.

## Trừ

1. {{ui:Khối đặc}} › {{ui:Trừ}}.
2. Nhấp khối đặc để **lấy đi** (dao cắt).
3. Nhấp khối đặc để **cắt**.

Phần còn lại của khối đặc thứ hai được giữ lại; dao cắt bị dùng hết. Ví dụ, để làm một lỗ xuyên qua một khối, vẽ một cột xuyên qua nó, biến cột thành một nhóm, rồi trừ cột khỏi khối.

## Giao

Chọn hai hoặc nhiều khối đặc, rồi {{ui:Khối đặc}} › {{ui:Giao}}. Chỉ phần mà tất cả cùng chung được giữ lại.

## Những điều cần biết

- Kết quả là một nhóm mới. Nó giữ tên, màu và thẻ của khối đặc đầu tiên (với Trừ: khối bạn đã cắt). Màu được tô trên các mặt của nó không được giữ.
- Các mặt phẳng của kết quả là những mặt đơn. Các mặt tròn hiện ra thành các mặt phẳng nhỏ mà chúng đã được vẽ bằng.
- Nếu một nhóm hoặc cấu kiện không phải khối đặc, công cụ cho biết cái nào và không thay đổi gì. Hãy tìm một mặt bị thiếu hoặc một mặt lạc nằm bên trong nó.
- Bên trong một nhóm đang mở, các công cụ làm việc trên các nhóm và cấu kiện trong nhóm đó.
- Mỗi công cụ là một bước hoàn tác.
- Lần đầu bạn dùng một công cụ khối đặc, bộ máy của nó (manifold-3d) được tải, có thể mất một lúc.
