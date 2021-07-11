import Link from "next/link";

import {
  Room,
  Title,
  MyLink
} from "./style";

export function Navbar () {
  return (
    <Room>
      <Title>
        <Link href="/">calm down</Link>
      </Title>

      <MyLink>
        <Link href="/ambient">ambient</Link>
      </MyLink>
    </Room>
  )
}
