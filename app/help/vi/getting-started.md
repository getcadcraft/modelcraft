---
title: Bắt đầu với ModelCraft
summary: ModelCraft dùng để làm gì, cách mở nó, và chiếc hộp đầu tiên của bạn từ một hình chữ nhật đến một mô hình đã lưu.
keywords: bắt đầu, mô hình đầu tiên, khởi đầu, hướng dẫn, giới thiệu, hộp, khối, 3d, đẩy kéo, khởi đầu nhanh, có hướng dẫn, người mới, mới làm quen 3d
from: d47ad719
---

ModelCraft là phần mềm mô hình hóa 3D cho giai đoạn thiết kế sớm: nghiên cứu khối, bố trí phòng, hình khối công trình nhanh và bóng đổ của chúng. Bạn vẽ các hình phẳng, kéo chúng lên thành khối đặc, và tiếp tục làm việc bằng cách vẽ trên các mặt của chúng. Nó chạy trong trình duyệt web và các mô hình của bạn ở lại trên máy tính của bạn.

Nếu bạn đã dùng SketchUp, phần lớn những gì bạn biết đều áp dụng được: cùng các chữ cái công cụ, đẩy/kéo, một ô giá trị cho kích thước chính xác, nhóm và cấu kiện. [Chuyển từ các phần mềm mô hình khác sang](topic:coming-from) liệt kê điểm khác biệt.

## Mở ModelCraft

1. Mở ModelCraft trong phiên bản hiện tại của Chrome, Edge, Firefox hoặc Safari. Xem [Trình duyệt và máy tính](common:browsers).
2. Đợi khung nhìn 3D xuất hiện: một vùng sáng (hoặc tối) ở giữa với một thẻ có tiêu đề "Bắt đầu mô hình hóa".

Màn hình có thanh công cụ ở trên, {{ui:Cây đối tượng}} và {{ui:Cấu kiện}} ở bên trái, khung nhìn 3D ở giữa, {{ui:Thông tin đối tượng}}, {{ui:Kiểu}} và {{ui:Cảnh}} ở bên phải, và thanh trạng thái ở dưới cùng với ô giá trị và đơn vị. [Màn hình ModelCraft](topic:workspace) giải thích từng phần.

:::note
ModelCraft cần WebGL, tính năng vẽ 3D của trình duyệt. Nếu phần giữa màn hình vẫn trống và các công cụ không làm gì, hãy xem [Khắc phục sự cố](topic:troubleshooting#the-3d-view-is-blank).
:::

## Kiểm tra đơn vị trước

Nhìn vào góc dưới bên phải. Bộ chọn đơn vị cho biết chiều dài được đo bằng gì.

- Một mô hình mới bắt đầu bằng **feet và inch** khi trình duyệt của bạn đặt ở Hoa Kỳ (cả Liberia và Myanmar), và bằng **milimét** ở mọi nơi khác.
- Để đổi, hãy chọn đơn vị khác trong bộ chọn: {{ui:ft và in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} hoặc {{ui:mm}}. Bản thân mô hình không đổi kích thước; chỉ cách hiển thị chiều dài và cách đọc các số trần thay đổi.

Một số bạn gõ không kèm đơn vị sẽ dùng đơn vị của mô hình. Trong mô hình feet và inch, một số trần là **inch**, nên `120` nghĩa là 10 feet.

## Để ModelCraft dẫn bạn qua mô hình đầu tiên

Mới làm quen với 3D? Trên thẻ {{ui:Bắt đầu mô hình hóa}}, bấm {{ui:Mô hình đầu tiên có hướng dẫn}} (nó cũng nằm trong {{ui:Khung nhìn}}). Một thẻ nhỏ dẫn bạn qua bốn bước, từ một hình chữ nhật phẳng đến một mô hình sẵn sàng cho máy in 3D:

1. Vẽ một hình chữ nhật trên mặt đất.
2. Kéo nó lên thành một cái hộp.
3. Biến cái hộp thành một đối tượng (một nhóm).
4. Kiểm tra nó cho in 3D, rồi tải xuống tệp 3MF hoặc STL.

Thẻ theo dõi mô hình chứ không phải các nút: nó chuyển bước khi việc đã xong, dù bạn làm bằng cách nào, và lùi một bước khi bạn hoàn tác. {{ui:Chọn công cụ}} chọn công cụ giúp bạn. Đóng nó bất cứ lúc nào bằng {{ui:×}}.

## Vẽ chiếc hộp đầu tiên

1. Nhấn {{key:R}} cho công cụ {{ui:Hình chữ nhật}}, hoặc bấm {{ui:Hình chữ nhật}} trong nhóm {{ui:Vẽ}} của thanh công cụ.
2. Bấm một lần lên mặt đất gần giữa khung nhìn. Đó là góc đầu tiên.
3. Di chuyển con trỏ ra xa. Một hình chữ nhật đi theo nó, và ô giá trị ở dưới (có nhãn {{ui:Kích thước}}) hiện kích thước của nó.
4. Gõ kích thước rồi nhấn {{key:Enter}}: ví dụ `4m,3m`, hoặc `16',12'` theo feet và inch. Bạn không cần bấm vào ô giá trị trước; gõ một số là nó tự chuyển vào đó.

   Bạn được một hình chữ nhật phẳng trên mặt đất. Đó là một **mặt**: một bề mặt có các cạnh bao quanh.

5. Nhấn {{key:P}} cho {{ui:Đẩy/kéo}}.
6. Bấm vào hình chữ nhật, di chuyển con trỏ lên, rồi bấm lần nữa. Hoặc bấm vào hình chữ nhật và gõ một chiều cao, như `3m` hoặc `10'`, rồi nhấn {{key:Enter}}.

   Hình chữ nhật trở thành một cái hộp có mặt trên, mặt dưới và bốn mặt bên.

7. Nhấn {{key:Space}} để quay lại {{ui:Chọn}}, rồi bấm vào mặt trên của hộp. {{ui:Thông tin đối tượng}} bên phải cho biết diện tích của nó.

:::tip
Bạn cũng có thể kéo thay vì bấm hai lần: nhấn vào góc đầu tiên, kéo, và thả ở góc thứ hai. Cả hai cách đều dùng được với mọi công cụ vẽ.
:::

## Nhìn quanh

- **Xoay quanh:** kéo bằng nút chuột giữa (con lăn), hoặc nhấn {{key:O}} và kéo bằng nút trái.
- **Di chuyển khung nhìn:** kéo bằng nút phải, hoặc bằng nút giữa khi giữ {{key:Shift}}.
- **Thu phóng:** xoay con lăn. Nó thu phóng về phía bất cứ thứ gì dưới con trỏ.
- **Xem toàn bộ:** nhấn {{key:Shift+Z}}, hoặc bấm {{ui:Phạm vi}}.

Trên bàn di chuột hoặc màn hình cảm ứng, các cử chỉ khác đi. Xem [Xoay quanh, di chuyển và thu phóng](topic:orbit-pan-zoom).

## Hoàn tác

Nhấn {{key:Mod+Z}} để hoàn tác và {{key:Mod+Y}} để làm lại, hoặc dùng {{ui:Hoàn tác}} và {{ui:Làm lại}} trên thanh công cụ. ModelCraft nhớ 200 bước gần nhất trong khi mô hình còn mở. Lịch sử không được lưu trong tệp.

## Lưu mô hình của bạn

1. Bấm {{ui:Lưu}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+S}}.
2. Trình duyệt tải xuống một tệp đặt tên theo mô hình của bạn, như `Untitled.modelcraft`. Thanh trạng thái cho biết nó đã đi đâu: "Đã lưu Untitled.modelcraft vào thư mục tải xuống của bạn."

**Lưu là một lần tải xuống.** Mỗi lần lưu tạo một bản sao mới trong thư mục tải xuống của bạn; nó không ghi đè tệp bạn đã mở. Để giữ thư mục dự án gọn gàng, hãy tự di chuyển hoặc đổi tên tệp ở đó. [Mở, lưu, nhập và xuất](topic:files) giải thích lý do và những gì bạn có thể làm thêm.

:::warning
ModelCraft không tự lưu. Nếu bạn đóng thẻ khi còn thay đổi chưa lưu, trình duyệt sẽ hỏi trước ("Rời khỏi trang?"). Hãy chọn ở lại, rồi lưu.
:::

## Nhận trợ giúp

Nhấn {{key:F1}} hoặc bấm {{ui:Trợ giúp}} trên thanh ứng dụng để mở phần trợ giúp này bên cạnh mô hình. Nó chạy được khi không có kết nối. Nhấn {{key:F1}} lần nữa, hoặc {{key:Esc}} trong phần trợ giúp, để đóng. Xem [Dùng phần trợ giúp này](common:help).

## Đi tiếp đến đâu

- [Vẽ mặt bằng cách dùng đường thẳng, hình chữ nhật và vòng tròn](topic:draw-faces)
- [Đẩy và kéo các mặt thành khối đặc](topic:push-pull)
- [Gõ kích thước chính xác vào ô giá trị](topic:value-box)
- [Mọi phím và thao tác chuột](topic:keyboard)
