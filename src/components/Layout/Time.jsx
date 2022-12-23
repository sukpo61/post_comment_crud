const PostTime = () => {
  const dateinfo = new Date();
  const hours = ("0" + dateinfo.getHours()).slice(-2);
  const minutes = ("0" + dateinfo.getMinutes()).slice(-2);

  const Date = dateinfo.toLocaleDateString("ko-kr").replace(" ", "");
  const Time = hours + ":" + minutes;

  return {
    Date,
    Time,
  };
};

export default PostTime;
