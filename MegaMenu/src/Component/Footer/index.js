import React from 'react';
export default function Footer () {
    return (
        <div className="Home">
            <div id="footer">
			<div class="container">
				<div class="row">
					<div class="col-md-5">
						<div class="footer-widget">
							<div class="footer-logo">
								<a href="index.html" class="logo"><img src="./img/logo.png" alt=""/></a>
							</div>
							<ul class="footer-nav">
                                <li><a href="#">Chính sách bảo mật</a></li>
                                <li><a href="#">Quảng cáo</a></li>
							</ul>
							<div class="footer-copyright">
								<span>&copy;    </span>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="row">
							<div class="col-md-6">
								<div class="footer-widget">
									<h3 class="footer-title">Liên Hệ</h3>
									<ul class="footer-links">
										<li><a href="about.html">Vấn Đề</a></li>
										<li><a href="#">Tham Gia</a></li>
										<li><a href="contact.html">Liên Hệ</a></li>
									</ul>
								</div>
							</div>
							<div class="col-md-6">
								<div class="footer-widget">
									<h3 class="footer-title">Danh Mục</h3>
									<ul class="footer-links">
										<li><a href="category.html">Sự Kiện</a></li>
										<li><a href="category.html">Tin Tức</a></li>
										<li><a href="category.html">Giải Thưởng</a></li>
										<li><a href="category.html">Bài Viết</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-3">
						<div class="footer-widget">
							<h3 class="footer-title">CONTACT WITH US !!!</h3>
							<div class="footer-newsletter">
								<form>
									<input class="input" type="email" name="newsletter" placeholder="Enter your email"/>
									<button class="newsletter-btn"><i class="fa fa-paper-plane"></i></button>
								</form>
							</div>
							<ul class="footer-social">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
        </div>
        </div>
    )
}