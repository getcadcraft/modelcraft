---
title: Có gì mới trong 0.9 (trước đó)
summary: Giai đoạn in với trình cắt lớp riêng và gửi qua USB, Klipper, OctoPrint và PrusaLink, cắt lớp nhựa lỏng và tiện ích bổ sung định dạng tệp, luồng vật liệu, tiện ích bản sao số và sàn nhà máy, bo góc NURBS, làm dày và khớp quét, AR tại công trường và mười phương pháp vẽ cung tròn.
keywords: có gì mới 0.9, bản phát hành trước, có gì mới, ghi chú phát hành, nhật ký thay đổi, 0.9, giai đoạn in, in 3D, gửi tới máy in 3D, trình cắt lớp, cafe, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, nhựa lỏng, in nhựa lỏng, goo, sl1, ctb, anycubic, thử phơi sáng, luồng vật liệu, bản sao số, sàn nhà máy, plc, băng tải, nurbs, bo góc, làm dày, khớp quét, ar, tại công trường, phương pháp cung tròn, đơn vị, có gì mới, ghi chú phát hành, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, bộ kết xuất, bộ máy, mở trong, usd, gltf, unreal, bộ máy tiện ích bổ sung, bề mặt, loft, quét, liên tục, g0, g1, g2, zebra, step, iges, mô tả cảnh, cảnh, thời tiết, thời điểm trong ngày, mùa, trợ lý, vật liệu từ ảnh, ảnh, ảnh phác thảo, bày đồ đạc, bày đồ đạc phòng, nghiêng, cắt nghiêng, tách, kiểm tra in, vấn đề, lưới thuộc tính, đèn, ngôn ngữ, thiết bị nhập, hàng thanh công cụ, dwg, live
from: 2717d1b1
---

Đây là những gì đã thay đổi trong ModelCraft 0.9, so với 0.8.1. ModelCraft giờ kết nối tới máy in và sàn nhà máy: bạn có thể đặt vật thể lên bàn in và gửi đi mà không cần xuất, cắt lớp cho sợi nhựa hoặc nhựa lỏng, và bố trí một dây chuyền xử lý vật liệu. Đây là CadCraft Studio 0.9 và tám ứng dụng của nó; hầu hết các tính năng mới dưới đây là tiện ích bổ sung.

## Mới

### In 3D

- **Giai đoạn in.** Nhấn {{ui:Giai đoạn in}} trên thanh công cụ. Thêm mục Thư viện vào bàn in, sắp xếp chúng, xem các lớp đã cắt và nhấn {{ui:Gửi tới máy in 3D}}, không cần xuất STL. Nó thuộc tiện ích bổ sung In 3D, được bật mặc định và có thể gỡ bỏ như mọi tiện ích khác. Xem [Đặt vật thể lên bàn in và gửi tới máy in](topic:print-stage).
- **Trình cắt lớp sợi nhựa riêng.** {{ui:CadCraft basic (có sẵn, nhanh nhất)}} là trình cắt lớp trong danh sách **Trình cắt lớp** của thẻ: thành, lớp vỏ, lớp điền đầy, giá đỡ và viền đế, chạy trên một worker để trang vẫn dùng được. {{ui:Xem trước lớp}} với thanh trượt **Lớp** hiển thị các lớp trước khi gửi. Các cấu hình máy in như kiểu Ender-3 và Prusa MK4 mang theo mã G-code khởi động riêng.
- **Gửi.** Qua USB (Chrome hoặc Edge trên máy tính, với trang được giữ mở), hoặc tới Klipper (Moonraker), OctoPrint hoặc PrusaLink trong mạng của bạn. Không có gì kết nối hay gửi nếu không có một lần nhấn, và việc gửi luôn hỏi trước.
- **Trình cắt lớp khác.** Kiri:Moto, PrusaSlicer và OrcaSlicer là các tiện ích bổ sung riêng, mặc định tắt; thêm chúng từ thẻ hoặc từ {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}. PrusaSlicer và OrcaSlicer dùng bản cài sẵn trên máy của bạn từ CadCraft Studio. Tiện ích máy in Bambu Lab cắt lớp bằng OrcaSlicer của bạn cùng các cấu hình P2S và cần Studio trên máy tính.
- **In nhựa lỏng.** Các tiện ích nhựa lỏng (mặc định tắt) tạo ảnh lớp cho màn hình máy in, với làm rỗng và lỗ thoát khí, đế nổi và giá đỡ, xem trước lớp, cùng thời gian, lượng nhựa và chi phí. Các tiện ích định dạng tệp ghi Elegoo GOO, SL1, Chitubox (CBDDLP và CTB 2 đến 5) và Anycubic (PWMX và PWS). Thử phơi sáng nhựa lỏng tạo một thang gồm năm mức phơi sáng. Xem [Cắt lớp cho máy in nhựa lỏng](topic:resin-printing).
- **Không đổi.** {{ui:Xuất}} › {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}}, các công cụ in và Tách để in hoạt động như trong 0.8. Xem [Chuẩn bị mô hình để in 3D](topic:print-3d).

### Luồng vật liệu, Bản sao số và Sàn nhà máy

Ba mục này là tiện ích bổ sung, tắt cho đến khi bạn bật chúng trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}, và mỗi mục có phần trợ giúp riêng khi đã bật.

- **Luồng vật liệu.** Bảng Luồng vật liệu bố trí băng tải, trạm, bộ đệm và đường đi AGV trong chế độ xem 3D, chạy một mô phỏng có hạt giống, phát lại, và hiển thị năng suất, thời gian dẫn và hàng đợi, với kết quả lưu dạng CSV. Đơn hàng có thể đến từ một tệp CSV. Ô robot có thể được kiểm tra và xuất. Liên kết PLC có chế độ mềm và chế độ thật qua Modbus TCP, chỉ hoạt động trong CadCraft Studio.
- **Bản sao số.** Đọc bố cục Luồng vật liệu và chạy một PLC mềm trên đó, với các lỗi bạn có thể buộc, kiểm tra tồn kho, so sánh bố cục và danh mục vật tư.
- **Sàn nhà máy.** Biến các trạm thành máy và ô, đọc chúng trực tiếp hoặc từ bộ mô phỏng, và giữ một hàng đợi công việc cùng OEE đơn giản. Nó chỉ đọc: bản dựng này không thể ghi vào máy hoặc PLC.

### Bề mặt, mô hình và bản vẽ

- **Bo góc, làm dày và phép boolean trên NURBS.** Bảng {{ui:Bề mặt}} có {{ui:Bo góc giữa các mặt}}, {{ui:Bo góc nhiều cạnh}}, {{ui:Làm dày thành khối đặc}} và Hợp, Trừ và Giao, mỗi cái đều có độ lệch đo được. Xem [Bề mặt tự do (NURBS)](topic:nurbs-surfaces).
- **Khớp bề mặt vào bản quét.** Chọn một lưới quét và dùng {{ui:Khớp bề mặt vào bản quét}} trong nhóm **Quét**, rồi {{ui:Ghép bề mặt thành khối đặc}}. Đây là lần khớp đầu tiên, không phải bộ công cụ tái dựng ngược đầy đủ.
- **Liên kết trực tiếp từ bộ dựng mô hình .3dm.** Một chiều, từ Rhino 8 hoặc Grasshopper, và cần CadCraft Studio trên cùng máy tính. Xem [Giữ mô hình .3dm luôn cập nhật](topic:live-3dm-link).
- **Xem mô hình tại công trường.** {{ui:Xem tại công trường (AR, điện thoại)}} trong menu {{ui:Khung nhìn}} hoạt động trên điện thoại Android với Chrome. Xem [Xem mô hình tại công trường bằng điện thoại Android (AR)](topic:ar-on-site).
- **Phương pháp cung tròn.** Danh sách thả {{ui:Phương pháp cung tròn}} có mười cách vẽ cung tròn, gồm {{ui:Ba điểm}} và {{ui:Điểm đầu, Tâm, Điểm cuối}}.
- **Thêm đơn vị.** Khối lượng (kg, lb, t, ton) và nhiệt độ (độ C, F, K và R) được nhận diện khi bạn nhập giá trị có đơn vị.

## Trong mọi ứng dụng

- **Gợi ý khi di chuột.** Chữ gợi ý hiện khi di chuột trên nút và nhãn bị cắt là một gợi ý Bootstrap.
- **Mẹo khởi đầu có thể đóng.** Thẻ mẹo trên vùng bản vẽ trống có một nút đóng nhỏ (x). Nó giữ ở trạng thái đóng, và bảng lệnh có thể hiện lại.
- **Thanh thẻ có thể cuộn.** Thanh thẻ của bảng không vừa sẽ cuộn thay vì bị cắt.
- **Tiêu đề thẻ.** Khi một tài liệu đang mở, thẻ trình duyệt bắt đầu bằng tên tài liệu, rồi đến ModelCraft và CadCraft. Một chấm đứng đầu khi còn thay đổi chưa lưu.
- **Bố cục.** {{ui:Cài đặt}} › {{ui:Chung}} › Bố cục giữ các bố cục trong một danh sách thả, với lựa chọn dùng bố cục chỉ cho ứng dụng này và nút đặt lại bố cục.
- **Ngôn ngữ.** Danh sách ngôn ngữ trong Cài đặt theo các tệp ngôn ngữ mà bản dựng có. Các ngôn ngữ khác tiếng Anh là bản nháp máy.
- **Live và Thư viện.** Live TeamWork hiển thị con trỏ và tên của mọi người theo thời gian thực, còn các bộ sưu tập Thư viện cho mỗi ứng dụng một bộ sưu tập mặc định.

## Đã sửa

- {{ui:Phát}} chuyển thành {{ui:Tạm dừng}} khi hoạt hình đang chạy, và {{key:Space}} phát và tạm dừng khi dòng thời gian đang mở.
- Ảnh kết xuất tĩnh chuyển sang WebGL khi card đồ họa không thể khởi động bộ theo dõi đường đi. Chế độ xem kết xuất trực tiếp có thể vẫn hiển thị lỗi; điều này chưa được kiểm tra trên máy Windows với driver đó.
- Chế độ thật của Luồng vật liệu kết nối lại được sau khi một liên kết bị ngắt do phản hồi ngoại lệ của PLC.

## Giới hạn thực tế

- Chưa có gì được in trên máy in thật: không phải sợi nhựa, không phải nhựa lỏng, không qua Bambu Connect. Các tệp nhựa lỏng chỉ được đọc lại bởi trình đọc riêng của CadCraft.
- Bản sao số và Sàn nhà máy chỉ được thử với bộ mô phỏng và kết quả đã biết, không có PLC, dây chuyền hay giao thức thật. Chúng là công cụ hỗ trợ kiểm tra, không phải xác nhận an toàn. Vật lý chỉ bao phủ hộp, tối đa tám tải.
- Liên kết Rhino và Grasshopper chưa bao giờ chạy trong chương trình thật.
- Các ngôn ngữ khác tiếng Anh là bản nháp máy.

## Trước đó: 0.8 và 0.8.1

Đây là những gì đã thay đổi trong ModelCraft 0.8 (2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. Hộp thoại {{ui:Kết xuất ảnh…}} giờ có thể gửi cảnh sang chương trình khác, bảng Bề mặt tạo bề mặt tự do mượt, và một trợ lý bạn kết nối có thể đặt cả một cảnh chỉ từ một câu.

### Mới

**Kết xuất**

- **Lựa chọn Bộ máy.** {{ui:Kết xuất ảnh…}} có danh sách **Bộ máy** phía trên Chế độ. Hai bộ máy riêng của chúng tôi, Nhanh và Bộ theo dõi đường đi, là mặc định và chạy được ở mọi nơi. Các mục khác lưu cảnh thành một gói (mô hình dưới dạng tệp USD, cùng một tệp cài đặt với giá trị vật liệu chính xác, các đèn đang bật, mặt trời, bầu trời, độ phơi sáng và camera) để mang sang chương trình khác. Một ảnh do chương trình khác vẽ sẽ ghi rõ chương trình và phiên bản đã tạo ra nó. Xem [Chọn chương trình vẽ ảnh](topic:render-engines).
- **Mở trong chương trình khác.** Danh sách Bộ máy có thể lưu cảnh thành tệp USD, tệp glTF (`.glb`) hoặc thư mục dự án Unreal (`.zip`), trong trình duyệt và trong CadCraft Studio. Trong Studio, nó cũng có thể khởi động usdview hoặc chương trình riêng của máy tính cho tệp đó. Xem [Mở cảnh trong chương trình khác](topic:render-open-in).
- **Gửi tới bộ máy game từ Studio.** Studio ghi cảnh vào một dự án Unreal Engine và giữ nó đồng bộ ở mỗi lần gửi, chỉ một chiều. Các chỉnh sửa của bạn nằm trong một lớp mà CadCraft không bao giờ ghi. Xem [Gửi cảnh tới bộ máy game](topic:render-unreal).
- **Bộ máy từ tiện ích bổ sung.** Một tiện ích có thể thêm một bộ máy vào danh sách. Bộ máy viết bằng JavaScript vẽ trong trình duyệt và trong Studio; bộ máy chạy một chương trình cần bạn đồng ý trong Studio. Xem [Vẽ ảnh bằng chương trình khác](topic:render-other-program) và [Thêm bộ máy kết xuất bằng tiện ích bổ sung](topic:render-engine-addons).
- **Mô tả cảnh.** Nói với trợ lý đã kết nối của bạn "hoàng hôn, mưa nhẹ, cây mùa thu, người trên quảng trường" và ModelCraft thiết lập trong một bước: mặt trời di chuyển theo ngày và giờ để bóng đổ theo, bầu trời thay đổi, bề mặt ướt xuất hiện, còn cây và người được đặt như các đối tượng thật trên thẻ bạn có thể ẩn, di chuyển hoặc xóa. Thời điểm trong ngày, ngày hoặc mùa, và thời tiết (quang đãng, u ám, sương mù, mưa nhẹ, mưa, bão) cũng hoạt động riêng, và một yêu cầu sau đó sẽ thay đổi cùng cảnh đó. Sương mù hiện trong ảnh chất lượng cao trên card đồ họa; các bộ máy khác hiện bầu trời, ánh sáng và bề mặt ướt. Mưa không được vẽ thành các vệt rơi.

**Vật liệu**

- **Một vật liệu từ một ảnh.** Đưa cho ModelCraft một ảnh của một bề mặt (tường, sàn, đá) và nó tạo một vật liệu lát: ánh sáng trên ảnh được làm phẳng, các cạnh được ghép khớp, và bản đồ màu, bản đồ độ nhám và bản đồ pháp tuyến được tính từ ảnh. Đây chỉ là xử lý ảnh thông thường trên ảnh của riêng bạn, không có mô hình được huấn luyện. Độ nhám là ước tính. Ảnh phẳng, vuông và nhìn thẳng cho miếng lát đẹp nhất; một hoa văn mạnh như gạch có thể hiện một bóng mờ tại chỗ ghép được pha trộn.

**Bề mặt**

- **Bề mặt tự do.** Bảng {{ui:Bề mặt}} tạo các đường cong NURBS và bề mặt không cắt: đường cong qua các điểm, loft, kẻ thẳng, đùn, quay tròn, quét dọc theo một hoặc hai ray, bề mặt từ mạng đường cong, miếng vá từ bốn cạnh, khớp và pha trộn. Mỗi cạnh chung được đo là G0, G1 hoặc G2 (khe hở, góc, nhảy độ cong) trên các bề mặt chính xác, và một cạnh tệ hơn mức bạn yêu cầu sẽ xuất hiện trong bảng Vấn đề với một sửa lỗi **Khớp**. Vằn zebra và màu độ cong được vẽ từ các bề mặt chính xác. Tệp STEP và IGES có thể xuất và nhập. Xem [Bề mặt tự do (NURBS)](topic:nurbs-surfaces).

**Công trường và phòng**

- **Ảnh phác thảo lên mặt đất.** {{ui:Tệp}} › {{ui:Nhập ảnh chụp phác thảo…}} biến ảnh chụp điện thoại của một bản phác thảo tay thành các cạnh trên mặt đất theo tỷ lệ bạn nói: một nhóm, với một thẻ cho mỗi màu bút. Tờ giấy được tìm thấy và làm thẳng trên máy tính của bạn, và không có gì được gửi đi đâu. Xem [Mô hình trên mặt bằng công trường](topic:site-plan).
- **Bày đồ đạc cho phòng.** Chọn một sàn và dùng {{ui:Sắp xếp}} › {{ui:Bày đồ đạc cho phòng…}}. Nội thất phòng ngủ, phòng khách, phòng ăn, bếp, phòng tắm hoặc văn phòng được đặt theo quy tắc, sát tường và tránh cửa đi và cửa sổ, trong một nhóm bạn có thể lấy đi chỉ trong một bước. Đây là bố trí mặc định để bạn xem lại, không phải một thiết kế. Xem [Thư viện khởi đầu](topic:starter).

**In 3D**

- **Cắt nghiêng.** Tách để in có thể cắt nghiêng tới 60 độ, giúp các mảnh có thêm diện tích dán. Các chốt nối đứng vuông góc với mặt cắt. Xem [Tách mô hình để in](topic:print-split).
- **Kiểm tra in trong Vấn đề.** Các phát hiện của kiểm tra in 3D hiển thị trong bảng Vấn đề với dấu trên mô hình, và Sửa chữa xử lý chúng từ đó. Xem [Giá đỡ, độ dày thành, làm rỗng và sửa chữa](topic:print-tools).

**Trong mọi ứng dụng**

- **Ngôn ngữ.** Trợ giúp và ứng dụng có 54 ngôn ngữ. Mười ngôn ngữ mới: tiếng Litva, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili và Uzbek. Các ngôn ngữ khác tiếng Anh là bản nháp máy cho đến khi người bản ngữ đọc lại, và các chủ đề trợ giúp có thể vẫn bằng tiếng Anh.
- **Thiết bị nhập.** Bàn di chuột, bút, chuột 3D, tay cầm chơi game và điều khiển MIDI có thể điều khiển các ứng dụng, cho tất cả hoặc cho một ứng dụng.
- **Hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › Hàng thanh công cụ đặt Xuống dòng (như trước), 2 hàng hoặc 1 hàng. Thanh không vừa sẽ cuộn ngang thay vì lấy chỗ của bản vẽ. Xuống dòng vẫn là mặc định.
- **Lưới thuộc tính.** Các trường đèn của ModelCraft dùng lưới chung: nhóm thu gọn được, cột nhãn và giá trị, và mật độ Gọn. Phép tính nhập như `2*450` vẫn hoạt động.
- **Vấn đề.** Bảng Vấn đề (nút cảnh báo trên thanh ứng dụng) được dùng chung bởi mọi ứng dụng. Trong ModelCraft, nó chứa kiểm tra in và cảnh báo tính liên tục của bề mặt.
- **Live.** Phiên Live TeamWork cho thấy ai đang ở đâu. Xem [Mô hình cùng nhau với Live TeamWork](topic:work-live).
- **Tiện ích bổ sung.** Tiện ích bổ sung có thể thêm bộ máy kết xuất, như trên.
- **Kết nối AI của bạn.** Hợp đồng công cụ và các kiểm tra của tám ứng dụng đã đạt, với tổng cộng 454 công cụ. Kết nối một chạm trong Studio, một connector được lưu trữ cho trợ lý trình duyệt, khóa riêng của bạn trong Studio và một gói đã xuất bản chưa được hứa. Các ứng dụng không chứa AI riêng. Xem [Dùng ModelCraft với trợ lý AI](topic:use-with-ai-assistants).

### Đã sửa trong 0.8.1

- **Phần lớp DWG.** Phần lớp của tệp DWG bị đọc sai kiểu, có thể làm hỏng tệp khi nhập. Giờ nó được đọc đúng, trong ModelCraft và trong các ứng dụng khác đọc DWG.
- **Máy tính bảng dọc.** Chiều cao lưới dư được dành cho canvas, và bố cục tờ bắt đầu ở 760 điểm ảnh trở xuống. Bảng kiểu của ModelCraft cũng có thay đổi này.
- **Ngôn ngữ trong Studio.** CadCraft Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đây chỉ có tiếng Anh. Điều này chưa được kiểm tra trên mọi nền tảng: cho chúng tôi biết nếu ngôn ngữ không đổi.

### Chưa có trong phiên bản này

- **Chưa ký mã.** Windows có thể hiện SmartScreen: chọn {{ui:Thêm thông tin}}, rồi {{ui:Vẫn chạy}}. Trên Mac, nhấn chuột phải và chọn {{ui:Mở}}. Bản phát hành trên cửa hàng đang tạm dừng, và bản dựng iPad và iPhone chưa được dựng lại cho 0.8.1.
- Một chương trình khác vẽ ảnh mà không có tiện ích bộ máy kết xuất, camera toàn cảnh hoặc âm thanh nổi, và ảnh nền bầu trời qua chương trình khác, cùng plug-in mở sân khấu Unreal, chưa có. Các tệp được ghi; plug-in chưa được phát hành và chưa được chạy trong Unreal.
- Bề mặt tự do: G3 và class A chưa được đo hoặc khẳng định, và cắt xén và khối đặc sẽ đến sau.
- Ảnh từ chương trình khác không giống từng điểm ảnh với ảnh của chúng tôi: chỉ có camera, mặt trời, đèn và độ phơi sáng là khớp.
- Bản sửa 0.8.1 cho việc đổi ngôn ngữ trong Studio chưa được kiểm tra trên mọi nền tảng.

Mọi thứ khác nằm trong [Chưa xây dựng](topic:not-built-yet). Về bản phát hành trước, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
