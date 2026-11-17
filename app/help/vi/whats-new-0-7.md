---
title: Có gì mới trong 0.7 (trước đó)
summary: Lưới với bộ điều chỉnh, điêu khắc, UV và đối tượng đường cong, dò tia đường đi trên card đồ họa và không gian làm việc Kết xuất, xem trực tiếp theo thời gian thực với rải cây và toàn cảnh, vật liệu bằng nút, không gian làm việc Hoạt hình với xương và vật lý, các tệp USD, FBX, STEP và .3dm, cùng công cụ in với kiểu Người mới.
keywords: có gì mới 0.7, phiên bản trước, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, lưới, không gian làm việc lưới, bộ điều chỉnh, chia nhỏ, nếp gấp, uv, trải phẳng, đường nối, đường cong, đối tượng đường cong, nurbs, bezier, điêu khắc, tạo lại lưới, dựng lại topology, chia, phép tính, dò tia đường đi, webgpu, không gian làm việc kết xuất, hàng đợi kết xuất, mp4, exr, khử nhiễu, bầu trời vật lý, hdri, ies, độ sâu trường ảnh, trộn ánh sáng, sương mù, caustics, xem trực tiếp, thời gian thực, đi bộ, rải, toàn cảnh, trình xem, đổ bóng, bộ nút, vật liệu nút, thư viện vật liệu, materialx, decal, vẽ texture, nung, hoạt hình, biểu đồ đường cong, clip, khóa hình dạng, bộ điều khiển, khung xương, skinning, ik, ràng buộc, vật lý, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, khối đặc 3d, giá đỡ, độ dày thành, làm rỗng, sửa chữa, người mới, trợ lý, máy của bạn, đơn vị, tiếng Bồ Đào Nha
from: fa562a09
---

Đây là những gì đã thay đổi trong ModelCraft 0.7, so với 0.6. ModelCraft giờ mô hình hóa cả lưới lẫn hình học đẩy/kéo, kết xuất trên card đồ họa, và có một không gian làm việc cho mỗi loại công việc: chọn trong danh sách {{ui:Không gian làm việc}} ở bên trái thanh công cụ.

## Mới

### Lưới

- **Lưới.** Chọn một nhóm hoặc cấu kiện rồi nhấp {{ui:Chuyển thành lưới}} trong {{ui:Thông tin đối tượng}}: nó trở thành lưới, với các mặt có số góc bất kỳ, có thể mang tọa độ texture, pháp tuyến, màu và trọng số. {{ui:Chuyển thành hình học}} biến nó trở lại. Hoàn tác trên lưới chỉ giữ những gì mỗi bước đã thay đổi. Một tệp có lưới cần ModelCraft 0.7 để mở. Xem [Lưới](topic:meshes).
- **Không gian làm việc Lưới.** Nhấp đúp vào một lưới, hoặc chọn {{ui:Lưới (mesh)}} trong danh sách {{ui:Không gian làm việc}}, để chỉnh sửa đỉnh, cạnh và mặt: vòng lặp và vòng, chỉnh sửa theo tỷ lệ, đùn, thụt vào, vát cạnh, cắt vòng, dao, chia đôi, xoay, gộp, hòa tan, lấp đầy, lấp đầy lưới, cầu nối và trượt. Thiết lập của thao tác cuối cùng vẫn có thể thay đổi sau đó trong bảng. Bắt đầu từ mặt phẳng, lập phương, cầu, xuyến và nhiều hơn nữa. Phím đẩy/kéo và phím của công cụ dựng hình đều hoạt động. Xem [Chỉnh sửa lưới trong không gian làm việc Lưới](topic:mesh-edit).
- **Bộ điều chỉnh.** Đối xứng, mảng, bề mặt chia nhỏ, vát cạnh, làm đặc, boolean, dịch chuyển, hàn, giảm đa giác, làm mượt, lưới khung, biến dạng theo đường cong và co bọc thay đổi những gì một lưới hiển thị mà không thay đổi nó. Xếp chồng chúng, bật hoặc tắt từng cái cho khung nhìn và cho kết xuất, và {{ui:Áp dụng}} một cái khi bạn muốn giữ lại. Xem [Bộ điều chỉnh trên lưới](topic:modifiers).
- **Chia nhỏ có nếp gấp.** {{ui:Nếp gấp}} trong không gian làm việc Lưới giữ các cạnh được chọn sắc dưới bề mặt chia nhỏ. Kết xuất có thể dùng nhiều mức hơn khung nhìn, và trên một lưới lớn khung nhìn hiển thị một mức thấp hơn và nói như vậy. Xem [Bề mặt chia nhỏ](topic:modifiers#subdivision-surface).
- **Đối tượng đường cong.** Các đường cong Bézier, NURBS và đoạn thẳng tạo thành ống, dải, vát dần hoặc tấm đặc, và văn bản dưới dạng đường cong. Chỉnh sửa điểm của chúng trong không gian làm việc {{ui:Đường cong}}; dùng {{ui:Thành lưới}} khi hình dạng đã đúng. Xem [Đối tượng đường cong](topic:curves).
- **Không gian làm việc UV.** Đánh dấu đường nối (hoặc để ModelCraft đánh dấu tại các cạnh sắc), {{ui:Trải phẳng}} và {{ui:Xếp}}, hoặc chiếu theo hộp, trụ, cầu hoặc khung nhìn. Trình chỉnh sửa UV bên cạnh khung nhìn 3D di chuyển, xoay và thu phóng các mảnh, và ô cờ cùng màu độ co giãn hiển thị kết quả. Xem [Bố trí UV của lưới](topic:uv).
- **Điêu khắc.** Không gian làm việc {{ui:Điêu khắc}} có các cọ vẽ, đất sét, làm mượt, nắm, thổi phồng, nếp gấp, bóp, làm phẳng và mặt nạ, đối xứng qua trục X, và {{ui:Chi tiết}} thêm tam giác ở nơi bạn điêu khắc. Áp lực bút quyết định kích thước và độ mạnh của cọ. Mỗi nét là một bước hoàn tác. Xem [Điêu khắc một lưới](topic:sculpt).
- **Tạo lại lưới và dựng lại topology.** {{ui:Tạo lại lưới}} làm lại toàn bộ lưới thành các tam giác đều, lấp các lỗ và nối các mảnh chồng lấp. Để dựng một lưới sạch trên một lưới chi tiết, chọn nó dưới {{ui:Dựng lại topology}}: các điểm bạn di chuyển sẽ nằm trên bề mặt của nó. Xem [Tạo lại lưới](topic:mesh-edit#remesh).

### Vẽ

- **Chia một cạnh hoặc đường cong.** Công cụ {{ui:Chia đều}} đánh dấu các điểm cắt khi bạn di chuyển dọc theo một cạnh và chia bằng một cú nhấp hoặc một số đã nhập; khi đã chọn một cạnh, cung hoặc vòng tròn, nhập `/5`; {{ui:Thông tin đối tượng}} › {{ui:Chia đều…}} hỏi số lượng, dành cho máy tính bảng. Cung hoặc vòng tròn được chia theo các góc bằng nhau trên cung thật. Xem [Chia một cạnh hoặc đường cong thành các phần bằng nhau](topic:divide).
- **Phép tính trong hộp giá trị.** Nhập `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` hoặc `2*450mm` cho bất kỳ độ dài nào, và `90/2` cho một góc. Phép tính không làm được sẽ nói rõ sai ở đâu. Xem [Phép tính](topic:value-box#calculations).

### Kết xuất

- **Dò tia đường đi trên card đồ họa.** {{ui:Kết xuất ảnh…}} › {{ui:Chất lượng cao (path tracing)}} chạy bộ dò tia đường đi riêng của CadCraft trên card đồ họa, ở nơi trình duyệt có WebGPU; dòng dưới ảnh cho biết công cụ nào đã tạo ra nó. {{ui:Dừng}} giữ lại ảnh và {{ui:Tiếp tục}} tiếp tục từ đó. Không có WebGPU, ảnh được dò tia đường đi bằng WebGL như trước. Xem [Chất lượng cao](topic:render#high-quality).
- **Kết xuất trong khung nhìn.** Không gian làm việc {{ui:Kết xuất}} dò tia đường đi chính khung nhìn và bắt đầu lại khi bạn xoay hoặc chỉnh sửa: kết xuất một {{ui:Vùng}}, nhấp để {{ui:Lấy nét}}, đặt {{ui:Chi tiết}}. Cần WebGPU. Xem [Kết xuất trong khung nhìn](topic:render#render-in-the-view).
- **Vật liệu, đèn và bầu trời.** Ảnh chất lượng cao tô bóng mọi bề mặt theo mô hình vật liệu OpenPBR (lớp phủ, lông tơ, màng mỏng, kính màu, phát sáng). Với WebGPU còn có {{ui:Bầu trời vật lý}} với {{ui:Độ mờ}}, {{ui:Ảnh bầu trời (HDRI)}}, và các profile đèn IES của nhà sản xuất cho đèn. Xem [Bầu trời và profile đèn](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Máy ảnh như máy ảnh chụp.** Độ phơi sáng từ số f, tốc độ màn trập và ISO trong mọi chế độ; với WebGPU còn có độ sâu trường ảnh, phối cảnh hai điểm, cân bằng trắng, toàn cảnh 360° (cả nổi) và bản đồ khối. Xem [Máy ảnh](topic:render#the-camera).
- **Hoàn thiện ảnh sau khi kết xuất.** Chỉnh màu ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} hoặc {{ui:Tiêu chuẩn}}, độ tương phản, bloom, lóa, viền tối, bảng màu `.cube`), trộn bầu trời, mặt trời và từng nhóm đèn, và xem từng phần tử kết xuất, tất cả không cần kết xuất lại. Phần hạt còn lại được một bộ khử nhiễu trên máy tính của bạn xóa. Xem [Hoàn thiện ảnh](topic:render#finish-the-picture) và [Trộn ánh sáng sau khi kết xuất](topic:render#mix-the-lights-after-the-render).
- **Nhiều cách lưu kết xuất hơn.** PNG 16 bit, EXR nhiều lớp với mọi phần tử kết xuất và nhóm đèn, và tệp kết xuất (`.ccrender`) mở lại được với phần trộn và chỉnh màu của nó. Xem [Lưu ảnh](topic:render#save-the-picture).
- **Sương mù, khói và caustics.** Sương mù và mờ được chiếu sáng bởi mặt trời và đèn, với các chùm sáng; một cột khói hoặc một đám mây; caustics dưới kính và gương; lấy mẫu thích ứng dừng ở các điểm ảnh đã sạch. Chỉ trên card đồ họa. Xem [Sương mù, khói, nhiễu và caustics](topic:render#fog-smoke-noise-and-caustics).
- **Hàng đợi kết xuất và MP4.** Thêm ảnh chất lượng cao và toàn bộ hoạt hình vào {{ui:Hàng đợi kết xuất}}; chúng được kết xuất lần lượt và hàng đợi còn lại sau khi đóng trang. Cần WebGPU. Video cũng có thể lưu dạng MP4 ở nơi trình duyệt ghi được. Xem [Hàng đợi kết xuất](topic:render#the-render-queue) và [Kết xuất video](topic:animation#render-the-video).

### Xem trực tiếp và trình bày

- **Xem trực tiếp.** {{ui:Xuất}} › {{ui:Xem trực tiếp}} hiển thị mô hình theo kiểu thời gian thực bên cạnh khung nhìn, theo sát mọi chỉnh sửa và camera: bóng mặt trời, vật liệu, đèn và ánh sáng phản xạ từ tường. {{ui:Đi bộ}} qua nó, kéo {{ui:Giờ}} và {{ui:Tháng}} để di chuyển mặt trời, hoặc chuyển nó sang {{ui:Cửa sổ mới}}. Nó dùng WebGPU ở nơi trình duyệt có, nếu không thì WebGL 2. Xem [Xem trực tiếp](topic:live-view).
- **Rải.** Rải cỏ, hoa, đá, cây và người lên các mặt hoặc bằng cọ, từ bảy mục phụ kiện cảnh (entourage) mới và phần còn lại của thư viện; các bộ được lưu trong tệp. Xem [Rải cây, đá và người](topic:live-view#scatter-plants-rocks-and-people).
- **Chia sẻ.** Toàn cảnh 360°, một chuyến tham quan toàn cảnh với mũi tên giữa các điểm, một trình xem độc lập (một trang web mở được ngoại tuyến và không tải gì từ internet), và một video đường đi của camera, tất cả theo kiểu thời gian thực. Xem [Chia sẻ](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR theo kiểu thời gian thực.** {{ui:Xem lại trong VR}} hiển thị mô hình với vật liệu, bầu trời, bóng mặt trời, đèn, các mục rải và ánh sáng phản xạ. Xem [Nó trông như thế nào](topic:vr-review#what-it-looks-like).

### Vật liệu

- **Vật liệu làm bằng nút.** Không gian làm việc {{ui:Đổ bóng}} xây các vật liệu riêng của tệp dưới dạng đồ thị nút: hình ảnh, nhiễu và ô cờ, ô Voronoi, sóng, gạch, ngói, gỗ, đá cẩm thạch, chuyển màu, bụi và độ mòn cạnh, xử lý màu, toán học, bản đồ bump và pháp tuyến, thành vật liệu OpenPBR đầy đủ. Khung nhìn hiển thị mỗi thay đổi ngay lập tức. Xem [Làm vật liệu bằng nút](topic:shading).
- **Thư viện vật liệu và bộ texture của riêng bạn.** Bảng Đổ bóng liệt kê vật liệu của Thư viện: mười sáu bộ texture CC0, mỗi bộ được ghi công. Nhấp một bộ để dùng, hoặc kéo nó lên một mặt. {{ui:Hình ảnh hoặc tệp zip…}} hoặc {{ui:Một thư mục…}} tạo một vật liệu từ các bản đồ của bạn, được nhận diện theo tên tệp. Xem [Vật liệu từ thư viện](topic:shading#materials-from-the-library).
- **MaterialX vào và ra.** Xuất một vật liệu dưới dạng MaterialX (OpenPBR Surface hoặc Standard Surface, texture dạng PNG), và nhập tệp MaterialX cùng hình ảnh của chúng. Xem [MaterialX](topic:shading#materialx).
- **Decal và vẽ texture.** Đặt một hình ảnh lên bề mặt làm decal với vật liệu riêng, và vẽ lên hình ảnh của một vật liệu bằng cọ tròn. Xem [Decal](topic:shading#decals) và [Vẽ lên texture](topic:shading#paint-on-the-texture).
- **Nung texture.** Nung occlusion môi trường, độ cong, ánh sáng và pháp tuyến của một đối tượng chi tiết thành hình ảnh dọc theo UV của lưới, trên các nhân xử lý của máy tính. Xem [Nung texture](topic:shading#bake-textures).

### Hoạt hình

- **Không gian làm việc Hoạt hình.** Tạo khóa cho vị trí, góc xoay và kích thước của một đối tượng, độ sáng, độ lan và màu của từng đèn, và góc ống kính, ngay trong bảng. Dòng thời gian có chế độ xem {{ui:Đường cong}} (tay cầm Bézier, lặp lại) và chế độ xem {{ui:Clip}} lưu các khóa thành hành động để đặt lại và trộn; các khóa trên nhiều hàng có thể được di chuyển, kéo giãn, sao chép và dán. Xem [Hoạt hình bất kỳ thuộc tính](topic:animate).
- **Khóa hình dạng và bộ điều khiển.** Một lưới giữ các hình dạng khác của chính nó, được trộn bằng thanh trượt có thể đặt khóa, hoặc được đặt từ các giá trị khác bởi một biểu thức nhỏ. Xem [Khóa hình dạng](topic:animate#shape-keys-morphs) và [Bộ điều khiển](topic:animate#drivers).
- **Khung xương.** Đặt xương vào một lưới, để {{ui:Trọng số tự động}} chia các điểm giữa chúng hoặc tô trọng số, và tạo dáng và khóa các xương; skinning tuyến tính hoặc quaternion kép. Xem [Khung xương](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK và ràng buộc.** Tầm với (IK) có cực, nhìn vào, sao chép biến đổi, giới hạn, con của và theo đường dẫn, cho xương và đối tượng. Xem [IK và ràng buộc](topic:animate#ik-and-constraints).
- **Vật lý.** Nhóm và cấu kiện rơi, xếp chồng và va chạm như hộp hoặc quả cầu, và {{ui:Nung vật lý}} giữ kết quả như các khóa. Xem [Vật lý](topic:animate#physics-drop-stack-and-collide).

### Tệp

- **USD.** {{ui:Lưu thành}} ({{key:Mod+Shift+S}}) lưu mô hình thành `.usda`, `.usdc` hoặc `.usdz`, và một tệp USD do ModelCraft lưu sẽ mở lại mà không mất gì. USD từ các chương trình khác mở hoặc nhập như lưới, nhóm, cấu kiện, đèn và camera. {{ui:Lưu}} vẫn ghi `.modelcraft`. Xem [Lưu, mở và xuất USD](topic:usd).
- **glTF, đầy đủ.** Tệp glTF vào như lưới có thể chỉnh sửa với pháp tuyến, UV, màu đỉnh và texture, các nút thành nhóm, đèn thành đèn và camera thành cảnh, kể cả tệp Draco và meshopt; một `.gltf` mở được khi thả cùng các tệp của nó. Xuất ghi lưới, texture, đèn và camera. Xem [glTF](topic:formats#gltf-glb-gltf).
- **Nhập FBX, PLY, STL và Alembic.** FBX 2011 trở lên (lưới, tập UV, vật liệu, texture nhúng, đèn, camera), PLY và STL với màu của chúng, và cache Alembic ở mẫu đầu tiên. OBJ vào cùng `.mtl` và hình ảnh khi bạn thả chúng cùng nhau. Xem [Định dạng tệp chi tiết](topic:formats).
- **Xuất thêm.** PLY với màu, STL với màu của các mặt đã tô, và OBJ với texture trong một tệp zip. Xem [Định dạng tệp chi tiết](topic:formats).
- **Tệp STEP.** {{ui:Nhập}} đọc các chi tiết và cụm lắp STEP (AP203, AP214, AP242) như các lưới kín ở kích thước thật, mỗi chi tiết ở đúng vị trí tệp đặt nó. Xem [STEP](topic:formats#step-step-stp).
- **Tệp .3dm.** {{ui:Nhập}} đọc mô hình `.3dm`: lưới, polysurface và đùn (từ các lưới được lưu trong tệp, nếu không thì ModelCraft tự tạo lưới), đường cong thành cạnh, khối thành cấu kiện và lớp thành thẻ. Xem [Nhập mô hình .3dm](topic:import-3dm-files).
- **Khối 3D từ DWG và DXF.** Nhập một bản vẽ giờ cũng mang theo các khối đặc 3D, vùng và thân của nó, mỗi cái là một nhóm riêng, các khối kín là khối đặc. Xem [Mô hình trên mặt bằng công trường](topic:site-plan#what-comes-in).

### In 3D

- **Công cụ in.** {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}} › **Công cụ in** có {{ui:Xem trước giá đỡ}} (phần nhô ra, cột hoặc giá đỡ dạng cây, ước lượng lượng vật liệu), {{ui:Độ dày thành}} (các thành quá mỏng để in, liệt kê với {{ui:Hiện}}), {{ui:Làm rỗng}} (thành có độ dày bạn nhập, có lỗ thoát) và {{ui:Sửa chữa}} (mọi cách sửa được liệt kê; các phần chồng lấp chỉ nối khi bạn yêu cầu). Làm rỗng và Sửa chữa cho ra một nhóm có các mặt phẳng là mặt đơn, hoặc một lưới khi kết quả không kín hoặc có quá nhiều mặt; dòng trạng thái cho biết cái nào. Xem [Giá đỡ, độ dày thành, làm rỗng và sửa chữa](topic:print-tools).
- **Kiểu Người mới.** {{ui:Cài đặt}} › {{ui:ModelCraft}} › {{ui:Menu, phím và chuột}} › {{ui:Người mới}}: các nút lớn để thả hình dạng và lỗ, di chuyển, căn chỉnh và {{ui:Nhóm}} để các lỗ được cắt, rồi kiểm tra mô hình để in. Xem [Kiểu Người mới](topic:beginner).

### Trợ lý và máy của bạn

- **Thêm cho trợ lý AI.** Trợ lý giờ có thể liệt kê mặt và vật liệu, đẩy/kéo, tô màu, tạo nhóm, thêm và hiện cảnh, thêm lưới, chỉnh sửa chồng bộ điều chỉnh, xuất USD, kết xuất ảnh và điền hàng đợi kết xuất. Xem [Dùng ModelCraft với trợ lý AI](topic:use-with-ai-assistants).
- **Máy của bạn.** {{ui:Cài đặt}} › {{ui:ModelCraft}} › {{ui:Kết xuất}} › {{ui:Máy của bạn}} hiển thị card đồ họa, nhân xử lý và bộ nhớ mà trình duyệt này cho phép ứng dụng dùng, và mức đặt nơi xem trực tiếp bắt đầu. Xem [Máy của bạn kết xuất bằng gì](topic:your-machine).

## Đã sửa

- {{ui:Khối đặc}} › {{ui:Hợp}}, {{ui:Trừ}} và {{ui:Giao}} có thể trả về một nhóm không kín, ở bất kỳ kích thước nào. Giờ chúng sẽ kín.
- {{ui:Khối đặc}} › {{ui:Trừ}} bị mờ khi chưa chọn gì, dù nó chọn hai phần của mình lần lượt sau khi bạn chọn nó.
- Bên trong dòng thời gian hoạt hình, các phím gõ không đi đâu cả, {{key:Mod+S}} cũng vậy. {{key:Mod+Z}} và {{key:Mod+Y}} ở đó là hoàn tác và làm lại riêng của dòng thời gian; các phím {{key:Mod}} khác đến ứng dụng.

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách cho độ dài, diện tích, thể tích, góc và độ dốc, với kích thước chính xác do định nghĩa của đơn vị đưa ra (foot khảo sát Hoa Kỳ là một đơn vị riêng). Tắt các đơn vị bạn không dùng và chúng rời khỏi danh sách; đánh dấu sao một đơn vị và công việc mới bắt đầu với nó. Một tệp luôn giữ đơn vị riêng của nó. Trong ModelCraft, danh sách đơn vị cạnh hộp giá trị theo các công tắc (đơn vị riêng của mô hình luôn ở trong đó), dấu sao đặt đơn vị cho mô hình mới (khi ModelCraft có đơn vị đó), và độ dài nhập với ký hiệu của đơn vị nào được đọc theo đơn vị đó. Xem [Đơn vị, giá trị nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục dày hơn và các bảng gọn lại.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} hiển thị được nhiều hơn trên màn hình (màn hình cảm ứng và điện thoại giữ các nút lớn). Mỗi bảng bên có một thanh tiêu đề mỏng: kéo để neo hoặc làm nổi bảng, thả lên thanh của bảng khác để chia sẻ một khung dưới dạng thẻ, ghim để trượt về mép, hoặc ẩn và đưa nó trở lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo hộp thoại bằng thanh tiêu đề để tránh bản vẽ; nó sẽ trở lại đúng chỗ bạn để nó. Nhấp đúp vào thanh tiêu đề để căn giữa lại. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý riêng của bạn (dọn bản vẽ, in một bộ bản vẽ, kiểm tra bản vẽ, hỏi mô hình, tính tổng bóc tách khối lượng, thử một biến thể chi tiết…), mỗi cái kèm các công cụ nó gọi và quyền cần thiết, và mỗi cái được các bài kiểm thử của chúng tôi chạy lại. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Ngôn ngữ đó, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ có đầy đủ mọi từ của ứng dụng, như bản nháp chưa được người bản ngữ xem xét. Các chủ đề trợ giúp vẫn bằng tiếng Anh.
- **CadCraft Studio** cho biết vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký không hợp lệ) thay vì chỉ "Xong", và không hiện lại thẻ Có gì mới bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký mã và gói Microsoft Store đã chuyển sang 0.8 vì việc xác thực chứng chỉ chưa xong. Kiểm tra SHA-256 bên cạnh mỗi tệp tại getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản dựng cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có hộp nào đọc chúng.
- Kết xuất trên card đồ họa (WebGPU) mới được thử nghiệm ở đây bằng một bản thay thế phần mềm, chưa trên card đồ họa thật, nên hãy kết xuất thứ gì đó nhỏ trên máy tính của bạn trước. Điều tương tự áp dụng cho xem trực tiếp, và VR mới được thử bằng trình giả lập kính.
- Không có WebGPU thì không có không gian làm việc Kết xuất hay hàng đợi kết xuất, và ảnh chất lượng cao không có độ sâu trường ảnh, bầu trời vật lý, ảnh bầu trời, sương mù, khói, caustics hoặc trộn ánh sáng.
- {{ui:Kết xuất ảnh…}} chưa vẽ các mục rải; chúng hiển thị trong xem trực tiếp, các toàn cảnh, trình xem và video của nó.
- Đèn có hoạt hình trong khung nhìn, nhưng video kết xuất dùng đèn như chúng đang ở khi bắt đầu.
- Xương và hoạt hình chưa được đọc hoặc ghi vào tệp glTF, FBX hoặc USD (các mô hình có skin được nhập ở tư thế nghỉ, với trọng số của chúng), và vật liệu glTF và FBX ngoài màu cơ bản hoặc texture chưa được giữ lại.
- Màu STEP và tên chi tiết của cụm lắp chưa được đọc. Nhập `.3dm` mới được thử với tệp do bộ công cụ của định dạng ghi, chưa với tệp từ chính chương trình mô hình hóa; đối tượng SubD, văn bản và kích thước bị bỏ qua.
- Thư viện cây từ CivilCraft có trong ModelCraft, nhưng đặt cây từ thư viện đó chưa được xây dựng.
- Vẽ texture lên các mặt đẩy/kéo sẽ lặp lại theo ô của vật liệu; để vẽ riêng một mặt, hãy chuyển nó thành lưới và trải phẳng.

Mọi thứ khác nằm trong [Chưa xây dựng](topic:not-built-yet).
