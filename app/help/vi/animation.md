---
title: Hoạt họa camera và đối tượng, rồi kết xuất video
summary: Đặt khóa cho camera và cho các nhóm, cấu kiện trên dòng thời gian, phát chúng trong khung nhìn, và kết xuất hoạt ảnh thành video WebM với bầu trời, mặt trời và vật liệu của bộ kết xuất.
keywords: hoạt ảnh, hoạt họa, dòng thời gian, khung hình chính, khóa, khóa khung hình, đường đi của camera, bay qua, đi qua, đi bộ, video, phim, webm, kết xuất video, khung hình, tốc độ khung hình, fps, đầu phát, khóa tự động, làm dịu, làm mượt, giữ, cảnh, chuỗi png, chuyển động
from: d3a58249
---

**Dòng thời gian** di chuyển camera và bất kỳ nhóm hay cấu kiện nào theo thời gian. Bạn đặt **khóa** (vị trí của một thứ tại một thời điểm nhất định); ModelCraft di chuyển nó mượt mà từ khóa này sang khóa kia. Phát trong khung nhìn, rồi kết xuất thành video với cùng bầu trời, mặt trời, vật liệu và đèn như [một ảnh kết xuất](topic:render).

## Mở dòng thời gian

Nhấp {{ui:Views}} trong nhóm {{ui:Camera}}, rồi nhấp {{ui:Animation timeline}}. Dòng thời gian mở ra bên dưới khung nhìn: các điều khiển ở trên cùng, sau đó là một hàng **Camera** và một hàng cho mỗi nhóm hoặc cấu kiện chuyển động. Các hình thoi là khóa; vạch đỏ là **đầu phát**, thời điểm đang hiển thị trong khung nhìn.

:::touch
Trên điện thoại, dòng thời gian cũng mở bên dưới khung nhìn. Các điều khiển nằm trên một hàng: vuốt ngang để xem phần còn lại; nút đóng dòng thời gian luôn nằm ở cuối hàng.
:::

Kéo thanh trượt (hoặc nhấp vào một hàng) để di chuyển đầu phát. {{ui:Play}} phát từ đầu phát và đổi thành {{ui:Pause}} khi đang phát; nhấp lại để dừng ngay tại đó. {{key:Space}} làm điều tương tự khi dòng thời gian đang mở (khi dòng thời gian đóng, Space vẫn là Select). {{ui:Previous key}} và {{ui:Next key}} nhảy giữa các khóa. Kiểu giao diện riêng của bạn có thể gán phím khác cho phát và tạm dừng: {{ui:Settings}}, rồi các menu, phím và chuột, lệnh *Play or pause the animation*.

## Di chuyển camera

1. Đưa đầu phát đến nơi cảnh bắt đầu (0 s), chỉnh khung nhìn, rồi nhấp {{ui:Key camera}}.
2. Đưa đầu phát đến sau này (chẳng hạn 4 s), xoay, di chuyển hoặc đi bộ khung nhìn đến vị trí kế tiếp, rồi nhấp {{ui:Key camera}} lần nữa.
3. Thêm bao nhiêu khóa tùy ý, rồi nhấp {{ui:Play}}.

Camera đi qua mọi khóa một cách mượt mà và bắt đầu cũng như kết thúc ở trạng thái nghỉ.

:::tip
Đã có [cảnh](topic:scenes)? {{ui:From scenes}} tạo đường đi của camera từ chúng: camera giữ lại ở mỗi cảnh, rồi chuyển sang cảnh kế tiếp. Nếu dòng thời gian không có khóa nào, {{ui:Render video…}} tự làm việc này, nên hai cảnh trở lên là đủ cho một video đi bộ.
:::

## Di chuyển một nhóm hoặc cấu kiện

1. Chọn nhóm hoặc cấu kiện (chỉ các nhóm và cấu kiện nguyên vẹn mới di chuyển; [hãy tạo nhóm](topic:groups-components) trước).
2. Tại 0 s, nhấp {{ui:Key selected}}.
3. Đưa đầu phát đến sau này, [di chuyển, xoay hoặc thay đổi tỷ lệ](topic:move-copy) nhóm đến vị trí cần thiết, rồi nhấp {{ui:Key selected}} lần nữa.

Nhóm trượt, xoay và lớn lên giữa các khóa của nó. Góc xoay đi theo đường ngắn hơn.

**Khóa tự động** bỏ qua cú nhấp ở bước 3: khi {{ui:Auto key}} được bật, một nhóm hoặc cấu kiện đang chọn mà bạn di chuyển, xoay hoặc thay đổi tỷ lệ sẽ tự nhận một khóa tại đầu phát (và lần đầu, một khóa tại 0 s nơi nó đã nằm).

:::note
Di chuyển một nhóm có hoạt họa mà không đặt khóa chỉ có hiệu lực cho đến khi đầu phát di chuyển: lần tới khi bạn phát hoặc kéo đầu phát, nhóm sẽ trở về vị trí mà các khóa của nó đặt. Thanh trạng thái cho biết điều này. Nhấn {{ui:Key selected}} để giữ lại.
:::

## Thay đổi khóa

- **Chọn một khóa** bằng cách nhấp vào hình thoi của nó: đầu phát sẽ đến đó.
- **Di chuyển một khóa** bằng cách kéo hình thoi dọc theo hàng, hoặc bằng {{key:Left}} và {{key:Right}} (một khung hình; với {{key:Shift}}, mười khung hình).
- **Xóa** bằng {{ui:Delete key}} (khóa đã chọn, hoặc mọi khóa tại đầu phát) hoặc {{key:Delete}} trên một hình thoi đã chọn.
- **Cách chuyển sang khóa kế tiếp**, cho khóa đã chọn: {{ui:Smooth}} (một đường cong đi qua các khóa xung quanh), {{ui:Steady}} (một đường thẳng với tốc độ đều), {{ui:Slow in and out}} (dừng lại tại khóa này) hoặc {{ui:Hold}} (đứng yên cho đến khóa kế tiếp).
- **Length (s)** đặt độ dài của hoạt ảnh; một khóa đặt sau điểm kết thúc sẽ làm nó dài thêm. Để rút ngắn, hãy di chuyển hoặc xóa các khóa nằm sau điểm kết thúc mới trước.
- Nút **×** trên hàng của một nhóm sẽ dừng việc làm hoạt họa cho nhóm đó.

Dòng thời gian có {{ui:Undo}} và {{ui:Redo}} riêng: hoàn tác của mô hình ({{key:Mod+Z}}) thay đổi mô hình, không thay đổi các khóa. Hoạt ảnh được lưu trong tệp `.modelcraft`. Đóng dòng thời gian sẽ đưa các nhóm đang chuyển động về tư thế đầu tiên.

## Kết xuất video

1. Nhấp {{ui:Render video}} trên dòng thời gian (hoặc {{ui:Export}} › {{ui:Render video…}}).
2. Chọn {{ui:Size}}, {{ui:Frame rate}}, {{ui:Quality of each frame}} và {{ui:File}}.
3. Nhấp {{ui:Render video}}. Mỗi khung hình hiển thị khi được tạo, cùng thời gian còn lại.
4. Khi hoàn tất, nhấp {{ui:Save video}}.

{{ui:Stop}} (hoặc {{key:Esc}}) kết thúc sớm; khi đó {{ui:Save video}} giữ các khung hình đã tạo thành một video ngắn hơn.

Bầu trời, mặt trời, vật liệu, đèn và độ sáng là những gì được đặt trong {{ui:Render a picture…}}: hãy đặt chúng ở đó trước, kiểm tra một ảnh tĩnh. Mỗi khung hình được kết xuất trên máy tính này; không có gì được tải lên.

| Cài đặt | Tác dụng |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, hoặc hình dạng riêng của khung nhìn (rộng tối đa 1920 pixel) |
| {{ui:Frame rate}} | 24, 25, 30 hoặc 60 khung hình mỗi giây. Gấp đôi số khung hình thì mất gấp đôi thời gian |
| {{ui:Quality of each frame}} | {{ui:Quick}} (4 lượt), {{ui:Draft}} (16) hoặc {{ui:Good}} (64): nhiều lượt hơn cho bóng và cạnh mượt hơn |
| {{ui:File}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} khi trình duyệt có thể ghi được, hoặc {{ui:PNG pictures, one per frame (ZIP)}} cho trình chỉnh sửa video (và cho trình duyệt không có bộ mã hóa video) |

:::tip
Một video 10 giây ở 30 khung hình mỗi giây có 301 khung hình. Hãy thử {{ui:Quick}} ở 480p trước để kiểm tra chuyển động, rồi kết xuất {{ui:Draft}} hoặc {{ui:Good}} ở kích thước lớn hơn.
:::

WebM phát được trên trình duyệt và VLC, còn trình chỉnh sửa video có thể chuyển đổi nó. {{ui:MP4 video (H.264)}} được cung cấp khi trình duyệt có thể ghi nó. {{ui:Render video}} dùng bộ kết xuất nhanh; để kết xuất theo path tracing cho mọi khung hình, chọn {{ui:Add this animation to the queue}} trong cùng hộp thoại: các khung hình được kết xuất trong [hàng đợi kết xuất](topic:render#the-render-queue), cần WebGPU.

:::firefox safari
Kết xuất video cần một trình duyệt tự mã hóa video (WebCodecs): Chrome, Edge, Firefox và Safari 17 gần đây đều làm được. Nếu không, hãy chọn {{ui:PNG pictures, one per frame (ZIP)}}.
:::

## Những điều cần biết

- Chỉ các nhóm và cấu kiện nguyên vẹn mới di chuyển. Mặt, cạnh, giờ của mặt trời và kiểu giao diện hiện chưa thay đổi theo thời gian.
- {{ui:Export animation}} trong [Cảnh](topic:scenes) vẫn ghi lại khung nhìn như đang hiển thị trên màn hình, theo thời gian thực; {{ui:Render video}} kết xuất từng khung hình với bầu trời, bóng và vật liệu.
