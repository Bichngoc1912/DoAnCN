import React from 'react';
export default function Footer() {
	return (
		<div className="Home">
			<div id="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="footer-widget">
								<div className="footer-logo">
									<a href="index.html" className="logo"><img src="./img/logo.png" alt="" /></a>
								</div>
								<ul className="footer-nav">
									<li><a href="#">Chính sách bảo mật</a></li>
									<li><a href="#">Quảng cáo</a></li>
								</ul>
								<div className="footer-copyright">
									<span>©  </span>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="row">
								<div className="col-md-6">
									<div className="footer-widget">
										<h3 className="footer-title">Liên Hệ</h3>
										<ul className="footer-links">
											<li><a href="about.html">Vấn Đề</a></li>
											<li><a href="#">Tham Gia</a></li>
											<li><a href="contact.html">Liên Hệ</a></li>
										</ul>
									</div>
								</div>
								<div className="col-md-6">
									<div className="footer-widget">
										<h3 className="footer-title">Danh Mục</h3>
										<ul className="footer-links">
											<li><a href="category.html">Sự Kiện</a></li>
											<li><a href="category.html">Tin Tức</a></li>
											<li><a href="category.html">Giải Thưởng</a></li>
											<li><a href="category.html">Bài Viết</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="footer-widget">
								<h3 className="footer-title">CONTACT WITH US !!!</h3>
								<div className="footer-newsletter">
									<form>
										<input className="input" type="email" name="newsletter" placeholder="Enter your email" />
										<button className="newsletter-btn"><i className="fa fa-paper-plane" /></button>
									</form>
								</div>
								<ul className="footer-social">
									<li><a href="#"><i className="fa fa-facebook" /></a></li>
									<li><a href="#"><i className="fa fa-twitter" /></a></li>
									<li><a href="#"><i className="fa fa-google-plus" /></a></li>
									<li><a href="#"><i className="fa fa-pinterest" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}