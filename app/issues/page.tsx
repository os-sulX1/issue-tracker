
import React from "react";
import { Button } from '@radix-ui/themes'
import Link from "next/link";
type Props = {};

const IssuesPage = (props: Props) => {
  return (
    <div className="text-black">
      <Button><Link href='../issues/new' >New Issue</Link> </Button>
    </div>
  );
};

export default IssuesPage;
