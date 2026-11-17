---
title: Menu, phím và chuột
summary: Chọn một kiểu menu phù hợp với bộ tạo mô hình bạn đã biết, gán phím riêng cho bất kỳ lệnh nào, chuyển lệnh giữa các menu, và đặt thao tác của bánh xe cùng nút chuột giữa và nút phải.
keywords: kiểu menu, menu, thanh menu, thanh công cụ, phím tắt, phím nóng, phím, kiểu phím, bản đồ phím, tùy chỉnh, gán lại phím, chuột, bánh xe, đảo ngược, hướng thu phóng, nút giữa, nút phải, xoay quanh, di chuyển khung nhìn, xuất, nhập, chuyển đổi, quen thuộc, đẩy/kéo, bộ tạo mô hình
from: e56fce3d
---

Công cụ của ModelCraft giống nhau bất kể bạn truy cập bằng cách nào. Một **kiểu menu** quyết định chúng nằm ở đâu trên màn hình, được gọi là gì ở đó và phím nào chạy chúng. Chọn một kiểu trong {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}; thay đổi có hiệu lực ngay, và trình duyệt này sẽ nhớ nó.

## Các kiểu

| Kiểu | Bạn nhận được |
|---|---|
| {{ui:ModelCraft}} | Thanh công cụ riêng của ModelCraft (Tệp, Vẽ, Sửa đổi, Tổ chức, Chỉnh sửa, Camera) và các phím một chữ cái: {{key:L}} đường thẳng, {{key:R}} hình chữ nhật, {{key:P}} đẩy/kéo, {{key:M}} di chuyển, {{key:Q}} xoay, {{key:S}} tỷ lệ, {{key:E}} tẩy, {{key:O}} xoay quanh. Điểm khởi đầu. |
| {{ui:Push-pull}} | Một thanh menu (Tệp, Chỉnh sửa, Xem, Camera, Vẽ, Công cụ, Cửa sổ) phía trên một hàng công cụ chính, với các phím một chữ cái giống nhau. |
| {{ui:Modeler}} | Một thanh menu tiêu đề (Tệp, Chỉnh sửa, Xem, Chọn, Thêm, Đối tượng, Lưới) và các phím của bộ tạo mô hình lưới: {{key:W}} chọn, {{key:G}} nắm, {{key:R}} xoay và {{key:S}} tỷ lệ vùng chọn cùng lúc ({{key:X}}, {{key:Y}} hoặc {{key:Z}} khóa một trục khi nó đang di chuyển), {{key:E}} đẩy/kéo, {{key:B}} hình chữ nhật, {{key:X}} xóa, {{key:A}} chọn tất cả, {{key:Alt+A}} bỏ chọn, {{key:Shift+D}} nhân bản, {{key:Mod+G}} nhóm, {{key:H}} ẩn. Nút giữa xoay quanh; {{key:Shift}} và nút giữa di chuyển khung nhìn, {{key:Mod}} và nút giữa thu phóng; nút phải hủy những gì công cụ đang làm. |
| {{ui:Beginner}} | Một dải lệnh mà thẻ {{ui:Make}} là vài nút lớn: hình khối để thả, lỗ, di chuyển, xoay và đổi kích thước, căn chỉnh, {{ui:Group}} (các lỗ được cắt vào hình) và kiểm tra in 3D; mọi công cụ khác nằm trên thẻ {{ui:More tools}}. Nút phải xoay quanh, nút giữa di chuyển khung nhìn. Xem [Kiểu Người mới](topic:beginner). |

Kiểu phím mà bạn có thể biết từ {{ui:Keys}} ở góc dưới bên phải khung nhìn và từ {{ui:Edit}} › {{ui:More}} là cùng một lựa chọn: chọn phím của bộ tạo mô hình ở đó sẽ chọn kiểu {{ui:Modeler}}, còn chọn phím đẩy/kéo sẽ chuyển về kiểu {{ui:ModelCraft}}. Nếu bạn đã chọn phím của bộ tạo mô hình ở phiên bản cũ, ModelCraft sẽ tự mở một lần ở kiểu {{ui:Modeler}}.

:::tip
Một phím thuộc bộ phím đẩy/kéo nhưng kiểu của bạn gán cho lệnh khác sẽ không làm gì, và dòng trạng thái cho biết lệnh của nó đã chuyển đi đâu ("Trong Mô hình hóa, Đẩy/kéo là E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} và các phím mũi tên luôn giữ ý nghĩa của chúng, số luôn đi đến ô giá trị, và khi một công cụ đang di chuyển thứ gì đó, phím riêng của nó được ưu tiên.
:::

## Tự tùy chỉnh

1. Chọn kiểu gần nhất với điều bạn muốn, rồi nhấp {{ui:Customize…}}.
2. Trên {{ui:Keys and menus}}, tìm một lệnh (ô tìm kiếm giúp ích). {{ui:Add a key}} rồi nhấn phím. Nhấp vào một phím để gỡ nó.
3. Với thanh menu, {{ui:Where it sits}} chuyển lệnh sang menu khác, hoặc sang {{ui:Keys only}}.
4. Trên {{ui:Mouse}}, đặt bánh xe và thao tác của các nút trong khung nhìn 3D.
5. Đặt tên rồi nhấp {{ui:Save}}.

Lưu một kiểu tích hợp sẽ tạo bản sao riêng của bạn ("Mô hình hóa của tôi"); kiểu tích hợp không bao giờ thay đổi. Bản sao của bạn đọc phím theo cách kiểu gốc của nó đọc: bản sao được tạo từ {{ui:Modeler}} giữ các phím nắm, xoay và tỷ lệ hoạt động cùng lúc.

## Chuột

- **Bánh xe chuột**: {{ui:Scroll up zooms in}} (mặc định) hoặc {{ui:Scroll up zooms out}}, và tốc độ. Cử chỉ bóp trên bàn di chuột luôn thu phóng theo hướng ngón tay di chuyển.
- **Kéo trong khung 3D**: {{ui:Each view's own}} giữ các nút của ModelCraft (nút giữa xoay quanh, nút phải hoặc {{key:Shift}} cùng nút giữa di chuyển khung nhìn). Hoặc đặt nút giữa và nút phải thành xoay quanh, di chuyển khung nhìn, thu phóng hoặc không gì cả; {{key:Shift}} cùng nút sẽ đổi giữa xoay quanh và di chuyển khung nhìn. Nút trái luôn thuộc về công cụ đang dùng.
- **Bàn di chuột**: {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Scrolling}} vẫn quyết định hai ngón có xoay quanh (bàn di chuột) hay thu phóng (chuột). Xem [Xoay quanh, di chuyển khung nhìn và thu phóng](topic:orbit-pan-zoom).

## Mang đi cùng

{{ui:Export}} lưu kiểu đang dùng thành một tệp `.ccinput.json` nhỏ; {{ui:Import…}} thêm một tệp, từ máy tính khác hoặc từ đồng nghiệp. Tệp được nhập chỉ có thể trỏ đến các lệnh riêng của ModelCraft: mọi thứ khác trong tệp sẽ bị bỏ qua và được đếm trong dòng trạng thái. {{ui:Delete this style}} xóa một kiểu do chính bạn tạo.

:::note
Các thiết lập này được giữ trong trình duyệt này. {{ui:Use this style in every app}} dưới các thẻ kiểu làm mọi ứng dụng mở ở kiểu tương ứng: {{ui:Push-pull}} đi cùng các kiểu thanh menu của ứng dụng khác. {{ui:Modeler}} không có tương ứng ở ứng dụng khác, nên nó vẫn là lựa chọn của ModelCraft.
:::

Liên quan: [Phím và thao tác chuột](topic:keyboard) · [Cài đặt ModelCraft](topic:settings) · [Chuyển từ bộ tạo mô hình khác](topic:coming-from)
