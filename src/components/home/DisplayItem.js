import React from "react";

const DisplayItem = () => {
  return (
    <div>
      <h3>item</h3>
      <div className="card">
        <div className="card-top__info">
          <div>
            <img
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt="null"
            />
            <h3>Username</h3>
          </div>
          <div>
            <button>FOLLOW</button>
            <button>MORE</button>
          </div>
        </div>
        <div className="card-main__content">
          <p>
            By default, we use the combination of a div element and a background
            image to display the media. It can be problematic in some
            situations. For instance, you might want to display a video or a
            responsive image. Use the component property for these use cases:
          </p>
        </div>
        <div className="card-bottom__btn">
          <div className="card-bottom__btn-left">
            <h3>VOTE</h3>
            <h3>COMMENT</h3>
          </div>
          <div className="card-bottom__btn-right">
            <h3>SHARE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
