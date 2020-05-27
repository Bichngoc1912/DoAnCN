import React, { useEffect } from "react";
import { Widget } from "../SinglePage/widget";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPost } from "../../action/post";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const dispatch = useDispatch();
  const listpost = useSelector((state) => state.posts.listpost);
  useEffect(() => {
    dispatch(fetchAllPost());
  }, []);
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-side col-lg-8 col-md-12 col-sm-12">
            <div className="category-tabs-box">
              <div className="prod-tabs tabs-box">
                <div className="tab-btns tab-buttons clearfix">
                  <div className="pull-left">
                    <div className="category">Lifestyle</div>
                  </div>
                </div>
                <div className="tabs-content">
                  <div className="tab active-tab" id="prod-alls">
                    <div className="content">
                      <div className="row clearfix">
                        { listpost  && Object.keys(listpost).map((val, idx) => (
                          <div className="news-block-two col-lg-6 col-md-6 col-sm-12" key={idx}>
                          <div className="inner-box">
                            <div className="lower-box">
                              <h3>
                                <Link to={`SinglePage/${listpost[val].id}`}>
                                  {listpost[val].title.rendered}
                                </Link>
                              </h3>
                              <div className="text">
                              <div dangerouslySetInnerHTML={{__html:listpost[val].excerpt.rendered}}/>
                              </div>
                              <a
                                href="blog-single.html"
                                className="read-more"
                              >
                                Đọc thêm{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <Widget
              isSearch={true}
              isSocial={true}
              isTabs={true}
              isCategory={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
