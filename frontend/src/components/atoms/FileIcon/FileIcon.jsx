import { FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript, SiJson, SiMarkdown } from "react-icons/si";
import { MdOutlineImage } from "react-icons/md";
import { AiFillFile } from "react-icons/ai";

export const FileIcon = ({ extension }) => {
  const IconMapper = { 
    "js": <FaJs color="yellow" style={{ height: "25px", width: "25px" }} />,
    "jsx": <GrReactjs color="#61dbfa" style={{ height: "25px", width: "25px" }} />,
    "ts": <SiTypescript color="#3178C6" style={{ height: "25px", width: "25px" }} />,
    "tsx": <GrReactjs color="#3178C6" style={{ height: "25px", width: "25px" }} />, // React+TS
    "css": <FaCss3Alt color="#3c99dc" style={{ height: "25px", width: "25px" }} />,
    "html": <FaHtml5 color="#e34c26" style={{ height: "25px", width: "25px" }} />,
    "svg": <MdOutlineImage color="#FFB13B" style={{ height: "25px", width: "25px" }} />,
    "json": <SiJson color="#F5DE19" style={{ height: "25px", width: "25px" }} />,
    "md": <SiMarkdown color="#083fa1" style={{ height: "25px", width: "25px" }} />,
  };

  return (
    <>
      {IconMapper[extension] || <AiFillFile color="gray" style={{ height: "25px", width: "25px" }} />}
    </>
  );
};
