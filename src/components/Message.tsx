type MessageProps = {
  message: string;
};

function Message(props: MessageProps) {
  return (
    <p>{props.message}</p>
  );
}

export default Message;