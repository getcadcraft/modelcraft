---
title: Bề mặt tự do (NURBS)
summary: Đường cong và bề mặt mượt cho vỏ sản phẩm, thân xe và thân tàu thuyền. Loft, sweep, mạng đường cong, miếng vá bốn cạnh, pha trộn, cắt; tính liên tục G0, G1 và G2 đo trên các bề mặt chính xác; khối đặc với hợp, trừ và giao; chế độ xem vằn zebra và độ cong; mặt được khớp với bản quét, với sai số đo được; và tệp STEP hoặc IGES.
keywords: nurbs, quét, kỹ thuật đảo ngược, khớp, lưới thành bề mặt, đám điểm, stl, cắt, đã cắt, lỗ, khoét, khối, khối đặc, boolean, hợp, trừ, giao, hiệu, khâu, kín, tự do, bề mặt, b-spline, bspline, đường cong, spline, loft, sweep, ray, mạng, coons, miếng vá, pha trộn, khớp, liên tục, g0, g1, g2, tiếp tuyến, độ cong, zebra, điểm điều khiển, nút, bậc, step, iges, hạng a
from: 09887405
---

Bảng **Bề mặt** tạo các đường cong và bề mặt mượt dùng cho vỏ sản phẩm, thân xe và thân tàu thuyền: NURBS, cùng toán học mà các công cụ mô hình bề mặt khác dùng. Mọi thứ được đo trên các bề mặt chính xác, không bao giờ trên các tam giác bạn thấy. Kích thước trong bảng tính bằng **milimét**, bất kể mô hình đang hiển thị đơn vị nào.

Mở nó từ bảng bên phải: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Mô hình đã có bề mặt sẽ tự mở bảng.

## Cách một lệnh hoạt động

1. Nhấn một lệnh (ví dụ **Loft**). Bảng cho biết nó còn cần gì: điểm, đường cong, cạnh bề mặt hoặc đầu đường cong.
2. Chỉ định chúng: nhấp vào chúng trong khung nhìn 3D, hoặc nhấn **Chỉ định** (hoặc các nút cạnh và đầu) bên cạnh mỗi mục trong danh sách. Với một cạnh, nhấp gần cạnh đó của bề mặt.
3. Kiểm tra các tùy chọn (bậc, dung sai, tính liên tục, …) rồi nhấn **Tạo**.

Đường cong từ điểm nhận các điểm nhập mỗi dòng một điểm (`x, y, z` tính bằng mm), hoặc **Chỉ định điểm trong khung nhìn**: mỗi cú nhấp dùng cùng cách bắt điểm như các công cụ vẽ; nhấn <kbd>Enter</kbd> hoặc nhấp đúp để kết thúc, <kbd>Esc</kbd> để dừng.

## Đường cong

- **Đường cong qua điểm** đi qua mọi điểm. **Đường cong theo điểm điều khiển** thay vào đó đi theo một khung lưới điểm.
- **Chèn nút**, **Nâng bậc** và **Hạ bậc** thay đổi cách mô tả đường cong mà không di chuyển nó (hạ bậc bị từ chối khi đường cong dịch chuyển quá dung sai). **Dựng lại đường cong** cho nó số điểm điều khiển mới và cho biết nó đã dịch chuyển bao xa.
- **Khớp đường cong** làm một đầu của đường cong gặp đầu của đường cong khác với G0 (chạm), G1 (cùng hướng) hoặc G2 (cùng độ cong luôn). **Pha trộn đường cong** thêm một đường cong mới giữa hai đầu.
- **Nối đường cong** và **Tách đường cong**.

## Bề mặt

- **Loft** qua hai hoặc nhiều đường cong, **Bề mặt kẻ** giữa hai đường cong, **Đùn đường cong**, **Quay tròn đường cong**.
- **Quét theo một ray** đưa một profile dọc theo đường mà không xoắn; **Quét theo hai ray** giữ hai đầu của profile trên cả hai ray. Các phép quét được khớp: dòng trạng thái cho biết nó sát với phép quét thật đến mức nào.
- **Bề mặt từ mạng đường cong** đi qua một lưới đường cong (các lần chỉ định đầu tiên là profile, phần còn lại là hướng dẫn). **Miếng vá từ bốn cạnh** lấp đầy bốn đường cong gặp nhau tại các góc.
- **Khớp bề mặt** làm một cạnh bề mặt gặp cạnh láng giềng với G0, G1 hoặc G2; **Pha trộn bề mặt** thêm một bề mặt giữa hai cạnh.
- **Dời song song bề mặt**, **Kéo dài bề mặt** (bề mặt tiếp tục như đang đi), **Dựng lại bề mặt**, và các nút và bậc cho bề mặt.

## Kiểm tra chất lượng

Bảng **Cạnh chung** liệt kê mọi cạnh mà hai bề mặt cùng chia sẻ, cùng khoảng hở (mm), góc giữa chúng (°) và bước nhảy độ cong (1/mm), và điều đó làm cho nó là G0, G1 hay G2. Cạnh kém hơn mức bạn yêu cầu cũng nằm trong **Lỗi** (nút ⚠ trên thanh ứng dụng) với một cách sửa **Khớp**.

**Hiển thị dưới dạng** › **Vằn zebra** và **Độ cong (Gauss)** lấy từ bề mặt chính xác: các vằn chạy liền mạch qua một cạnh nghĩa là G1; các vằn vừa liền mạch vừa giữ nguyên độ rộng nghĩa là G2. Độ cong có màu xanh dương ở nơi bề mặt là yên ngựa, đỏ ở nơi là vòm, và trắng ở nơi phẳng. **Điểm điều khiển** vẽ các lưới điều khiển.

G0–G2 được đo tại 33 điểm mỗi cạnh. **G3 và chất lượng "hạng A" không được đo** và không được công bố.

## Cắt bề mặt

Nhóm **Cắt** cắt một bề mặt mà không đổi hình dạng của nó: bề mặt giữ nguyên mọi điểm điều khiển, và chỉ phần bên trong đường viền được hiển thị, đếm và ghi. **Cắt theo hình chữ nhật** và **Cắt bằng vòng tròn** làm việc trên một phần (0 đến 1) của bề mặt theo mỗi hướng, nên không cần chỉ định trong khung nhìn; **Cắt bằng đường cong** nhận một đường cong kín nằm trên bề mặt (nó được chiếu lên bề mặt, và bị từ chối bằng lời nếu hở hoặc cách xa hơn dung sai). Đánh dấu **Khoét lỗ** để xóa phần bên trong đường viền; bỏ chọn để chỉ giữ phần bên trong. Một bề mặt có thể có một đường viền giữ lại và bất kỳ số lỗ nào; một đường viền cắt ngang đường viền khác sẽ bị từ chối. **Gỡ phần cắt** hiển thị lại toàn bộ bề mặt. Các cạnh cắt bám đúng đường viền; Hoàn tác của bảng đưa một lần cắt về như bất kỳ bước nào khác.

STEP mang phần cắt dưới dạng biên của mặt, và IGES dưới dạng bề mặt đã cắt (thực thể 144); cả hai đều đọc lại được.

## Khối đặc và phép Boolean

Nhóm **Khối đặc** biến bề mặt thành các vật thể kín và kết hợp chúng. Ở đây, một khối đặc là một tập các bề mặt của bảng cùng nhau khép kín một thể tích; các mặt của nó vẫn là bề mặt NURBS chính xác với phần cắt của chúng.

- **Khối hộp**, **Khối trụ** và **Khối cầu** tạo một khối từ kích thước đã gõ (mm): hộp sáu mặt phẳng, trụ có mặt bên tròn và hai đầu phẳng được cắt theo vòng tròn, cầu của một bề mặt quay.
- **Khối từ bề mặt** nhóm các bề mặt bạn đã tạo. Chỉ định chúng, hoặc không chọn gì để dùng mọi bề mặt đang hiển thị mà chưa thuộc khối nào. Chúng được khâu lại trong dung sai: nếu chúng không khép kín, không có gì thay đổi và bảng cho biết có bao nhiêu cạnh còn hở và chúng phải gặp nhau gần đến mức nào.
- **Hợp**, **Trừ** (khối thứ hai được lấy đi khỏi khối thứ nhất) và **Giao** (chỉ phần cả hai cùng có) lấy hai khối: nhấp một mặt của mỗi khối trong khung nhìn, hoặc nhấn **Chỉ định** trong danh sách **Khối đặc**. Đánh dấu **Giữ hai khối** để để chúng cạnh kết quả.

Một phép Boolean giữ mọi mặt trên bề mặt chính xác của nó và cắt nó bằng các đường viền cắt mới dọc theo giao tuyến. Dòng kết quả đưa ra các số đo: điểm của bộ tính toán khối phải dịch chuyển bao xa để nằm trên bề mặt chính xác (không bao giờ quá dung sai), các điểm giao gần cả hai bề mặt đến mức nào (thường vài phần triệu milimét), thể tích, và các mặt mới có khép kín lại không khi được khâu lại từ các bề mặt chính xác. Thể tích được đo trên các tam giác trong dung sai (mặc định 0.05 mm trừ khi bạn đặt khác), nên thể tích của hình cầu hay hình trụ đọc được nhỏ hơn một chút so với giá trị chính xác: dung sai nhỏ hơn sẽ gần hơn. Một phép Boolean không thể làm sạch (các khối không có gì chung, hoặc một đường viền sẽ tự cắt) bị từ chối bằng lời và không thay đổi gì. Một phép Boolean là một bước của **Hoàn tác** của bảng.

Trong danh sách **Khối đặc**, **Bỏ nhóm** giữ các mặt như bề mặt thường; biểu tượng thùng rác xóa khối và các mặt của nó.

**Thêm vào mô hình** (trong danh sách **Khối đặc**) đặt một bản sao của khối vào mô hình dưới dạng một nhóm kín, các mặt của nó là tam giác trong 0.05 mm, trong một bước Hoàn tác của mô hình. Sau đó nó hoạt động với **Hợp**, **Trừ** và **Giao** của chính mô hình, đẩy/kéo và kiểm tra in 3D; khối chính xác vẫn nằm trong bảng.

## Bo góc và làm dày

**Bo góc giữa các mặt** làm tròn cạnh nơi hai mặt của một khối gặp nhau: chỉ định hai mặt (trong khung nhìn, hoặc bằng **Chỉ định** trong danh sách), gõ **bán kính** và, với bán kính thay đổi dọc cạnh, **bán kính ở cuối** (0 giữ một bán kính). Một quả cầu có bán kính đó được lăn dọc cạnh, chạm cả hai mặt; phần bo là cung tròn chính xác mà nó để lại tại mỗi điểm, nối thành một bề mặt, và hai mặt được cắt tại nơi quả cầu chạm. Cạnh ngoài mất vật liệu, góc trong thì được thêm vật liệu. Dòng kết quả cho biết những gì được đo: mặt bo cách quả cầu lăn bao xa giữa các điểm mà nó được dựng từ đó (các điểm được thêm cho đến khi nằm trong một phần tư dung sai), góc lớn nhất giữa mặt bo và mỗi mặt dọc các đường chạm, và các số tương tự như Hợp. Một bán kính không vừa (quả cầu sẽ rời một mặt, hoặc một mặt cong chặt hơn bán kính) bị từ chối, nêu tên mặt, và không gì thay đổi.

**Bo nhiều cạnh** làm tròn nhiều cạnh trong một bước: chỉ định hai mặt của cạnh đầu tiên, rồi hai mặt của cạnh kế, và tiếp tục (một mặt có thể nằm trong nhiều cặp, ví dụ mặt trên của một hộp nằm trong bốn cặp); mọi cạnh nhận bán kính bạn gõ. Mỗi lần bo được tính trên khối như trước khi làm, rồi chúng được cắt lần lượt nên thứ tự không quan trọng. Nơi hai cạnh đã bo gặp nhau tại một góc mà các cạnh khác vẫn sắc, hai phần bo sẽ giao nhau dọc theo đường giao (một nếp gấp). Nơi ba cạnh ngoài đã bo của ba mặt phẳng vuông góc nhau gặp nhau với cùng một bán kính, góc là một **miếng vá cầu** tiếp tuyến với cả ba phần bo (bỏ chọn **Góc** để có góc có nếp gấp); một cạnh phải dài ít nhất gấp đôi bán kính khi cả hai đầu của nó là các góc như vậy. Dòng kết quả cho biết có bao nhiêu cạnh được bo và các góc ra sao. Các cạnh trong cũng có thể bo cùng lúc, nhưng kết quả không khép kín lại chỉ được báo cáo (dòng sẽ nói như vậy), nên hãy kiểm tra.

**Làm dày thành khối** cho một bề mặt độ dày: chỉ định nó, gõ **độ dày**, và đánh dấu **Phía bên kia** để tăng về hướng khác. Mặt dời được khớp vào bề mặt và đo so với nó (dòng kết quả cho biết chênh lệch lớn nhất so với độ dày); thành đi theo mọi cạnh và mọi đường viền cắt. Nếu bề mặt cong chặt hơn độ dày ở phía đó, hoặc một phần khác của nó nằm gần hơn độ dày, thao tác bị từ chối, nêu tên bề mặt và vị trí, và không gì thay đổi.

## Hoàn tác, tệp, STEP và IGES

Bảng có **Hoàn tác** và **Làm lại** riêng (một bước cho mỗi lệnh). Các bề mặt được lưu trong tệp `.modelcraft` cùng mô hình; chúng không thuộc phần hoàn tác của chính mô hình, giống như vật liệu của tệp.

**STEP…** (AP242) và **IGES…** lưu đường cong và bề mặt đúng như chúng vốn có (đường cong và bề mặt B-spline, không biến thành tam giác). Mỗi bề mặt là một mặt riêng, với phần cắt của nó; một khối được ghi thành một vỏ kín, mỗi cạnh được chia sẻ bởi hai mặt của nó như các chương trình CAD khác mong đợi (dòng trạng thái cho biết có bao nhiêu khối được xuất theo cách đó). Trong IGES, cùng một khối là một B-rep khối đặc đa tạp (thực thể 186 trên vỏ kín 514, mặt 510, vòng 508, một danh sách cạnh 504 và một danh sách đỉnh 502); một khối mà các mặt không ghép cạnh với cạnh sẽ được ghi thành các mặt riêng, và dòng sẽ nói như vậy. **Nhập…** đọc lại một khối như vậy thành khối đặc, từ STEP và từ IGES. Nó đọc các đường cong và bề mặt được ghi theo cách này, và các tập miếng vá `.ccnurbs`; các khối STEP của chương trình khác mở bằng Tệp › Nhập dưới dạng lưới.

## Bề mặt từ quét (kỹ thuật đảo ngược)

Chọn lưới quét trong mô hình (không chọn gì nghĩa là mọi thứ đang hiển thị), mở **Bề mặt**, và trong nhóm **Quét** chọn **Khớp bề mặt với quét**. Công cụ tìm **mặt phẳng**, **trụ**, **cầu** và **nón** (các bề mặt chính xác mà một chi tiết gia công được tạo từ; mỗi dòng hiển thị bán kính hoặc nửa góc nó tìm thấy), tìm **bo góc** (cạnh và góc được làm tròn: một trụ hoặc cầu nhỏ tiếp tuyến với hai hoặc nhiều mặt khác, hiển thị với bán kính và các mặt nó nối), **bo góc vành** (một xuyến: cạnh tròn nơi một mặt phẳng gặp trụ hoặc nón, hiển thị với bán kính và bán kính vòng của nó) và **bo góc biến thiên** (cạnh tròn có bán kính thay đổi dọc theo nó, hiển thị với bán kính ở mỗi đầu), khớp **một miếng vá tự do** với một mảnh mượt, cong nhẹ, và cắt mọi mặt theo đường viền của phần quét mà nó đến từ, nên các lỗ và góc vẫn còn. Tùy chọn: **dung sai** (điểm quét có thể cách mặt phẳng hoặc trụ bao xa, tính bằng mm, và vẫn thuộc về nó, cùng là mục tiêu cho miếng vá tự do), **mảnh nhỏ nhất** (một tỷ lệ diện tích bề mặt) và **số mặt tối đa**. Cùng quét và cùng tùy chọn luôn cho cùng các mặt.

Kết quả là một bảng, mỗi mặt một dòng: loại, số tam giác nó đến từ, và sai số **đo từ quét đến mặt** (rms, lớn nhất, và tỷ lệ điểm nằm trong dung sai). Các điểm được đo là các đỉnh của quét và điểm giữa của mỗi tam giác. Sai số không được đo theo chiều ngược lại (mặt đến quét), nên một mặt vượt ra ngoài quét sẽ không hiện ra. Ghi chú dưới bảng cũng cho biết bao nhiêu diện tích quá nhỏ để khớp. Trong khung nhìn, các điểm quét được tô màu theo **bản đồ sai lệch**: xanh dương trên mặt, xanh lá nửa đường đến dung sai, đỏ tại hoặc vượt dung sai (bỏ chọn **Hiện bản đồ sai lệch** để ẩn). Các mảnh tự gập lại (ví dụ một ống kín được khớp bằng miếng vá tự do) được liệt kê là chưa khớp, không bao giờ bị ép thành một bề mặt.

**Khâu bề mặt thành khối** khâu mọi bề mặt đang hiển thị mà chưa thuộc khối nào thành một khối kín. Các mặt quét chỉ gặp nhau trong phạm vi sai số của chính quét, nên nó thử khoảng cách nối nhỏ nhất mà khép kín được (không bao giờ quá **khoảng cách khâu** bạn đặt) và từ chối bằng lời khi các mặt không khép kín. Nó không bao giờ vá một khoảng hở. Một hộp có cạnh bo sẽ khâu được khi các phần bo của nó được tìm thấy như các mặt riêng; khoảng cách nối đã khép kín được ghi trong kết quả. Khối sau đó hoạt động với Hợp, Trừ, Giao và **Thêm vào mô hình**.

Những gì nó chưa làm: một **bo góc vành** (một xuyến) chỉ được tìm quanh trục của một trụ hoặc nón đã tìm thấy, và một **bo góc biến thiên** chỉ dọc theo một cạnh khá thẳng (các mặt cắt của nó được cắt vuông góc với một hướng); ở những nơi khác chúng thành miếng vá tự do khi đủ mượt, và bị bỏ qua khi không; mặt cầu, nón và bo góc được tìm bằng lấy mẫu ngẫu nhiên, nên một chi tiết rất nhỏ (vài tam giác) có thể bị bỏ sót; bản đồ sai lệch hiển thị khoảng cách từ quét đến mặt, không phải chiều ngược lại; các bản quét rất lớn (trên 300.000 tam giác) bị từ chối ở đây. Các mặt của một trụ quay trọn vòng được cắt quanh các lỗ, với đường nối đặt ở chỗ không có lỗ. Hãy kiểm tra từng mặt so với quét của bạn trước khi dựa vào nó.

## Chưa xây dựng

Làm tròn các cạnh gặp nhau tại một góc của mặt cong hoặc với các bán kính khác nhau (pha trộn đỉnh), một bo góc giữa các mặt không gặp nhau, một bo góc trong kết thúc trên mặt nghiêng hoặc cong, và các phép Boolean cùng bo góc được tính trên bề mặt không có tam giác (ở đây bộ tính toán khối làm việc trên tam giác trong dung sai, và mọi điểm sau đó được đặt lại lên các bề mặt chính xác).
