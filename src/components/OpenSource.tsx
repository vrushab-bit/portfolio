import { RESUME_DATA } from "@/data/resume-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLinkIcon } from "lucide-react";

type Props = {};

function OpenSource({}: Props) {
  return (
    <>
      <h2 className="text-xl font-bold">Open Source Contributions</h2>
      {RESUME_DATA.openSource.map((contribution, index) => {
        return (
          <Card key={`${contribution.organization}-${index}`}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">
                  {contribution.organization}
                </h3>
                <div className="text-sm text-gray-500">{contribution.role}</div>
              </div>
            </CardHeader>
            <CardContent className="mt-2 text-sm">
              <div>{contribution.description}</div>
              {contribution.prLink && (
                <a
                  href={contribution.prLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  View PR
                  <ExternalLinkIcon className="h-3 w-3" />
                </a>
              )}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}

export default OpenSource;
