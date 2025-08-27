import Link from "next/link";
import { headers } from "next/headers";
import FuzzyText from "./components/fuzzyText";

export default async function NotFound() {
  const headersList = await headers();
  const domain = headersList.get("host");
  const hoverIntensity = 0.5;
  const enableHover = true;
  return (
    <div>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        404
        <p>Could not find requested resource</p>
        <p>
          View <Link href="/blog">all posts</Link>
        </p>
      </FuzzyText>
    </div>
  );
}
