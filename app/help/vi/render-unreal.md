---
title: Gửi cảnh sang công cụ game
summary: Studio có thể ghi cảnh vào một dự án Unreal Engine và giữ nó đồng bộ mỗi lần gửi; các chỉnh sửa của bạn nằm trong một lớp mà CadCraft không bao giờ ghi. Plug-in mở nó chưa được phát hành.
keywords: unreal, unreal engine, công cụ game, liên kết, gửi, usd stage, dự án, live, cine camera, hàng đợi kết xuất phim
from: 9a765cc2
---

Trong CadCraft Studio, danh sách Engine có thể giữ một **liên kết** tới một dự án Unreal Engine. Chỉ một chiều: từ CadCraft sang Unreal.

## Gửi cảnh

1. Chọn mục Unreal trong danh sách Engine. Lần đầu, Studio yêu cầu bạn chọn thư mục dự án (thư mục có tệp `.uproject`); Studio sẽ ghi nhớ thư mục này.
2. Nhấn {{ui:Gửi}}. Studio ghi `CadCraft/<tên tệp>/` vào trong dự án: cảnh dưới dạng tệp USD, tệp cài đặt, các hồ sơ đèn và hai tệp lớp nhỏ.
3. Thay đổi mô hình, lưu rồi gửi lại. Chỉ cảnh và tệp cài đặt được thay thế.

## Chỉnh sửa của bạn vẫn an toàn

Stage mà Unreal mở là một lớp gốc nhỏ, được tạo một lần, với hai lớp nằm dưới nó: **của bạn** ở trên (`<name>.user.usda`, lúc đầu rỗng, CadCraft không bao giờ ghi lại) và cảnh của CadCraft ở dưới. Các chỉnh sửa bạn lưu vào lớp của riêng mình sẽ được giữ lại khi cảnh được gửi lại. Đèn và các actor khác bạn đặt trong level Unreal nằm ngoài stage và cũng không bị ảnh hưởng.

## Không dùng Studio

Trên trình duyệt, hoặc trên máy tính mà Studio không tìm thấy Unreal, chọn **Thư mục dự án Unreal (.zip)** trong danh sách Engine rồi nhấn {{ui:Kết xuất}}. Lệnh này lưu cùng thư mục đó dưới dạng zip: giải nén vào thư mục `CadCraft` của dự án. Giữ **Bao gồm tệp stage** ở lần đầu; tắt đi khi lưu các lần sau, để zip chỉ chứa cảnh và tệp cài đặt, và lớp riêng của bạn không bao giờ bị thay thế.

:::note
Plug-in Unreal mở stage, áp dụng mặt trời, đèn, camera và độ phơi sáng, theo dõi mỗi lần Gửi và kết xuất một camera hiện **chưa được phát hành**, và chưa được chạy trong Unreal. Cho tới khi có, Gửi chỉ đặt các tệp vào dự án, và các công cụ USD của chính Unreal có thể mở chúng. Windows là hệ điều hành đầu tiên; macOS sẽ theo sau.
:::
