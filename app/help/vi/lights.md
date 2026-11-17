---
title: Chiếu sáng mô hình bằng bóng đèn
summary: Đặt bóng đèn, đèn rọi và tấm đèn vào mô hình để ảnh kết xuất có thể thể hiện căn phòng vào ban đêm hoặc nội thất có ánh sáng, với bóng đổ mềm.
keywords: đèn, bóng đèn, chiếu sáng, bóng đèn sợi, đèn trần, đèn rọi, đèn downlight, tấm đèn, đèn vùng, lumen, độ sáng, nhiệt độ màu, ấm, ban đêm, nội thất, kết xuất
from: c8d72cbc
---

Bóng đèn chiếu sáng [ảnh kết xuất](topic:render). Chúng không thay đổi khung nhìn 3D, nơi mỗi bóng đèn hiển thị là một dấu nhỏ với màu riêng.

## Thêm bóng đèn

1. Trong mục {{ui:Lights}} ở bên phải, nhấp {{ui:Lamp}}, {{ui:Spotlight}} hoặc {{ui:Light panel}}.
2. Nhấp nơi đặt đèn. Bắt điểm hoạt động như khi vẽ.
   - Trên trần hoặc tường, **bóng đèn** treo cách mặt 25 cm, về phía bạn đang nhìn; **tấm đèn** nằm trên mặt và chiếu ra xa mặt đó.
   - **Đèn rọi** cần hai lần nhấp: vị trí đặt đèn, rồi vật mà đèn chiếu vào.

Đèn mới được chọn trong {{ui:Lights}}, sẵn sàng để thay đổi.

## Thay đổi bóng đèn

Nhấp tên bóng đèn trong {{ui:Lights}}, hoặc nhấp dấu của nó trong khung nhìn bằng {{ui:Select}}. Sau đó:

| Thiết lập | Tác dụng |
|---|---|
| {{ui:Brightness (lumens)}} | Lượng sáng đèn phát ra. Bóng đèn gia đình khoảng 800 lumen; tấm đèn trần sáng là 3000 |
| {{ui:Color}} | {{ui:Warm}} (bóng đèn gia đình), {{ui:Neutral}} hoặc {{ui:Daylight}}, hoặc màu bất kỳ |
| {{ui:Beam (degrees)}} | Hình nón chiếu sáng của đèn rọi, từ mép này sang mép kia |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Bóng đèn và tấm đèn lớn hơn cho bóng đổ mềm hơn |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Vị trí của đèn |

Ô đánh dấu bên cạnh tên bóng đèn bật hoặc tắt đèn. {{ui:Delete the light}} xóa đèn. Mỗi thay đổi là một bước: {{key:Ctrl+Z}} hoàn tác. Đèn được lưu trong tệp `.modelcraft`.

## Ảnh ban đêm

Trong {{ui:Render a picture…}}, chọn {{ui:Use another date and time for this picture}} và chọn một giờ buổi tối. Khi mặt trời đã lặn, bầu trời tối và chỉ có đèn chiếu sáng mô hình. Tăng {{ui:Brightness}} trong hộp thoại nếu ảnh quá tối, hoặc thêm đèn.

:::tip
Với một căn phòng nhìn từ bên trong, đặt camera vào trong phòng (xoay quanh và phóng to, hoặc dùng một [cảnh](topic:scenes)), thêm bóng đèn trên trần và kết xuất vào ban đêm. Ở chế độ {{ui:Fast}}, các góc xa bóng đèn sẽ tối hơn so với ảnh chụp; [chế độ chất lượng cao](topic:render#high-quality) cho phép ánh sáng dội từ tường.
:::
