function Message({ children, size = "text-xl" }) {
  return <p className={`${size} text-center mt-4`}>{children}</p>;
}

export default Message;
