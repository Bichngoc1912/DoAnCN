import React from "react";
export function Widget(props) {
  const { isSearch, isTabs, isCategory, isSocial } = props;
  return (
    <aside className="sidebar default-sidebar right-sidebar">
      {isSearch && (
        <div className="sidebar-widget search-box">
          <form method="post" action="">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Tìm kiếm"
                required
              />
              <button type="submit">
                <span className="icon fa fa-search" />
              </button>
            </div>
          </form>
        </div>
      )}

      {isSocial && (
        <div className="sidebar-widget sidebar-social-widget">
          <div className="sidebar-title">
            <h2>Theo dõi</h2>
          </div>
          <ul className="social-icon-one alternate">
            <li>
              <a href="#">
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li className="twitter">
              <a href="#">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li className="g_plus">
              <a href="#">
                <span className="fa fa-google-plus" />
              </a>
            </li>
            <li className="linkedin">
              <a href="#">
                <span className="fa fa-linkedin-square" />
              </a>
            </li>
            <li className="pinteret">
              <a href="#">
                <span className="fa fa-pinterest-p" />
              </a>
            </li>
            <li className="android">
              <a href="#">
                <span className="fa fa-android" />
              </a>
            </li>
            <li className="instagram">
              <a href="#">
                <span className="fa fa-instagram" />
              </a>
            </li>
            <li className="vimeo">
              <a href="#">
                <span className="fa fa-vimeo" />
              </a>
            </li>
          </ul>
        </div>
      )}
      {isTabs && (
        <div className="sidebar-widget posts-widget">
          <div className="product-widget-tabs">
            <div className="prod-tabs tabs-box">
              <ul className="tab-btns tab-buttons clearfix">
                <li data-tab="#prod-popular" className="tab-btn active-btn">
                  Phổ biến
                </li>
                <li data-tab="#prod-recent" className="tab-btn">
                  Gần đây
                </li>
                <li data-tab="#prod-comment" className="tab-btn">
                  Bình luận
                </li>
              </ul>
              <div className="tabs-content">
                <div className="tab active-tab" id="prod-popular">
                  <div className="content">
                    <article className="widget-post">
                      <figure className="post-thumb">
                        <a href="#">
                          <img
                            src="https://image.thanhnien.vn/1080/uploaded/lamvien/2020_02_06/dhdalat_lnmw.jpg"
                            alt=""
                          />
                        </a>
                        <div className="overlay">
                          <span className="icon qb-play-arrow" />
                        </div>
                      </figure>
                      <div className="text">
                        <a href="#">Trường Đại Học Đà Lạt ...... bài viết</a>
                      </div>
                      <div className="post-info">27/4/2020</div>
                    </article>
                  </div>
                </div>
                <div className="tab" id="prod-recent">
                  <div className="content">
                    <article className="widget-post">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="images/resource/post-thumb-2.jpg" alt="" />
                        </a>
                        <div className="overlay">
                          <span className="icon qb-play-arrow" />
                        </div>
                      </figure>
                      <div className="text">
                        <a href="blog-single.html">
                          the Poor Man use cycling for is Business improvement
                        </a>
                      </div>
                      <div className="post-info">April 02, 2017</div>
                    </article>
                    <article className="widget-post">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="images/resource/post-thumb-3.jpg" alt="" />
                        </a>
                        <div className="overlay">
                          <span className="icon qb-play-arrow" />
                        </div>
                      </figure>
                      <div className="text">
                        <a href="blog-single.html">
                          American Black Film Festival New projects from film TV
                        </a>
                      </div>
                      <div className="post-info">April 03, 2017</div>
                    </article>
                  </div>
                </div>
                <div className="tab" id="prod-comment">
                  <div className="content">
                    <article className="widget-post">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="images/resource/post-thumb-3.jpg" alt="" />
                        </a>
                        <div className="overlay">
                          <span className="icon qb-play-arrow" />
                        </div>
                      </figure>
                      <div className="text">
                        <a href="blog-single.html">
                          American Black Film Festival New projects from film TV
                        </a>
                      </div>
                      <div className="post-info">April 03, 2017</div>
                    </article>
                    <article className="widget-post">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="images/resource/post-thumb-4.jpg" alt="" />
                        </a>
                        <div className="overlay">
                          <span className="icon qb-play-arrow" />
                        </div>
                      </figure>
                      <div className="text">
                        <a href="blog-single.html">
                          Amy Schumer swaps lives with Anna Wintour
                        </a>
                      </div>
                      <div className="post-info">April 04, 2017</div>
                    </article>
                    <article className="widget-post">
                      <figure className="post-thumb">
                        <a href="blog-single.html">
                          <img src="images/resource/post-thumb-1.jpg" alt="" />
                        </a>
                        <div className="overlay">
                          <span className="icon qb-play-arrow" />
                        </div>
                      </figure>
                      <div className="text">
                        <a href="blog-single.html">
                          Historical Placed &amp; his photoshopped
                        </a>
                      </div>
                      <div className="post-info">April 01, 2017</div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCategory && (
        <div className="sidebar-widget categories-widget">
          <div className="sidebar-title">
            <h2>Danh mục</h2>
          </div>
          <ul className="cat-list">
            <li className="clearfix">
              <a href="#">
                Sự kiến <span>(30)</span>
              </a>
            </li>
            <li className="clearfix">
              <a href="#">
                Tin tức<span>(9)</span>
              </a>
            </li>
            <li className="clearfix">
              <a href="#">
                Giải thưởng<span>(13)</span>
              </a>
            </li>
            <li className="clearfix">
              <a href="#">
                Bài viết<span>(70)</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}
