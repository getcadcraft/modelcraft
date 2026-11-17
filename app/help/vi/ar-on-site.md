---
title: Xem mô hình tại công trường bằng điện thoại Android (AR)
summary: Giơ điện thoại Android dùng Chrome lên và xem mô hình ở kích thước thật phủ trên camera, được căn chỉnh vào công trình bằng hai điểm bạn đứng tại đó, có kính tia X và kiểm tra lại nhanh ở lần ghé thăm sau. Dùng để xem, không dùng để đặt mốc.
keywords: ar, thực tế tăng cường, điện thoại, android, chrome, webxr, tại công trường, công trường, camera, kích thước thật, tia x, căn chỉnh, canh chỉnh, kiểm tra lại, arcore
from: 0f43b50b
---

{{ui:View on site (AR, phone)}} trong menu {{ui:Views}} hiển thị mô hình ở kích thước thật phủ trên camera của điện thoại. Tính năng này chạy trên **điện thoại Android dùng Chrome**, trên trang an toàn (https), khi điện thoại hỗ trợ AR. Trên iPhone hoặc iPad, máy tính, hay một ứng dụng Android chỉ hiển thị trang web, mục này sẽ cho biết lý do không thể khởi động; khi đó hãy dùng khung nhìn 3D, hoặc mở trang này bằng Chrome trên điện thoại.

**Điện thoại chỉ dùng để xem.** Đừng đo, đặt mốc hay cắt bất cứ thứ gì dựa trên những gì màn hình hiển thị: điện thoại trôi dần khi bạn đi lại, và sai số khi chỉ điểm tăng theo khoảng cách từ hai điểm bạn đã căn chỉnh (vài centimet gần chúng, nhiều hơn khi ở xa). Không có gì ở đây đạt chuẩn trắc địa.

## Căn chỉnh mô hình

1. Mở mô hình trên điện thoại và chọn {{ui:View on site (AR, phone)}}. Cho phép camera.
2. Bảng ở dưới cùng ghi tên điểm đầu tiên (một góc đất của mô hình). Đứng tại đó ngoài công trường, hướng vòng xanh vào mặt đất, rồi chạm {{ui:Place point}}.
3. Đi đến điểm thứ hai, cách ít nhất nửa mét (càng xa thì càng khớp), và làm tương tự.
4. Mô hình xuất hiện ở kích thước thật, được xoay và di chuyển để khớp với hai vị trí. Bảng cho biết hai điểm khớp nhau đến mức nào.

{{ui:Start over}} xóa các điểm. Việc căn chỉnh được lưu trong tệp mô hình, nên lần sau khi bạn mở mô hình tại công trường, nó bắt đầu ở trạng thái đã căn chỉnh.

## Kính tia X

{{ui:X-ray lens}} hiển thị toàn bộ mô hình bên trong một hộp đặt trước điện thoại (rộng khoảng một mét rưỡi và sâu ba mét) và chỉ hiện một bóng mờ ở những nơi khác, để bạn xem thứ nằm sau một bức tường mà không làm mất bức tường thật.

## Lần ghé thăm sau

Đứng tại điểm thứ nhất và chạm {{ui:Re-check}}, rồi {{ui:Place point}}. Nếu lệch dưới 5 centimet, việc căn chỉnh được giữ nguyên. Nếu lệch đến nửa mét, mô hình di chuyển đúng bằng phần chênh lệch. Nếu lệch nhiều hơn, bảng sẽ yêu cầu bạn chỉ lại hai vị trí.

## Thoát

{{ui:Leave AR}} kết thúc phiên. Ảnh từ camera vẫn nằm trong trình duyệt: không có gì được tải lên.
