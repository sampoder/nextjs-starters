import {
  Page,
  Card,
  Text,
  Image,
  Input,
  ButtonGroup,
  Avatar,
  Code,
  Grid,
  Button,
  useToasts,
} from "@geist-ui/react";
import { Terminal } from "@geist-ui/react-icons";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useClipboard } from "use-clipboard-copy";
import data from "../final.json";
import rehypeRaw from "rehype-raw";
const parse = require("parse-markdown-links");

const formatLinks = (source) => {
  const reUrl = /([^\[\(])(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}[-a-zA-Z0-9@:%_\+.~#?&//=]*)([^\]\)])/g;
  return source.replace(reUrl, "$1[$2]($2)$3");
};

function CardItem({ x }) {
  const [toasts, setToast] = useToasts();
  let item = data[x];
  if (item.contributors.length == 0) {
    console.log(item);
  }
  const [open, setOpen] = useState(false);
  const clipboard = useClipboard();
  return (
    <Card
      style={{
        borderRadius: x != 0 ? "0px" : "",
        borderBottomLeftRadius: x != data.length - 1 ? "0px" : "5px",
        borderBottomRightRadius: x != data.length - 1 ? "0px" : "5px",
        borderTop: x != 0 ? "none" : "",
      }}
    >
      <Grid.Container gap={0} justify="center">
        <Grid
          xs
          style={{ alignItems: "center", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          {" "}
          <p style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}>
            <Avatar
              src={`_next/image?url=${
                typeof item.contributors[3] != "undefined"
                  ? `https://github.com/${item.contributors[3][0]}.png`
                  : `http://identicon.rmhdev.net/${item.name}3.png`
              }&w=32&q=75`}
              loading="lazy"
              alt={`${
                typeof item.contributors[3] != "undefined"
                  ? item.contributors[3][0]
                  : `Unknown`
              }'s profile picture`}
              stacked
            />
            <Avatar
              src={`_next/image?url=${
                typeof item.contributors[2] != "undefined"
                  ? `https://github.com/${item.contributors[2][0]}.png`
                  : `http://identicon.rmhdev.net/${item.name}2.png`
              }&w=32&q=75`}
              alt={`${
                typeof item.contributors[2] != "undefined"
                  ? item.contributors[2][0]
                  : `Unknown`
              }'s profile picture`}
              loading="lazy"
              stacked
            />
            <Avatar
              src={`_next/image?url=${
                typeof item.contributors[1] != "undefined"
                  ? `https://github.com/${item.contributors[1][0]}.png`
                  : `http://identicon.rmhdev.net/${item.name}1.png`
              }&w=32&q=75`}
              alt={`${
                typeof item.contributors[1] != "undefined"
                  ? item.contributors[1][0]
                  : `Unknown`
              }'s profile picture`}
              loading="lazy"
              stacked
            />
            <Avatar
              src={`_next/image?url=${`https://github.com/${item.contributors[0][0]}.png`}&w=32&q=75`}
              loading="lazy"
              alt={`${item.contributors[0][0]}'s profile picture`}
              stacked
            />
            <b style={{ marginLeft: "12px" }}>{item.name}</b>
          </p>
        </Grid>
        <Grid xs style={{ textAlign: "right" }}>
          <ButtonGroup
            ghost
            type="success"
            style={{ marginLeft: "auto" }}
            size="small"
          >
            <Button
              size="small"
              onClick={() => {
                setToast({
                  text: (
                    <p style={{ wordWrap: "normal" }}>
                      Copied{" "}
                      <Code
                        style={{ wordWrap: "break-word" }}
                      >{`npx create-next-app -e ${item.name}`}</Code>{" "}
                      to the clipboard.
                    </p>
                  ),
                });
                clipboard.copy(`npx create-next-app -e ${item.name}`);
              }}
            >
              {" "}
              <Terminal size={16} className="icon-next-app" />{" "}
              <span style={{ marginRight: "4px" }}></span>
              Use Create Next App
            </Button>
            <Button
              size="small"
              onClick={() =>
                (window.location = parse(item.description).filter((word) =>
                  word.includes("https://vercel.com/new/git/external")
                )[0])
              }
            >
              ▲ <span style={{ marginRight: "6px" }}></span>Deploy to Vercel
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid.Container>
      {open ? (
        <p className="markdown-body">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {formatLinks(item.description)
              .replace(/(!\[.*?\]\()(.+?)(\))/g, function (whole, a, b, c) {
                return (
                  a +
                  (b.includes("http")
                    ? ""
                    : `https://github.com/vercel/next.js/raw/canary/examples/${item.name}/`) +
                  b.replace("./", "") +
                  c
                );
              })
              .replace("## Deploy your own", '<h2 class="deploy-header"></h2>')
              .replace(
                "Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).",
                ""
              )}
          </ReactMarkdown>
        </p>
      ) : (
        ""
      )}
    </Card>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
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
            <div
              style={{ height: "1em", display: "inline-block", width: "1em" }}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M467.253 0.269139C465.103 0.464613 458.26 1.14878 452.102 1.63747C310.068 14.4411 177.028 91.0671 92.7664 208.841C45.8456 274.325 15.8358 348.605 4.49658 427.284C0.488759 454.748 0 462.86 0 500.098C0 537.336 0.488759 545.448 4.49658 572.912C31.6716 760.666 165.298 918.414 346.53 976.861C378.983 987.319 413.196 994.453 452.102 998.754C467.253 1000.42 532.747 1000.42 547.898 998.754C615.054 991.326 671.945 974.71 728.055 946.073C736.657 941.675 738.319 940.502 737.146 939.525C736.364 938.939 699.707 889.777 655.718 830.352L575.758 722.353L475.562 574.085C420.43 492.572 375.073 425.915 374.682 425.915C374.291 425.818 373.9 491.693 373.705 572.13C373.412 712.97 373.314 718.639 371.554 721.962C369.013 726.751 367.058 728.706 362.952 730.856C359.824 732.42 357.087 732.713 342.327 732.713H325.415L320.919 729.878C317.986 728.021 315.836 725.578 314.37 722.744L312.317 718.345L312.512 522.382L312.805 326.321L315.836 322.509C317.4 320.457 320.723 317.818 323.069 316.547C327.077 314.592 328.641 314.397 345.552 314.397C365.494 314.397 368.817 315.179 373.998 320.848C375.464 322.411 429.717 404.12 494.624 502.541C559.531 600.963 648.289 735.352 691.887 801.324L771.065 921.248L775.073 918.609C810.557 895.543 848.094 862.703 877.81 828.495C941.056 755.877 981.818 667.326 995.503 572.912C999.511 545.448 1000 537.336 1000 500.098C1000 462.86 999.511 454.748 995.503 427.284C968.328 239.53 834.702 81.7821 653.47 23.3352C621.505 12.975 587.488 5.84016 549.365 1.53972C539.98 0.562345 475.367 -0.51276 467.253 0.269139ZM671.945 302.668C676.637 305.014 680.45 309.51 681.818 314.201C682.6 316.743 682.796 371.085 682.6 493.549L682.307 669.281L651.32 621.781L620.235 574.281V446.538C620.235 363.95 620.626 317.525 621.212 315.277C622.776 309.803 626.197 305.503 630.89 302.962C634.897 300.909 636.364 300.714 651.711 300.714C666.178 300.714 668.719 300.909 671.945 302.668Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
          </div>
          <span style={{ fontWeight: "800" }}> Next.js</span> Starters
        </Text>
      </Page.Header>
      <div style={{ marginBottom: "8px", marginTop: "24px" }}>
        <Input
          size="large"
          placeholder="Search Starters"
          width="100%"
          value={search}
          onInput={(e) => setSearch(e.target.value)}
          style={{ margin: "8pt 8pt", background: 'white' }}
        />
      </div>
      {data.map((item, index) => {
        if (item.name.includes(search)) {
          return <CardItem x={index} item={item} />;
        }
      })}
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        Built by <Code>@sampoder</Code>. Examples sourced from{" "}
        <Code>vercel/next.js</Code>. <br />{" "}
        <Text small>
          The Next.js logo is a trademark of Vercel, this site has no
          affiliation with Vercel.
        </Text>
      </div>
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
      .deploy-header{
        display: none;
      }
      .deploy-header + p{
        display: none;
      }
      .deploy-header + p + p{
        display: none;
      }
      .markdown-body h1:first-child {
        display: none;
    }
      `}
      </style>
    </Page>
  );
}
