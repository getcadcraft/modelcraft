---
title: Khung xem trực tiếp
summary: Một cửa sổ bên cạnh mô hình, hiển thị mô hình với giao diện thời gian thực, có mặt trời và bóng đổ, và theo sát mọi thay đổi bạn thực hiện; đi bộ qua mô hình và đặt giờ trong ngày cùng tháng.
keywords: chia sẻ, toàn cảnh, 360, tour, tour ảo, trình xem độc lập, trình xem ngoại tuyến, gửi cho khách hàng, video, video đi bộ, rải, cỏ, đồng cỏ, rừng, đá, cây, cây cối, đám đông, sơn cây, khung xem trực tiếp, thời gian thực, kết xuất thời gian thực, đi bộ, góc nhìn thứ nhất, trình bày, khách hàng, màn hình thứ hai, cửa sổ thứ hai, màn hình, giờ trong ngày, mặt trời, mùa, tháng, bóng đổ, che khuất môi trường, phản chiếu, ánh sáng dội, chiếu sáng toàn cục, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} mở một bảng phía trên ứng dụng, hiển thị mô hình với giao diện thời gian thực: bầu trời và mặt trời theo vị trí và ngày của mô hình, bóng đổ của mặt trời, kiểu hiển thị và vật liệu bạn đã gán cho các mặt, đèn, và ánh sáng dội từ tường và sàn. Nó theo sát những gì bạn làm: xoay khung nhìn thì nó cũng xoay, thay đổi mô hình thì nó hiển thị thay đổi sau một lúc. Không có gì được tải lên.

## Mở khung

1. Chọn {{ui:Export}} › {{ui:Live view}}. Bảng mở ở góc dưới bên phải.
2. Kéo thanh tiêu đề để di chuyển, kéo góc để làm lớn hơn.
3. {{ui:New window}} chuyển bảng sang một cửa sổ riêng, dùng cho màn hình thứ hai. {{ui:Export}} › {{ui:Live view in a new window}} mở nó ngay trong cửa sổ đó. Nếu trình duyệt chặn cửa sổ bật lên, nó sẽ mở như một bảng.
4. {{ui:Close}} đóng khung.

## Các điều khiển

| Điều khiển | Tác dụng |
|---|---|
| {{ui:Follow the view}} | Bật: khung xem trực tiếp nhìn theo hướng khung nhìn của ModelCraft. Đi bộ sẽ tắt tùy chọn này |
| {{ui:Walk}} | Đi qua mô hình (bên dưới) |
| {{ui:Gravity}} | Khi đi bộ: đứng trên sàn và leo cầu thang. Tắt: bay |
| {{ui:Time}} | Giờ trong ngày, từ 05:00 đến 21:00. Mặt trời di chuyển khi bạn kéo |
| {{ui:Month}} | Tháng (ngày 21 của tháng), để bạn thấy mặt trời vào mùa đông và mùa hè |
| {{ui:Quality}} | {{ui:For this computer}} (những gì [máy của bạn](topic:your-machine) nhận được), hoặc {{ui:Low}}, {{ui:Medium}} hoặc {{ui:High}} |

Dòng ở cuối cho biết khung nhìn được vẽ bằng gì (WebGPU hoặc WebGL 2), chất lượng và ánh sáng dội.

## Đi bộ qua mô hình

1. Xoay khung nhìn chính đến nơi bạn muốn đứng rồi chọn {{ui:Walk}}. Bạn đứng trên sàn bên dưới điểm nhìn của khung, cao 1,6 m.
2. Nhấp khung xem trực tiếp, rồi dùng {{key:W}} {{key:A}} {{key:S}} {{key:D}} hoặc các phím mũi tên. Giữ {{key:Shift}} để chạy. Kéo để nhìn quanh.
3. Bậc cao tới 40 cm sẽ được leo (cầu thang); cao hơn là tường. Tường chặn bạn và bạn trượt dọc theo chúng.
4. Khi tắt {{ui:Gravity}}, bạn bay: {{key:E}} đi lên, {{key:Q}} đi xuống.
5. {{key:Esc}} dừng đi bộ.

## Rải cây, đá và người

{{ui:Scatter}} trên thanh của khung xem trực tiếp mở bảng rải bên cạnh hình ảnh. Một bộ rải đặt các mục từ thư viện trang trí (cây, bụi cây, cỏ, hoa, đá, người, xe hơi) lên một phần của mô hình. Các mục chỉ được vẽ trong khung xem trực tiếp: chúng không phải hình học trong mô hình, và khung nhìn chính không hiển thị chúng.

1. **Lấp mặt:** chọn các mặt (hoặc một nhóm, như địa hình) trong ModelCraft, rồi chọn {{ui:Fill selection}}. Bộ rải sẽ phủ kín chúng.
2. **Sơn:** chọn {{ui:Paint}}, rồi kéo trên khung xem trực tiếp. Khi đã chọn mặt, sơn chỉ rơi lên các mặt đó; khi không chọn gì, sơn rơi lên mọi thứ dưới cọ, kể cả mặt đất. {{ui:Brush size}} đặt kích thước cọ; {{ui:Eraser}} xóa các điểm đã sơn.
3. Đánh dấu những gì cần rải. Số bên cạnh mỗi mục là trọng số: 3 và 1 sẽ tạo ba mục đầu cho mỗi một mục thứ hai.

| Điều khiển | Tác dụng |
|---|---|
| {{ui:Per m²}} | Số mục trên mỗi mét vuông |
| {{ui:Keep away (m)}} | Không đặt mục nào gần các đối tượng khác hơn khoảng này, và không đặt dưới mái hoặc bàn. 0 để tắt |
| {{ui:Turn (°)}} | Mỗi mục được xoay ngẫu nhiên quanh trục đứng bao nhiêu |
| {{ui:Steepest (°)}} | Không đặt mục ở nơi bề mặt dốc hơn mức này |
| {{ui:Size}} | Kích thước nhỏ nhất và lớn nhất, như một hệ số của kích thước riêng của mục |
| {{ui:Height from, to (m)}} | Chỉ đặt giữa các độ cao này (để trống = bất kỳ) |
| {{ui:Lean with the surface}} | 0 giữ mục thẳng đứng; 1 đặt chúng vuông góc với mặt dốc |
| {{ui:Seed}}, {{ui:Shuffle}} | Cùng hạt giống luôn cho cùng kết quả rải; Shuffle chọn một kết quả khác |

Các bộ rải được lưu trong tệp .modelcraft và theo các mặt chúng phủ khi bạn thay đổi. Số mục tối đa khung xem trực tiếp vẽ được tùy thuộc vào cấp độ của [máy của bạn](topic:your-machine): 20 000 với {{ui:Processor only}}, 100 000 với {{ui:Graphics card, basic}}, một triệu với {{ui:Graphics card, high}}. Bảng cho biết số mục đã đặt trên tổng số mục mật độ yêu cầu: sẽ đặt ít hơn khi đạt giới hạn, hoặc khi các đối tượng loại chúng ra. Các mục gần camera được vẽ đúng hình dạng của chúng; các mục xa được vẽ thành hình đơn giản với màu của chúng.

:::note
Các mục rải có trong khung xem trực tiếp (và trong chế độ đi bộ, toàn cảnh và trình xem độc lập của nó). Kết xuất ảnh chưa vẽ chúng.
:::

## Chia sẻ: toàn cảnh, tour, trình xem, video

{{ui:Share}} trên thanh của khung xem trực tiếp tạo tệp từ khung xem trực tiếp. Mọi thứ được tạo trên máy tính này; không có gì được tải lên.

| Lựa chọn | Bạn nhận được |
|---|---|
| {{ui:360° panorama}} | Ảnh 360° từ vị trí khung nhìn (hoặc nơi bạn đang đi bộ), dạng PNG equirectangular mà các trình xem toàn cảnh và hầu hết trang ảnh đều mở được |
| {{ui:Add this spot to the tour}}, rồi {{ui:Save the tour}} | Một trang web với một toàn cảnh tại mỗi điểm và mũi tên dẫn đến các điểm mà mỗi điểm có thể nhìn thấy (một bức tường ở giữa sẽ che mũi tên) |
| {{ui:Save a viewer}} | Một trang web với mô hình theo giao diện thời gian thực này: xoay, đi qua, nhảy đến các cảnh đã lưu. Nó mở ngoại tuyến trong trình duyệt có WebGPU hoặc WebGL 2, từ một thư mục, USB hoặc email, không cần cài đặt và không cần tài khoản, và không tải gì từ internet |
| {{ui:Video of the path}} | Đường đi của camera trên dòng thời gian (hoặc các cảnh đã lưu theo thứ tự) dưới dạng video theo giao diện thời gian thực này, với kích thước của khung xem trực tiếp: WebM hoặc MP4 khi trình duyệt tạo được, nếu không thì là các ảnh đánh số trong một tệp ZIP |

Kích thước toàn cảnh theo chất lượng: rộng 1024, 2048 hoặc 4096 điểm ảnh trên Low, Medium và High. Một tệp trình xem khoảng 5 MB cộng với mô hình.

:::note
Tour và trình xem được tạo để trình bày, không để chỉnh sửa: chúng giữ mô hình như hiện tại khi bạn lưu.
:::

## Chất lượng

| | Thấp | Trung bình | Cao |
|---|---|---|---|
| Bóng đổ mặt trời | một bản đồ bóng | ba cấp | bốn cấp |
| Che khuất môi trường (bóng tiếp xúc) | | ✓ | ✓, mịn hơn |
| Phản chiếu trên kim loại | | | ✓ |
| Bloom (khi {{ui:Render a picture}} đặt nó) | | ✓ | ✓ |
| Làm mượt cạnh | FXAA | qua nhiều khung (TAA) | qua nhiều khung (TAA) |
| Ánh sáng dội | thô | mịn hơn | mịn nhất |

{{ui:For this computer}} chọn Thấp trên máy không có card đồ họa dùng được, Trung bình với chip đồ họa tích hợp, Cao với card đồ họa rời. Thấp dành cho máy tính xách tay 8 GB không có card đồ họa.

## Ánh sáng dội

Ánh sáng dội từ một bức tường được chiếu nắng lên sàn, và phần bên trong tối hơn của một căn phòng, được tính bằng cùng bộ theo dõi đường đi làm [ảnh kết xuất](topic:render): nó kết xuất một toàn cảnh nhỏ tại các điểm xuyên qua mô hình, ở nền trên mọi nhân xử lý. Trong khi làm việc, dòng cuối hiển thị {{ui:Ánh sáng dội: 40 %}}; khi đã sẵn sàng, khung nhìn sẽ dùng nó. Sau mỗi thay đổi, nó bắt đầu lại.

:::note
Đây là một phép xấp xỉ cho khung xem trực tiếp, không phải ảnh kết xuất: các chi tiết nhỏ giữa các điểm nhận ánh sáng dội của những điểm gần nó. Với ảnh hoàn thiện, dùng [Kết xuất ảnh](topic:render).
:::

## Độ sáng và màu

Khung xem trực tiếp dùng cùng độ sáng, cân bằng trắng, độ tương phản và phép biến đổi khung nhìn (ACES, AgX, filmic hoặc chuẩn) như [Kết xuất ảnh](topic:render): đặt chúng ở đó và khung xem trực tiếp sẽ theo.

:::note
Các trình duyệt khác nhau. Nơi trình duyệt có WebGPU (Chrome và Edge trên Windows, macOS và ChromeOS, Safari 26), khung xem trực tiếp dùng nó; ở nơi khác (hầu hết trình duyệt trên Linux, hệ thống Apple đời cũ), nó dùng WebGL 2 và trông giống hệt.
:::
