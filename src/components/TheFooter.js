import { Component } from "../core/core.js";
import aboutStore from "../store/about.js";

export default class TheFooter extends Component {
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
