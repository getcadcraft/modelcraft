---
title: Giá đỡ, độ dày thành, làm rỗng và sửa chữa
summary: Xem nơi bản in cần giá đỡ và ước lượng lượng cần, tìm các thành quá mỏng để in, làm rỗng một chi tiết đến một độ dày thành với lỗ thoát, và sửa lưới với mọi lỗi đã sửa được liệt kê.
keywords: in 3d, giá đỡ, xem trước giá đỡ, phần nhô ra, độ dày thành, thành mỏng, quá mỏng, vòi phun, làm rỗng, rỗng, vỏ, lỗ thoát, nhựa lỏng, sửa chữa, sửa lưới, không đa tạp, mặt bị lật, lỗ hổng, mảnh nhỏ, tự giao nhau, chồng lấp, nối
from: 286bde26
---

Bốn công cụ để chuẩn bị mô hình cho máy in 3D. Mở {{ui:Xuất}} › {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}}; dòng **Công cụ in** trong hộp thoại có {{ui:Xem trước giá đỡ}}, {{ui:Độ dày thành}}, {{ui:Làm rỗng}} và {{ui:Sửa chữa}}. Mỗi công cụ mở thành một thẻ trên khung nhìn; {{ui:Đóng}} (dấu chéo) sẽ đóng nó và xóa các dấu của nó. Mỗi lần chỉ hiện một thẻ.

Mỗi công cụ làm việc trên những gì được in: vùng chọn, hoặc mọi thứ đang hiện nếu không chọn gì. {{ui:Làm rỗng}} và {{ui:Sửa chữa}} cần một nhóm, cấu kiện hoặc lưới được chọn, vì chúng thay đổi nó.

## Xem trước giá đỡ

Các mặt nghiêng ra nhiều hơn **góc nhô ra** so với phương thẳng đứng được tô đỏ, và các giá đỡ đơn giản được vẽ từ chúng (màu cam) xuống bàn in, hoặc xuống phần mô hình nằm bên dưới chúng.

- **Góc nhô ra**: 45° là mức hầu hết máy in làm được mà không cần giá đỡ. Tăng lên đối với máy in tạo cầu tốt.
- **Cột**: một cột thẳng cách nhau 3 mm dưới mỗi phần nhô ra. Ước tính tính chúng như một mẫu giá đỡ 15%.
- **Dạng cây**: các điểm gần nhau nối vào một thân dưới điểm giữa của chúng; không nhánh nào nghiêng quá 45°. Dạng cây thường tốn ít vật liệu hơn và chạm bàn in ở ít chỗ hơn.

Thẻ cho biết bao nhiêu bề mặt cần giá đỡ, có bao nhiêu điểm giá đỡ và chúng tốn khoảng bao nhiêu vật liệu. Các giá đỡ đứng trên mô hình (không phải bàn in) cũng được tính: chúng để lại dấu trên đó. Khi đã chọn bàn in trong {{ui:Cài đặt}}, bàn in được vẽ dưới mô hình.

:::note
Đây là bản xem trước, không phải phần mềm cắt lớp: phần mềm cắt lớp của bạn quyết định giá đỡ thật. Với một phần nhô ra rất lớn, các điểm giá đỡ được trải rộng hơn để bản xem trước vẫn nhanh; thẻ sẽ cho biết điều đó.
:::

## Độ dày thành

Mỗi mặt được đo thẳng xuyên qua khối tới phía bên kia. Các thành nhỏ hơn **độ dày thành mỏng nhất cho phép** được tô đỏ, và các thành nhỏ hơn một rưỡi lần giá trị đó được tô cam: chúng vẫn in được, nhưng có thể yếu.

Các vùng mỏng được liệt kê, mỏng nhất trước, kèm độ mỏng và kích thước của từng vùng. {{ui:Hiện}} xoay camera tới vùng đó.

Máy in không thể tạo thành mỏng hơn khoảng hai lần chiều rộng vòi phun: 0.8 mm với vòi phun 0.4 mm thông dụng (mức khởi đầu). Máy in nhựa lỏng làm được ít hơn; hãy xem hướng dẫn của máy in.

Với mô hình rất lớn, chỉ một số mặt phát tia, và các mặt còn lại lấy độ dày của mặt lân cận; thẻ cho biết có bao nhiêu mặt đã được đo.

## Làm rỗng

Làm rỗng giữ nguyên phần bên ngoài và lấy đi phần bên trong, để lại các thành dày như bạn yêu cầu. Bản in nhựa lỏng dùng ít nhựa hơn và kéo bàn in ít hơn; bản in sợi dùng ít nhựa hơn so với độ đặc (infill).

1. Chọn nhóm, cấu kiện hoặc lưới, rồi mở {{ui:Làm rỗng}}.
2. Đặt **thành** (ban đầu là 2 mm) và độ rộng của **lỗ thoát**.
3. Với bản in nhựa lỏng, nhấp {{ui:Đặt lỗ thoát}}, rồi nhấp vào mặt ngoài của mô hình tại vị trí cần đặt: thấp xuống, gần bàn in, để nhựa lỏng chảy ra. Đặt bao nhiêu tùy ý; mỗi lỗ hiện thành một vòng tròn xanh và được liệt kê cùng {{ui:Gỡ bỏ}}.
4. {{ui:Xem trước}} cho biết việc làm rỗng lấy đi bao nhiêu.
5. {{ui:Làm rỗng}} thực hiện thay đổi: một bước mà {{key:Mod+Z}} hoàn tác.

Kết quả là một khối đặc kín mà kiểm tra in 3D chấp nhận: ModelCraft kiểm tra trước và không thay đổi gì nếu nó không đạt. Nơi mô hình mỏng hơn hai thành, nó vẫn là khối đặc. Kết quả là một nhóm có các mặt phẳng là các mặt đơn, nên bạn có thể tiếp tục tạo hình với {{ui:Đẩy/kéo}}; một chi tiết cong được làm rỗng trên lưới mịn thường có quá nhiều mặt cho việc đó và thay vào đó trở thành lưới, và dòng trạng thái sẽ cho biết điều đó.

:::tip
Với hầu hết hình dạng, phần bên trong là phần bên ngoài được dịch vào đúng bằng độ dày thành. Nơi các góc hoặc chi tiết mỏng làm điều đó không thể, ModelCraft thay vào đó đi theo phần bên ngoài ở khoảng cách của thành trên lưới mịn; khi đó thẻ cho biết sai khác là bao nhiêu (trong phạm vi một phần nhỏ của milimét).
:::

## Sửa chữa

{{ui:Sửa chữa}} xem chi tiết được chọn theo cách phần mềm cắt lớp của máy in sẽ xem, sửa những gì có thể sửa an toàn và liệt kê mọi lần sửa:

| Sửa được | Ý nghĩa |
|---|---|
| Tam giác không có diện tích | bị bỏ qua |
| Tam giác vẽ hai lần | giữ một bản; một mặt vẽ úp lưng vào chính nó (không có độ dày) bị xóa |
| Các mảnh rời dưới 0.5 mm | bị xóa |
| Tam giác quay sai chiều | được lật cho khớp với các tam giác lân cận |
| Lỗ hổng, phẳng hay không | được đóng bằng một quạt các tam giác mới từ giữa mỗi lỗ |
| Một mảnh bị lộn trong ra ngoài | được lật ra ngoài (một khoang rỗng bên trong mảnh khác được giữ nguyên: nó được thiết kế để hướng vào trong) |

{{ui:Sửa những lỗi an toàn}} thực hiện tất cả trong một bước mà {{key:Mod+Z}} hoàn tác, và dòng trạng thái liệt kê từng lần sửa. Chi tiết đã sửa trở thành một nhóm có các mặt phẳng là các mặt đơn. Nếu nó vẫn chưa khép kín (còn mục nào đó dưới **Để bạn xử lý**), hoặc nếu nó sẽ có quá nhiều mặt cho một nhóm, nó thay vào đó trở thành lưới: các mặt của nó vẫn là tam giác, và các mặt phẳng vẫn trông phẳng. Dòng trạng thái cho biết điều đó. {{ui:Nối các chi tiết chồng nhau}} hoạt động theo cách tương tự.

Những gì không thể sửa an toàn được liệt kê dưới **Để bạn xử lý** và được đánh dấu màu tím trong khung nhìn, với {{ui:Hiện}}:

- **Các cạnh nơi ba mặt trở lên gặp nhau**: quyết định mặt nào thuộc về và xóa các mặt còn lại.
- **Một mảnh xuyên qua chính nó**: di chuyển hoặc vẽ lại phần đó. Xem [Giao các mặt](topic:intersect).
- **Lỗ hổng quá lớn hoặc quá rối để đóng**: vẽ các mặt ngang qua chúng.
- **Các mảnh riêng biệt chồng lấp**: phần mềm cắt lớp vẫn gộp chúng. {{ui:Nối các chi tiết chồng nhau}} biến chúng thành một khối kín (nó dựng lại các mặt tại nơi chúng gặp nhau, nên đây là một nút riêng, không bao giờ tự làm cho bạn).

Với các nhóm đẩy/kéo, bạn cũng có thể sửa từng cái một trong {{ui:Thông tin đối tượng}} › {{ui:Hiện lỗi}} / {{ui:Sửa}}, cách này giữ lại các mặt bạn đã vẽ. Xem [Công cụ khối đặc](topic:solids).

Liên quan: [Chuẩn bị mô hình để in 3D](topic:print-3d) · [Kiểu Beginner](topic:beginner) · [Chưa xây dựng](topic:not-built-yet#3d-printing)
