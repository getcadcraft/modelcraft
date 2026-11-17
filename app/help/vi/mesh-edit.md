---
title: Chỉnh sửa lưới trong không gian làm việc Lưới
summary: Chọn đỉnh, cạnh và mặt của lưới, di chuyển chúng, rồi đùn, lồng vào, vát mép, cắt, gộp, lấp và nối chúng, với một trong hai kiểu phím.
keywords: lưới, chế độ chỉnh sửa, không gian làm việc lưới, đỉnh, cạnh, mặt, đùn, lồng vào, vát mép, cắt vòng, dao cắt, chia đôi, xoay từng bước, gộp, hòa tan, lấp, lấp bằng lưới, nối cầu, chia nhỏ, trượt, chỉnh sửa tỷ lệ thuận, suy giảm, không gian làm việc
from: 92a372dd
---

Không gian làm việc **Lưới** chỉnh sửa một [lưới](topic:meshes) theo từng điểm: các đỉnh, cạnh và mặt của nó. Hình học đẩy/kéo vẫn nằm trong không gian làm việc **Mô hình**.

## Mở

- Chọn {{ui:Mesh}} trong danh sách {{ui:Workspace}} ở bên trái thanh công cụ. Lưới đang chọn sẽ mở để chỉnh sửa; một nhóm hoặc cấu kiện đang chọn sẽ được chuyển thành lưới trước (một bước hoàn tác).
- Hoặc nhấp đúp vào một lưới, hoặc, với phím của bộ tạo mô hình, chọn nó rồi nhấn {{key:Tab}}.
- Khi không chọn gì, bảng cung cấp các lưới để thêm: mặt phẳng, lưới ô, khối lập phương, hình tròn, trụ, nón, hình cầu, cầu ico và xuyến. Lưới mới được đặt nơi khung nhìn đang hướng tới và mở ra để chỉnh sửa.

{{ui:Back to Model}} (hoặc danh sách, {{key:Tab}} với phím của bộ tạo mô hình, {{key:Esc}} khi không chọn gì với phím đẩy/kéo) quay về Mô hình với lưới được chọn. Khi không gian làm việc Lưới đang mở, phần còn lại của mô hình được làm mờ và các công cụ vẽ của Mô hình được cất đi.

## Chọn

| Thao tác | Để |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Chọn đỉnh, cạnh hoặc mặt |
| Nhấp | Chọn một; {{key:Shift}}+nhấp để thêm hoặc bỏ |
| Kéo một hộp | Chọn những gì bên trong và nhìn thấy; {{key:Shift}} thêm, {{key:Ctrl}} bỏ |
| {{key:Alt}}+nhấp một cạnh, hoặc nhấp đúp vào nó | Vòng cạnh của nó (vòng mặt ở chế độ mặt; toàn bộ đường viền với cạnh hở) |
| {{key:Ctrl}}+{{key:Alt}}+nhấp một cạnh | Vành cạnh của nó |
| Nhấp ba lần | Mọi thứ nối với nó |

Nhóm {{ui:Select}} còn có {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} và {{ui:Less}}.

## Di chuyển, xoay, tỷ lệ

{{ui:Move}}, {{ui:Rotate}} và {{ui:Scale}} bắt đầu từ con trỏ: di chuyển nó, rồi nhấp hoặc nhấn {{key:Enter}} để đặt vùng chọn xuống, hoặc {{key:Esc}} để hủy. {{key:X}}, {{key:Y}} hoặc {{key:Z}} (hoặc các phím mũi tên) khóa một trục. Gõ khoảng cách, góc hoặc hệ số để có giá trị chính xác — [phép tính](topic:value-box#calculations) cũng dùng được.

**Chỉnh sửa tỷ lệ thuận** ({{ui:Proportional}}, hoặc trong bảng): các đỉnh gần vùng chọn sẽ đi theo khi di chuyển, càng xa thì càng ít, tối đa đến phạm vi bạn đặt, theo kiểu suy giảm bạn chọn. Bật {{ui:Only along the mesh}} để đo dọc theo cạnh thay vì đường thẳng.

{{ui:Slide}} di chuyển một vòng cạnh được chọn dọc theo các cạnh bên cạnh nó.

## Thay đổi hình dạng

| Công cụ | Tác dụng |
|---|---|
| {{ui:Extrude}} | Kéo các mặt được chọn ra theo pháp tuyến của chúng, với các mặt bên mới (hoặc tạo mặt từ các cạnh viền hở). Gõ khoảng cách |
| {{ui:Inset}} | Một dải bên trong đường viền của các mặt được chọn; nhấn {{key:I}} lại cho từng mặt riêng |
| {{ui:Bevel}} | Cắt các cạnh được chọn (hoặc, với {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, các đỉnh) với một chiều rộng; bánh xe hoặc các phím cộng và trừ thêm đoạn cho cạnh bo tròn |
| {{ui:Loop cut}} | Trỏ vào một cạnh: các vòng mới chạy qua vành các mặt bốn cạnh; bánh xe đặt số lần cắt; nhấp để cắt |
| {{ui:Knife}} | Nhấp các điểm trên cạnh hoặc góc; {{key:Enter}} cắt thẳng qua các mặt nằm giữa chúng, như bạn thấy |
| {{ui:Bisect}} | Vẽ một đường trên màn hình: các mặt được chọn (hoặc tất cả) được cắt dọc theo đường đó |
| {{ui:Spin}} | Xoay các mặt được chọn hoặc các cạnh hở quanh trục xanh theo từng bước (bánh xe đặt số bước); xoay hết một vòng sẽ khép kín |
| {{ui:Subdivide}} | Cắt đôi các cạnh được chọn; các mặt nguyên vẹn trở thành lưới |
| {{ui:Merge}} | Các đỉnh được chọn gộp thành một, tại tâm của chúng |
| {{ui:Dissolve}} | Lấy vùng chọn ra nhưng giữ bề mặt: các mặt nối lại với nhau |
| {{ui:Fill}} | Một mặt qua một đường viền hở được chọn (hoặc giữa hai cạnh hở) |
| {{ui:Grid fill}} | Lấp một đường viền hở có số cạnh chẵn bằng một lưới các tứ giác |
| {{ui:Bridge}} | Nối hai vòng cạnh hở được chọn bằng các mặt |
| {{ui:Crease}} | Các cạnh được chọn giữ sắc nét đến mức nào khi lưới được làm mượt bởi bề mặt chia nhỏ: kéo ra xa tâm, dùng bánh xe (bước 0.1) hoặc gõ giá trị từ 0 đến 1. Bảng hiển thị nếp gấp của các cạnh được chọn và cũng nhận giá trị gõ vào. Cạnh có nếp gấp được vẽ màu đỏ tía |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Lật mặt; làm mượt đỉnh về phía đỉnh lân cận; xóa theo chế độ chọn |

Mỗi thao tác là một bước hoàn tác. Tọa độ kết cấu, màu và trọng số được chuyển sang các mặt và đỉnh mới.

## Remesh

{{ui:Remesh}} tạo lại toàn bộ lưới thành các tam giác đều cùng một kích thước, được yêu cầu khi bạn nhấn (nhỏ hơn thì mịn hơn và chậm hơn). Nó lấp các lỗ, nối các mảnh chồng lên nhau, và làm đều một lưới bị kéo giãn do điêu khắc. Các cạnh sắc sẽ hơi bo tròn một chút. UV, sơn và nếp gấp bắt đầu lại từ đầu. Một bước hoàn tác.

## Retopology

Để dựng một lưới mới, gọn hơn trên một lưới chi tiết (một bản điêu khắc, một bản quét), chọn lưới chi tiết đó dưới {{ui:Retopology}} › **Xây dựng trên** trong bảng, rồi:

- **Bắt các điểm đã di chuyển lên nó:** các điểm bạn di chuyển, và các cạnh bạn đùn, sẽ nằm trên bề mặt của nó.
- **Đặt các điểm được chọn lên nó** sẽ di chuyển các điểm được chọn lên bề mặt ngay bây giờ (một bước hoàn tác).
- **Hiện cạnh của lưới này ở phía trước** vẽ lưới bạn đang dựng phủ lên bề mặt, để bạn thấy nó.

## Điều chỉnh thao tác cuối

Sau {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} hoặc {{ui:Spin}}, bảng hiển thị các thiết lập của nó (chiều rộng, số đoạn, biên dạng, số lần cắt …). Thay đổi một thiết lập và thao tác sẽ được làm lại từ điểm bắt đầu, vẫn là một bước hoàn tác.

## Phím

| | Phím đẩy/kéo | Phím Mô hình hóa |
|---|---|---|
| Di chuyển, xoay, tỷ lệ | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} hai lần để trượt) |
| Đùn, lồng vào | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Xóa | {{key:E}} hoặc {{key:Delete}} | {{key:X}} hoặc {{key:Delete}} |
| Nếp gấp | {{key:Shift+C}} | {{key:Shift+E}} |
| Chọn tất cả, bỏ chọn, đảo chọn | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Cả hai | {{key:Ctrl+B}} vát mép, {{key:Ctrl+R}} cắt vòng, {{key:K}} dao cắt | giống vậy, và {{key:F}} lấp, {{key:M}} gộp, {{key:Ctrl+X}} hòa tan, {{key:L}} / {{key:Ctrl+L}} liên kết, {{key:Alt+N}} lật, {{key:O}} tỷ lệ thuận, {{key:Shift+V}} trượt đỉnh |

Xem thêm [Lưới](topic:meshes), [Bộ điều chỉnh trên lưới](topic:modifiers) và [Chưa xây dựng](topic:not-built-yet).
