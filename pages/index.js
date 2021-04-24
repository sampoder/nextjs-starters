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
      <Card
        style={{
          borderRadius: x != 0 ? "0px" : '',
          borderBottomLeftRadius: x != 99 ? "0px" : "5px",
          borderBottomRightRadius: x != 99 ? "0px" : "5px",
          borderTop: x != 0 ? "none" : '',
          
        }}
      >
        <Grid.Container gap={0} justify="center">
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
      </Card>))}
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
      }`}
      </style>
    </Page>
  );
}
