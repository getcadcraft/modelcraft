---
title: Tô màu và vật liệu
summary: Tô một màu đặc hoặc một vật liệu như gạch, ốp tường, ngói lợp hoặc gỗ cho mặt, nhóm và thành phần, và giữ chúng khi xuất.
keywords: tô màu, màu, màu sắc, vật liệu, texture, gạch, ốp tường, ngói lợp, lợp mái, gỗ, đá, gạch lát, bê tông, vữa trát, cỏ, sỏi, kính, kim loại, thùng sơn, tô đầy, lấy mẫu, ống hút màu, mặc định, glb, obj, mtl, collada
from: b1500523
---

Màu giúp bạn phân biệt các phần của mô hình, và **vật liệu** (gạch, ốp tường, lợp mái, gỗ, đá, gạch lát, bê tông, vữa trát, cỏ, kính, kim loại) làm cho mô hình trông giống thứ nó được dựng từ đó. Cả hai đều tô theo cùng một cách.

## Chọn màu

Mục {{ui:Màu sắc}} ở bên phải hiển thị một hàng màu đặc, {{ui:Mặc định}} (màu có gạch chéo: không màu) và ô {{ui:+}} cho màu khác. Nhấp một ô để đặt nó làm màu hiện hành. Công cụ {{ui:Tô màu}} bắt đầu với màu đó.

## Tô màu

1. Nhấn {{key:B}} ({{ui:Tô màu}}), hoặc, khi chưa chọn gì, nhấp một màu. (Khi đã chọn gì đó, nhấp một màu sẽ tô ngay vùng chọn.)
2. Nhấp một mặt để tô nó.
3. Nhấp một nhóm hoặc thành phần để tô bản sao đó: các mặt của nó chưa có màu riêng sẽ nhận màu này. Các mặt bạn tô bên trong nó giữ màu của chúng.

Để tô nhiều thứ cùng lúc, chọn chúng trước rồi nhấp một màu, hoặc nhấp bất kỳ thứ nào trong số đó bằng {{ui:Tô màu}}. Đó là một bước hoàn tác.

| Giữ | Và nhấp một mặt | Được tô gì |
|---|---|---|
| — | | Mặt đó |
| {{key:Ctrl}} | | Mọi mặt nối với nó có cùng màu |
| {{key:Shift}} | | Mọi mặt có màu đó trong nhóm bạn đang làm việc |
| {{key:Alt}} | | Không gì: thay vào đó bạn lấy màu đó |

Để đưa một mặt về không màu, chọn {{ui:Mặc định}} và nhấp vào nó.

## Tô bằng vật liệu

Mục {{ui:Vật liệu}}, dưới {{ui:Màu sắc}}, liệt kê thư viện vật liệu theo loại: gạch và khối xây, ốp tường, lợp mái, gỗ, đá, gạch lát, bê tông, vữa trát, mặt đất, kính và kim loại. Rê chuột lên một ô để xem tên. Nhấp một ô, rồi tô bằng nó y như với màu: {{key:B}}, nhấp mặt, nhóm hoặc thành phần; hoặc chọn trước rồi nhấp vật liệu.

- Ở kiểu **Tô bóng**, các mặt hiển thị texture của vật liệu. Đường khuất, khung dây và tia X hiển thị màu của nó.
- Texture chạy **ngang bằng dọc theo từng mặt** và **đi lên theo nó**: hàng gạch nằm ngang trên mọi tường, ngói chạy xuống độ dốc mái, ván trên sàn theo trục đỏ. Chúng ở đúng kích thước thực (một viên gạch dài khoảng 215 mm), nên trông đúng ở mọi khoảng cách.
- Trong [ảnh kết xuất](topic:render), vật liệu giữ texture, độ nhám và, với kính và kim loại, độ bóng.
- Nhấp {{key:Alt}} với {{ui:Tô màu}} cũng lấy vật liệu của một mặt.

Texture do chính ModelCraft vẽ, nên chúng hoạt động ngoại tuyến và miễn phí dùng cho mọi mục đích (CC0).

## Thành phần và màu

Màu được tô trên một mặt **bên trong** một thành phần hiển thị trên mọi bản sao, vì các bản sao dùng chung một định nghĩa. Màu được tô trên một **bản sao** từ bên ngoài (khi thành phần đóng) chỉ thuộc về bản sao đó, nên hai bản sao của một thành phần có thể có màu khác nhau. {{ui:Thông tin đối tượng}} hiển thị màu của mặt, nhóm hoặc thành phần đang chọn.

## Màu trong tệp

- Tệp ModelCraft giữ mọi màu và mọi vật liệu.
- Các định dạng khác nhận **màu của vật liệu** (diện mạo từ xa) thay cho texture: glTF, Collada, OBJ, DWG và DXF, và kiểm tra in 3D. Trong glTF, Collada và OBJ, vật liệu giữ tên của nó, như `Material_brick-red`.
- **glTF (.glb)** và **Collada (.dae)**: mỗi màu thành một vật liệu. Một thành phần hiển thị ở các màu khác nhau được ghi một lần cho mỗi màu. glTF cũng ghi texture đã nhập thành texture.
- **OBJ**: xuất tải xuống hai tệp, `.obj` và tệp vật liệu `.mtl` chứa màu. Để chúng trong cùng một thư mục. Với texture đã nhập, `.obj`, `.mtl` và các hình ảnh được gộp thành một `.zip`.
- **DWG** giữ đúng màu; **DXF** dùng màu gần nhất trong 255 màu CAD tiêu chuẩn.
- **STL** và **PLY** mang màu: STL theo quy ước VisCAM / SolidView (chương trình không đọc nó sẽ bỏ qua), PLY dưới dạng màu trên mỗi điểm. Xem [Chi tiết định dạng tệp](topic:formats).

:::tip
Để dựng một màn hình, tô khung màu than chì và kính màu xanh sau khi [dời song song](topic:draw-faces) mặt trước.
:::
