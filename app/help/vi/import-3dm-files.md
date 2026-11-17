---
title: Nhập mô hình .3dm
summary: Nhập tệp .3dm cùng với lưới, mặt, đường cong, khối, lớp và màu; các tam giác đến từ đâu, và những gì bị bỏ qua.
keywords: 3dm, nhập, nurbs, polysurface, brep, mặt, lưới kết xuất, khối đùn, đường cong, khối, lớp, thẻ, màu, đơn vị, chuyển đổi, di chuyển
from: 3cf29879
---

ModelCraft đọc tệp `.3dm` bằng trình đọc riêng của nó, ngay trong trang. Không có gì được tải lên, và nó hoạt động ngoại tuyến bất cứ khi nào ModelCraft hoạt động. Các tệp lưu theo bố cục phiên bản 5, 6, 7 và 8 đã được kiểm thử; các phiên bản cũ hơn (từ 2 đến 4) cũng có thể mở được, nhưng chưa được thử.

## Nhập tệp

1. Nhấp {{ui:Nhập}} trong nhóm {{ui:Tệp}} (hoặc thả tệp `.3dm` vào khung nhìn 3D).
2. Chọn tệp.

   Thanh trạng thái ghi "Đang đọc chair.3dm…" trong khi đọc, rồi ghi những gì đã nhập, ví dụ "Đã nhập chair.3dm: 14 lưới (8330 mặt), 8 đường cong, 5 vị trí khối, 3 lớp thành thẻ. Bề mặt: 7 mặt từ các lưới lưu trong tệp, 29 được CadCraft tạo lưới."

Toàn bộ mô hình được nhập như một nhóm đặt tên theo tệp, được chọn, và khung nhìn phóng to đến nó. Một lần {{key:Mod+Z}} sẽ gỡ tất cả, kể cả các thẻ.

## Các tam giác đến từ đâu

ModelCraft làm việc với mặt và lưới, nên mọi bề mặt trong tệp được nhập dưới dạng một [lưới](topic:meshes) gồm các tam giác phẳng nhỏ. Với mỗi mặt của một polysurface (và mỗi khối đùn), ModelCraft lấy theo thứ tự sau:

1. **Lưới kết xuất lưu trong tệp.** Hầu hết các chương trình mô hình hóa lưu lưới mà chúng hiển thị trên màn hình cùng với mỗi bề mặt; khi có sẵn, ModelCraft dùng nguyên lưới đó.
2. **Lưới do ModelCraft tạo**, khi tệp không có lưới lưu sẵn: mặt phẳng, bề mặt NURBS, bề mặt tròn xoay (cầu, nón, xuyến, hình tiện), đường cong đùn và khối đùn (kèm các lỗ và nắp đầu), được cắt theo cạnh của chúng. Các mặt của một polysurface chia sẻ điểm trên cạnh, nên một polysurface kín sẽ nhập thành lưới kín. Các vùng cong được chia nhỏ cho đến khi các tam giác nằm trong khoảng 0.15 % kích cỡ của vật thể so với bề mặt thực.
3. **Không có gì**, với mặt thuộc loại bề mặt mà ModelCraft chưa đọc được. Thanh trạng thái cho biết có bao nhiêu mặt và thuộc loại nào.

Phần "Bề mặt:" trên thanh trạng thái cho biết bao nhiêu mặt đến từ lưới lưu sẵn và bao nhiêu mặt do ModelCraft tạo lưới. Các cạnh nằm trong một mặt của tệp là cạnh mềm, còn cạnh giữa hai mặt là cạnh sắc, nên một mặt cong được tô bóng mượt.

:::tip
Để có hình dạng trung thực nhất, lưu tệp kèm lưới kết xuất trong chương trình đã tạo ra nó (thường là mặc định; tùy chọn "save small" sẽ bỏ lưới đi).
:::

## Những gì được nhập

- **Lưới** cùng màu đỉnh và tọa độ texture.
- **Polysurface, bề mặt và khối đùn**, như mô tả ở trên.
- **Đường cong** (đường thẳng, đa tuyến, cung tròn, vòng tròn, đường cong NURBS và các đường cong nối từ chúng) như [cạnh](topic:curves), một nhóm cạnh cho mỗi lớp.
- **Khối** trở thành [cấu kiện](topic:groups-components): mỗi vị trí của một khối là một vị trí của cùng một cấu kiện, nên sửa một bản sao sẽ thay đổi tất cả. Khối lồng trong khối vẫn được giữ.
- **Lớp** trở thành [thẻ](topic:tags) với tên đầy đủ của lớp ("Furniture::Chairs"), bị ẩn khi lớp đã tắt. Vị trí của mỗi đối tượng mang thẻ của lớp nó thuộc về.
- **Màu.** Màu của một đối tượng lấy từ nơi tệp chỉ định: màu riêng, màu của lớp, hoặc màu cơ sở của vật liệu. Màu này trở thành lớp sơn cho các mặt của nó.
- **Đối tượng bị ẩn nhập vào ở trạng thái ẩn**; {{ui:Hiện tất cả}} sẽ hiện chúng.
- **Đơn vị:** tệp ghi đơn vị của nó; mô hình được nhập với kích cỡ thật.

## Những gì bị bỏ qua (và được báo)

Phần "Ghi chú:" trên thanh trạng thái nêu tên mọi thứ không được nhập, kèm số lượng:

- điểm và đám điểm, văn bản, chấm văn bản, kích thước, đường dẫn, tô bóng (hatch), đèn, mặt phẳng xén và chi tiết bố cục;
- đối tượng SubD: chuyển chúng thành lưới hoặc polysurface trong chương trình đã tạo tệp trước tiên;
- mặt trên bề mặt bị dời và các loại bề mặt khác mà ModelCraft chưa đọc được, khi tệp không lưu lưới cho chúng;
- khối được liên kết từ các tệp khác (chỉ tệp bạn nhập mới được đọc);
- khối đùn có đầu vát góc sẽ nhập với đầu vuông.

Texture vật liệu, cài đặt kết xuất, khung nhìn đặt tên, nhóm và văn bản người dùng không được đọc; vật liệu chỉ cho màu cơ sở.

## Giới hạn

Tệp tối đa 300 MB. Tệp bị hỏng sẽ cho biết lỗi và không thêm gì; một đối tượng không đọc được sẽ bị bỏ qua và được đếm, phần còn lại vẫn được nhập.
