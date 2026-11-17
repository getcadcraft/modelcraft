---
title: Chọn chương trình nào vẽ ảnh
summary: Lựa chọn Engine trong hộp thoại Kết xuất: hai bộ kết xuất của chúng tôi, các chương trình khác trong CadCraft Studio, và web làm gì thay thế.
keywords: kết xuất, engine, bộ kết xuất, render engine, plug-in, plugin, studio, chương trình bên ngoài, được vẽ bởi, hàng đợi, bộ kết xuất tiện ích bổ sung
from: be4b056a
---

{{ui:Kết xuất ảnh…}} có một lựa chọn **Engine** phía trên Chế độ. Hai bộ kết xuất riêng của chúng tôi luôn có sẵn và hoạt động ở mọi nơi; tiện ích bổ sung có thể thêm nhiều hơn, và trong CadCraft Studio, danh sách cũng chứa các chương trình tiếp nhận cảnh.

| Engine | Chức năng | Ở đâu |
|---|---|---|
| Tích hợp sẵn: Fast | Ảnh tĩnh nhanh: ánh sáng ban ngày, bóng đổ mềm, vẻ kính và kim loại, trong vài giây | Trình duyệt và Studio |
| Tích hợp sẵn: Path tracer | Ánh sáng nảy giữa các bề mặt trên card đồ họa hoặc bộ xử lý của bạn, hàng đợi kết xuất và các máy tính khác trong mạng của bạn | Trình duyệt và Studio |
| Bộ kết xuất của một tiện ích bổ sung | Nó vẽ và trả ảnh lại: xem [Vẽ ảnh bằng chương trình khác](topic:render-other-program) | Trình duyệt (bộ kết xuất viết bằng JavaScript) hoặc Studio (bộ kết xuất chạy một chương trình) |
| Chương trình tiếp nhận cảnh | Studio đặt cảnh vào thư mục của nó và giữ cho nó đồng bộ | Studio |
| Mở trong … | Lưu cảnh và mở nó trong một chương trình; không có gì trả về: xem [Mở cảnh trong chương trình khác](topic:render-open-in) | Web lưu tệp |

## Lựa chọn hoạt động thế nào

- Chọn Fast hoặc Path tracer sẽ đổi Chế độ theo, và ngược lại. Không có gì khác trong hộp thoại thay đổi đối với những ai không bao giờ dùng bộ kết xuất khác.
- Một bộ kết xuất không khả dụng vẫn nằm trong danh sách kèm lý do ("không tìm thấy", "cần phiên bản mới hơn"); bạn không thể chọn nó. Trong trình duyệt, một bộ kết xuất chỉ chạy trong Studio hiện "lưu tệp": {{ui:Kết xuất ảnh…}} khi đó lưu cảnh và cài đặt của nó vào một tệp để bạn mang sang chương trình đó.
- Lựa chọn được lưu cùng cài đặt kết xuất của tệp, và bộ kết xuất bạn chọn lần cuối là bộ kết xuất khởi đầu cho các tệp không có lựa chọn riêng.
- Ảnh từ chương trình khác cho biết chương trình nào đã vẽ nó và phiên bản của nó, trong hộp thoại và trong hàng đợi kết xuất. Các cam kết của trang [Kết xuất](topic:render) chỉ áp dụng cho các bộ kết xuất **của chúng tôi**: chương trình khác chiếu sáng, chỉnh tông và lấy mẫu theo cách riêng, nên hai ảnh của một cảnh giống nhau về camera, mặt trời, đèn và độ phơi sáng, nhưng không giống hệt từng điểm ảnh.

## Mọi bộ kết xuất nhận được gì

Cảnh được chuyển sang chương trình khác dưới dạng một **gói**: mô hình dưới dạng tệp USD (cùng tệp mà [Lưu thành USD](topic:usd) ghi), và một tệp cài đặt chứa những gì bộ nhập USD không thể tin cậy được: các giá trị vật liệu chính xác, các đèn đang bật với công suất và profile ánh sáng, mặt trời, bầu trời, độ phơi sáng và camera như hộp thoại sẽ vẽ. Không có gì được tải lên bất cứ đâu.

## Hàng đợi kết xuất

Một ảnh hoặc hoạt ảnh cho chương trình khác có thể chờ trong [hàng đợi kết xuất](topic:render#the-render-queue) như của chúng tôi; công việc của nó ghi nhớ bộ kết xuất nào dành cho nó. Một hoạt ảnh được chuyển sang chương trình trong một lần chạy.
