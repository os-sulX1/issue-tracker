'use client'
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

type Props = {};

const NewIssuePage = (props: Props) => {
  return (<div className="max-w-xl space-y-3">
    <TextField.Root>
      <TextField.Input placeholder="Title" />
    </TextField.Root>
    <TextArea placeholder="Description" />
    <Button>Submit Nex Issue</Button>
  </div>);
};

export default NewIssuePage;
