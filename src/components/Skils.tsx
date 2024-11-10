import { RESUME_DATA } from "@/data/resume-data";
import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {};

function Skils({}: Props) {
  return (
    <>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {RESUME_DATA.skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </>
  );
}

export default Skils;
