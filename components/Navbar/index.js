import Link from "next/link";

import {
  Room,
  Title
} from "./style";

export function Navbar () {
  return (
    <Room>
      <Title>
        <Link href="/">Radio.gm</Link>
      </Title>
    </Room>
  )
}
