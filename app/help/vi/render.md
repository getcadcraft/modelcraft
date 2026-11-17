---
title: Kết xuất ảnh của mô hình
summary: Tạo ảnh trông như ánh sáng ban ngày: bầu trời, mặt trời theo vị trí và ngày của mô hình, bóng mềm, kiểu kính và kim loại, rồi lưu thành PNG.
keywords: kết xuất, bộ cài sẵn, bộ cảnh, nội thất, ngoại thất, khung nhìn mặt cắt, ban đêm, một cú nhấp, kết xuất, path tracing, ray tracing, chiếu sáng toàn cục, phản chiếu, khúc xạ, chất lượng cao, ảnh chụp, chân thực, ảnh, hình ảnh, png, ảnh tĩnh, bầu trời, mặt trời, ánh sáng ban ngày, bóng, bóng mềm, ambient occlusion, kính, kim loại, bóng loáng, vật liệu, phơi sáng, độ sáng, nhiều mây, chạng vạng, studio, thuyết trình, sương mù, màn mờ, sương, khói, mây, khối, tia sáng xuyên sương, tia god, caustics, lấy mẫu thích ứng, nhiễu
from: 517ba4d3
---

{{ui:Kết xuất ảnh…}} tạo ảnh của khung nhìn trông như ánh sáng ban ngày thay vì một bản vẽ: một bầu trời, mặt trời theo vị trí và ngày của mô hình, bóng mềm, ánh sáng từ cả bầu trời làm tối các góc và khe hở, và các màu có thể trông như kính, kim loại hoặc sơn bóng. Mô hình không bị thay đổi.

## Kết xuất khung nhìn

1. Đặt khung nhìn theo ý bạn: xoay, thu phóng, chọn [cảnh](topic:scenes), ẩn những gì không nên hiện. Ảnh dùng chính camera của khung nhìn.
2. Nhấn {{ui:Xuất}} trong nhóm {{ui:Tệp}}, rồi {{ui:Kết xuất ảnh…}}.
3. Chọn {{ui:Cảnh}} nếu cảnh đang được nhấn không phải cảnh bạn muốn (xem [Bộ cảnh có sẵn](topic:render#scene-presets-a-good-picture-in-one-click)), chọn {{ui:Kích thước}}, rồi nhấn {{ui:Kết xuất}}.

   Ảnh hiện dần khi được kết xuất và mịn hơn sau mỗi lượt. {{ui:Dừng}} (hoặc {{key:Esc}}) kết thúc sớm và giữ lại ảnh đã có.

4. Nhấn {{ui:Lưu}} để tải xuống (là PNG trừ khi {{ui:Lưu thành}} chọn khác).

:::tip
Bắt đầu với {{ui:Nháp}} ở {{ui:Kích thước khung nhìn}} để kiểm tra camera và kiểu hiển thị, rồi kết xuất {{ui:Tốt}} hoặc {{ui:Tốt nhất}} ở kích thước lớn hơn cho ảnh cuối cùng.
:::

## Bộ cảnh có sẵn: một ảnh đẹp chỉ bằng một cú nhấp

Phía trên hộp thoại có bốn nút {{ui:Cảnh}}. Mỗi nút đặt bầu trời, độ sáng, mặt đất, đường cạnh, chất lượng và mặt trời chỉ trong một lần nhấp, nên bạn không cần học gì trước ảnh đầu tiên. Nhấn một nút, rồi nhấn {{ui:Kết xuất}}.

| Cảnh | Đặt gì | Dùng cho |
|---|---|---|
| {{ui:Ngoại thất}} | Trời quang, mặt trời của chính mô hình, mặt đất bật | Công trình nhìn từ bên ngoài |
| {{ui:Nội thất}} | Trời nhiều mây (ánh sáng đều, không có vệt nắng gắt), sáng hơn nửa nấc | Khung nhìn từ bên trong một phòng |
| {{ui:Khung nhìn mặt cắt}} | Studio trắng, không có mặt đất, đường cạnh trong kết xuất nhanh | Mô hình bị cắt bởi một mặt cắt |
| {{ui:Ban đêm}} | Mặt trời lặn (nửa đêm giữa đông cho nửa bán cầu của địa điểm), sáng hơn một nấc | Đèn chiếu sáng mô hình. Không có đèn thì ảnh tối |

- {{ui:Chọn theo khung nhìn này}} chọn thay bạn: {{ui:Khung nhìn mặt cắt}} khi một lát cắt được bật, {{ui:Nội thất}} khi camera nằm trong mô hình, còn lại là {{ui:Ngoại thất}}. Lần đầu mở hộp thoại, nó tự bắt đầu theo cách này.
- Mọi cài đặt bên dưới vẫn có thể thay đổi. Khi bạn đổi một cài đặt mà cảnh đã đặt, không còn nút nào được nhấn, và dòng dưới các nút cho biết các cài đặt là của riêng bạn. Nhấn lại cảnh để đưa giá trị của cảnh về.
- Cảnh không chạm tới engine, chế độ, kích thước, vật liệu, camera hay đèn.

:::note
Các cảnh cho cùng giá trị trong ModelCraft và BimCraft. Ảnh hoàn tất trông ra sao phụ thuộc vào mô hình và card đồ họa của bạn.
:::

## Cài đặt

| Cài đặt | Tác dụng |
|---|---|
| {{ui:Kích thước}} | Kích thước khung nhìn, gấp đôi kích thước khung nhìn, Full HD, 4K hoặc hình vuông. Kích thước cố định giữ camera của khung nhìn và hiển thị nhiều hơn hoặc ít hơn ở hai bên |
| {{ui:Chế độ}} | {{ui:Nhanh}}, hoặc {{ui:Chất lượng cao (path tracing)}} (bên dưới) cùng {{ui:Giới hạn thời gian}} của nó |
| {{ui:Chất lượng}} | Số lượt (hoặc, ở chất lượng cao, số mẫu) được lấy trung bình: {{ui:Nháp}} 16, {{ui:Tốt}} 64, {{ui:Tốt nhất}} 256. Nhiều lượt hơn cho bóng và cạnh mịn hơn nhưng lâu hơn |
| {{ui:Xanh da trời}} | {{ui:Trời quang}}, {{ui:Trời nhiều mây}} (ánh sáng mềm, bóng nhạt), {{ui:Chạng vạng}} (ánh sáng thấp, ấm) hoặc {{ui:Studio trắng}} (nền trắng trơn) |
| {{ui:Mặt trời}} | Lấy từ ngày, giờ và vị trí trong {{ui:Kiểu}} › mặt trời. Đánh dấu {{ui:Dùng ngày và giờ khác cho ảnh này}} để thử một thời điểm khác mà không đổi kiểu của mô hình |
| {{ui:Độ sáng}} | Sáng hơn hoặc tối hơn, theo từng nấc |
| {{ui:Mặt đất dưới mô hình}} | Một mặt đất nhận bóng và hòa vào đường chân trời. Tắt đi với một mô hình đang lơ lửng |
| {{ui:Vẽ cạnh}} | Vẽ các cạnh của mô hình mảnh trên ảnh, cho vẻ như bản vẽ |

Khi mặt trời nằm dưới đường chân trời vào giờ đã chọn thì đó là ban đêm: bầu trời tối đi và [đèn](topic:lights) của mô hình chiếu sáng nó. Hộp thoại có ghi điều này.

Cài đặt được lưu trong tệp `.modelcraft`, nên ảnh kế tiếp của cùng mô hình bắt đầu từ chỗ bạn đã dừng.

## Làm màu trông như kính hoặc kim loại

Trong {{ui:Vật liệu}}, mỗi màu trên màn hình có một kiểu: {{ui:Mờ}}, {{ui:Satin}}, {{ui:Bóng}}, {{ui:Kim loại}}, {{ui:Kim loại đánh bóng}}, {{ui:Kính}} hoặc {{ui:Kính mờ}}. {{ui:Mặt chưa tô}} là các mặt không có màu riêng.

Để làm các cửa sổ thành kính, [tô](topic:paint) các khung kính một màu, rồi đặt màu đó thành {{ui:Kính}}. Kính cho bầu trời và những gì phía sau hiện qua, nhuốm theo màu của nó, và phản chiếu bầu trời.

:::note
Ở chế độ {{ui:Nhanh}}, kính và kim loại phản chiếu bầu trời chứ không phản chiếu phần còn lại của mô hình, và ánh sáng không khúc xạ qua kính. Chế độ {{ui:Chất lượng cao (path tracing)}} bên dưới làm được cả hai.
:::

## Chất lượng cao

Chọn {{ui:Chế độ}} › {{ui:Chất lượng cao (path tracing)}} để có một ảnh theo dõi ánh sáng đúng như cách camera nhìn thấy:

- ánh sáng nảy giữa các bề mặt, nên một phòng được chiếu sáng qua cửa sổ, hoặc bởi đèn, sẽ được chiếu sáng khắp nơi và màu lan sang các vùng lân cận;
- kính là kính thật: ánh sáng khúc xạ qua nó và nó phản chiếu mô hình;
- kim loại và các bề mặt đánh bóng phản chiếu phần còn lại của mô hình;
- các tấm đèn chiếu sáng như tấm, với bóng mềm.

Chế độ này chậm hơn nhiều so với {{ui:Nhanh}}: mỗi lượt lần lại ánh sáng của từng điểm ảnh. Ảnh bắt đầu nhiễu hạt và rõ dần khi các mẫu cộng dồn, nên hãy bắt đầu nhỏ ({{ui:Kích thước khung nhìn}}, {{ui:Nháp}}) và chọn {{ui:Giới hạn thời gian}}: khi hết giờ, ảnh có được tới lúc đó sẽ được giữ lại. {{ui:Dừng}} cũng giữ lại như vậy. Lượt đầu tiên phải đợi trong khi trình duyệt chuẩn bị bộ path tracing.

Ở nơi trình duyệt có WebGPU, bộ path tracing là của CadCraft và chạy trên card đồ họa; dòng dưới ảnh ghi {{ui:Được path tracing trên card đồ họa (WebGPU)}}. Sau {{ui:Dừng}} hoặc khi hết giờ, {{ui:Tiếp tục}} sẽ tiếp tục đúng ảnh đó cho tới khi đủ tất cả các mẫu; đổi một cài đặt hoặc nhấn lại {{ui:Kết xuất}} sẽ bắt đầu lại từ đầu. Không có WebGPU, ảnh được path tracing bằng WebGL thay thế (dòng ghi rõ điều này) và {{ui:Tiếp tục}} không được đưa ra.

:::linux
Firefox và hầu hết các cấu hình Chrome trên Linux chưa có WebGPU, nên chất lượng cao dùng WebGL ở đó.
:::

Ở chế độ này, cạnh không được vẽ, các texture của thư viện chỉ hiện màu và độ nhám chứ không hiện độ gồ ghề (một [vật liệu làm bằng nút](topic:shading#in-high-quality-pictures) hiện được pháp tuyến và độ gồ ghề), và mặt cắt được thực hiện trên mô hình trước khi ảnh bắt đầu.

{{ui:Khử nhiễu (xóa hạt còn lại sau các mẫu)}} được bật mặc định: khi ảnh xong, hoặc bị dừng, các hạt nhiễu còn lại được xóa bằng một mạng nơ-ron dành cho việc này (mạng đã công bố của Intel Open Image Denoise, chạy trên máy của bạn: trên card đồ họa, nếu không thì trên bộ xử lý). Ảnh có ít mẫu sẽ sạch; {{ui:Hiện}} › {{ui:Ảnh trước khi khử nhiễu}} cho thấy ảnh như khi được kết xuất.

## Kết xuất trong khung nhìn

Không gian làm việc {{ui:Kết xuất}} chạy bộ path tracing ngay trong khung nhìn: xoay, sửa mô hình hoặc đổi đèn là nó bắt đầu lại ngay. {{ui:Vùng}}: kéo một hình chữ nhật và chỉ vùng đó được kết xuất; {{ui:Toàn khung nhìn}} để quay lại. {{ui:Lấy nét}}: nhấn vào chỗ muốn nét, và độ sâu trường ảnh sẽ lấy nét ở đó. {{ui:Chi tiết}} đặt số điểm ảnh của khung nhìn được kết xuất (ít hơn thì nhanh hơn). {{ui:Tạm dừng}} dừng và tiếp tục. Chế độ này cần WebGPU: không có nó, không gian làm việc sẽ báo, và {{ui:Xuất}} › {{ui:Kết xuất ảnh…}} vẫn hoạt động.

## Bầu trời và hồ sơ đèn trên card đồ họa

Với WebGPU, chất lượng cao có thêm hai bầu trời:

- {{ui:Bầu trời vật lý}} tính ánh sáng ban ngày từ độ cao của mặt trời: xanh đậm phía trên, một dải nhạt ở đường chân trời, và mặt trời ấm hơn và yếu hơn khi thấp. {{ui:Độ mờ}} chạy từ một ngày rất trong (2) đến một ngày mờ (10).
- {{ui:Ảnh bầu trời (HDRI)}} chiếu sáng mô hình bằng một ảnh toàn cảnh của một địa điểm thật. {{ui:Chọn ảnh…}} nhận tệp `.hdr` hoặc `.exr` dạng equirectangular; {{ui:Xoay}} quay nó quanh mô hình và {{ui:Độ sáng ảnh}} làm nó sáng hơn hoặc tối hơn. Ảnh có mặt trời riêng, nên mặt trời của mô hình không được thêm vào. Ảnh chỉ được giữ khi trang còn mở: sau khi mở lại, hãy chọn lại.

Mỗi đèn trong danh sách {{ui:Đèn}} có thể nhận một hồ sơ ánh sáng của nhà sản xuất: {{ui:Hồ sơ IES…}} đọc một tệp IES (LM-63) và đèn khi đó chiếu sáng theo cách của thiết bị đó (một đèn downlight hẹp, một đèn rọi tường). Mọi đèn cùng tên đều dùng nó, và đèn giữ độ sáng riêng. Nhấn tên hồ sơ để ngừng dùng nó.

Cửa sổ kính trong suốt giúp ánh sáng bầu trời đi vào phòng, nên ảnh trong nhà dưới bầu trời sẽ rõ nhanh hơn.

Chế độ {{ui:Nhanh}} và bộ path tracing WebGL hiển thị {{ui:Bầu trời vật lý}} và {{ui:Ảnh bầu trời (HDRI)}} như trời quang và bỏ qua hồ sơ đèn.

## Camera

{{ui:Camera}} thiết lập ảnh như một bức ảnh chụp:

- {{ui:Phơi sáng}}: giữ {{ui:Thanh độ sáng}}, hoặc chọn {{ui:Cài đặt camera}} và đặt {{ui:Khẩu độ (f-stop)}}, {{ui:Tốc độ màn trập}} và {{ui:ISO}} như trên máy ảnh; EV bên cạnh là giá trị phơi sáng thông thường. f/16 ở 1/100 s và ISO 100 khớp với một ngày nắng; một cảnh tối hơn cần khẩu độ rộng hơn, màn trập chậm hơn hoặc ISO cao hơn. Điều này hoạt động ở mọi chế độ.
- {{ui:Độ sâu trường ảnh}} làm mờ những gì gần hoặc xa hơn {{ui:Khoảng cách lấy nét (m)}} như một ống kính có f-stop đó sẽ làm (để trống để lấy nét vào những gì ở giữa khung nhìn); {{ui:Hình dạng khẩu độ}} làm các điểm sáng ngoài tiêu cự có hình tròn hoặc hình cánh.
- {{ui:Phối cảnh hai điểm (đường thẳng đứng giữ thẳng đứng)}} cân bằng camera và dịch chuyển ảnh, như một ống kính tilt-shift kiến trúc, nên các bức tường không nghiêng khi bạn nhìn lên hoặc xuống một công trình.
- {{ui:Cân bằng trắng}} đặt màu sáng nào hiện là trắng: thấp hơn (ví dụ 3000 K) cho ánh đèn ấm, cao hơn cho bóng râm và ngày nhiều mây.
- {{ui:Phép chiếu}}: {{ui:Toàn cảnh 360°}} tạo một ảnh 2:1 của mọi thứ quanh camera cho trình xem toàn cảnh; {{ui:Toàn cảnh 360° nổi}} xếp chồng toàn cảnh cho mắt trái và mắt phải dành cho kính thực tế ảo; {{ui:Bản đồ khối (6 mặt)}} tạo sáu khung nhìn vuông trong lưới 3 × 2. Chiều rộng lấy từ {{ui:Kích thước}}.

Phép chiếu, độ sâu trường ảnh, phối cảnh hai điểm và cân bằng trắng cần bộ path tracing trên card đồ họa (WebGPU), nên chúng chỉ hiện ở {{ui:Chất lượng cao}}.

## Hoàn thiện ảnh

{{ui:Ảnh}} chỉnh màu ảnh chất lượng cao như một bức ảnh, và mỗi điều khiển thay đổi ảnh hoàn tất ngay lập tức, không cần kết xuất lại:

- {{ui:Kiểu hiển thị (view transform)}}: {{ui:ACES filmic}} (ảnh như trước), {{ui:AgX}} (mềm hơn, giữ màu trong ánh sáng rất sáng), {{ui:Filmic}} (đường cong phim nhẹ) hoặc {{ui:Tiêu chuẩn}} (đơn giản, ánh sáng quá sáng bị cắt thành trắng).
- {{ui:Độ tương phản}} và {{ui:Nén vùng sáng}} (đưa lại chi tiết ở các phần rất sáng).
- {{ui:Quầng sáng (bloom)}} (một ánh sáng mềm quanh đèn sáng), {{ui:Chói}} cùng {{ui:Vệt chói}} (tia sao từ các điểm sáng nhất) và {{ui:Tối góc (vignette)}} (các góc tối hơn).
- {{ui:Bảng màu (.cube)…}} áp dụng một màu từ tệp `.cube`, cùng {{ui:Cường độ bảng màu}}; giống ảnh bầu trời, nó chỉ được giữ khi trang còn mở.

## Lưu ảnh

{{ui:Lưu thành}} bên cạnh {{ui:Lưu}} chọn tệp: {{ui:PNG}}, {{ui:JPEG}} hoặc {{ui:WebP}} để chia sẻ (JPEG và WebP chỉ khi trình duyệt ghi được), và sau một lần kết xuất chất lượng cao trên card đồ họa còn có:

- {{ui:PNG, 16 bit}}: ảnh đã chỉnh màu với các bước chuyển sắc mịn hơn, để in hoặc chỉnh sửa tiếp.
- {{ui:EXR, mọi lớp (số thực 32 bit)}}: ảnh như đã kết xuất (ánh sáng tuyến tính, không chỉnh màu) với mọi phần tử kết xuất và nhóm đèn là một lớp riêng, cho các phần mềm ghép hình.
- {{ui:Tệp kết xuất (.ccrender, để chỉnh màu sau)}}: mọi thứ hộp thoại cần để trộn và chỉnh màu ảnh lần nữa. {{ui:Mở tệp kết xuất…}} đưa nó trở lại, cùng cách trộn và chỉnh màu của nó, mà không cần kết xuất.

## Trộn đèn sau khi kết xuất

Bật {{ui:Trộn ánh sáng (đổi màu và độ sáng của từng đèn sau khi kết xuất)}} trước khi nhấn {{ui:Kết xuất}}. Khi ảnh xong (hoặc đã dừng), {{ui:Trộn ảnh}} liệt kê các đèn theo nhóm: bầu trời, mặt trời, và đèn theo tên (mọi đèn cùng tên là một nhóm). Tắt một nhóm, gán cho nó một màu, hoặc làm nó sáng hơn hay tối hơn, và ảnh thay đổi ngay, không cần kết xuất lại. {{ui:Lưu cách trộn}} giữ cách trộn dưới một tên để chọn lại sau; {{ui:Như đã kết xuất}} quay về ảnh như lúc được tạo. {{ui:Lưu}} lưu ảnh đã trộn.

{{ui:Các phần tử kết xuất (albedo, pháp tuyến, độ sâu, khuếch tán, phản xạ, truyền qua, phát sáng, mã đối tượng)}} giữ các phần của ảnh. {{ui:Hiện}} chuyển khung nhìn sang một trong số chúng: màu bề mặt (albedo), pháp tuyến, độ sâu, ánh sáng khuếch tán, phản xạ và ánh sáng truyền qua (mỗi loại trực tiếp và gián tiếp), phần phát sáng và bầu trời, và một màu cho mỗi đối tượng hoặc mỗi vật liệu để làm mặt nạ.

Cả hai đều giữ thêm các lớp trên card đồ họa. Ở kích thước lớn, card đồ họa có thể không đủ chỗ; hộp thoại sẽ báo và một kích thước nhỏ hơn sẽ dùng được.

## Hàng đợi kết xuất

Sau khi thiết lập chất lượng cao, {{ui:Thêm ảnh này vào hàng đợi}} trong {{ui:Hàng đợi kết xuất}} giữ ảnh đúng theo cài đặt hiện tại; {{ui:Thêm hoạt ảnh này vào hàng đợi}} trong hộp thoại video làm điều tương tự cho cả một hoạt ảnh, được path tracing từng khung hình. {{ui:Bắt đầu hàng đợi}} kết xuất chúng lần lượt trên máy tính này, và {{ui:Lưu}} cạnh mỗi ảnh đã xong sẽ tải nó xuống. Đóng trang vẫn giữ hàng đợi: mở cùng mô hình và nó tiếp tục từ chỗ đã dừng. Hàng đợi cần WebGPU.

## Sương mù, khói, nhiễu và caustics

Các mục này nằm trong {{ui:Sương mù, khói và nhiễu}} và hoạt động ở {{ui:Chất lượng cao}} trên card đồ họa; các engine khác không có chúng.

- {{ui:Sương mù và màn mờ}} lấp đầy không khí tới một độ cao bằng một lớp sương mà mặt trời, bầu trời và đèn chiếu sáng. {{ui:Tầm nhìn xa đến đâu, tính bằng mét}} đặt độ dày của nó (khoảng 100 m là mờ nhẹ, 20 m là sương dày), {{ui:Độ cao của sương trên mặt đất, tính bằng mét}} là điểm nó kết thúc, và {{ui:Tia sáng xuyên sương}} là mức sương phát sáng về phía ánh sáng. Ánh sáng mặt trời rời khỏi lớp sương ở phía trên, nên nơi nắng chiếu qua cửa sổ hoặc giữa các tòa nhà, bạn thấy nó như những tia sáng.
- {{ui:Khói hoặc mây}} thêm một khối khói hoặc mây được chiếu sáng như sương. {{ui:Loại}} là {{ui:Mây}}, {{ui:Cột khói}} hoặc {{ui:Từ tệp khối (.ccvol)}}, định dạng lưới riêng của CadCraft. {{ui:Chi tiết}} và {{ui:Biến thể}} thay đổi một đám mây hoặc cột đã tạo; {{ui:Kích thước cạnh dài nhất, tính bằng mét (0 = kích thước của mô hình)}}, {{ui:Dời X (m)}}, {{ui:Dời Y (m)}}, {{ui:Dời Z (m)}} và {{ui:Xoay}} đặt nó (nó bắt đầu ở giữa mô hình); {{ui:Độ dày}} làm nó đặc hơn, {{ui:Phát sáng phía trước}} làm nó sáng hơn về phía ánh sáng, và {{ui:Màu}} nhuộm nó. Tệp khối chỉ được giữ khi trang còn mở, giống ảnh bầu trời.
- {{ui:Dừng sớm ở chỗ ảnh đã sạch (lấy mẫu thích ứng)}} không cấp thêm mẫu cho các điểm ảnh đã ổn định, nên phần còn lại của ảnh xong sớm hơn. {{ui:Mức nhiễu chấp nhận}} là mức hạt còn lại khi một điểm ảnh dừng. Dòng dưới ảnh cho biết trung bình mỗi điểm ảnh nhận bao nhiêu mẫu.
- {{ui:Caustics (ánh sáng khúc xạ qua kính hoặc phản xạ bởi gương)}} theo dấu ánh sáng từ đèn và mặt trời, nên vệt sáng dưới quả cầu kính hoặc ánh gương trên tường hiện ra sạch thay vì nhiễu hạt. Nó tắt khi sương mù, khói, {{ui:Trộn đèn sau khi kết xuất}} hoặc các phần tử kết xuất đang bật; nó được làm cho ảnh, không dành cho ảnh 360°, hoạt ảnh hay không gian làm việc Kết xuất.

## Mất bao lâu

Ảnh được tạo trên máy tính của bạn, bởi card đồ họa; không có gì được tải lên. Thời gian phụ thuộc vào card đó. Thời gian tăng theo số lượt và số điểm ảnh: {{ui:Tốt nhất}} có số lượt gấp 16 lần {{ui:Nháp}}, và một ảnh 4K có khoảng bốn lần số điểm ảnh của Full HD. Máy tính không có card đồ họa vẫn kết xuất được, nhưng chậm hơn.

:::note
Nếu hộp thoại báo rằng trình duyệt không thể kết xuất ảnh, trình duyệt không có WebGL 2. Hãy cập nhật nó, hoặc bật tăng tốc phần cứng trong cài đặt của nó.
:::
