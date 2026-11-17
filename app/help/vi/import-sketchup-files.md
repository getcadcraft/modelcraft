---
title: Nhập mô hình SKP
summary: Nhập tệp .skp cùng nhóm, cấu kiện, màu, texture, thẻ và cạnh mềm; xem những gì đã nhập và những gì không, rồi tiếp tục mô hình hóa.
keywords: skp, nhập, mở skp, cấu kiện, nhóm, thẻ, lớp, vật liệu, màu, texture, ẩn, cạnh mềm, 3D Warehouse, di chuyển, chuyển đổi
from: 325d3c81
---

ModelCraft đọc tệp SketchUp (`.skp`) bằng trình đọc riêng của nó, ngay trong trang. Không có gì được tải lên, và nó hoạt động ngoại tuyến bất cứ khi nào ModelCraft hoạt động. Các tệp từ SketchUp 3 đến 2026 đã được kiểm thử.

## Nhập tệp

1. Nhấp {{ui:Nhập}} trong nhóm {{ui:Tệp}} (hoặc thả tệp `.skp` vào khung nhìn 3D).
2. Chọn tệp.

   Thanh trạng thái ghi "Đang đọc house.skp…" trong khi đọc, rồi ghi những gì đã nhập, ví dụ "Đã nhập house.skp (SketchUp 25.0.575): 1240 mặt, 6 cấu kiện, trong một nhóm."

Toàn bộ mô hình được nhập như một nhóm đặt tên theo tệp, được chọn, và khung nhìn phóng to đến nó. Một lần {{key:Mod+Z}} sẽ gỡ tất cả, kể cả các thẻ.

:::tip
Phân rã nhóm nhập vào ({{ui:Thông tin đối tượng}} › {{ui:Phân rã}}) khi bạn muốn nội dung của nó nằm rời trong mô hình thay vì nằm trong một nhóm.
:::

## Những gì được nhập

- **Mặt** cùng các lỗ của chúng, và **cạnh** không thuộc mặt nào.
- **Nhóm** nhập như nhóm, và **cấu kiện** nhập như cấu kiện: mỗi bản sao của một cấu kiện là một vị trí của cùng một định nghĩa, nên sửa một bản sao sẽ thay đổi tất cả, như trong SketchUp. Tên cũng được giữ lại.
- **Màu.** Vật liệu riêng của mặt sẽ cho nó màu. Vật liệu được sơn lên một nhóm hoặc cấu kiện trở thành lớp sơn của vị trí đó, nên các mặt bên trong không có màu riêng sẽ nhận màu đó, như trong SketchUp. Một cấu kiện được sơn đỏ ở một chỗ và xanh dương ở chỗ khác vẫn là một cấu kiện.
- **Texture.** Mặt được sơn bằng vật liệu có texture sẽ nhập kèm texture, được đặt lên mặt như trong tệp, và kiểu {{ui:Tô bóng}} sẽ hiển thị nó. Ảnh được giữ trong tệp ModelCraft khi bạn lưu, và [ảnh kết xuất](topic:render) cũng hiển thị nó. Vật liệu có texture sơn lên cả một nhóm hoặc cấu kiện chỉ cho bản sao đó màu của vật liệu.
- **Thẻ.** Một nhóm hoặc cấu kiện nằm trên thẻ SketchUp sẽ có thẻ ModelCraft cùng tên, hiện trong {{ui:Thẻ}}, được hiện hoặc ẩn như trong SketchUp. Nếu mô hình của bạn đã có thẻ cùng tên, thẻ đó sẽ được dùng.
- **Đối tượng ẩn nhập vào ở trạng thái ẩn:** mặt, cạnh, nhóm và cấu kiện, cùng các mặt và cạnh trên thẻ đang ẩn. Bạn thấy những gì SketchUp hiển thị, và không mất gì: {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Hiện tất cả}} sẽ hiện chúng. Xem [Ẩn, cô lập và hiện lại](topic:hide-isolate).
- **Cạnh mềm và cạnh trơn** giữ nguyên là cạnh mềm, nên các bề mặt cong vẫn trông mượt.
- **Kích cỡ** đúng ở mọi đơn vị: tệp SketchUp dùng inch bên trong, và ModelCraft sẽ quy đổi.

## Những gì không được nhập

Thanh trạng thái cho biết những gì bị bỏ qua, kèm số lượng.

- **Một số texture** chỉ giữ màu của vật liệu: texture thiếu trong tệp, ảnh ở định dạng trình duyệt không hiển thị được (như tệp Photoshop), hoặc texture không có kích thước. Mặt có texture chiếu được nhập với texture đặt gần đúng.
- **Thẻ trên mặt và cạnh rời.** ModelCraft chỉ gắn thẻ cho nhóm và cấu kiện, nên mặt hoặc cạnh có thẻ riêng sẽ nhập mà không có thẻ, và thanh trạng thái đếm chúng. Biến các mặt đó thành nhóm ({{key:Shift+G}}) rồi gắn thẻ cho nhóm.
- **Ảnh** đặt trong mô hình, văn bản, kích thước, đường dẫn hướng, mặt phẳng cắt, cảnh và kiểu.

## Sự cố

- "Đây không phải là tệp SketchUp." hoặc "Tệp SketchUp này bị hỏng: …": tệp bị cắt cụt, hoặc là một thứ khác có đuôi `.skp`. Lưu lại từ SketchUp, hoặc yêu cầu một bản mới.
- Tệp từ phiên bản SketchUp mới hơn những gì ModelCraft biết sẽ bị từ chối, kèm phiên bản mà nó tìm thấy.
- Mô hình chỉ gồm ảnh, văn bản hoặc kích thước sẽ thông báo rằng không có gì để hiển thị.

## Đưa mô hình trở lại

ModelCraft không thể lưu tệp `.skp`. Xuất Collada ({{ui:Xuất}} › `.dae`) rồi nhập tệp đó vào SketchUp: nhóm, cấu kiện và màu sẽ được giữ lại; texture chỉ giữ màu của vật liệu. Xem [Xuất mô hình của bạn](topic:export-model).
