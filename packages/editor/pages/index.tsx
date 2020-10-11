import { CSSProperties } from "@material-ui/core/styles/withStyles";
import Head from "next/head";
import React from "react";
import EditedMap from "../components/EditedMap.tsx/EditedMap";
import EditorBar from "../components/EditorBar/EditorBar";

const siteContainerStyles: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>RPG editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={siteContainerStyles}>
        <EditorBar />
        <EditedMap />
      </main>
    </div>
  );
}
