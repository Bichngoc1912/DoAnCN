import React from 'react';
import './style.css';
import {Widget} from './widget';
export function SinglePage () {
    return (
       <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="content">
                <div className="blog-single">
                  <div className="inner-box">
                    <div className="upper-box">
                      <ul className="breadcrumb-bar">
                        <li><a href="#">Trang chủ</a></li>
                        <li>Tin tức</li>
                        <li>Một Ngôi Trường Ở Việt Nam Đẹp Đến Mê Hồn</li>
                      </ul>
                      <ul className="tag-title">
                        <li>Tin tức</li>
                      </ul>
                      <h2>Phát hiện ra một ngôi trường ở Việt Nam đẹp đến mê hồn, lên hình không chê vào đâu được</h2>
                      <ul className="post-meta">
                        <li><span className="icon qb-clock" />Ngày 20/02/2019</li>
                        <li><span className="icon qb-user2" />Đăng bởi Moon Lee</li>
                        <li><span className="icon fa fa-comment-o" />3 bình luận</li>
                        <li><span className="icon qb-eye" />1524 lượt xem</li>
                      </ul>
                      <ul className="social-icon-one alternate">
                        <li className="share">chia sẻ qua:</li>
                        <li><a href="#"><span className="fa fa-facebook" /></a></li>
                        <li className="twitter"><a href="#"><span className="fa fa-twitter" /></a></li>
                        <li className="g_plus"><a href="#"><span className="fa fa-google-plus" /></a></li>
                        <li className="linkedin"><a href="#"><span className="fa fa-linkedin-square" /></a></li>
                        <li className="pinteret"><a href="#"><span className="fa fa-pinterest-p" /></a></li>
                      </ul>
                    </div>
                    <div className="text">
                      <p>Cứ tưởng ở nước ngoài, ngờ đâu ngôi trường vạn người mê này thực chất nằm tại thành phố ngàn hoa nổi tiếng của Việt Nam.

                      Chúng ta vẫn thường ngưỡng mộ những ngôi trường ở nước ngoài có khuôn viên đẹp như trong phim, đứng bất kỳ đâu cũng có thể cho ra những kiểu ảnh sống ảo nghìn like. Thế nhưng thực chất chẳng cần đi đâu xa, chính Việt Nam cũng có những ngôi trường lung linh và đẹp đầy chất điện ảnh không kém cạnh.
                      
                      Mới đây, trên MXH xuất hiện những bức hình chụp lại một ngôi trường có khung cảnh đẹp lãng mạn với dọc hoa anh đào bung nở nhuộm hồng cả góc trời. Ban đầu, ai cũng tưởng đây là một trường học tại Nhật Bản hay Hàn Quốc, thế nhưng ngôi trường khiến dân mạng đổ xô đi tìm danh tính này thực chất là Đại học Đà Lạt nằm tại Đà Lạt - thành phố ngàn hoa nổi tiếng của Việt Nam.</p>
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="image">
                            <img src="https://halotravel.vn/wp-content/uploads/2019/11/dalat_truong-dai-hoc-da-lat-1-820x1024.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                          <p>Trường Đại học Đà Lạt là một trường đại học đa ngành tại Việt Nam, là đại diện duy nhất tại vùng Tây Nguyên được xếp vào nhóm 25 trường đại học tốt nhất tại Việt Nam, theo bảng xếp hạng đại học công bố đầu năm 2019 của Bảng xếp hạng đại học Webometrics. Trước đây, Đại học Đà Lạt còn từng được xem là một trong những trường đại học có cảnh quan đẹp nhất Đông Nam Á

                          Điểm ấn tượng nhất của Đại học Đà Lạt có lẽ là không gian lớn rộng, trải dài trên đồi thông. Trường ẩn mình giữa hàng cây cao vút, chạy dọc con đường nhỏ quanh co, kề bên những con dốc thoai thoải đặc trưng của Đà Lạt.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="author-box comments-area">
                    <div className="sec-title"><h2>2 Bình luận</h2></div>
                    <div className="comment-box">
                      <div className="comment">
                        <div className="author-thumb"><img src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-1/p960x960/89252614_724720914991191_6935181656760254464_o.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=YJa4P_M1cukAX-EdO0v&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=679be5a76956d4f882df338e74fc63e5&oe=5EF1D4FC" alt="" /></div>
                        <div className="comment-inner">
                          <div className="comment-info">Minh nguyệt</div>
                          <div className="post-date">Ngày 10/5/2020</div>
                          <div className="text">Đúng vậy trường đại học thật là đẹp, khung cảnh nhìn như Hàn Quốc...</div>
                          <a href="#" className="reply-btn">Xem thêm</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-form">
                    <div className="sec-title"><h2>Bình luận</h2></div>
                    <form method="post" action="blog.html">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <input type="text" name="username" placeholder="Tên ..." required />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <input type="email" name="email" placeholder="Email ..." required />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                          <input type="text" name="website" placeholder="Website ..." required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea name="message" placeholder="Nội dung bình luận ..." defaultValue={""} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <button className="theme-btn" type="submit" name="submit-form">Đăng</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <Widget/>
            </div>
          </div>
        </div>
      </div>
    )
}