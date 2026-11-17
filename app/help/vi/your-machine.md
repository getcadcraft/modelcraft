---
title: Máy của bạn kết xuất bằng gì
summary: Cài đặt › Kết xuất hiển thị card đồ họa, nhân bộ xử lý và bộ nhớ mà trình duyệt này cho phép ứng dụng dùng, cùng mức quyết định điểm bắt đầu kết xuất.
keywords: máy của bạn, card đồ họa, gpu, webgpu, webgl, bộ xử lý, cpu, nhân, luồng, bộ nhớ, ram, bộ nhớ dùng chung, cô lập, bậc, mức, tốc độ, chậm, tốc độ kết xuất, laptop
from: 8a0c21c9
---

Mở {{ui:Cài đặt}} ({{key:Mod+,}}), ở lại thẻ riêng của ứng dụng này và cuộn đến {{ui:Kết xuất}}. {{ui:Máy của bạn}} liệt kê những gì trình duyệt này cho phép ứng dụng dùng để kết xuất. Không có gì trong đó rời khỏi máy tính của bạn.

| Mục | Ý nghĩa |
|---|---|
| {{ui:Đồ họa}} | Card đồ họa mà trình duyệt báo cáo. "WebGPU" nghĩa là card có thể thực hiện toàn bộ công việc kết xuất; "WebGL 2 only" nghĩa là xem trực tiếp và {{ui:Kết xuất ảnh…}} dùng card này (chất lượng cao với bộ dò tia WebGL), còn kết xuất trong khung nhìn và hàng đợi kết xuất, vốn cần WebGPU, không được cung cấp; bộ thay thế bằng phần mềm nghĩa là mọi thứ chạy trên bộ xử lý |
| {{ui:Bộ xử lý}} | Số nhân bộ xử lý mà trình duyệt báo cáo |
| {{ui:Bộ nhớ}} | Dung lượng bộ nhớ gần đúng của máy tính, khi trình duyệt cung cấp thông tin. Một số trình duyệt không cung cấp |
| {{ui:Bộ nhớ dùng chung}} | Trang có được phép chia sẻ bộ nhớ giữa các worker của nó hay không. Khi bật, mọi nhân có thể làm việc trên một bản sao của cảnh; khi tắt, mỗi nhân cần bản sao riêng, nên cảnh lớn chỉ vừa cho ít nhân hơn cùng lúc |
| {{ui:Mã bộ xử lý nhanh}} | Trình duyệt có chạy mã WebAssembly nhanh hơn hay không. Nếu không, một phương án dự phòng chậm hơn sẽ được dùng |
| {{ui:Mức}} | {{ui:Card đồ họa, cao}}, {{ui:Card đồ họa, cơ bản}} hoặc {{ui:Chỉ bộ xử lý}}, kèm lý do bên dưới |

## Mức

Mức quyết định [xem trực tiếp](topic:live-view) bắt đầu ở đâu ({{ui:Theo máy tính này}}), số đối tượng rải rác mà chế độ này vẽ, và số mặt tối đa mà [bề mặt chia nhỏ](topic:modifiers#subdivision-surface) được hiển thị trong khung nhìn, để laptop có chip đồ họa tích hợp hoặc không có card đồ họa nào vẫn phản hồi nhanh. Chip đồ họa tích hợp hoặc chip trên điện thoại, hoặc bộ nhớ từ 4 GB trở xuống, không bao giờ được {{ui:Card đồ họa, cao}}.

:::note
Các trình duyệt khác nhau. Cùng một máy tính có thể hiển thị WebGPU ở trình duyệt này và "WebGL 2 only" ở trình duyệt khác. Trên Linux, phần lớn trình duyệt chưa có WebGPU.
:::
