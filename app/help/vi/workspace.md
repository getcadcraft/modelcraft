---
title: Màn hình ModelCraft
summary: Tham quan thanh công cụ, các bảng ở mỗi bên, khung nhìn 3D và thanh trạng thái, theo tên hiển thị trên màn hình.
keywords: màn hình, bố cục, thanh công cụ, bảng, cây đối tượng, thông tin đối tượng, kiểu, cảnh, thanh trạng thái, ô giá trị, đơn vị, giao diện, tham quan
from: 4a9a4516
---

Từ trên xuống dưới: thanh ứng dụng, thanh công cụ, ba cột (các bảng bên trái, khung nhìn 3D, các bảng bên phải) và thanh trạng thái.

## Thanh ứng dụng

Thanh mỏng trên cùng thuộc về mọi ứng dụng CadCraft. Nó có tên và phiên bản ứng dụng, {{ui:Giới thiệu ModelCraft}}, nút chế độ màn hình và công tắc {{ui:Giấy}} / {{ui:Mô hình}}.

- {{ui:Giấy}} là giao diện sáng và {{ui:Mô hình}} là giao diện tối. Khung nhìn 3D đổi màu cho khớp; mô hình của bạn không thay đổi.
- Nút chế độ màn hình (lúc đầu ghi {{ui:Toàn màn hình}}) và {{key:Ctrl+Shift+F}} chuyển lần lượt qua ba chế độ: bình thường, toàn màn hình, và toàn màn hình với các thanh được ẩn. Khi các thanh bị ẩn, hãy trỏ vào mép trên của màn hình (hoặc chạm vào đó) để đưa chúng trở lại. {{key:Esc}} thoát toàn màn hình.

:::note
{{key:Ctrl+Shift+F}} dùng phím Control trên mọi máy tính, kể cả Mac. Trên iPhone, nơi trình duyệt không có toàn màn hình, nút này chỉ ẩn và hiện các thanh.
:::

## Thanh công cụ

Thanh công cụ được chia thành các nhóm có nhãn. Rê chuột lên một nút để xem tên và phím của nó.

Ở bên trái, danh sách {{ui:Không gian làm việc}} chuyển mục đích của thanh công cụ và bảng bên phải: {{ui:Mô hình}} (mô hình hóa đẩy/kéo, phần tham quan bên dưới), {{ui:Mesh}} ([chỉnh sửa lưới](topic:mesh-edit)), {{ui:Đường cong}} ([đối tượng đường cong](topic:curves)), {{ui:UV}} ([bố trí UV](topic:uv)), {{ui:Điêu khắc}} ([điêu khắc](topic:sculpt)), {{ui:Đổ bóng}} ([vật liệu làm bằng các nút](topic:shading)), {{ui:Hoạt họa}} ([làm hoạt họa](topic:animate)) và {{ui:Kết xuất}} ([kết xuất trong khung nhìn](topic:render#render-in-the-view)).

| Nhóm | Các nút |
|---|---|
| Tệp | {{ui:Mới}}, {{ui:Mở}}, {{ui:Lưu}}, {{ui:Nhập}}, {{ui:Xuất}} (một menu các định dạng) |
| Vẽ | {{ui:Đường thẳng}} ({{key:L}}), {{ui:Hình chữ nhật}} ({{key:R}}), {{ui:Vòng tròn}} ({{key:C}}), {{ui:Đa giác}} ({{key:N}}) |
| Sửa đổi | {{ui:Chọn}} ({{key:Space}}), {{ui:Đẩy/kéo}} ({{key:P}}), {{ui:Di chuyển}} ({{key:M}}), {{ui:Xoay}} ({{key:Q}}), {{ui:Tỷ lệ}} ({{key:S}}), {{ui:Tẩy}} ({{key:E}}), {{ui:Thước dây}} ({{key:T}}) |
| Sắp xếp | {{ui:Cấu kiện}} ({{key:G}}), {{ui:Nhóm}} ({{key:Shift+G}}), {{ui:Phân rã}} |
| Chỉnh sửa | {{ui:Hoàn tác}} ({{key:Mod+Z}}), {{ui:Làm lại}} ({{key:Mod+Y}}), {{ui:Sao chép}} ({{key:Mod+C}}), {{ui:Dán}} ({{key:Mod+V}}), {{ui:Thêm}} (một menu: cắt, sao chép, dán, dán tại chỗ {{key:Mod+Shift+V}}, nhân bản {{key:Mod+D}}, xóa, chọn tất cả, bỏ chọn, và kiểu phím) |
| Camera | {{ui:Xoay quanh}} ({{key:O}}), {{ui:Di chuyển khung nhìn}} ({{key:H}}), {{ui:Thu phóng}} ({{key:Z}}), {{ui:Phạm vi}} ({{key:Shift+Z}}), {{ui:Khung nhìn}} (một menu) |

Các phím hiển thị là phím của kiểu đẩy/kéo; khi chọn kiểu Mô hình hóa trong [cài đặt ModelCraft](topic:settings), các chú giải sẽ hiện phím của kiểu đó. Công cụ bạn đang dùng hiển thị như đang được nhấn. Trên màn hình hẹp, thanh công cụ cuộn ngang.

Menu {{ui:Khung nhìn}} có {{ui:Đẳng trắc}}, {{ui:Trên}}, {{ui:Trước}}, {{ui:Phải}}, {{ui:Sau}}, {{ui:Trái}} và {{ui:Dưới}}, mỗi cái vừa với mô hình, và {{ui:Phối cảnh}}, chuyển giữa phép chiếu phối cảnh và song song.

## Khung nhìn 3D

Phần giữa của màn hình. Các đường đỏ, xanh lá và xanh dương là các trục: đỏ và xanh lá nằm trên mặt đất, xanh dương hướng lên, và **hướng bắc là trục xanh lá**. Nơi chúng gặp nhau là gốc tọa độ.

- Khi bạn bắt đầu, một thẻ có tiêu đề "Bắt đầu mô hình hóa" liệt kê vài phím đầu tiên. Nó biến mất khi bạn chọn một công cụ vẽ hoặc bấm vào khung nhìn.
- Khi một công cụ đang làm việc, khung nhìn hiện **các dấu suy diễn**: những hình nhỏ có màu tại nơi con trỏ bắt điểm (vòng tròn xanh lá ở điểm cuối, vòng tròn lục lam ở trung điểm, ô vuông đỏ trên cạnh, hình thoi xanh dương trên mặt). Xem [Suy diễn và bắt điểm](topic:inference).
- Các thứ được chọn chuyển sang màu xanh dương. Một mặt nhìn từ phía sau có màu xanh xám.
- Khi bạn mở một nhóm để chỉnh sửa, mọi thứ bên ngoài mờ đi, và các trục chuyển sang các trục riêng của nhóm.
- Khi một mô hình có cảnh, một hàng thẻ cảnh xuất hiện ở trên cùng khung nhìn.
- Thả một tệp vào bất kỳ đâu trên khung nhìn để mở hoặc nhập nó.

## Các bảng bên trái

**{{ui:Cây đối tượng}}** liệt kê các nhóm và cấu kiện trong mô hình, lồng nhau đúng như cách chúng lồng nhau trong mô hình. Một cấu kiện được dùng nhiều lần hiện số lần, như "Window (4)".

- Bấm một tên để chọn. Bấm đúp để mở nó ra chỉnh sửa.
- **{{ui:Tìm theo tên}}** (hiện khi có từ hai nhóm trở lên) chỉ giữ các hàng có tên khớp, cùng các nhóm chứa chúng. {{key:Esc}} xóa bộ lọc.
- **Con mắt** ở cuối hàng ẩn hoặc hiện nhóm hay cấu kiện đó (giống {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Ẩn}}). Biểu tượng thẻ nghĩa là nó bị ẩn bởi [thẻ](topic:tags) của nó.
- **Đổi tên tại chỗ:** bấm một hàng, rồi nhấn {{key:F2}}, gõ, và nhấn {{key:Enter}} ({{key:Esc}} giữ tên cũ).
- **Kéo một hàng** vào giữa hàng của nhóm khác để chuyển nó vào trong nhóm đó, vào mép trên hoặc mép dưới của một hàng để đặt nó ngay trước hoặc sau hàng đó, hoặc vào tiêu đề {{ui:Cây đối tượng}} để chuyển nó lên cấp cao nhất. Nó giữ nguyên vị trí trong mô hình, và giữ màu, thẻ và tên. Một nhóm không thể đi vào bên trong chính nó. Mỗi lần chuyển là một bước hoàn tác. Xem [Sắp xếp lại trong Cây đối tượng](topic:groups-components#rearrange-in-the-outliner).
- Khi bạn chỉnh sửa bên trong một nhóm, một dòng ghi "Đang chỉnh sửa: Mô hình › …", và một nút {{ui:Đóng nhóm}} xuất hiện. Nó đóng mọi cấp đang mở cùng lúc.

**{{ui:Cấu kiện}}** liệt kê mọi định nghĩa cấu kiện cùng số bản sao đã đặt ("3×") và một nút {{ui:Đặt}} thêm một bản sao nữa tại nơi bạn bấm.

## Các bảng bên phải

**{{ui:Thông tin đối tượng}}** mô tả thứ đang được chọn. Tiêu đề của nó đổi để cho biết đó là gì:

| Tiêu đề | Hiển thị | Các nút |
|---|---|---|
| Mô hình (chưa chọn gì) | Mặt, cạnh, nhóm, cấu kiện và số đã đặt, đường dẫn hướng, kích thước tổng thể | {{ui:Xóa tất cả đường dẫn hướng}} (khi có đường dẫn hướng) |
| Mặt | Diện tích, số lỗ | {{ui:Đảo ngược mặt}} |
| Cạnh | Chiều dài | không có |
| Nhóm hoặc Cấu kiện | Tên (gõ để đổi tên), số lần được đặt, có phải khối đặc kín không, thể tích, kích thước | {{ui:Sửa}}, {{ui:Phân rã}}, {{ui:Tạo bản riêng}} (cấu kiện được đặt nhiều lần), {{ui:Tạo cấu kiện}} (một nhóm) |
| Điểm dẫn hướng hoặc đường dẫn hướng | không có gì | {{ui:Xóa}} |
| Nhiều thứ | Số mặt, cạnh, nhóm và đường dẫn hướng, tổng diện tích của các mặt | {{ui:Tạo cấu kiện (G)}}, {{ui:Tạo nhóm (Shift+G)}} |

**{{ui:Kiểu}}** đặt cách mô hình được vẽ: {{ui:Mặt}} ({{ui:Tô bóng}}, {{ui:Ẩn đường khuất}}, {{ui:Khung dây}}, {{ui:Tia X}}), {{ui:Hiện cạnh}}, và {{ui:Bóng đổ mặt trời}} với ngày, giờ và vị trí của mặt trời. Xem [Kiểu hiển thị và bóng đổ mặt trời](topic:styles-shadows).

**{{ui:Cảnh}}** lưu các khung nhìn: {{ui:Thêm cảnh}}, danh sách cảnh, và {{ui:Trước}}, {{ui:Phát}} và {{ui:Tiếp}}. Xem [Lưu khung nhìn thành cảnh](topic:scenes).

## Thanh trạng thái

Dọc phía dưới, từ trái sang phải:

1. **Gợi ý**: công cụ cần gì tiếp theo, hoặc con trỏ đang bắt vào đâu ("Điểm cuối", "Trên trục đỏ").
2. **Thông báo**: điều vừa xảy ra ("Đã hoàn tác đẩy/kéo.", "Đã nhập site.dxf: 1697 cạnh trên mặt đất, trong một nhóm.") hoặc lý do một việc không chạy.
3. **Ô giá trị**: nhãn của nó đổi theo công cụ ({{ui:Chiều dài}}, {{ui:Kích thước}}, {{ui:Bán kính}}, {{ui:Số cạnh}}, {{ui:Khoảng cách}}, {{ui:Góc}}, {{ui:Tỷ lệ}}, {{ui:Dời song song}}). Nó hiện kích thước trực tiếp khi bạn làm việc, và nhận những gì bạn gõ. Xem [Gõ kích thước chính xác vào ô giá trị](topic:value-box).
4. **Kiểu phím**: {{ui:Phím: Đẩy/kéo}} hoặc {{ui:Phím: Mô hình hóa}} chuyển cùng lúc các phím tắt và nút chuột (giống như trong [cài đặt ModelCraft](topic:settings)).
5. **{{ui:Bắt điểm}} và {{ui:Va chạm}}**: bắt điểm vào các điểm, cạnh và trục, và các khối đặc dừng lại tại nơi chúng chạm nhau. Gạch chéo = tắt. Bấm để chuyển. Xem [cài đặt ModelCraft](topic:settings).
6. **Bộ chọn đơn vị**: đơn vị dùng để hiển thị chiều dài. Xem [Bắt đầu](topic:getting-started#check-the-units-first).

## Trên màn hình hẹp

Dưới khoảng 760 pixel chiều rộng (điện thoại, hoặc cửa sổ hẹp), khung nhìn 3D chiếm màn hình. Thanh công cụ là một hàng cuộn ngang, và các bảng mở ra dạng tấm từ thanh ở dưới cùng màn hình.
