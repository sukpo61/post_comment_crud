export const postTime = () => {
  let dateinfo = new Date();
  const hours = ("0" + dateinfo.getHours()).slice(-2);
  const minutes = ("0" + dateinfo.getMinutes()).slice(-2);

  const PostDate = dateinfo.toLocaleDateString("ko-kr").replaceAll(" ", "");
  const PostTime = hours + ":" + minutes;

  return {
    PostDate,
    PostTime,
  };
};

// export default PostTime;
