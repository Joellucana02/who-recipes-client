import React from "react";

const DisplayItem = () => {
  return (
    <div className="card">
      <div className="card-top__info">
        <div>
          <img
            src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
            alt="null"
          />
          <button>USERNAME</button>
        </div>
        <div>
          <button>FOLLOW</button>
          <button>MORE</button>
        </div>
      </div>
      <div className="card-main__content">
        <p>
          By default, we use the combination of a div element and a background
          image to display the media. It can be problematic in some situations.
          For instance, you might want to display a video or a responsive image.
          Use the component property for these use cases:
        </p>
      </div>
      <div className="card-bottom__btn">
        <div className="card-bottom__btn-left">
          <button>VOTE</button>
          <button>COMMENT</button>
        </div>
        <div className="card-bottom__btn-right">
          <button>SHARE</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
