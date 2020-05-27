import React, { useState } from "react";
import "./style.css";
import "./toggle.scss";
import { Widget } from "./widget";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export function SinglePage() {
  const [isWidgetLeft, setIsWidgetLeft] = useState(false);
  const [isWidgetRight, setIsWidgetRight] = useState(true);
  const [toggleForm, setToggleForm] = useState(false);
  const { id } = useParams();
  const listpost = useSelector((state) => state.posts.listpost);
  const data = listpost && listpost.find((x) => x.id == id);
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="toggleWidget">
          <i
            class="fa fa-cog"
            aria-hidden="true"
            onClick={() => {
              setToggleForm(!toggleForm);
            }}
          ></i>
        </div>
        <div className={`form-toggle ${toggleForm ? "show" : "hide"}`}>
          <div
            className="left"
            onClick={() => {
              setIsWidgetLeft(!isWidgetLeft);
            }}
          >
            bố cục widget trái
          </div>
          <div
            className="right"
            onClick={() => {
              setIsWidgetRight(!isWidgetRight);
            }}
          >
            bố cục widget phải
          </div>
        </div>
        <div className="row clearfix">
          {isWidgetLeft && (
            <div
              className={`sidebar-side ${
                isWidgetLeft && isWidgetRight ? "col-lg-3" : "col-lg-4"
              } col-md-12 col-sm-12`}
            >
              <Widget
                isSearch={isWidgetLeft ? false : true}
                isSocial={isWidgetLeft ? false : true}
                isTabs={true}
                isCategory={true}
              />
            </div>
          )}
          <div
            className={`content-side ${
              isWidgetLeft && isWidgetRight ? "col-lg-6" : "col-lg-8"
            } col-md-12 col-sm-12`}
          >
            <div className="content">
              <div className="blog-single">
                <div className="inner-box">
                  <div className="upper-box">
                    <ul className="breadcrumb-bar">
                      <li>
                        <a href="#">Trang chủ</a>
                      </li>
                      <li>Tin tức</li>
                      <li>{data && data.title.rendered}</li>
                    </ul>
                    <ul className="tag-title">
                      <li>Tin tức</li>
                    </ul>
                    <h2>{data && data.title.rendered}</h2>
                    <ul className="post-meta">
                      <li>
                        <span className="icon qb-clock" />
                        Ngày 20/02/2019
                      </li>
                      <li>
                        <span className="icon qb-user2" />
                        Đăng bởi Moon Lee
                      </li>
                      <li>
                        <span className="icon fa fa-comment-o" />3 bình luận
                      </li>
                      <li>
                        <span className="icon qb-eye" />
                        1524 lượt xem
                      </li>
                    </ul>
                    <ul className="social-icon-one alternate">
                      <li className="share">chia sẻ qua:</li>
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
                    </ul>
                  </div>

                  <div className="text">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data && data.content.rendered,
                      }}
                    />
                  </div>
                </div>
                <div className="author-box comments-area">
                  <div className="sec-title">
                    <h2>2 Bình luận</h2>
                  </div>
                  <div className="comment-box">
                    <div className="comment">
                      <div className="author-thumb">
                        <img
                          src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-1/p960x960/89252614_724720914991191_6935181656760254464_o.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=YJa4P_M1cukAX-EdO0v&_nc_ht=scontent.fvca1-1.fna&_nc_tp=6&oh=679be5a76956d4f882df338e74fc63e5&oe=5EF1D4FC"
                          alt=""
                        />
                      </div>
                      <div className="comment-inner">
                        <div className="comment-info">Minh nguyệt</div>
                        <div className="post-date">Ngày 10/5/2020</div>
                        <div className="text">
                          Đúng vậy trường đại học thật là đẹp, khung cảnh nhìn
                          như Hàn Quốc...
                        </div>
                        <a href="#" className="reply-btn">
                          Xem thêm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-form">
                  <div className="sec-title">
                    <h2>Bình luận</h2>
                  </div>
                  <form method="post" action="blog.html">
                    <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Tên ..."
                          required
                        />
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email ..."
                          required
                        />
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="website"
                          placeholder="Website ..."
                          required
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Nội dung bình luận ..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <button
                          className="theme-btn"
                          type="submit"
                          name="submit-form"
                        >
                          Đăng
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {isWidgetRight && (
            <div
              className={`sidebar-side ${
                isWidgetLeft && isWidgetRight ? "col-lg-3" : "col-lg-4"
              } col-md-12 col-sm-12`}
            >
              <Widget
                isSearch={true}
                isSocial={true}
                isTabs={isWidgetRight ? false : true}
                isCategory={isWidgetRight ? false : true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
