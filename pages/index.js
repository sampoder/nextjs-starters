import { Page, Text, Image } from "@geist-ui/react";

export default function Home() {
  return (
    <Page dotBackdrop>
      <Page.Header>
        <Text h1 style={{fontWeight: '600'}}>
          {" "}
          <div
            style={{
              width: "1em",
              height: "1em",
              marginRight: "0.4em",
              display: "inline-block",
              verticalAlign: "text-top",
            }}
          >
            <Image
              src="https://cloud-e7ooedfti-hack-club-bot.vercel.app/0nextjs-icon-dark.png"
              style={{ height: "1em", display: "inline-block", width: "1em" }}
            />
          </div>
          Get Building with These <span style={{ fontWeight: '800'}}>Next.js</span> Starters
        </Text>
      </Page.Header>
      <Text>
        Hello, I am using <Text b>Geist UI</Text> !
      </Text>
    </Page>
  );
}
