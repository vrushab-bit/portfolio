import { RESUME_DATA } from "@/data/resume-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {};

function Education({}: Props) {
  return (
    <>
      <h2 className="text-xl font-bold">Education</h2>
      {RESUME_DATA.education.map((education) => {
        return (
          <Card key={education.school}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">
                  {education.school}
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  {education.start} - {education.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">
              <div>{education.degree}</div>
              {education.location && (
                <div className="mt-1 text-xs text-muted-foreground">
                  {education.location}
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}

export default Education;
