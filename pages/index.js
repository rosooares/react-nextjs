import React, { Component } from "react";
import Link from 'next/link';
import "isomorphic-fetch";

export default class Home extends Component {
  static getInitialProps = async () => {
    const response = await fetch(
      "https://api.github.com/orgs/rocketseat/repos"
    );

    return { repositories: await response.json() };
  };

  render() {
    return (
      <div>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        {this.props.repositories.map(repo => (
          <h1 key={repo.id}>{repo.name}</h1>
        ))}
      </div>
    );
  }
}