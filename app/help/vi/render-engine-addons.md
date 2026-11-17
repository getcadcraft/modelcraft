---
title: Thêm một bộ kết xuất bằng tiện ích bổ sung
summary: Tiện ích bổ sung có thể thêm gì vào danh sách Engine của hộp thoại Kết xuất, quyền cần để chạy một chương trình, và những gì Studio kiểm tra và hỏi.
keywords: tiện ích bổ sung, addon, bộ kết xuất, engine, nhà phát triển, engine.run, quyền, chương trình, kịch bản, đã ký, studio, api
from: cd7a39ba
---

Một tiện ích bổ sung (Cài đặt › Tiện ích bổ sung) có thể thêm một bộ kết xuất vào danh sách Engine của {{ui:Kết xuất ảnh…}}. Nội dung đầy đủ dành cho tác giả tiện ích bổ sung là mục 16 của đặc tả tiện ích bổ sung; tóm lại:

- Tiện ích bổ sung đăng ký một bộ kết xuất với một id bắt đầu bằng id của chính nó, một tên, các cài đặt tùy chọn và **hoặc** một chương trình để chạy **hoặc** một hàm JavaScript vẽ ảnh.
- Một bộ kết xuất chạy chương trình cần quyền **`engine.run`**, được hiển thị trước khi cài đặt và trong Cài đặt. Nó chỉ chạy trong Studio; trong trình duyệt, nó hiện như một tệp để lưu.
- Tiện ích bổ sung nêu tên chương trình (một tên tệp thuần túy, không bao giờ là shell), một kịch bản **nằm bên trong tiện ích bổ sung đã ký**, và các đối số gồm các chỗ giữ chỗ và từ thuần túy. Studio tìm chương trình hoặc hỏi bạn chỉ đến nó một lần.
- Lần đầu tiên một tiện ích bổ sung chạy một chương trình, **Studio hỏi bạn trong hộp thoại riêng của nó**: tiện ích bổ sung nào, chương trình nào, và rằng một kịch bản có thể làm bất cứ điều gì chương trình làm được. Chỉ cho phép với tiện ích bổ sung bạn tin cậy. Câu trả lời của bạn được ghi nhớ cho tiện ích bổ sung và chương trình đó.
- Gói (cảnh dưới dạng USD và một tệp cài đặt, cùng tệp glTF khi tiện ích bổ sung yêu cầu) và kịch bản của tiện ích bổ sung được đưa vào một thư mục tạm mới, chương trình chạy ở đó, và ảnh trả về được đánh dấu bằng tên bộ kết xuất của tiện ích bổ sung.

:::note
Tiện ích bổ sung chỉ có thể thêm bộ kết xuất từ API tiện ích bổ sung 1.4. Một ví dụ minh họa cho một trình kết xuất dòng lệnh mã nguồn mở nằm trong kho lưu trữ riêng của nó; ví dụ đó chưa được chạy trên trình kết xuất đó.
:::
