import { RESUME_DATA } from "@/data/resume-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {};

function Achievements({}: Props) {
  return (
    <>
      <h2 className="text-xl font-bold">
        Other Achievements / Extracurricular
      </h2>
      {RESUME_DATA.achievements.map((achievement) => {
        return (
          <Card key={achievement.title}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">
                  {achievement.title}
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  {achievement.date}
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between gap-x-2">
                <div className="text-sm text-gray-500">{achievement.role}</div>
                <div className="text-xs text-muted-foreground">
                  {achievement.location}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2 text-sm">
              {achievement.description}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}

export default Achievements;
