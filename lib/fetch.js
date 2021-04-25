const fs = require("fs");
require("dotenv").config();
const { readdirSync } = require("fs");
const { graphql } = require("@octokit/graphql");
const fsPromises = fs.promises;

// Run: git clone https://github.com/vercel/next.js

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getFiles = (source) =>
  readdirSync(source, { withFileTypes: true }).map((dirent) => dirent.name);

async function fetchPeople(name) {
  const people = await graphql(
    `
      {
        repository(owner: "vercel", name: "next.js") {
          object(expression: "canary") {
            ... on Commit {
              history(first: 100, path: "examples/${name}") {
                nodes {
                  author {
                    name
                    user {
                      login
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  console.log(people.repository.object.history)
  let contributors = {};

  people.repository.object.history.nodes.map((x) => {
    try{
      contributors[x.author.user.login] =
        typeof contributors[x.author.user.login] == "undefined"
          ? 1
          : contributors[x.author.user.login] + 1;
    }
    catch{
      console.log("Error :(")
    }
  });
  return Object.entries(contributors)
    .reverse()
    .sort(function (a, b) {
      return b[1] - a[1];
    });
}

async function getFile(name) {
  try {
    return fsPromises.readFile(`./next.js/examples/${name}/README.md`, "utf8");
  } catch (err) {
    console.error("Error occured while reading directory!", err);
  }
}

async function getTextData(name) {
  let text = await getFile(name);
  let title = text.split("\n")[0].replace("# ", "");
  let description = text.replace(text.split("\n")[0], "").replace("\n", "");
  return { title, description };
}

async function fetchDataNode(name) {
  let contributors = await fetchPeople(name);
  let { title, description } = await getTextData(name);
  return { name, title, description, contributors };
}

async function main() {
  let data = [];
  for (const directory of getDirectories("./next.js/examples")) {
    console.log(directory);
    data.push(await fetchDataNode(directory));
  }
  fs.writeFile("final.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Replaced!");
  });
}

main();
