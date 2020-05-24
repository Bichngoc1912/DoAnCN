import React from 'react';
import './style.css'
export function SinglePage () {
    return (
       <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Content Side*/}
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
                        <li>Featured</li>
                        <li>Travel</li>
                      </ul>
                      <h2>WordPress News Magazine Charts the Fashionable universal Theme</h2>
                      <ul className="post-meta">
                        <li><span className="icon qb-clock" />March 16, 2017</li>
                        <li><span className="icon qb-user2" />by Noor</li>
                        <li><span className="icon fa fa-comment-o" />3 comments</li>
                        <li><span className="icon qb-eye" />1524 Views</li>
                      </ul>
                      <ul className="social-icon-one alternate">
                        <li className="share">Share:</li>
                        <li><a href="#"><span className="fa fa-facebook" /></a></li>
                        <li className="twitter"><a href="#"><span className="fa fa-twitter" /></a></li>
                        <li className="g_plus"><a href="#"><span className="fa fa-google-plus" /></a></li>
                        <li className="linkedin"><a href="#"><span className="fa fa-linkedin-square" /></a></li>
                        <li className="pinteret"><a href="#"><span className="fa fa-pinterest-p" /></a></li>
                      </ul>
                    </div>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Intege</p>
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="image">
                            <img src="images/resource/image-1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Vivamus element semper nisi.</p>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.</p>
                      <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec,</blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                      <div className="row clearfix">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ipsam voluptatem quluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus element semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="image">
                            <img src="images/resource/image-2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*post-share-options*/}
                    <div className="post-share-options">
                      <div className="tags clearfix"><a href="#">Design</a> <a href="#">Fashion</a> <a href="#">Money</a></div>
                    </div>
                    {/*New Article*/}
                    <ul className="new-article clearfix">
                      <li><a href="#"><span className="fa fa-angle-left" />         Previous Article</a></li>
                      <li><a href="#">Next Article         <span className="fa fa-angle-right" /></a></li>
                    </ul>
                  </div>
                  {/*Author Box*/}
                  <div className="author-box">
                    <div className="author-comment">
                      <div className="inner-box">
                        <div className="image"><img src="images/resource/author-1.jpg" alt="" /></div>
                        <h4>Sandra Mavic</h4>
                        <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam penatibus et magnis .</div>
                        <ul className="social-icon-two">
                          <li><a href="#"><span className="fa fa-facebook-square" /></a></li>
                          <li><a href="#"><span className="fa fa-twitter" /></a></li>
                          <li><a href="#"><span className="fa fa-google-plus" /></a></li>
                          <li><a href="#"><span className="fa fa-linkedin-square" /></a></li>
                          <li><a href="#"><span className="fa fa-pinterest-p" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*Related Posts*/}
                  <div className="related-posts">
                    <div className="sec-title">
                      <h2>Related Articles</h2>
                    </div>
                    <div className="related-item-carousel owl-carousel owl-theme owl-loaded owl-drag">
                      {/*News Block Two*/}
                      {/*News Block Two*/}
                      {/*News Block Two*/}
                      {/*News Block Two*/}
                      {/*News Block Two*/}
                      {/*News Block Two*/}
                      <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1333px, 0px, 0px)', transition: 'all 0.7s ease 0s', width: '3201px'}}><div className="owl-item cloned" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-40.jpg" alt="" /></a>
                                  <div className="category"><a href="#">Travel</a></div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">Elon Musk's Hyperloop vision races</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 03, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item cloned" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-41.jpg" alt="" /></a>
                                  <div className="category"><a href="#">Sports</a></div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">A modern day security strategy</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 04, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item cloned" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-42.jpg" alt="" /></a>
                                  <div className="category">photo</div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">Fix an Exchange Rate now with</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 04, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-40.jpg" alt="" /></a>
                                  <div className="category"><a href="#">Travel</a></div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">Elon Musk's Hyperloop vision races toward</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 03, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-41.jpg" alt="" /></a>
                                  <div className="category"><a href="#">Sports</a></div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">A modern day security strategy</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 04, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item active" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-42.jpg" alt="" /></a>
                                  <div className="category">photo</div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">Fix an Exchange Rate today</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 04, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item active" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-40.jpg" alt="" /></a>
                                  <div className="category"><a href="#">Travel</a></div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">Elon Musk's Hyperloop vision races</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 03, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item active" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-41.jpg" alt="" /></a>
                                  <div className="category"><a href="#">Sports</a></div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">A modern day security strategy</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 04, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-42.jpg" alt="" /></a>
                                  <div className="category">photo</div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">Fix an Exchange Rate now with</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 04, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item cloned" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-40.jpg" alt="" /></a>
                                  <div className="category"><a href="#">Travel</a></div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">Elon Musk's Hyperloop vision races toward</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 03, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item cloned" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-41.jpg" alt="" /></a>
                                  <div className="category"><a href="#">Sports</a></div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">A modern day security strategy</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 04, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div><div className="owl-item cloned" style={{width: '236.667px', marginRight: '30px'}}><div className="news-block-two small-block">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="#"><img src="images/resource/news-42.jpg" alt="" /></a>
                                  <div className="category">photo</div>
                                </div>
                                <div className="lower-box">
                                  <h3><a href="#">Fix an Exchange Rate today</a></h3>
                                  <ul className="post-meta">
                                    <li><span className="icon fa fa-clock-o" />April 04, 2017</li>
                                  </ul>
                                </div>
                              </div>
                            </div></div></div></div><div className="owl-nav"><div className="owl-prev"><span className="fa fa-angle-left" /></div><div className="owl-next"><span className="fa fa-angle-right" /></div></div><div className="owl-dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div></div></div>
                  </div>
                  {/*Comments Area*/}
                  <div className="comments-area">
                    <div className="sec-title"><h2>2 Comments</h2></div>
                    {/*Comment Box*/}
                    <div className="comment-box">
                      <div className="comment">
                        <div className="author-thumb"><img src="images/resource/author-2.jpg" alt="" /></div>
                        <div className="comment-inner">
                          <div className="comment-info">Sandra Mavic</div>
                          <div className="post-date">March 03, 2017</div>
                          <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec qam penatibus et magnis .</div>
                          <a href="#" className="reply-btn">Reply</a>
                        </div>
                      </div>
                    </div>
                    {/*Comment Box*/}
                    <div className="comment-box reply-comment">
                      <div className="comment">
                        <div className="author-thumb"><img src="images/resource/author-1.jpg" alt="" /></div>
                        <div className="comment-inner">
                          <div className="comment-info">George Belly</div>
                          <div className="post-date">March 03, 2017</div>
                          <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec qam penatibus et magnis .</div>
                          <a href="#" className="reply-btn">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Comment Form */}
                  <div className="comment-form">
                    <div className="sec-title"><h2>Leave a comment</h2></div>
                    {/*Comment Form*/}
                    <form method="post" action="blog.html">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <input type="text" name="username" placeholder="Name ..." required />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <input type="email" name="email" placeholder="Email ..." required />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                          <input type="text" name="website" placeholder="Website ..." required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea name="message" placeholder="Message ..." defaultValue={""} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <button className="theme-btn" type="submit" name="submit-form">Submit Comment</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*End Comment Form */}
                </div>
              </div>
            </div>
            {/*Sidebar Side*/}
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar default-sidebar right-sidebar">
                {/* Search */}
                <div className="sidebar-widget search-box">
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input type="search" name="search-field" defaultValue placeholder="Search" required />
                      <button type="submit"><span className="icon fa fa-search" /></button>
                    </div>
                  </form>
                </div>
                {/*Social Widget*/}
                <div className="sidebar-widget sidebar-social-widget">
                  <div className="sidebar-title">
                    <h2>Follow Us</h2>
                  </div>
                  <ul className="social-icon-one alternate">
                    <li><a href="#"><span className="fa fa-facebook" /></a></li>
                    <li className="twitter"><a href="#"><span className="fa fa-twitter" /></a></li>
                    <li className="g_plus"><a href="#"><span className="fa fa-google-plus" /></a></li>
                    <li className="linkedin"><a href="#"><span className="fa fa-linkedin-square" /></a></li>
                    <li className="pinteret"><a href="#"><span className="fa fa-pinterest-p" /></a></li>
                    <li className="android"><a href="#"><span className="fa fa-android" /></a></li>
                    <li className="instagram"><a href="#"><span className="fa fa-instagram" /></a></li>
                    <li className="vimeo"><a href="#"><span className="fa fa-vimeo" /></a></li>
                  </ul>
                </div>
                {/*End Social Widget*/}
                {/*Adds Widget*/}
                <div className="sidebar-widget sidebar-adds-widget">
                  <div className="adds-block" style={{backgroundImage: 'url(images/resource/add-image.jpg)'}}>
                    <div className="inner-box">
                      <div className="text">Advertisement <span> 340 x 283</span></div>
                      <a href="#" className="theme-btn btn-style-two">Purchase Now</a>
                    </div>
                  </div>
                </div>
                {/*Ends Adds Widget*/}
                {/*News Post Widget*/}
                <div className="sidebar-widget posts-widget">
                  {/*Product widget Tabs*/}
                  <div className="product-widget-tabs">
                    {/*Product Tabs*/}
                    <div className="prod-tabs tabs-box">
                      {/*Tab Btns*/}
                      <ul className="tab-btns tab-buttons clearfix">
                        <li data-tab="#prod-popular" className="tab-btn active-btn">Popular</li>
                        <li data-tab="#prod-recent" className="tab-btn">Recent</li>
                        <li data-tab="#prod-comment" className="tab-btn">Comments</li>
                      </ul>
                      {/*Tabs Container*/}
                      <div className="tabs-content">
                        {/*Tab / Active Tab*/}
                        <div className="tab active-tab" id="prod-popular">
                          <div className="content">
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-1.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">Historical Placed &amp; his photoshopped</a></div>
                              <div className="post-info">April 01, 2017</div>
                            </article>
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-2.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">the Poor Man use cycling for is Business improvement</a></div>
                              <div className="post-info">April 02, 2017</div>
                            </article>
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-3.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">American Black Film Festival New projects from film TV</a></div>
                              <div className="post-info">April 03, 2017</div>
                            </article>
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-4.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">Amy Schumer swaps lives with Anna Wintour</a></div>
                              <div className="post-info">April 04, 2017</div>
                            </article>
                          </div>
                        </div>
                        {/*Tab*/}
                        <div className="tab" id="prod-recent">
                          <div className="content">
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-2.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">the Poor Man use cycling for is Business improvement</a></div>
                              <div className="post-info">April 02, 2017</div>
                            </article>
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-3.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">American Black Film Festival New projects from film TV</a></div>
                              <div className="post-info">April 03, 2017</div>
                            </article>
                          </div>
                        </div>
                        {/*Tab*/}
                        <div className="tab" id="prod-comment">
                          <div className="content">
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-3.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">American Black Film Festival New projects from film TV</a></div>
                              <div className="post-info">April 03, 2017</div>
                            </article>
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-4.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">Amy Schumer swaps lives with Anna Wintour</a></div>
                              <div className="post-info">April 04, 2017</div>
                            </article>
                            <article className="widget-post">
                              <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/post-thumb-1.jpg" alt="" /></a><div className="overlay"><span className="icon qb-play-arrow" /></div></figure>
                              <div className="text"><a href="blog-single.html">Historical Placed &amp; his photoshopped</a></div>
                              <div className="post-info">April 01, 2017</div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Product Info Tabs*/}
                </div>
                {/*End Post Widget*/}
                {/*Category Widget*/}
                <div className="sidebar-widget categories-widget">
                  <div className="sidebar-title">
                    <h2>Categories</h2>
                  </div>
                  <ul className="cat-list">
                    <li className="clearfix"><a href="#">Travel <span>(30)</span></a></li>
                    <li className="clearfix"><a href="#">Entertainment<span>(9)</span></a></li>
                    <li className="clearfix"><a href="#">Sport<span>(13)</span></a></li>
                    <li className="clearfix"><a href="#">Life Style<span>(70)</span></a></li>
                    <li className="clearfix"><a href="#">Tech<span>(11)</span></a></li>
                    <li className="clearfix"><a href="#">Money<span>(5)</span></a></li>
                    <li className="clearfix"><a href="#">Photo<span>(14)</span></a></li>
                  </ul>
                </div>
                {/*End Category Widget*/}
              </aside>
            </div>
          </div>
        </div>
      </div>
    )
}