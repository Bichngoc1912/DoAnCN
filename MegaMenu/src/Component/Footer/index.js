import React from 'react';
export default function Footer() {
	return (
		<footer className="main-footer">
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="widget-column col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget tweets-widget">
                  <h2>Liên hệ</h2>
						
                </div>
              </div>
       
              <div className="widget-column col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget isntagram-widget">
                  <h2>Danh mục</h2>
                  <div className="clearfix">
                    
                  </div>
                </div>
              </div>
       
              <div className="widget-column col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget newsletter-widget">
                  <h2>Kết nối với chúng tôi</h2>
                  <div className="newsletter-form">
                    <form method="post" action="contact.html">
                      <div className="form-group">
                        <input type="text" name="name" defaultValue placeholder="Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" defaultValue placeholder="Email" required />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="theme-btn btn-style-one">Gửi</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright-section">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg- col-md-12 col-sm-12">
                  <div className="copyright">© Copyright by group menu and template CTK40 - Công nghệ phần mềm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
	)
}