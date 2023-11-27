import React from "react";
import {Button} from '@radix-ui/themes'

type Props = {};

const IssuesPage = (props: Props) => {
  return (
    <div className="text-black">
      <Button>New Issue</Button>
    </div>
  );
};

export default IssuesPage;
