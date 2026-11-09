---
title: Có gì mới trong 0.8 và 0.8.1
summary: Lựa chọn công cụ kết xuất với tệp cho chương trình khác, bề mặt tự do NURBS với độ liên tục đo được, cảnh bạn mô tả cho trợ lý, vật liệu tạo từ một ảnh, ảnh phác thảo lên mặt đất, phòng được bày đồ đạc, cắt nghiêng để in 3D, và kiểm tra in trong bảng Vấn đề.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, công cụ kết xuất, engine, mở trong, usd, gltf, unreal, công cụ bổ sung, nurbs, bề mặt, loft, sweep, liên tục, g0, g1, g2, zebra, step, iges, mô tả cảnh, cảnh, thời tiết, thời gian trong ngày, mùa, trợ lý, vật liệu từ ảnh, ảnh, ảnh phác thảo, bày đồ đạc, phòng, nghiêng, tách, kiểm tra in, vấn đề, bảng thuộc tính, đèn, ngôn ngữ, thiết bị nhập, hàng thanh công cụ, dwg, live
from: e4989b17
---

Đây là những thay đổi trong ModelCraft 0.8 (2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. Hộp thoại {{ui:Kết xuất ảnh…}} giờ có thể gửi cảnh sang chương trình khác, bảng Bề mặt tạo các bề mặt tự do mượt, và trợ lý bạn kết nối có thể thiết lập cả một cảnh chỉ từ một câu.

## Mới

### Kết xuất

- **Lựa chọn công cụ kết xuất.** {{ui:Kết xuất ảnh…}} có danh sách **Công cụ kết xuất** phía trên Chế độ. Hai công cụ riêng của chúng tôi, Fast và Path tracer, là mặc định và hoạt động ở mọi nơi. Các mục khác lưu cảnh thành một gói (mô hình dưới dạng tệp USD, cùng một tệp cài đặt với giá trị vật liệu chính xác, các đèn đang bật, mặt trời, bầu trời, độ phơi sáng và camera) để mang sang chương trình khác. Ảnh do chương trình khác vẽ sẽ ghi rõ chương trình và phiên bản đã tạo ra nó. Xem [Chọn chương trình vẽ ảnh](topic:render-engines).
- **Mở trong chương trình khác.** Danh sách Công cụ kết xuất có thể lưu cảnh thành tệp USD, tệp glTF (`.glb`) hoặc thư mục dự án Unreal (`.zip`), trong trình duyệt và trong CadCraft Studio. Trong Studio, còn có thể khởi chạy usdview hoặc chương trình mặc định của máy tính cho tệp đó. Xem [Mở cảnh trong chương trình khác](topic:render-open-in).
- **Gửi sang công cụ trò chơi từ Studio.** Studio ghi cảnh vào một dự án Unreal Engine và giữ cho cảnh đồng bộ mỗi lần gửi, chỉ một chiều. Các chỉnh sửa của bạn nằm trong một lớp mà CadCraft không bao giờ ghi. Xem [Gửi cảnh sang công cụ trò chơi](topic:render-unreal).
- **Công cụ kết xuất từ công cụ bổ sung.** Một tiện ích bổ sung có thể thêm công cụ vào danh sách. Công cụ viết bằng JavaScript vẽ trong trình duyệt và trong Studio; công cụ chạy một chương trình cần bạn đồng ý trong Studio. Xem [Vẽ ảnh bằng chương trình khác](topic:render-other-program) và [Thêm công cụ kết xuất bằng công cụ bổ sung](topic:render-engine-addons).
- **Mô tả cảnh.** Nói với trợ lý đã kết nối của bạn "chạng vạng, mưa nhẹ, cây mùa thu, người trên quảng trường" và ModelCraft thiết lập tất cả trong một bước: mặt trời di chuyển theo ngày và giờ để bóng đổ theo, bầu trời thay đổi, các bề mặt ướt xuất hiện, và cây cùng người được đặt thành đối tượng thật trên các thẻ mà bạn có thể ẩn, di chuyển hoặc xóa. Thời gian trong ngày, ngày hoặc mùa, và thời tiết (quang đãng, nhiều mây, sương mù, mưa nhẹ, mưa, bão) cũng hoạt động riêng lẻ, và yêu cầu sau sẽ thay đổi chính cảnh đó. Sương mù hiển thị trong ảnh chất lượng cao trên card đồ họa; các công cụ khác hiển thị bầu trời, ánh sáng và các bề mặt ướt. Mưa không được vẽ thành các vệt rơi.

### Vật liệu

- **Vật liệu từ một ảnh.** Đưa cho ModelCraft một ảnh của một bề mặt (tường, sàn, đá) và nó tạo một vật liệu lát ghép lặp: ánh sáng trên ảnh được làm phẳng, các cạnh được làm để khớp nhau, và bản đồ màu, bản đồ độ nhám và bản đồ pháp tuyến được tính từ ảnh. Đây chỉ là xử lý ảnh thông thường trên ảnh của chính bạn, không dùng mô hình đã huấn luyện. Độ nhám là ước lượng. Ảnh phẳng, vuông và chụp thẳng cho ô lát tốt nhất; một hoa văn rõ như gạch có thể để lại bóng mờ tại chỗ nối được pha trộn.

### Bề mặt

- **Bề mặt tự do.** Bảng {{ui:Bề mặt}} tạo đường cong NURBS và bề mặt không cắt: đường cong đi qua các điểm, loft, kẻ thẳng, đùn, quay tròn, quét dọc theo một hoặc hai ray, bề mặt từ mạng lưới đường cong, mảng vá từ bốn cạnh, khớp và pha trộn. Mọi cạnh chung được đo là G0, G1 hoặc G2 (khe hở, góc, bước nhảy độ cong) trên các bề mặt chính xác, và một cạnh kém hơn mức bạn yêu cầu sẽ xuất hiện trong bảng Vấn đề với một lần sửa **Khớp**. Vằn zebra và màu độ cong được vẽ từ các bề mặt chính xác. Tệp STEP và IGES được xuất và nhập. Xem [Bề mặt tự do (NURBS)](topic:nurbs-surfaces).

### Khu đất và phòng

- **Ảnh phác thảo lên mặt đất.** {{ui:Tệp}} › {{ui:Nhập ảnh chụp phác thảo…}} biến ảnh chụp bằng điện thoại của một bản phác thảo tay thành các cạnh trên mặt đất theo tỷ lệ bạn nhập: một nhóm, với một thẻ cho mỗi màu bút. Tờ giấy được tìm và nắn thẳng trên máy tính của bạn và không có gì được gửi đi đâu. Xem [Mô hình trên mặt bằng công trường](topic:site-plan).
- **Bày đồ đạc cho phòng.** Chọn một sàn và dùng {{ui:Sắp xếp}} › {{ui:Bày đồ đạc cho phòng…}}. Đồ nội thất phòng ngủ, phòng khách, phòng ăn, bếp, phòng tắm hoặc văn phòng được đặt theo quy tắc, sát tường và cách xa cửa đi, cửa sổ, trong một nhóm mà bạn có thể lấy đi trong một bước. Đây là bố trí mặc định để bạn xem lại, không phải thiết kế. Xem [Thư viện khởi đầu](topic:starter).

### In 3D

- **Cắt nghiêng.** Tách để in có thể nghiêng các đường cắt đến 60 độ, giúp các mảnh có diện tích dán lớn hơn. Đầu nối đứng vuông góc với đường cắt. Xem [Tách mô hình để in](topic:print-split).
- **Kiểm tra in trong Vấn đề.** Các phát hiện từ kiểm tra in 3D hiển thị trong bảng Vấn đề với dấu trên mô hình, và Sửa lỗi xử lý chúng ngay từ đó. Xem [Chống đỡ, độ dày thành, khoét rỗng và sửa lỗi](topic:print-tools).

### Trong mọi ứng dụng

- **Ngôn ngữ.** Trợ giúp và ứng dụng có 54 ngôn ngữ. Mười ngôn ngữ mới: Litva, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili và Uzbek. Các ngôn ngữ khác tiếng Anh là bản dịch máy cho đến khi người bản ngữ đọc lại, và các chủ đề trợ giúp có thể vẫn bằng tiếng Anh.
- **Thiết bị nhập.** Bàn di chuột, bút, chuột 3D, bộ điều khiển trò chơi và điều khiển MIDI có thể điều khiển các ứng dụng, cho tất cả hoặc cho một ứng dụng.
- **Hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › Hàng thanh công cụ đặt Xuống dòng (như trước), 2 hàng hoặc 1 hàng. Thanh không vừa sẽ cuộn ngang thay vì lấy chỗ từ bản vẽ. Xuống dòng vẫn là mặc định.
- **Bảng thuộc tính.** Các ô của đèn trong ModelCraft dùng bảng chung: nhóm thu gọn được, cột nhãn và giá trị, và Mật độ gọn. Phép tính gõ như `2*450` vẫn hoạt động.
- **Vấn đề.** Bảng Vấn đề (nút cảnh báo trên thanh ứng dụng) được mọi ứng dụng dùng chung. Trong ModelCraft, bảng chứa kiểm tra in và cảnh báo độ liên tục bề mặt.
- **Live.** Phiên Live TeamWork cho thấy ai đang ở đâu. Xem [Mô hình cùng nhau với Live TeamWork](topic:work-live).
- **Công cụ bổ sung.** Công cụ bổ sung có thể thêm công cụ kết xuất, như trên.
- **Kết nối AI của bạn.** Hợp đồng công cụ và các kiểm tra của tám ứng dụng đã đạt, với tổng cộng 454 công cụ. Kết nối một cú nhấp trong Studio, connector được lưu trữ cho trợ lý trình duyệt, khóa riêng của bạn trong Studio và gói đã xuất bản chưa được hứa hẹn. Các ứng dụng không chứa AI riêng. Xem [Dùng ModelCraft với trợ lý AI](topic:use-with-ai-assistants).

## Đã sửa trong 0.8.1

- **Phần lớp của DWG.** Phần lớp của tệp DWG được đọc sai kiểu, có thể làm hỏng tệp khi nhập. Giờ nó được đọc đúng, trong ModelCraft và trong các ứng dụng khác đọc DWG.
- **Máy tính bảng ở chiều dọc.** Chiều cao lưới thừa được dành cho vùng vẽ, và bố cục tờ bắt đầu từ 760 pixel chiều rộng trở xuống. Bảng kiểu của ModelCraft cũng có thay đổi này.
- **Ngôn ngữ trong Studio.** CadCraft Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đây chỉ có tiếng Anh. Điều này chưa được kiểm tra trên mọi nền tảng: hãy báo cho chúng tôi nếu ngôn ngữ không đổi.

## Chưa có trong phiên bản này

- **Chưa ký mã.** Windows có thể hiện SmartScreen: chọn {{ui:Thêm thông tin}}, rồi {{ui:Vẫn chạy}}. Trên Mac, nhấp chuột phải và chọn {{ui:Mở}}. Các bản Store đang tạm dừng, và bản cho iPad và iPhone chưa được dựng lại cho 0.8.1.
- Chương trình khác vẽ ảnh mà không có tiện ích công cụ kết xuất, camera toàn cảnh hoặc lập thể, và ảnh bầu trời qua chương trình khác, cùng với plug-in mở sân khấu Unreal chưa có. Các tệp đã được ghi; plug-in chưa được phát hành và chưa được chạy trong Unreal.
- Bề mặt tự do: G3 và hạng A chưa được đo hoặc công bố, và cắt xén cùng khối đặc sẽ đến sau.
- Ảnh từ chương trình khác không giống từng điểm ảnh với ảnh của chúng tôi: chỉ có camera, mặt trời, đèn và độ phơi sáng là khớp.
- Bản sửa 0.8.1 cho việc đổi ngôn ngữ trong Studio chưa được kiểm tra trên mọi nền tảng.

Mọi thứ khác nằm trong [Chưa xây dựng](topic:not-built-yet). Về bản phát hành trước, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
