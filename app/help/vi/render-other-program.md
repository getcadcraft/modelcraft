---
title: Vẽ ảnh bằng chương trình khác
summary: Bộ kết xuất riêng của chúng tôi vẽ ảnh Kết xuất; chương trình khác chỉ có thể vẽ thông qua tiện ích bổ sung bộ kết xuất trong CadCraft Studio. Những gì được chuyển sang, và lý do một số chương trình không bao giờ được cung cấp.
keywords: kết xuất, engine, chương trình bên ngoài, bộ kết xuất tiện ích bổ sung, studio, nền, hàng đợi, usd, gltf, được vẽ bởi, blender, gpl
from: 150f94f1
---

Ảnh trong {{ui:Kết xuất ảnh…}} được vẽ bởi **các bộ kết xuất riêng của chúng tôi**: Fast và Path tracer, trong trình duyệt và trong CadCraft Studio. Chương trình khác chỉ có thể vẽ khi một **tiện ích bổ sung bộ kết xuất** mang nó đến: xem [Thêm một bộ kết xuất bằng tiện ích bổ sung](topic:render-engine-addons). Để đưa cảnh sang chương trình khác và tiếp tục làm việc ở đó, dùng [Mở cảnh trong chương trình khác](topic:render-open-in) hoặc [Gửi cảnh tới công cụ game](topic:render-unreal).

## Vẽ ảnh bằng bộ kết xuất của tiện ích bổ sung

1. Bật tiện ích bổ sung trong Cài đặt › Tiện ích bổ sung. Bộ kết xuất của nó xuất hiện trong danh sách Engine của {{ui:Kết xuất ảnh…}}.
2. Chọn nó. Các cài đặt riêng của nó hiện dưới danh sách Engine.
3. Nhấp {{ui:Kết xuất}}. Trong Studio, lần đầu tiên một tiện ích bổ sung chạy một chương trình, Studio hỏi bạn trong hộp thoại riêng của nó. Tiến trình hiện trong khi nó vẽ; {{ui:Dừng}} sẽ kết thúc nó. Ảnh xuất hiện được đánh dấu bằng bộ kết xuất đã vẽ nó.

Một bộ kết xuất viết bằng JavaScript cũng chạy trong trình duyệt. Một bộ kết xuất chạy chương trình trên máy tính này chỉ chạy trong Studio; trong trình duyệt, nó hiện như một tệp để lưu.

## Những gì được chuyển sang

Bộ kết xuất nhận một **gói**: mô hình dưới dạng tệp USD (và tệp glTF khi nó yêu cầu), và một tệp cài đặt với các giá trị vật liệu chính xác, mặt trời và bầu trời, mọi đèn đang bật cùng công suất và profile ánh sáng, camera và độ phơi sáng. Mỗi chương trình chiếu sáng, chỉnh tông và lấy mẫu theo cách riêng, nên các ảnh giống nhau về camera, mặt trời, đèn và độ phơi sáng, nhưng không giống hệt từng điểm ảnh.

## Các chương trình CadCraft không bao giờ chạy

CadCraft không bao giờ khởi động một chương trình theo giấy phép GNU GPL, và không bao giờ liệt kê một chương trình như một bộ kết xuất hay một đích Mở trong. Blender là một trong số đó, nên nó không có trong danh sách Engine. Một tệp USD hoặc glTF được lưu từ {{ui:Kết xuất ảnh…}} vẫn mở được trong nó như trong bất kỳ chương trình nào đọc các tệp đó.

:::note
Camera toàn cảnh và camera lập thể, cùng ảnh bầu trời (thay vào đó dùng màu của bầu trời) không được chuyển sang chương trình khác. Không có gì làm trong chương trình khác quay lại mô hình.
:::
