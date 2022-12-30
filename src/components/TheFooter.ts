import { Component } from "../core/core";
import aboutStore from "../store/about";

interface Link {
  href: string;
  text: string;
}
interface State {
  [key: string]: unknown;
  links: Link[];
}

export default class TheFooter extends Component {
  public state!: State;
  constructor() {
    super({
      tagName: "footer",
      state: {
        links: [
          {
            href: "",
            text: "GitHub Repository",
          },
          {
            href: "",
            text: `${new Date().getFullYear()} KrDevSang`,
          },
        ],
      },
    });
  }
  render() {
    const { github, repository } = aboutStore.state;
    this.state.links[0].href = repository;
    this.state.links[1].href = github;
    this.el.innerHTML = /* html */ `
      ${this.state.links
        .map((link) => {
          return `
            <div>
              <a href="${link.href}">${link.text}</a>
            </div>
          `;
        })
        .join("")}
    `;
  }
}
