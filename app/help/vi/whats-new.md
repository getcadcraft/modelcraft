---
title: Có gì mới trong 0.7
summary: Lưới với bộ điều chỉnh, điêu khắc, UV và đối tượng đường cong, path tracing trên card đồ họa và không gian làm việc Kết xuất, xem trực tiếp theo thời gian thực với phân tán và toàn cảnh, vật liệu dạng nút, không gian làm việc Hoạt ảnh với xương và vật lý, các tệp USD, FBX, STEP và .3dm, và công cụ in với kiểu Người mới.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, lưới, lưới, không gian làm việc lưới, bộ điều chỉnh, chia mặt, nếp gấp, uv, trải phẳng, đường nối, đường cong, đối tượng đường cong, nurbs, bezier, điêu khắc, tạo lại lưới, dựng lại topology, chia đều, phép tính, path tracing, webgpu, không gian làm việc kết xuất, hàng đợi kết xuất, mp4, exr, khử nhiễu, bầu trời vật lý, hdri, ies, độ sâu trường ảnh, trộn ánh sáng, sương mù, caustics, xem trực tiếp, thời gian thực, đi bộ, phân tán, toàn cảnh, tour, trình xem, đổ bóng, nút, vật liệu dạng nút, thư viện vật liệu, materialx, decal, vẽ kết cấu, nướng, hoạt ảnh, trình chỉnh đồ thị, clip, khóa hình dạng, driver, armature, xương, skinning, ik, ràng buộc, vật lý, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, khối đặc 3D, giá đỡ, độ dày thành, làm rỗng, sửa chữa, người mới, trợ lý, máy của bạn, đơn vị, tiếng Bồ Đào Nha
from: b9fc43e2
---

Đây là những thay đổi trong ModelCraft 0.7 so với 0.6. ModelCraft giờ mô hình hóa lưới cũng như hình học đẩy/kéo, kết xuất trên card đồ họa, và có một không gian làm việc cho mỗi loại công việc: chọn trong danh sách {{ui:Không gian làm việc}} ở bên trái thanh công cụ.

## Mới

### Lưới

- **Lưới.** Chọn một nhóm hoặc cấu kiện rồi nhấn {{ui:Chuyển thành lưới}} trong {{ui:Thông tin đối tượng}}: nó trở thành lưới, với các mặt có số góc bất kỳ, có thể mang tọa độ kết cấu, pháp tuyến, màu và trọng số. {{ui:Chuyển thành hình học}} đưa nó trở lại. Hoàn tác trên lưới chỉ giữ lại những gì mỗi bước đã thay đổi. Tệp có chứa lưới cần ModelCraft 0.7 để mở. Xem [Lưới](topic:meshes).
- **Không gian làm việc Lưới.** Nhấp đúp vào một lưới, hoặc chọn {{ui:Lưới (mesh)}} trong danh sách {{ui:Không gian làm việc}}, để sửa đỉnh, cạnh và mặt: vòng lặp và vòng, chỉnh sửa theo tỷ lệ, đùn, inset, vát mép (bevel), cắt vòng, dao cắt, chia đôi, quay, gộp, hòa tan, lấp đầy, lấp đầy lưới, cầu nối và trượt, và cài đặt của thao tác cuối được thay đổi sau đó trong bảng. Bắt đầu từ mặt phẳng, khối lập phương, hình cầu, xuyến và nhiều hơn nữa. Phím đẩy/kéo và phím của trình tạo mô hình đều dùng được. Xem [Chỉnh sửa lưới trong Không gian làm việc Lưới](topic:mesh-edit).
- **Bộ điều chỉnh.** Gương (mirror), mảng (array), bề mặt chia (subdivision surface), vát mép (bevel), solidify, boolean, displace, weld, decimate, smooth, lattice, curve deform và shrinkwrap thay đổi cách lưới hiển thị mà không thay đổi chính nó. Xếp chồng chúng, bật hoặc tắt từng cái cho khung nhìn và cho kết xuất, và nhấn {{ui:Áp dụng}} khi bạn muốn giữ lại vĩnh viễn. Xem [Bộ điều chỉnh trên lưới](topic:modifiers).
- **Chia mặt với nếp gấp.** {{ui:Nếp gấp}} trong Không gian làm việc Lưới giữ các cạnh đã chọn sắc dưới bề mặt chia. Kết xuất có thể dùng nhiều cấp hơn khung nhìn, và với lưới lớn khung nhìn hiển thị cấp thấp hơn và nói rõ điều đó. Xem [Bề mặt chia](topic:modifiers#subdivision-surface).
- **Đối tượng đường cong.** Đường cong Bézier, NURBS và đoạn thẳng để tạo ống, dải, phần thu hẹp hoặc tấm đặc, và chữ dưới dạng đường cong. Chỉnh sửa điểm trong không gian làm việc {{ui:Đường cong}}; nhấn {{ui:Thành lưới}} khi hình dạng đã đúng. Xem [Đối tượng đường cong](topic:curves).
- **Không gian làm việc UV.** Đánh dấu đường nối (hoặc để ModelCraft đánh dấu tại các cạnh sắc), {{ui:Trải phẳng}} và {{ui:Xếp}}, hoặc chiếu theo hộp, trụ, cầu hoặc khung nhìn. Trình chỉnh sửa UV bên cạnh khung nhìn 3D di chuyển, xoay và co giãn các mảnh, và màu kiểm tra cùng màu kéo giãn cho thấy kết quả. Xem [Dàn trang UV của lưới](topic:uv).
- **Điêu khắc.** Không gian làm việc {{ui:Điêu khắc}} có các cọ vẽ, đất sét, làm mịn, nắm, thổi phồng, nếp gấp, bóp, làm phẳng và cọ mặt nạ, đối xứng qua trục X, và {{ui:Chi tiết}} thêm tam giác ở nơi bạn điêu khắc. Áp lực bút quyết định kích thước và độ mạnh của cọ. Mỗi nét là một bước hoàn tác. Xem [Điêu khắc lưới](topic:sculpt).
- **Tạo lại lưới và dựng lại topology.** {{ui:Tạo lại lưới}} làm lại toàn bộ lưới thành các tam giác đều, lấp lỗ và nối các mảnh chồng lên nhau. Để dựng một lưới sạch trên lưới chi tiết, chọn nó dưới {{ui:Dựng lại topology}}: các điểm bạn di chuyển sẽ nằm trên bề mặt của nó. Xem [Tạo lại lưới](topic:mesh-edit#remesh).

### Bản vẽ

- **Chia đều một cạnh hoặc đường cong.** Công cụ {{ui:Chia đều}} đánh dấu các điểm cắt khi bạn di chuyển dọc theo cạnh và chia đều bằng một cú nhấp hoặc số bạn nhập; với một cạnh, cung hoặc vòng tròn đã chọn, nhập `/5`; {{ui:Thông tin đối tượng}} › {{ui:Chia đều…}} hỏi số lượng, dành cho máy tính bảng. Cung hoặc vòng tròn được chia theo góc bằng nhau trên cung thật. Xem [Chia đều cạnh hoặc đường cong thành các phần bằng nhau](topic:divide).
- **Phép tính trong ô giá trị.** Nhập `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` hoặc `2*450mm` cho bất kỳ độ dài nào, và `90/2` cho một góc. Phép tính không thực hiện được sẽ nói rõ sai ở đâu và ở chỗ nào. Xem [Phép tính](topic:value-box#calculations).

### Kết xuất

- **Path tracing trên card đồ họa.** {{ui:Kết xuất ảnh…}} › {{ui:Chất lượng cao (path tracing)}} chạy bộ path tracer riêng của CadCraft trên card đồ họa ở nơi trình duyệt có WebGPU; dòng dưới ảnh cho biết công cụ nào đã tạo ra nó. {{ui:Dừng}} giữ lại ảnh và {{ui:Tiếp tục}} chạy tiếp từ đó. Không có WebGPU, ảnh vẫn được path tracing bằng WebGL như trước. Xem [Chất lượng cao](topic:render#high-quality).
- **Kết xuất trong khung nhìn.** Không gian làm việc {{ui:Kết xuất}} path tracing chính khung nhìn và bắt đầu lại khi bạn xoay hoặc chỉnh sửa: kết xuất một {{ui:Vùng}}, nhấp để {{ui:Lấy nét}}, đặt {{ui:Chi tiết}}. Cần WebGPU. Xem [Kết xuất trong khung nhìn](topic:render#render-in-the-view).
- **Vật liệu, ánh sáng và bầu trời.** Ảnh chất lượng cao tô bóng mọi bề mặt bằng mô hình vật liệu OpenPBR (lớp phủ, lông tơ, màng mỏng, kính màu, phát sáng). Với WebGPU còn có {{ui:Bầu trời vật lý}} với {{ui:Độ mờ}}, {{ui:Ảnh bầu trời (HDRI)}}, và các profile ánh sáng IES của nhà sản xuất cho đèn. Xem [Bầu trời và profile ánh sáng](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Máy ảnh như máy ảnh chụp ảnh.** Độ phơi sáng từ f-stop, tốc độ màn trập và ISO ở mọi chế độ; với WebGPU còn có độ sâu trường ảnh, phối cảnh hai điểm, cân bằng trắng, toàn cảnh 360° (cả nổi) và cube map. Xem [Máy ảnh](topic:render#the-camera).
- **Hoàn thiện ảnh sau khi kết xuất.** Chỉnh màu ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} hoặc {{ui:Tiêu chuẩn}}, độ tương phản, bloom, chói, vignette, một bảng màu `.cube`), trộn bầu trời, mặt trời và từng nhóm đèn, và xem từng phần tử kết xuất, tất cả mà không cần kết xuất lại. Phần hạt còn lại được loại bỏ bằng bộ khử nhiễu trên máy tính của bạn. Xem [Hoàn thiện ảnh](topic:render#finish-the-picture) và [Trộn ánh sáng sau khi kết xuất](topic:render#mix-the-lights-after-the-render).
- **Thêm cách lưu ảnh kết xuất.** PNG 16-bit, EXR nhiều lớp với mọi phần tử kết xuất và nhóm đèn, và tệp kết xuất (`.ccrender`) mở lại được cùng phần trộn và chỉnh màu. Xem [Lưu ảnh](topic:render#save-the-picture).
- **Sương mù, khói và caustics.** Sương mù và mờ được chiếu sáng bởi mặt trời và đèn, có tia sáng xuyên qua; một cột khói hoặc một đám mây; caustics dưới kính và gương; lấy mẫu thích ứng dừng ở những điểm ảnh đã sạch. Chỉ trên card đồ họa. Xem [Sương mù, khói, nhiễu và caustics](topic:render#fog-smoke-noise-and-caustics).
- **Hàng đợi kết xuất và MP4.** Thêm ảnh chất lượng cao và toàn bộ hoạt ảnh vào {{ui:Hàng đợi kết xuất}}; chúng kết xuất lần lượt và hàng đợi được giữ lại khi đóng trang. Cần WebGPU. Video cũng có thể lưu dưới dạng MP4 ở nơi trình duyệt ghi được. Xem [Hàng đợi kết xuất](topic:render#the-render-queue) và [Kết xuất video](topic:animation#render-the-video).

### Xem trực tiếp và trình chiếu

- **Xem trực tiếp.** {{ui:Xuất}} › {{ui:Xem trực tiếp}} hiển thị mô hình với giao diện thời gian thực bên cạnh khung nhìn, theo sát mọi chỉnh sửa và máy ảnh: bóng mặt trời, vật liệu, đèn và ánh sáng phản xạ từ tường. {{ui:Đi bộ}} qua mô hình, kéo {{ui:Giờ}} và {{ui:Tháng}} để di chuyển mặt trời, hoặc đưa nó sang một {{ui:Cửa sổ mới}}. Nó dùng WebGPU ở nơi trình duyệt có, nếu không thì WebGL 2. Xem [Xem trực tiếp](topic:live-view).
- **Phân tán.** Rải cỏ, hoa, đá, cây và người trên các mặt hoặc bằng cọ, từ bảy mục môi trường mới và phần còn lại của thư viện; các bộ được lưu trong tệp. Xem [Phân tán cây, đá và người](topic:live-view#scatter-plants-rocks-and-people).
- **Chia sẻ.** Toàn cảnh 360°, một tour toàn cảnh với mũi tên giữa các điểm, một trình xem độc lập (một trang web chạy ngoại tuyến và không tải gì từ internet), và video theo đường đi của máy ảnh, tất cả với giao diện thời gian thực. Xem [Chia sẻ](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR với giao diện thời gian thực.** {{ui:Xem lại trong VR}} hiển thị mô hình với vật liệu, bầu trời, bóng mặt trời, đèn, các mục đã phân tán và ánh sáng phản xạ. Xem [Giao diện khi xem](topic:vr-review#what-it-looks-like).

### Vật liệu

- **Vật liệu tạo bằng nút.** {{ui:Đổ bóng}} không gian làm việc xây dựng các vật liệu của tệp thành đồ thị nút: ảnh và nhiễu và ô vuông, ô Voronoi, sóng, gạch, ngói, gỗ, đá cẩm thạch, gradient, bụi bẩn và mài mòn cạnh, xử lý màu, toán học, bản đồ bump và normal, thành vật liệu OpenPBR đầy đủ. Khung nhìn hiển thị mỗi thay đổi ngay lập tức. Xem [Tạo vật liệu bằng nút](topic:shading).
- **Thư viện vật liệu và bộ kết cấu của riêng bạn.** Bảng Đổ bóng liệt kê các vật liệu của Thư viện: mười sáu bộ kết cấu CC0, mỗi bộ đều ghi công. Nhấp một bộ để dùng, hoặc kéo nó lên một mặt. {{ui:Hình ảnh hoặc tệp zip…}} hoặc {{ui:Một thư mục…}} tạo vật liệu từ các bản đồ của bạn, được nhận diện theo tên tệp. Xem [Vật liệu từ thư viện](topic:shading#materials-from-the-library).
- **MaterialX vào và ra.** Xuất vật liệu dưới dạng MaterialX (OpenPBR Surface hoặc Standard Surface, kết cấu dạng PNG), và nhập tệp MaterialX cùng ảnh của chúng. Xem [MaterialX](topic:shading#materialx).
- **Decal và vẽ kết cấu.** Đặt một ảnh lên bề mặt làm decal với vật liệu riêng, và vẽ lên ảnh của vật liệu bằng cọ tròn. Xem [Decal](topic:shading#decals) và [Vẽ trên kết cấu](topic:shading#paint-on-the-texture).
- **Nướng kết cấu.** Nướng occlusion môi trường, độ cong, ánh sáng và pháp tuyến của một đối tượng chi tiết thành ảnh dọc theo UV của lưới, trên các nhân xử lý của máy tính. Xem [Nướng kết cấu](topic:shading#bake-textures).

### Hoạt ảnh

- **Không gian làm việc Hoạt ảnh.** Tạo khóa cho vị trí, góc xoay và kích thước của đối tượng, độ sáng, độ lan tỏa và màu của từng đèn, và góc ống kính, ngay trong bảng. Dòng thời gian có chế độ xem {{ui:Đường cong}} (tay cầm Bézier, lặp lại) và chế độ xem {{ui:Clip}} lưu các khóa thành hành động để đặt lại và trộn; các khóa trên nhiều hàng có thể được di chuyển, kéo giãn, sao chép và dán. Xem [Hoạt ảnh mọi thuộc tính](topic:animate).
- **Khóa hình dạng và driver.** Lưới giữ các hình dạng khác của chính nó, được pha trộn bằng thanh trượt có thể tạo khóa, hoặc đặt từ các giá trị khác bằng một biểu thức nhỏ. Xem [Khóa hình dạng](topic:animate#shape-keys-morphs) và [Driver](topic:animate#drivers).
- **Armature.** Đặt xương vào lưới, để {{ui:Trọng số tự động}} chia các điểm giữa chúng hoặc tự vẽ trọng số, và tạo dáng và tạo khóa cho xương; skinning tuyến tính hoặc dual quaternion. Xem [Armature](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK và ràng buộc.** Reach (IK) với pole, look at, copy transforms, giới hạn, child of và follow path, cho xương và đối tượng. Xem [IK và ràng buộc](topic:animate#ik-and-constraints).
- **Vật lý.** Nhóm và cấu kiện rơi, chồng lên nhau và va chạm như hộp hoặc quả cầu, và {{ui:Bake vật lý}} giữ kết quả dưới dạng khóa. Xem [Vật lý](topic:animate#physics-drop-stack-and-collide).

### Tệp

- **USD.** {{ui:Lưu thành}} ({{key:Mod+Shift+S}}) lưu mô hình dưới dạng `.usda`, `.usdc` hoặc `.usdz`, và một tệp USD do ModelCraft lưu sẽ mở lại mà không mất gì. USD từ các chương trình khác mở hoặc nhập thành lưới, nhóm, cấu kiện, đèn và máy ảnh. {{ui:Lưu}} vẫn ghi `.modelcraft`. Xem [Lưu, mở và xuất USD](topic:usd).
- **glTF, đầy đủ.** Tệp glTF vào dưới dạng lưới có thể chỉnh sửa với pháp tuyến, UV, màu đỉnh và kết cấu, các nút thành nhóm, đèn thành đèn và máy ảnh thành cảnh; kể cả tệp Draco và meshopt; một `.gltf` mở được khi thả cùng các tệp của nó. Xuất ghi lưới, kết cấu, đèn và máy ảnh. Xem [glTF](topic:formats#gltf-glb-gltf).
- **Nhập FBX, PLY, STL và Alembic.** FBX 2011 trở lên (lưới, bộ UV, vật liệu, kết cấu nhúng, đèn, máy ảnh), PLY và STL với màu của chúng, và bộ đệm Alembic tại mẫu đầu tiên. OBJ vào cùng `.mtl` và ảnh khi bạn thả chúng cùng nhau. Xem [Định dạng tệp chi tiết](topic:formats).
- **Xuất thêm.** PLY với màu, STL với màu của các mặt đã sơn, và OBJ cùng kết cấu trong một tệp zip. Xem [Định dạng tệp chi tiết](topic:formats).
- **Tệp STEP.** {{ui:Nhập}} đọc các chi tiết và lắp ráp STEP (AP203, AP214, AP242) dưới dạng lưới kín ở kích thước thật, mỗi chi tiết ở đúng vị trí tệp đặt. Xem [STEP](topic:formats#step-step-stp).
- **Tệp .3dm.** {{ui:Nhập}} đọc các mô hình `.3dm`: lưới, polysurface và phần đùn (từ các lưới được lưu trong tệp, nếu không thì được tessellate bởi ModelCraft), đường cong thành cạnh, khối thành cấu kiện và lớp thành thẻ. Xem [Nhập mô hình .3dm](topic:import-3dm-files).
- **Khối đặc 3D từ DWG và DXF.** Nhập một bản vẽ giờ cũng mang theo khối đặc 3D, vùng và thân, mỗi cái thành một nhóm riêng, các khối kín thành khối đặc. Xem [Mô hình trên mặt bằng công trường](topic:site-plan#what-comes-in).

### In 3D

- **Công cụ in.** {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}} › **Công cụ in** có {{ui:Xem trước giá đỡ}} (phần nhô ra, cột hoặc giá đỡ dạng cây, ước lượng lượng vật liệu), {{ui:Độ dày thành}} (các thành quá mỏng để in, liệt kê với {{ui:Hiện}}), {{ui:Làm rỗng}} (thành với độ dày bạn nhập, có lỗ thoát) và {{ui:Sửa chữa}} (liệt kê mọi bản sửa; các phần chồng lên nhau chỉ nối khi bạn yêu cầu). Làm rỗng và Sửa chữa cho ra một nhóm mà các mặt phẳng là một mặt đơn, hoặc một lưới khi kết quả không kín hoặc có quá nhiều mặt; dòng trạng thái cho biết cái nào. Xem [Giá đỡ, độ dày thành, làm rỗng và sửa chữa](topic:print-tools).
- **Kiểu Người mới.** {{ui:Cài đặt}} › {{ui:ModelCraft}} › {{ui:Menu, phím và chuột}} › {{ui:Người mới}}: các nút lớn để thả hình dạng và lỗ, di chuyển, căn chỉnh và {{ui:Nhóm}} để các lỗ được cắt, rồi kiểm tra mô hình để in. Xem [Kiểu Người mới](topic:beginner).

### Trợ lý và máy của bạn

- **Thêm cho trợ lý AI.** Trợ lý giờ có thể liệt kê mặt và vật liệu, đẩy/kéo, sơn, tạo nhóm, thêm và hiện cảnh, thêm lưới, sửa chồng bộ điều chỉnh, xuất USD, kết xuất ảnh và đổ đầy hàng đợi kết xuất. Xem [Sử dụng ModelCraft với trợ lý AI](topic:use-with-ai-assistants).
- **Máy của bạn.** {{ui:Cài đặt}} › {{ui:ModelCraft}} › {{ui:Kết xuất}} › {{ui:Máy của bạn}} hiển thị card đồ họa, nhân xử lý và bộ nhớ mà trình duyệt này cho ứng dụng dùng, và mức đặt điểm bắt đầu của xem trực tiếp. Xem [Máy của bạn kết xuất bằng gì](topic:your-machine).

## Đã sửa

- {{ui:Khối đặc}} › {{ui:Hợp}}, {{ui:Trừ}} và {{ui:Giao}} có thể trả về một nhóm không kín, ở mọi kích thước. Giờ chúng cho ra nhóm kín.
- {{ui:Khối đặc}} › {{ui:Trừ}} bị làm mờ khi chưa chọn gì, dù nó chọn lần lượt hai phần sau khi bạn chọn nó.
- Bên trong dòng thời gian hoạt ảnh, phím gõ vào không đi đâu cả, kể cả {{key:Mod+S}}. {{key:Mod+Z}} và {{key:Mod+Y}} ở đó là hoàn tác và làm lại riêng của dòng thời gian; các phím {{key:Mod}} khác vẫn đến ứng dụng.

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách cho mỗi loại độ dài, diện tích, thể tích, góc và độ dốc, với các kích thước chính xác do định nghĩa đơn vị đưa ra (foot khảo sát Mỹ là đơn vị riêng). Tắt các đơn vị bạn không dùng và chúng rời khỏi danh sách; đánh dấu sao một đơn vị và công việc mới bắt đầu bằng đơn vị đó. Tệp luôn giữ đơn vị riêng của nó. Trong ModelCraft, danh sách đơn vị bên cạnh ô giá trị theo các công tắc (đơn vị của mô hình luôn nằm trong đó), dấu sao đặt đơn vị cho mô hình mới (khi ModelCraft có đơn vị đó), và độ dài được nhập với ký hiệu của bất kỳ đơn vị nào sẽ được đọc theo đơn vị đó. Xem [Đơn vị, giá trị đã nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục dày đặc hơn và các bảng tự gọn lại.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} hiển thị nhiều hơn trên màn hình (màn hình cảm ứng và điện thoại vẫn giữ nút lớn). Mỗi bảng bên có một thanh tiêu đề mảnh: kéo để neo hoặc nổi bảng, thả lên thanh của bảng khác để chung một khung dưới dạng thẻ, ghim để trượt về mép, hoặc ẩn và đưa lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo hộp thoại theo thanh tiêu đề để đưa nó khỏi bản vẽ; nó quay về chỗ bạn để lại. Nhấp đúp vào thanh tiêu đề để căn giữa lại. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý của riêng bạn (dọn bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi mô hình, tổng hợp bóc tách khối lượng, thử biến thể chi tiết…), mỗi cái kèm các công cụ nó gọi và quyền cần có, và mỗi cái được các bài kiểm thử của chúng tôi chạy lại. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Ngôn ngữ này, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ có mọi từ của các ứng dụng, dưới dạng bản nháp chưa được người bản ngữ xem lại. Các chủ đề trợ giúp vẫn bằng tiếng Anh.
- **CadCraft Studio** nói rõ vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký không hợp lệ) thay vì chỉ "Xong", và không đưa lại thẻ Có gì mới bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký, và gói Microsoft Store, được chuyển sang 0.8 vì việc xác thực chứng chỉ chưa xong. Kiểm tra SHA-256 bên cạnh mỗi tệp tại getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thêm thông tin}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản dựng cho iPad hay iPhone.
- Danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có ô nào đọc chúng.
- Kết xuất trên card đồ họa (WebGPU) mới chỉ được thử ở đây với một phần mềm thay thế, chưa thử trên card đồ họa thật, nên hãy kết xuất thứ gì đó nhỏ trên máy tính của bạn trước. Điều tương tự áp dụng cho xem trực tiếp, và VR mới chỉ được thử với trình giả lập tai nghe.
- Không có WebGPU thì không có không gian làm việc Kết xuất hay hàng đợi kết xuất, và ảnh chất lượng cao không có độ sâu trường ảnh, bầu trời vật lý, ảnh bầu trời, sương mù, khói, caustics hoặc trộn ánh sáng.
- {{ui:Kết xuất ảnh…}} chưa vẽ các mục đã phân tán; chúng hiển thị trong xem trực tiếp, các toàn cảnh, trình xem và video của nó.
- Đèn có hoạt ảnh trong khung nhìn, nhưng video đã kết xuất dùng đèn như chúng đang có khi bắt đầu.
- Xương và hoạt ảnh chưa được đọc hoặc ghi vào tệp glTF, FBX hay USD (mô hình có skinning vào ở trạng thái nghỉ, kèm trọng số của chúng), và vật liệu glTF và FBX ngoài màu gốc hoặc kết cấu chưa được giữ lại.
- Màu STEP và tên chi tiết của lắp ráp chưa được đọc. Nhập `.3dm` mới được thử với tệp do bộ công cụ của định dạng ghi, chưa thử với tệp từ chính chương trình mô hình hóa; đối tượng SubD, văn bản và kích thước bị bỏ qua.
- Thư viện cây từ CivilCraft đã có trong ModelCraft, nhưng đặt cây từ đó chưa được xây dựng.
- Vẽ kết cấu lên các mặt đẩy/kéo lặp lại theo ô của vật liệu; để vẽ riêng một mặt, chuyển nó thành lưới và trải phẳng.

Phần còn lại nằm trong [Chưa xây dựng](topic:not-built-yet).
