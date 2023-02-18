import { promises as fs } from "fs";

const handler = async (req, res) => {
  const txt = await fs.readFile("README.md", "utf8");
  return res.send(txt);
};

export default handler;
