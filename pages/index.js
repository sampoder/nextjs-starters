import {
  Page,
  Card,
  Text,
  Image,
  Input,
  ButtonGroup,
  Avatar,
  Grid,
  Button,
} from "@geist-ui/react";
import { Terminal } from "@geist-ui/react-icons";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function CardItem({ x }) {
  const [open, setOpen] = useState(false);
  return (
    <Card
      style={{
        borderRadius: x != 0 ? "0px" : "",
        borderBottomLeftRadius: x != 99 ? "0px" : "5px",
        borderBottomRightRadius: x != 99 ? "0px" : "5px",
        borderTop: x != 0 ? "none" : "",
      }}
    >
      <Grid.Container gap={0} justify="center" onClick={() => setOpen(!open)}>
        <Grid xs style={{ alignItems: "center" }}>
          {" "}
          <p style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}>
            <Avatar
              src={"https://avatars.githubusercontent.com/u/4278345?v=4"}
              stacked
            />
            <Avatar
              src={"https://avatars.githubusercontent.com/u/4278345?v=4"}
              stacked
            />
            <Avatar
              src={"https://avatars.githubusercontent.com/u/4278345?v=4"}
              stacked
            />
            <Avatar
              src={"https://avatars.githubusercontent.com/u/4278345?v=4"}
              stacked
            />
            <b style={{ marginLeft: "12px" }}>activeClassName Example</b>
          </p>
        </Grid>
        <Grid xs style={{ textAlign: "right" }}>
          <ButtonGroup
            ghost
            type="success"
            style={{ marginLeft: "auto" }}
            size="small"
          >
            <Button size="small">
              {" "}
              <Terminal size={16} className="icon-next-app" />{" "}
              <span style={{ marginRight: "4px" }}></span>
              Use Create Next App
            </Button>
            <Button size="small">
              ▲ <span style={{ marginRight: "6px" }}></span>Deploy to Vercel
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid.Container>
      {open ? (
        <p className="markdown-body">
          <ReactMarkdown>{`# activeClassName example

ReactRouter has a convenience property on the \`Link\` element to allow an author to set the _active_ className on a link. This example replicates that functionality using Next's own \`Link\`.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/active-class-name&project-name=active-class-name&repository-name=active-class-name)

## How to use

Execute [\`create-next-app\`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

\`\`\`bash
npx create-next-app --example active-class-name active-class-name-app
# or
yarn create next-app --example active-class-name active-class-name-app
\`\`\`

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).`}</ReactMarkdown>
        </p>
      ) : (
        ""
      )}
    </Card>
  );
}

export default function Home() {
  return (
    <Page dotBackdrop>
      <Page.Header>
        <Text h1 style={{ fontWeight: "600", textAlign: "center" }}>
          {" "}
          Get Building with These{" "}
          <div
            style={{
              width: "1em",
              height: "1em",
              marginRight: "0em",
              display: "inline-block",
              verticalAlign: "text-top",
            }}
          >
            <Image
              src="https://cloud-e7ooedfti-hack-club-bot.vercel.app/0nextjs-icon-dark.png"
              style={{ height: "1em", display: "inline-block", width: "1em" }}
            />
          </div>
          <span style={{ fontWeight: "800" }}> Next.js</span> Starters
        </Text>
      </Page.Header>
      <div style={{ marginBottom: "8px", marginTop: "24px" }}>
        <Input
          size="large"
          placeholder="Search Starters"
          width="100%"
          style={{ margin: "8pt 8pt" }}
        />
      </div>
      {Array.from(Array(100).keys()).map((x) => (
        <CardItem x={x} />
      ))}
      <style>
        {`
      .content{
        padding: 8pt 8pt!important
      }
      .icon-next-app{
      transform: translateY(1px)
      }
      .avatar-group{
        display: inline-flex!important;
      }
      .markdown-body img{
        width: fit-content!important;
      }
      .markdown-body h1, h2, h3, h4, h5, h6{
        font-size: 1.3em;
        font-weight: 600;
      }
      .markdown-body h1:first-child {
        display: none;
    }
      `}
      </style>
    </Page>
  );
}
