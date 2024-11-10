import { RESUME_DATA } from "@/data/resume-data";

function About() {
  return (
    <>
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {RESUME_DATA.summary}
      </p>
    </>
  );
}

export default About;
