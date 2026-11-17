---
title: Chọn đối tượng
summary: Nhấp, nhấp đúp và nhấp ba lần, kéo khung cửa sổ hoặc khung cắt, thêm và bớt bằng phím bổ trợ, và xóa.
keywords: chọn, vùng chọn, cửa sổ, cắt, thêm vào vùng chọn, bỏ chọn, chọn tất cả, nhấp ba lần, nhấp đúp, xóa
from: d56d1f89
---

{{ui:Chọn}} ({{key:Space}}) là công cụ ModelCraft bắt đầu với, và là công cụ mà {{key:Esc}} đưa bạn trở về. Các thứ được chọn chuyển sang màu xanh, còn {{ui:Thông tin đối tượng}} ở bên phải cho biết chúng là gì.

## Nhấp

| Làm việc này | Chọn |
|---|---|
| Nhấp một mặt hoặc một cạnh | Mặt hoặc cạnh đó |
| Nhấp một nhóm hoặc cấu kiện | Toàn bộ nhóm hoặc cấu kiện |
| Nhấp đúp một mặt | Mặt và các cạnh của nó |
| Nhấp đúp một cạnh | Cạnh và các mặt ở hai bên |
| Nhấp đúp một nhóm hoặc cấu kiện | Mở ra để chỉnh sửa (xem [Nhóm và cấu kiện](topic:groups-components)) |
| Nhấp ba lần một mặt hoặc cạnh | Mọi thứ nối với nó: toàn bộ đối tượng |
| Nhấp vào khoảng trống | Không gì cả (xóa vùng chọn) |
| Nhấp đúp vào khoảng trống khi đang chỉnh sửa một nhóm | Đóng nhóm |

Cạnh dễ nhấp trúng hơn mặt: khi con trỏ cách cạnh vài pixel, cú nhấp sẽ chọn cạnh.

## Kéo khung

- **Từ trái sang phải** vẽ một khung đặc: vùng chọn **cửa sổ**. Chỉ những thứ nằm hoàn toàn bên trong mới được chọn.
- **Từ phải sang trái** vẽ một khung nét đứt: vùng chọn **cắt**. Mọi thứ khung chạm vào đều được chọn, và một mặt được chọn khi khung nằm hoàn toàn bên trong nó.

Nhóm hoặc cấu kiện được tính là một thứ: vùng chọn cửa sổ phải chứa trọn nó, còn vùng chọn cắt chỉ cần chạm vào.

## Thêm và bớt

Giữ một phím khi nhấp hoặc kéo:

| Phím | Tác dụng |
|---|---|
| {{key:Shift}} | Chuyển đổi: thêm những gì chưa được chọn, bớt những gì đã được chọn |
| {{key:Mod}} | Thêm |
| {{key:Shift}} và {{key:Mod}} cùng lúc | Bớt |

Để chọn mọi thứ trong mô hình (hoặc mọi thứ trong nhóm bạn đang chỉnh sửa), nhấn {{key:Mod+A}}.

## Bỏ chọn

Nhấn {{key:Esc}} (khi {{ui:Chọn}} là công cụ), hoặc nhấp vào khoảng trống.

## Xóa những gì được chọn

Nhấn {{key:Delete}} hoặc {{key:Backspace}}. Mặt, cạnh, nhóm và đường dẫn hướng trong vùng chọn được xóa trong một bước; {{key:Mod+Z}} sẽ khôi phục chúng.

Xóa một cạnh sẽ xóa các mặt cần đến nó, trừ khi cạnh đó chỉ ngăn cách hai mặt nằm trong cùng một mặt phẳng: khi đó hai mặt nhập thành một. Xóa một mặt thì giữ lại các cạnh của nó. Xem [Xóa và dọn dẹp](topic:erase).

## Chọn bên trong nhóm

Nhấp một nhóm sẽ chọn toàn bộ nhóm. Để chọn một mặt bên trong, nhấp đúp vào nhóm để mở ra, rồi nhấp. Khi một nhóm đang mở, các cú nhấp chỉ tới được những gì nằm bên trong; mọi thứ khác bị làm mờ. Nhấn {{key:Esc}} khi không chọn gì, hoặc nhấp đúp vào khoảng trống, để đóng nhóm.

{{ui:Cây đối tượng}} ở bên trái chọn nhóm và cấu kiện theo tên, hữu ích khi chúng bị che sau các vật khác.
