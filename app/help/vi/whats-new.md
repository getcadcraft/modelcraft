---
title: Có gì mới trong 0.9
summary: Giai đoạn in với trình cắt lớp riêng và gửi tới USB, Klipper, OctoPrint và PrusaLink, cắt lớp nhựa lỏng và tiện ích bổ sung tệp, luồng vật liệu, tiện ích bổ sung bản sao số và sàn nhà máy, bo góc NURBS, làm dày và khớp bản quét, AR tại công trường và mười phương pháp vẽ cung tròn.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, 0.9, giai đoạn in, in 3d, gửi tới máy in 3d, trình cắt lớp, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, nhựa lỏng, resin, in nhựa lỏng, goo, sl1, ctb, anycubic, thử nghiệm phơi sáng, luồng vật liệu, bản sao số, sàn nhà máy, plc, băng tải, nurbs, bo góc, fillet, làm dày, khớp bản quét, ar, tại công trường, phương pháp cung tròn, đơn vị, 0.8, 0.8.1, phiên bản, tính năng mới, động cơ kết xuất, engine, mở trong, usd, gltf, unreal, tiện ích bổ sung, loft, quét, liên tục, g0, g1, g2, zebra, step, iges, mô tả cảnh, cảnh, thời tiết, thời điểm trong ngày, mùa, trợ lý, vật liệu từ ảnh, ảnh, ảnh phác thảo, bày đồ đạc, cắt nghiêng, tách, kiểm tra in, vấn đề, bảng thuộc tính, đèn, ngôn ngữ, thiết bị nhập, hàng thanh công cụ, dwg, live
from: 169048a2
---

Đây là những thay đổi trong ModelCraft 0.9 so với 0.8.1. ModelCraft giờ kết nối tới máy in và sàn nhà máy: bạn có thể đặt đồ vật lên bàn in và gửi đi mà không cần xuất tệp, cắt lớp cho sợi nhựa (filament) hoặc nhựa lỏng (resin), và bố trí một dây chuyền vận chuyển vật liệu. Đây là CadCraft Studio 0.9 cùng tám ứng dụng của nó; phần lớn tính năng mới bên dưới là tiện ích bổ sung.

## Mới

### In 3D

- **Giai đoạn in.** Nhấn {{ui:Print stage}} trên thanh công cụ. Thêm mục thư viện vào bàn in của máy, sắp xếp, xem các lớp đã cắt và nhấn {{ui:Send to 3D printer}}, không cần xuất STL. Tính năng này thuộc tiện ích bổ sung In 3D, được bật sẵn và có thể gỡ bỏ như mọi tiện ích bổ sung. Xem [Đặt đồ vật lên bàn in và gửi tới máy in](topic:print-stage).
- **Trình cắt lớp sợi nhựa riêng.** {{ui:CadCraft basic (included, fastest)}} là trình cắt lớp trong danh sách **Slicer** của thẻ: tường, lớp vỏ, lớp đệm, giá đỡ và viền đế, chạy trên một luồng nền để trang vẫn dùng được. {{ui:Preview layers}} cùng thanh trượt **Layer** hiển thị các lớp trước khi bạn gửi. Các hồ sơ máy in như kiểu Ender-3 và Prusa MK4 có mã G-code khởi động riêng.
- **Gửi đi.** Qua USB (Chrome hoặc Edge trên máy tính, với trang được giữ mở), hoặc tới Klipper (Moonraker), OctoPrint hay PrusaLink trong mạng của bạn. Không có gì kết nối hay gửi nếu bạn chưa nhấn, và khi gửi, hệ thống sẽ hỏi trước.
- **Các trình cắt lớp khác.** Kiri:Moto, PrusaSlicer và OrcaSlicer là các tiện ích bổ sung riêng, mặc định tắt; thêm chúng từ thẻ hoặc từ {{ui:Settings}} › {{ui:Add-ons}}. PrusaSlicer và OrcaSlicer dùng bản đã cài sẵn trên máy của bạn từ CadCraft Studio. Tiện ích máy in Bambu Lab cắt lớp bằng OrcaSlicer của bạn cùng các hồ sơ P2S, và cần Studio trên máy tính.
- **In nhựa lỏng.** Các tiện ích nhựa lỏng (mặc định tắt) tạo ảnh lớp cho màn hình máy in, có tạo rỗng và lỗ thoát khí, đế nổi và giá đỡ, xem trước lớp, cùng thời gian, lượng nhựa và chi phí. Các tiện ích định dạng tệp ghi Elegoo GOO, SL1, Chitubox (CBDDLP và CTB 2 đến 5) và Anycubic (PWMX và PWS). Thử nghiệm phơi sáng nhựa lỏng tạo một bậc thang gồm năm mức phơi sáng. Xem [Cắt lớp cho máy in nhựa lỏng](topic:resin-printing).
- **Không đổi.** {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}, các công cụ in và Tách để in hoạt động như ở 0.8. Xem [Chuẩn bị mô hình để in 3D](topic:print-3d).

### Luồng vật liệu, Bản sao số và Sàn nhà máy

Ba mục này là tiện ích bổ sung, tắt cho đến khi bạn bật trong {{ui:Settings}} › {{ui:Add-ons}}, và mỗi mục có trợ giúp riêng khi đã bật.

- **Luồng vật liệu.** Một bảng tên Luồng vật liệu bố trí băng tải, trạm, bộ đệm và đường đi AGV trong khung nhìn 3D, chạy một mô phỏng có hạt giống, phát lại, và hiển thị thông lượng, thời gian chờ và hàng đợi, với kết quả lưu dưới dạng CSV. Đơn hàng có thể lấy từ tệp CSV. Các ô robot có thể được kiểm tra và xuất. Liên kết PLC có chế độ mềm và chế độ thật qua Modbus TCP, chỉ hoạt động trong CadCraft Studio.
- **Bản sao số.** Đọc bố cục Luồng vật liệu và chạy một PLC mềm trên đó, với các lỗi có thể ép xảy ra, kiểm tra tồn kho, so sánh bố cục và bảng vật tư.
- **Sàn nhà máy.** Biến các trạm thành máy và ô sản xuất, đọc dữ liệu trực tiếp hoặc từ trình mô phỏng, và giữ hàng đợi công việc cùng chỉ số OEE đơn giản. Tính năng này chỉ đọc: bản dựng này không thể ghi vào máy hay PLC.

### Bề mặt, mô hình và bản vẽ

- **Bo góc, làm dày và phép boolean trên NURBS.** Bảng {{ui:Surfaces}} có {{ui:Fillet between faces}}, {{ui:Fillet several edges}}, {{ui:Thicken into a solid}} và Hợp, Trừ và Giao, mỗi lệnh kèm độ lệch đo được. Xem [Bề mặt tự do (NURBS)](topic:nurbs-surfaces).
- **Khớp bề mặt vào bản quét.** Chọn lưới đã quét rồi dùng {{ui:Fit surfaces to the scan}} trong nhóm **Scan**, sau đó {{ui:Stitch the surfaces to a solid}}. Đây là bước khớp đầu tiên, không phải bộ công cụ dựng ngược đầy đủ.
- **Liên kết trực tiếp từ công cụ dựng mô hình .3dm.** Một chiều, từ Rhino 8 hoặc Grasshopper, và cần CadCraft Studio trên cùng máy tính. Xem [Giữ liên kết trực tiếp mô hình .3dm](topic:live-3dm-link).
- **Xem mô hình tại công trường.** {{ui:View on site (AR, phone)}} trong menu {{ui:Views}} hoạt động trên điện thoại Android với Chrome. Xem [Xem mô hình tại công trường bằng điện thoại Android (AR)](topic:ar-on-site).
- **Phương pháp cung tròn.** Danh sách thả xuống {{ui:Arc methods}} có mười cách vẽ cung tròn, gồm {{ui:3-Point}} và {{ui:Start, Center, End}}.
- **Thêm đơn vị.** Khối lượng (kg, lb, t, ton) và nhiệt độ (độ C, F, K và R) được nhận diện khi bạn nhập giá trị có đơn vị.

## Trong mọi ứng dụng

- **Chú giải công cụ.** Chữ hiện khi di chuột trên nút và nhãn bị cắt là chú giải công cụ Bootstrap.
- **Thẻ mẹo khởi đầu đóng được.** Thẻ mẹo trên vùng bản vẽ trống có nút đóng x nhỏ. Thẻ sẽ vẫn đóng, và bảng lệnh có thể hiện lại.
- **Dải thẻ cuộn được.** Dải thẻ của bảng nếu không vừa sẽ cuộn thay vì bị cắt.
- **Tiêu đề thẻ.** Khi đang mở tài liệu, thẻ trình duyệt bắt đầu bằng tên tài liệu, rồi tới ModelCraft và CadCraft. Chấm đứng trước khi có thay đổi chưa lưu.
- **Bố cục.** {{ui:Settings}} › {{ui:General}} › Layout giữ các bố cục trong danh sách thả xuống, có lựa chọn dùng bố cục chỉ cho ứng dụng này và nút để đặt lại bố cục.
- **Ngôn ngữ.** Danh sách ngôn ngữ trong Cài đặt theo các tệp ngôn ngữ có trong bản dựng. Các ngôn ngữ khác tiếng Anh là bản nháp máy dịch.
- **Live và Thư viện.** Live TeamWork hiển thị con trỏ và tên trực tiếp, còn bộ sưu tập Thư viện cho mỗi ứng dụng một bộ sưu tập mặc định.

## Đã sửa

- {{ui:Play}} chuyển thành {{ui:Pause}} khi một hoạt ảnh đang chạy, và {{key:Space}} phát và tạm dừng khi dòng thời gian đang mở.
- Ảnh kết xuất tĩnh chuyển sang WebGL khi card đồ họa không khởi động được bộ theo dõi đường đi. Khung kết xuất trực tiếp có thể vẫn hiện lỗi; điều này chưa được kiểm tra trên máy Windows với driver đó.
- Chế độ thật của Luồng vật liệu kết nối lại được sau khi liên kết kết thúc do phản hồi ngoại lệ từ PLC.

## Giới hạn thực tế

- Chưa có gì được in trên máy in thật: không sợi nhựa, không nhựa lỏng, cũng không qua Bambu Connect. Các tệp nhựa lỏng chỉ được đọc lại bằng trình đọc của chính CadCraft.
- Bản sao số và Sàn nhà máy chỉ được thử với trình mô phỏng và đáp án đã biết, không có PLC, dây chuyền hay giao thức thật. Đây là công cụ kiểm tra hỗ trợ, không phải xác nhận an toàn. Vật lý chỉ áp dụng cho hộp, tối đa tám tải.
- Liên kết Rhino và Grasshopper chưa từng chạy trong chương trình thật.
- Các ngôn ngữ khác tiếng Anh là bản nháp máy dịch.

## Trước đó: 0.8 và 0.8.1

Đây là những thay đổi trong ModelCraft 0.8 (2026-11-01) và 0.8.1 (2026-11-02), so với 0.7. Hộp thoại {{ui:Render a picture…}} giờ có thể gửi cảnh sang chương trình khác, bảng Surfaces tạo bề mặt tự do mượt, và một trợ lý bạn kết nối có thể thiết lập cả cảnh chỉ từ một câu.

### Mới

**Kết xuất**

- **Lựa chọn Engine.** {{ui:Render a picture…}} có danh sách **Engine** phía trên Mode. Hai động cơ của chúng tôi, Fast và Path tracer, là mặc định và hoạt động ở mọi nơi. Các mục khác lưu cảnh thành một gói (mô hình dạng tệp USD, cùng tệp cài đặt ghi giá trị vật liệu chính xác, các đèn đang bật, mặt trời, bầu trời, độ phơi sáng và camera) để mang sang chương trình khác. Ảnh do chương trình khác vẽ sẽ ghi rõ chương trình và phiên bản đã tạo ra. Xem [Chọn chương trình vẽ ảnh](topic:render-engines).
- **Mở trong chương trình khác.** Danh sách Engine có thể lưu cảnh thành tệp USD, tệp glTF (`.glb`) hoặc thư mục dự án Unreal (`.zip`), trong trình duyệt và trong CadCraft Studio. Trong Studio, còn có thể khởi chạy usdview hoặc chương trình mặc định của máy cho tệp đó. Xem [Mở cảnh trong chương trình khác](topic:render-open-in).
- **Gửi tới công cụ trò chơi từ Studio.** Studio ghi cảnh vào một dự án Unreal Engine và giữ đồng bộ ở mỗi lần gửi, chỉ một chiều. Chỉnh sửa của bạn nằm trong một lớp mà CadCraft không bao giờ ghi. Xem [Gửi cảnh tới công cụ trò chơi](topic:render-unreal).
- **Động cơ từ tiện ích bổ sung.** Một tiện ích bổ sung có thể thêm động cơ vào danh sách. Động cơ viết bằng JavaScript vẽ trong trình duyệt và trong Studio; động cơ chạy một chương trình cần bạn đồng ý trong Studio. Xem [Vẽ ảnh bằng chương trình khác](topic:render-other-program) và [Thêm động cơ kết xuất bằng tiện ích bổ sung](topic:render-engine-addons).
- **Mô tả cảnh.** Nói với trợ lý đã kết nối của bạn "chạng vạng, mưa nhẹ, cây mùa thu, người đi trên quảng trường", và ModelCraft thiết lập trong một bước: mặt trời di chuyển theo ngày và giờ để bóng đổ theo, bầu trời thay đổi, bề mặt ướt xuất hiện, và cây cùng người được đặt như các đối tượng thật trên thẻ mà bạn có thể ẩn, di chuyển hoặc xóa. Thời điểm trong ngày, ngày hoặc mùa, và thời tiết (quang đãng, u ám, sương mù, mưa nhẹ, mưa, bão) cũng hoạt động riêng lẻ, và yêu cầu sau sẽ thay đổi cùng cảnh đó. Sương mù hiển thị trong ảnh chất lượng cao trên card đồ họa; các động cơ khác hiển thị bầu trời, ánh sáng và bề mặt ướt. Mưa không được vẽ thành các vệt rơi.

**Vật liệu**

- **Vật liệu từ một ảnh.** Đưa cho ModelCraft một ảnh bề mặt (tường, sàn, đá) và nó tạo ra vật liệu lát gạch: ánh sáng trên ảnh được làm phẳng, các cạnh được nối khớp, và bản đồ màu, bản đồ độ nhám và bản đồ pháp tuyến được tính từ ảnh. Đây là xử lý ảnh thông thường trên ảnh của chính bạn, không dùng mô hình đã huấn luyện. Độ nhám chỉ là ước lượng. Ảnh phẳng, vuông và chụp thẳng cho viên gạch tốt nhất; một hoa văn mạnh như gạch xây có thể để lại vết mờ ở chỗ nối đã pha trộn.

**Bề mặt**

- **Bề mặt tự do.** Bảng {{ui:Surfaces}} tạo đường cong NURBS và bề mặt chưa cắt: đường cong qua các điểm, loft, ruled, đùn, quay tròn, quét theo một hoặc hai đường ray, bề mặt từ mạng đường cong, miếng vá từ bốn cạnh, khớp và pha trộn. Mỗi cạnh chung được đo là G0, G1 hoặc G2 (khe hở, góc, bước nhảy độ cong) trên bề mặt chính xác, và cạnh kém hơn mức bạn yêu cầu sẽ xuất hiện trong bảng Vấn đề với nút sửa **Match**. Các vạch Zebra và màu độ cong được vẽ từ bề mặt chính xác. Tệp STEP và IGES được xuất và nhập. Xem [Bề mặt tự do (NURBS)](topic:nurbs-surfaces).

**Công trường và phòng**

- **Ảnh phác thảo lên mặt đất.** {{ui:File}} › {{ui:Import a sketch photo…}} biến ảnh chụp bằng điện thoại của một bản phác tay thành các cạnh trên mặt đất theo tỷ lệ bạn nhập: một nhóm, với một thẻ cho mỗi màu bút. Tờ giấy được tìm và làm thẳng trên máy tính của bạn, và không có gì được gửi đi đâu. Xem [Mô hình trên mặt bằng công trường](topic:site-plan).
- **Bày đồ đạc cho phòng.** Chọn một sàn rồi dùng {{ui:Organize}} › {{ui:Furnish a room…}}. Đồ nội thất phòng ngủ, phòng khách, phòng ăn, nhà bếp, phòng tắm hoặc văn phòng được đặt theo quy tắc, sát tường và tránh cửa đi, cửa sổ, trong một nhóm bạn có thể gỡ bằng một bước. Đây là bố cục mặc định để bạn xem lại, không phải thiết kế. Xem [Thư viện khởi đầu](topic:starter).

**In 3D**

- **Cắt nghiêng.** Tách để in có thể cắt nghiêng tới 60 độ, giúp các mảnh có diện tích dán lớn hơn. Các chi tiết nối đứng vuông góc với mặt cắt. Xem [Tách mô hình để in](topic:print-split).
- **Kiểm tra in trong Vấn đề.** Kết quả của kiểm tra in 3D hiển thị trong bảng Vấn đề với đánh dấu trên mô hình, và Sửa chữa khắc phục chúng ngay từ đó. Xem [Giá đỡ, độ dày tường, tạo rỗng và sửa chữa](topic:print-tools).

**Trong mọi ứng dụng**

- **Ngôn ngữ.** Trợ giúp và ứng dụng có 54 ngôn ngữ. Mười ngôn ngữ mới: tiếng Litva, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili và Uzbek. Các ngôn ngữ khác tiếng Anh là bản nháp máy dịch cho đến khi người bản ngữ đọc lại, và các chủ đề trợ giúp có thể vẫn bằng tiếng Anh.
- **Thiết bị nhập.** Bàn di chuột, bút, chuột 3D, tay cầm chơi game và điều khiển MIDI có thể điều khiển ứng dụng, cho tất cả hoặc cho một ứng dụng.
- **Hàng thanh công cụ.** {{ui:Settings}} › {{ui:General}} › Toolbar rows đặt Wrap (như trước), 2 hàng hoặc 1 hàng. Thanh không vừa sẽ cuộn ngang thay vì chiếm chỗ của bản vẽ. Wrap vẫn là mặc định.
- **Bảng thuộc tính.** Các trường đèn của ModelCraft dùng bảng chung: nhóm thu gọn được, cột nhãn và giá trị, và mật độ Compact. Phép tính nhập như `2*450` vẫn hoạt động.
- **Vấn đề.** Bảng Vấn đề (nút cảnh báo trên thanh ứng dụng) được mọi ứng dụng dùng chung. Trong ModelCraft, bảng chứa kết quả kiểm tra in và cảnh báo liên tục của bề mặt.
- **Live.** Phiên Live TeamWork cho biết ai đang ở đâu. Xem [Cùng mô hình với Live TeamWork](topic:work-live).
- **Tiện ích bổ sung.** Tiện ích bổ sung có thể thêm động cơ kết xuất, như trên.
- **Kết nối AI của bạn.** Hợp đồng công cụ và các kiểm tra của tám ứng dụng đều đạt, với 454 công cụ tổng cộng. Kết nối một lần bên trong Studio, một connector được lưu trữ cho trợ lý trên trình duyệt, khóa riêng của bạn bên trong Studio và gói đã xuất bản chưa được hứa hẹn. Các ứng dụng không có AI riêng. Xem [Dùng ModelCraft với trợ lý AI](topic:use-with-ai-assistants).

### Đã sửa trong 0.8.1

- **Phần lớp của DWG.** Phần lớp của tệp DWG bị đọc sai kiểu, có thể làm hỏng tệp khi nhập. Giờ tệp được đọc đúng, trong ModelCraft và trong các ứng dụng khác đọc DWG.
- **Máy tính bảng dọc.** Chiều cao lưới dư được dành cho vùng vẽ, và bố cục bản vẽ bắt đầu ở độ rộng 760 pixel trở xuống. Tệp kiểu của ModelCraft cũng có thay đổi này.
- **Ngôn ngữ trong Studio.** CadCraft Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đây chỉ có tiếng Anh. Điều này chưa được kiểm tra trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.

### Chưa có trong phiên bản này

- **Chưa ký mã.** Windows có thể hiện SmartScreen: chọn {{ui:More info}}, rồi {{ui:Run anyway}}. Trên Mac, nhấn chuột phải và chọn {{ui:Open}}. Bản phát hành trên cửa hàng đang tạm dừng, và bản dựng iPad và iPhone chưa được dựng lại cho 0.8.1.
- Chương trình khác vẽ ảnh khi không có tiện ích động cơ kết xuất, camera toàn cảnh hoặc âm thanh nổi, và ảnh bầu trời qua chương trình khác, cùng plug-in mở sân khấu Unreal, chưa có. Các tệp đã được ghi; plug-in chưa được phát hành và chưa chạy trong Unreal.
- Bề mặt tự do: G3 và class A chưa được đo hay công bố, và cắt xén cùng khối đặc sẽ đến sau.
- Ảnh từ chương trình khác không giống từng điểm ảnh với của chúng tôi: chỉ camera, mặt trời, đèn và độ phơi sáng khớp nhau.
- Bản sửa 0.8.1 cho việc đổi ngôn ngữ trong Studio chưa được kiểm tra trên mọi nền tảng.

Mọi thứ khác nằm trong [Chưa xây dựng](topic:not-built-yet). Với bản phát hành trước, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
