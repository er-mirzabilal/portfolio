const AboutButton = (props) => {
  console.log("sdsd", props);
  return <div className="aboutButtons hover:bg-violet-600">{props.text}</div>;
};

export default AboutButton;
