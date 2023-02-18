const handler = async (req, res) => {
  const txt = await fetch("https://raw.githubusercontent.com/traianturcu/react-custom-hooks/main/README.md").then((res) => res.text());
  return res.send(txt);
};

export default handler;
